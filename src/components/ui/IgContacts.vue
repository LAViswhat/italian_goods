<template>
  <a :href="url" class="inline-flex justify-start items-center group mb-2"
    ><i
      class="pi !text-xl mr-1 w-10 h-10 border-2 border-primary text-primary rounded-full !inline-flex justify-center items-center transition duration-500 group-hover:text-white group-hover:bg-primary"
      :class="`pi-${pi}`"
    ></i>
    <span
      class="text-secondary lg:text-lg relative duration-500 group-hover:text-white before:absolute before:left-2/4 before:bottom-1 before:-translate-x-2/4 before:h-[1px] before:w-0 before:bg-secondary group-hover:before:w-full group-hover:before:duration-500"
      :class="contactSpanClass"
      >{{ title }}</span
    ></a
  >
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  pi: {
    type: String,
    required: true,
  },
  contactSpanClass: {
    type: String,
    default: "",
  },
});
</script>
<style lang=""></style>
