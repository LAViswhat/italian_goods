<template>
  <section class="pt-28 bg-white">
    <div
      class="container xl:max-w-6xl mx-auto px-4 flex flex-nowrap flex-col lg:flex-row justify-start items-center lg:items-start"
    >
      <div
        v-if="!cartItems.length"
        class="h-screen flex flex-col justify-center items-center mx-auto"
      >
        <ig-h2-component>{{ $t("checkout.empty") }}</ig-h2-component>
        <router-link to="catalog" class="mt-8">
          <Button :label="$t('checkout.goShopping')" />
        </router-link>
      </div>
      <div v-else class="text-center">
        <ig-h2-component>Checkout</ig-h2-component>
        <div
          class="flex flex-col md:flex-row flex-nowrap justify-center items-start gap-8 mt-2 md:mt-24 mb-16"
        >
          <div class="md:basis-7/12">
            <CheckoutForm />
          </div>
          <div class="md:basis-5/12 md:mt-8 shadow-xl rounded-lg">
            <CheckoutOrderSummery />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import CheckoutForm from "./components/CheckoutForm.vue";
import CheckoutOrderSummery from "./components/CheckoutOrderSummery.vue";
import IgH2Component from "@/components/ui/IgH2Component.vue";
import Button from "primevue/button";

const store = useStore();
const cartItems = computed(() => store.getters.cartItems);
</script>
<style></style>
