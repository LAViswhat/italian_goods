<template>
  <nav
    class="container xl:max-w-6xl mx-auto my-0 px-4 flex flex-nowrap flex-row items-center justify-between"
  >
    <div class="flex items-center">
      <RouterLink to="/" class="leading-[0] max-w-32 mr-7">
        <IgLogo />
      </RouterLink>
    </div>
    <IgMenuLinksList
      v-if="!isMobile"
      menuLinkClass="relative mx-3 uppercase xl:text-xl font-bold py-6 px-4 duration-500 hover:text-primary before:absolute before:w-0 before:h-3 before:bg-primary before:top-[-5px] before:left-2/4 before:-translate-x-2/4 before:duration-500 hover:before:w-full"
    >
    </IgMenuLinksList>
    <IgNavBarLinks />
  </nav>
</template>
<script setup>
import IgLogo from "@/components/ui/IgLogo.vue";
import IgNavBarLinks from "@/components/ui/NavBar/IgNavBarLinks.vue";
import IgMenuLinksList from "@/components/ui/NavBar/IgMenuLinksList.vue";
import { useScreenSize } from "@/composables/useScreenSize";
const { isMobile } = useScreenSize();
</script>
<style></style>
