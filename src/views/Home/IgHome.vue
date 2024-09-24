<template>
  <div>
    <div
      v-animateonscroll="{
        enterClass: 'animate-fadein',
        leaveClass: 'animate-fadeout',
      }"
      class="animate-duration-500"
    >
      <ig-section-about />
    </div>
    <ig-section-catalog class="mt-10 py-8 lg:py-20 bg-[#f4f8fb]" />
    <div
      v-animateonscroll="{
        rootMargin: '300px',
        enterClass: 'animate-fadein',
        leaveClass: 'animate-fadeout',
      }"
      class="animate-duration-500"
    >
      <ig-section-get-in-touch />
    </div>
  </div>
</template>
<script setup>
import IgSectionAbout from "@/components/IgSectionAbout.vue";
import IgSectionCatalog from "@/components/IgSectionCatalog/IgSectionCatalog.vue";
import IgSectionGetInTouch from "@/components/IgSectionGetInTouch.vue";
</script>
<style scoped></style>
