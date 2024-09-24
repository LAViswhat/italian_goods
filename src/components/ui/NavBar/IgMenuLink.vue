<template>
  <li v-if="isHomePage || !url.startsWith('#')">
    <a v-if="url.startsWith('#')" :href="url" @click.prevent="handleScroll">{{
      title
    }}</a>
    <RouterLink
      activeClass="text-primary before:absolute before:w-full before:h-2 md:before:h-3 before:bg-primary before:top-3/4 md:before:top-[-5px] before:left-2/4 before:-translate-x-2/4"
      v-else
      :to="url"
      >{{ title }}</RouterLink
    >
  </li>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { useScrollToSection } from "@/composables/useScrollToSection";
import { useRoute } from "vue-router";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const { scrollToSection, setStickyMenuHeight } = useScrollToSection();
const stickyMenu = ref(null);

onMounted(() => {
  stickyMenu.value = document.querySelector(".sticky-menu");

  if (stickyMenu.value) {
    setStickyMenuHeight(stickyMenu.value.offsetHeight);
  }
});

const handleScroll = () => {
  scrollToSection(props.url);
};

const route = useRoute();
const isHomePage = computed(() => route.name === "Home");
</script>
<style></style>
