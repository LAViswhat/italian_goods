<template>
  <div class="languages relative">
    <div
      class="flex justify-center items-center text-white bg-primary rounded-full w-12 h-12 cursor-pointer leading-10 uppercase"
      @click="toggleDropdown"
    >
      <div class="current-language">{{ currentLocale }}</div>
      <ul
        v-if="isDropdownOpen"
        class="dropdown-languages absolute top-full animate-flipup"
      >
        <li v-for="lang in availableLocales" :key="lang" class="lang-item my-2">
          <Button
            v-if="lang !== currentLocale"
            @click="changeLocale(lang)"
            :pt="localesBtn"
            >{{ lang }}</Button
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import Button from "primevue/button";

const { locale, availableLocales } = useI18n();

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const currentLocale = computed(() => locale.value);

const changeLocale = (lang) => {
  setTimeout(() => {
    locale.value = lang;
    localStorage.setItem("selectedLanguage", lang);
    isDropdownOpen.value = false;
  }, 1000);
};

onMounted(() => {
  const savedLanguage = localStorage.getItem("selectedLanguage");

  if (savedLanguage && availableLocales.includes(savedLanguage)) {
    locale.value = savedLanguage;
  }
});

const localesBtn = ref({
  root: "localesBtn",
});
</script>
<style scoped>
.localesBtn {
  @apply bg-iggrey border-2 border-primary duration-300 shadow-md rounded-full w-12 h-12 cursor-pointer leading-10 uppercase z-30 hover:opacity-80;
}
</style>
