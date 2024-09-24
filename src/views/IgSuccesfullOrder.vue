<template>
  <section class="pt-36 bg-white">
    <div
      class="container xl:max-w-6xl mx-auto px-4 flex flex-nowrap flex-col lg:flex-row justify-center items-center"
    >
      <div class="text-center">
        <i class="pi pi-check-circle !text-6xl" style="color: green"></i>
        <h4 class="text-center text-3xl pt-4">
          Hey, {{ orderResponse.clientInfo.name }}
          {{ orderResponse.clientInfo.last_name }}
        </h4>
        <ig-h2-component class="mt-4">{{
          $t("checkout.success")
        }}</ig-h2-component>
        <p class="text-iggrey leading-8 lg:text-2xl my-2 lg:mt-9 text-pretty">
          {{ $t("checkout.delivery") }}
        </p>
        <p class="text-iggrey leading-8 lg:text-2xl text-pretty">
          {{ $t("checkout.orderNumber") }} <strong>#{{ orderId }}</strong>
        </p>
        <checkout-order-summery
          class="pb-4 my-8 w-3/4 mx-auto border-primary border-2 rounded-lg shadow-2xl"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import CheckoutOrderSummery from "./Checkout/components/CheckoutOrderSummery.vue";
import IgH2Component from "@/components/ui/IgH2Component.vue";

const route = useRoute();
const orderId = route.params.orderId;

const store = useStore();

const orderResponse = computed(() => store.getters["order/getOrderResponse"]);
</script>
<style scoped></style>
