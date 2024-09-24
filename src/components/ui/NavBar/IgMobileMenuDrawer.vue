<template>
  <Button
    @click="visible = true"
    v-if="isMobile"
    class="!rounded-full !w-12 h-12 !bg-iggrey"
    icon="pi
    pi-bars"
  />
  <teleport to="body">
    <Drawer v-model:visible="visible">
      <template #container="{ closeCallback }">
        <div class="flex flex-col h-full">
          <div class="flex items-center justify-end px-4">
            <span>
              <Button
                type="button"
                @click="closeCallback"
                icon="pi pi-times"
                rounded
                class="!rounded-full !w-10 !h-10 !my-2"
              ></Button>
            </span>
          </div>
          <div class="overflow-y-auto">
            <IgMenuLinksList
              menuLinksClass="flex flex-nowrap flex-col justify-start items-start"
              menuLinkClass="relative ml-3 uppercase text-2xl text-iggrey py-2 px-5 before:absolute before:rounded-full before:border-2 before:w-3 before:h-3 before:border-primary before:top-[18px] before:left-0"
            >
            </IgMenuLinksList>
            <div class="text-left basis-1/4 mt-14 pl-4 pt-8 border-t">
              <IgContacts
                class="contact"
                contact-span-class="pl-2 text-lg"
                v-for="contact in contacts"
                :key="contact.title"
                :title="contact.title"
                :url="contact.url"
                :pi="contact.pi"
              />
            </div>
          </div>
        </div>
      </template>
    </Drawer>
  </teleport>
</template>
<script setup>
import { ref } from "vue";
import IgMenuLinksList from "./IgMenuLinksList.vue";
import IgContacts from "../IgContacts.vue";
import Button from "primevue/button";
import Drawer from "primevue/drawer";
import { useScreenSize } from "@/composables/useScreenSize";
import { dataContacts } from "@/data/dataContacts";

const { isMobile } = useScreenSize();

const visible = ref(false);

const contacts = dataContacts;
</script>
<style scoped>
.contact :deep(span) {
  color: #6e6e6e;
}
</style>
