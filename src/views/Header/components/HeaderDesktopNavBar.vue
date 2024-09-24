<template>
  <div
    class="container xl:max-w-6xl mx-auto px-4 pt-9 flex flex-nowrap flex-row justify-between items-center"
  >
    <div class="text-left basis-1/4">
      <IgContacts
        v-for="contact in contacts"
        :key="contact.title"
        :title="contact.title"
        :url="contact.url"
        :pi="contact.pi"
      />
    </div>
    <router-link to="/" class="basis-1/2">
      <IgLogo class="md:w-48 lg:w-auto mx-auto" />
    </router-link>

    <IgNavBarLinks class="basis-1/4" />
  </div>
  <div class="xl:max-w-6xl mx-auto px-4 mt-10">
    <nav class="border-secondary border-y">
      <IgMenuLinksList
        menuLinkClass="relative mx-3 uppercase xl:text-xl font-bold py-6 px-5 duration-500 hover:text-primary before:absolute before:w-0 before:h-3 before:bg-primary before:top-[-5px] before:left-2/4 before:-translate-x-2/4 before:duration-500 hover:before:w-full"
      >
      </IgMenuLinksList>
    </nav>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { dataContacts } from "@/data/dataContacts";

import IgContacts from "@/components/ui/IgContacts.vue";
import IgLogo from "@/components/ui/IgLogo.vue";
import IgNavBarLinks from "@/components/ui/NavBar/IgNavBarLinks.vue";
import IgMenuLinksList from "@/components/ui/NavBar/IgMenuLinksList.vue";

const contacts = ref(dataContacts);
</script>
<style scoped></style>
