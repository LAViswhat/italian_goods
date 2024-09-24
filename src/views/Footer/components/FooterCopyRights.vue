<template>
  <div
    class="bg-[#15151d] text-center text-iggrey relative text-xs px-5 py-7 xl:text-xl xl:p-10 border-t-8 border-primary"
  >
    <p>
      &copy; 2024 Italian Goods. {{ $t("footer.rights") }}
      <router-link
        to="privacy"
        class="hover:text-primary transition duration-500"
        >{{ $t("footer.privacy") }}</router-link
      >
    </p>
  </div>
</template>
<script setup></script>
<style></style>
