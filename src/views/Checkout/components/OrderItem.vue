<template>
  <li
    class="flex flex-row flex-nowrap justify-center items-center mb-2 border-b-2 pb-2"
  >
    <div class="flex justify-center items-end basis-4/12 px-2">
      <img class="mx-auto" :src="imgURL" :alt="title" />
    </div>
    <div class="flex flex-col items-stretch gap-4 basis-8/12">
      <div class="inline-flex justify-between item-center">
        <h4>{{ title }}</h4>
        <p class="font-bold text-nowrap text-iggrey">x {{ quantity }}</p>
      </div>
      <span class="text-right font-bold text-iggrey">{{ price }} $</span>
    </div>
  </li>
</template>
<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  imgURL: {
    type: String,
    required: true,
    default: "/products/product.png",
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});
</script>
<style scoped></style>
