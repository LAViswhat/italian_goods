<template>
  <footer
    class="relative bg-[url('../assets/img/footer-pattern.jpg')] before:absolute before:left-0 before:top-0 before:w-full before:h-1 before:bg-[#4a4a50]"
  >
    <div class="container xl:max-w-6xl mx-auto px-4">
      <FooterInfo />
    </div>
    <FooterCopyRights />
  </footer>
</template>
<script setup>
import FooterInfo from "./components/FooterInfo.vue";
import FooterCopyRights from "./components/FooterCopyRights.vue";
</script>
<style></style>
