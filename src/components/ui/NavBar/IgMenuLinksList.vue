<template>
  <ul :class="menuLinksClass">
    <IgMenuLink
      :class="menuLinkClass"
      v-for="link in links"
      :key="link.id"
      :title="$t(link.title)"
      :url="link.url"
    />
  </ul>
</template>
<script setup>
import IgMenuLink from "@/components/ui/NavBar/IgMenuLink.vue";
import { menuLinks } from "@/data/menuLinks";

const props = defineProps({
  menuLinksClass: {
    type: String,
    default:
      "flex flex-nowrap flex-row justify-center items-center text-center",
  },
  menuLinkClass: {
    type: String,
    default: "",
  },
  links: {
    type: Array,
    default: () => menuLinks,
  },
});
</script>
<style></style>
