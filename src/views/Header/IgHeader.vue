<template lang="">
  <header
    class="lav-header bg-secondary relative overflow-hidden bg-center bg-no-repeat bg-cover text-center pb-[72px] lg:pb-[124px] xl:pb-[148px]"
  >
    <HeaderNavBar v-if="isMobile" class="py-4 h-[115px]" />
    <HeaderDesktopNavBar v-else />
    <IgSectionHero />
  </header>
</template>
<script setup>
import { useScreenSize } from "@/composables/useScreenSize";
import HeaderNavBar from "./components/HeaderStickyNavBar.vue";
import HeaderDesktopNavBar from "./components/HeaderDesktopNavBar.vue";
import IgSectionHero from "@/components/IgSectionHero.vue";

const { isMobile } = useScreenSize();
</script>
<style scoped>
.lav-header {
  background-image: url(@/assets/img/main-bg.jpg);
  background-attachment: fixed;

  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 50px),
    calc(50% + 60px) calc(100% - 50px),
    50% 100%,
    calc(50% - 60px) calc(100% - 50px),
    0 calc(100% - 50px)
  );
}

@media (min-width: 1024px) {
  .lav-header {
    clip-path: polygon(
      0 0,
      100% 0,
      100% calc(100% - 95px),
      calc(50% + 120px) calc(100% - 95px),
      50% 100%,
      calc(50% - 120px) calc(100% - 95px),
      0 calc(100% - 95px)
    );
  }
}
</style>
