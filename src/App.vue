<script setup>
import "primeicons/primeicons.css";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useScroll } from "./composables/useScroll";
import HeaderStickyNavBar from "./views/Header/components/HeaderStickyNavBar.vue";
import IgHeader from "./views/Header/IgHeader.vue";
import IgFooter from "./views/Footer/IgFooter.vue";
import ScrollTop from "primevue/scrolltop";

const { showItem } = useScroll(500);

const route = useRoute();
const isHomePage = computed(() => route.path === "/");
</script>

<template>
  <transition name="fade-slide" v-if="isHomePage">
    <div
      v-show="showItem"
      class="sticky-menu fixed pt-1 pb-2 bg-[#332a36f2] left-0 right-0 z-20 border-b-4 border-primary shadow-md w-full"
    >
      <header-sticky-nav-bar />
    </div>
  </transition>
  <div
    v-else
    class="sticky-menu fixed pt-1 pb-2 bg-[#332a36f2] left-0 right-0 z-20 border-b-4 border-primary shadow-md w-full"
  >
    <header-sticky-nav-bar />
  </div>

  <div
    v-animateonscroll="{
      enterClass: 'animate-fadein',
      leaveClass: 'animate-fadeout',
    }"
    class="animate-duration-500"
  >
    <ig-header v-if="isHomePage" />
  </div>
  <main class="relative bg-white z-10">
    <router-view v-slot="{ Component }">
      <transition name="fade-slide">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <div
    v-animateonscroll="{
      rootMargin: '300px',
      enterClass: 'animate-fadein',
      leaveClass: 'animate-fadeout',
    }"
    class="animate-duration-500"
  >
    <ig-footer />
  </div>

  <ScrollTop :threshold="400" icon="pi pi-arrow-up" />
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.p-scrolltop {
  width: 48px;
  height: 48px;
  transition: 0.5s;
}
</style>
