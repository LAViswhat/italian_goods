<template>
  <RouterLink :to="{ name: 'product', params: { productname: title } }">
    <div class="card min-h-[516px] bg-white rounded-lg shadow-xl">
      <div
        class="relative flex justify-center items-end min-h-[268px] before:absolute before:left-0 before:right-0 before:bottom-0 before:h-20 before:bg-gradient-to-t before:from-[#eff4f8] before:to-transparent"
      >
        <img
          class="mx-auto max-w-[65%] lg:max-w-full"
          :src="imgURL"
          :alt="title"
        />
      </div>
      <div class="card-content text-center">
        <h4 class="mt-4">{{ title }}</h4>
        <p class="mt-1 text-iggrey min-h-12">
          {{ description }}
        </p>
        <p
          class="mt-4 lg:mt-6 text-xl lg:text-2xl font-serif font-bold text-primary"
        >
          {{ price }} $
        </p>
      </div>
      <Button
        :disabled="isAdded"
        class="w-9/12 !block !rounded-2xl"
        :label="isAdded ? $t('client.added') : $t('client.add')"
        @click.prevent="onClickAdd"
      />
    </div>
  </RouterLink>
</template>
<script setup>
import Button from "primevue/button";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
    default: "No info",
  },
  imgURL: {
    type: String,
    required: true,
    default: "/products/product.png",
  },
  price: {
    type: String,
    required: true,
  },
  details: {
    category: {
      type: String,
      required: true,
    },
    subcutegory: {
      type: String,
      required: true,
    },
  },
  onClickAdd: {
    type: Function,
  },
  isAdded: {
    type: Boolean,
    default: false,
  },
});
</script>
<style></style>
