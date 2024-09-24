import { ref, onMounted, onUnmounted } from "vue";

export function useScroll(scrollThreshold = 400) {
  const showItem = ref(false);

  const handleScroll = () => {
    showItem.value = window.scrollY >= scrollThreshold;
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return {
    showItem,
  };
}
