<template>
  <DataView :value="items" paginator :rows="8" layout="grid">
    <template #grid="{ items }">
      <transition-group
        tag="div"
        name="grid-morph"
        class="product-list relative mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <CatalogCard
          v-for="item in items"
          :key="item.id"
          :title="item.name"
          :description="item.description"
          :price="item.price"
          :imgURL="item.imgURL"
          :productId="item.id"
          :onClickAdd="() => $emit('addToCart', item)"
          :isAdded="item.isAdded"
        />
      </transition-group>
    </template>
  </DataView>
</template>
<script setup>
import CatalogCard from "./CatalogCard.vue";
import DataView from "primevue/dataview";

defineProps({
  items: Array,
});

defineEmits(["addToCart"]);
</script>
<style scoped>
.grid-morph-enter-active {
  transition: all 0.5s ease;
}

.grid-morph-leave-active {
  display: none;
}

.grid-morph-enter-from,
.grid-morph-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.grid-morph-leave-active {
  position: absolute;
}
:deep(.p-dataview-content),
:deep(.p-paginator) {
  background-color: transparent;
}
:deep(.p-paginator) {
  margin-top: 1rem;
}
:deep(.p-paginator) .p-paginator-page-selected {
  color: #fff;
  background-color: #c2a16d;
}
:deep(.p-paginator) .p-paginator-page:not(.p-paginator-page-selected):hover {
  background: none;
}
</style>
