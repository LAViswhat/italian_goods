<template>
  <transition-group name="fade" tag="ul">
    <OrderItem
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :imgURL="item.imgURL"
      :title="item.name"
      :quantity="item.quantity"
      :price="item.price"
    />
  </transition-group>
</template>
<script setup>
import { computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import OrderItem from "./OrderItem.vue";

const store = useStore();
const cartItems = computed(() => store.getters.cartItems);
const orderItems = computed(
  () => store.getters["order/getOrderResponse"].itemsInfo
);

const items = computed(() => {
  return route.name === "succesfullOrder" ? orderItems.value : cartItems.value;
});

const route = useRoute();

onMounted(() => {
  const savedCartItems = JSON.parse(localStorage.getItem("cart-list"));

  if (savedCartItems) {
    store.commit("SET_CART_ITEMS", savedCartItems);
  }
});

watch(
  items,
  (newCartItems) => {
    localStorage.setItem("cart-list", JSON.stringify(newCartItems));
  },
  { deep: true }
);
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
