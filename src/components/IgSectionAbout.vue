<template>
  <section class="pt-16 bg-white">
    <div
      class="container xl:max-w-6xl mx-auto px-4 flex flex-nowrap flex-col lg:flex-row justify-start items-center lg:items-start"
    >
      <div class="max-w-[500px] flex-shrink-0 lg:max-w-[50%] lg:mr-14">
        <img src="@/assets/img/about-image.png" alt="" />
      </div>

      <div class="mt-8 text-center lg:text-left">
        <ig-h2-component>{{ $t(aboutTitle) }}</ig-h2-component>
        <p class="text-iggrey leading-8 lg:text-2xl my-5 lg:mt-9 text-pretty">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsam
          inventore alias quos placeat libero, aut quisquam assumenda numquam
          expedita. Veniam fugit porro dignissimos aut molestiae accusantium
          quasi eaque voluptate.
        </p>
        <router-link
          class="uppercase text-lg lg:text-2xl font-bold underline text-primary"
          to="about"
          >{{ $t("client.readMore") }}</router-link
        >
      </div>
    </div>
  </section>
</template>
<script setup>
import IgH2Component from "@/components/ui/IgH2Component.vue";
import { menuLinks } from "@/data/menuLinks";

const aboutTitle = menuLinks.find((link) => link.id === 2).title;
</script>
<style scoped>
@media (min-width: 1024px) {
  h2::before {
    left: 0;
    width: 75%;
    transform: none;
  }
}
</style>
