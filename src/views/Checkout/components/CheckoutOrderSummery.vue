<template>
  <div class="pt-4 text-left px-4">
    <h2 class="uppercase text-iggrey text-lg lg:text-2xl">
      {{ $t("checkout.orderSummery") }}
    </h2>
    <OrderItemList class="md:p-4" />
    <component
      :is="route.name === 'checkout' ? CartSummery : CheckoutPriceSummery"
      class="text-iggrey py-4"
    />
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import OrderItemList from "./OrderItemList.vue";
import CartSummery from "@/components/ui/Cart/components/CartSummery.vue";
import CheckoutPriceSummery from "./CheckoutPriceSummery.vue";

const route = useRoute();
</script>
<style scoped>
@media (min-width: 1024px) {
  :deep(ul) li img {
    width: 75%;
  }
}
</style>
