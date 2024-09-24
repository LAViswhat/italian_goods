import { ref } from "vue";

export function useScrollToSection() {
  const stickyMenuHeight = ref(0);

  const setStickyMenuHeight = (height) => {
    stickyMenuHeight.value = height;
  };

  const scrollToSection = (selector) => {
    const section = document.querySelector(selector);
    if (section) {
      const offsetTop =
        section.getBoundingClientRect().top +
        window.scrollY -
        stickyMenuHeight.value;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return { scrollToSection, setStickyMenuHeight };
}
