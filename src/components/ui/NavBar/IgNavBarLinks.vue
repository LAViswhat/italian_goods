<template>
  <div class="flex flex-nowrap flex-row items-center justify-end gap-x-5">
    <IgCartDrawer />
    <IgLocales />
    <IgMobileMenuDrawer />
  </div>
</template>
<script setup>
import IgCartDrawer from "../Cart/IgCartDrawer.vue";
import IgLocales from "../IgLocales.vue";
import IgMobileMenuDrawer from "./IgMobileMenuDrawer.vue";
</script>
<style scoped></style>
