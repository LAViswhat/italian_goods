<template>
  <div>
    <div class="flex justify-between font-bold mt-4">
      <p>
        {{ orderResponse.orderInfo.totalQuantity }}
        {{
          orderResponse.orderInfo.totalQuantity > 1
            ? $t("checkout.items")
            : $t("checkout.item")
        }}
      </p>
      <p>{{ currency(orderResponse.orderInfo.totalPrice) }}</p>
    </div>
    <div class="flex justify-between font-bold">
      <p>{{ $t("checkout.shipping") }}</p>
      <p>{{ currency(shippingCost) }}</p>
    </div>
    <div class="flex justify-between font-bold pt-4">
      <p class="text-xl">{{ $t("checkout.subtotal") }}</p>
      <p>{{ currency(orderResponse.orderInfo.subtotalPrice) }}</p>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { currency } from "@/composables/useCurrency";

const store = useStore();
const cartSummery = computed(() => store.getters.cartSummery);
const shippingCost = computed(() => cartSummery.value.shippingCost);
const orderResponse = computed(() => store.getters["order/getOrderResponse"]);
</script>
<style></style>
