<template>
  <section>
    <div class="container xl:max-w-6xl mx-auto px-4">
      <ig-h2-component class="text-center">{{
        $t(catalogTitle)
      }}</ig-h2-component>
      <IgFilters
        class="filters mt-8 md:mt-16 flex flex-nowrap flex-col justify-center items-center"
        :categories="categories"
        :items="filteredItems"
        @update:items="updateItems"
      />
      <Toast
        :pt="{
          root: { class: '!w-[21.5rem] !top-2 !right-2' },
          messageText: { class: '!gap-0' },
          messageIcon: { class: 'hidden' },
        }"
      />
      <CatalogList :items="items" @add-to-cart="addToCart" />
    </div>
  </section>
</template>
<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import IgH2Component from "@/components/ui/IgH2Component.vue";
import IgFilters from "@/components/ui/IgFilters.vue";
import CatalogList from "./components/CatalogList.vue";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import { menuLinks } from "@/data/menuLinks";

const store = useStore();

const items = computed(() => store.getters.items);
const filteredItems = computed(() => store.getters.filteredItems);
const categories = computed(() => store.getters.categories);

// Восстановление состояний из localStorage
const restoreProductStatuses = () => {
  const savedProductStatus = JSON.parse(localStorage.getItem("cart-list"));

  if (savedProductStatus) {
    savedProductStatus.forEach((status) => {
      const product = items.value.find((item) => item.id === status.id);
      if (product) {
        product.isAdded = status.isAdded;
      }
    });
  }
};

// Обработчик обновления элементов
const updateItems = (newItems) => {
  store.commit("SET_ITEMS", newItems);
  restoreProductStatuses();
};

const { t } = useI18n();

const toast = useToast();

const showToast = (item) => {
  toast.add({
    severity: "secondary",
    summary: t("client.addToast", { item }),
    life: 1500,
  });
};

// Добавляем товар в корзину
const addToCart = (item) => {
  store.dispatch("addToCart", item);
  showToast(item.name);
};

// Монтирование продуктов
onMounted(async () => {
  await store.dispatch("loadItems");
  restoreProductStatuses();
});

const catalogTitle = menuLinks.find((link) => link.id === 3).title;
</script>
<style scoped>
.filters :deep(.desktop-categories),
.filters :deep(.desktop-categories) .p-selectbutton,
.filters :deep(.desktop-subcategories),
.filters :deep(.desktop-subcategories) .p-selectbutton {
  width: 100%;
  justify-content: space-around;
}
.filters :deep(.desktop-categories) .p-selectbutton .p-togglebutton {
  background-color: #ffffff;
  border-radius: 16px;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  padding: 16px 24px;
  width: calc(25% - 14px);
  box-shadow: 10px 10px 12px 0px rgba(222, 222, 222, 0.9);
}
.filters
  :deep(.desktop-categories)
  .p-selectbutton
  .p-togglebutton.p-togglebutton-checked {
  color: #ffffff;
  background-color: #c2a16d;
}
.filters :deep(.p-selectbutton) .p-togglebutton.p-togglebutton-checked::before {
  display: none;
}

.filters :deep(.desktop-subcategories) .p-selectbutton .p-togglebutton {
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 700;
  color: #6e6e6e;
  background-color: transparent;
  border: none;
}
.filters :deep(.desktop-subcategories) .p-selectbutton .p-togglebutton::after {
  content: "";
  position: absolute;
  bottom: 5px;
  left: 50%;
  width: 0;
  opacity: 0;
  height: 5px;
  background-color: #c2a16d;
  border-radius: 16px;
  transition: width 0.3s ease, opacity 0.5s linear;
  transform: translateX(-50%);
}
.filters
  :deep(.desktop-subcategories)
  .p-selectbutton
  .p-togglebutton.p-togglebutton-checked::after {
  width: 100%;
  opacity: 1;
}
.filters :deep(.desktop-subcategories) .p-selectbutton .p-togglebutton:hover {
  opacity: 0.8;
  transition: all 0.3s ease;
}
</style>
