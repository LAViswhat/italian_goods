<template>
  <div v-if="isMobile">
    <div class="flex justify-center w-full mobile-categories">
      <Select
        class="w-full px-4 py-2 !bg-primary !rounded-xl !border-none"
        @update:model-value="onChangesSelect"
        v-model="selectedCategory"
        :options="categories"
        placeholder="All"
      />
    </div>
    <div
      class="flex justify-center mt-6 w-full mobile-subcategories"
      :class="{ 'h-[45px]': !subcategories.length > 0 }"
    >
      <Select
        class="w-full px-4 py-2 !rounded-xl !border-none"
        v-if="subcategories.length > 0"
        v-model="selectedSubcategory"
        :options="subcategories"
        placeholder="All"
      />
    </div>
  </div>
  <div v-else>
    <div class="flex justify-center desktop-categories">
      <SelectButton
        @update:model-value="onChangesSelect"
        v-model="selectedCategory"
        :options="categories"
        aria-labelledby="basic"
      />
    </div>
    <div
      class="flex justify-center mt-6 desktop-subcategories"
      :class="{ 'h-[45px]': !subcategories.length > 0 }"
    >
      <SelectButton
        class="animate-width animate-once animate-duration-300"
        v-if="subcategories.length > 0"
        v-model="selectedSubcategory"
        :options="subcategories"
        aria-labelledby="subcategory"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, watch, computed } from "vue";
import { useStore } from "vuex";
import { useScreenSize } from "@/composables/useScreenSize";
import Select from "primevue/select";
import SelectButton from "primevue/selectbutton";

const props = defineProps({
  categories: Array,
  items: Array,
});

const emit = defineEmits(["update:items"]);

const store = useStore();

const filteredItems = computed(() => store.getters.filteredItems);
const selectedCategory = ref("");
const selectedSubcategory = ref("");
const subcategories = ref([]);

const onChangesSelect = (newValue) => {
  if (!newValue) return;
  selectedCategory.value = newValue;
  // Сброс выбранной подкатегории и подкатегорий
  selectedSubcategory.value = "";
  subcategories.value = [];
};

// Функция для обновления подкатегорий
const updateSubcategories = (data) => {
  const uniqueSubcategories = new Set();
  data.forEach((item) => {
    item.details.subcategory.forEach((subcategory) => {
      uniqueSubcategories.add(subcategory);
    });
  });
  subcategories.value = Array.from(uniqueSubcategories);
};

// Watcher для выбранной категории
watch(selectedCategory, async () => {
  if (!selectedCategory.value) return;
  try {
    await store.dispatch("filterItems", {
      category: selectedCategory.value,
      subcategory: "",
    });
    emit("update:items", filteredItems.value);
    updateSubcategories(filteredItems.value);
  } catch (error) {
    console.error(error);
  }
});

// Watcher для выбранной подкатегории
watch(selectedSubcategory, async () => {
  if (!selectedSubcategory.value || !selectedCategory.value) return;

  try {
    await store.dispatch("filterItems", {
      category: selectedCategory.value,
      subcategory: selectedSubcategory.value,
    });
    emit("update:items", filteredItems.value);
  } catch (error) {
    console.error(error);
  }
});

const { isMobile } = useScreenSize();
</script>
<style scoped>
.mobile-categories :deep(.p-select) .p-select-label,
.mobile-categories :deep(.p-select) .p-select-dropdown {
  color: #fff;
}
:deep(.p-select) .p-select-label {
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 600;
}
</style>
