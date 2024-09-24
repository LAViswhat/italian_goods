<template>
  <transition-group name="fade" tag="ul">
    <CartItem
      v-for="item in cartItems"
      :key="item.id"
      :id="item.id"
      :imgURL="item.imgURL"
      :title="item.name"
      :price="item.price"
      :onClickRemoveFromCart="() => $emit('removeFromCart', item)"
    />
  </transition-group>
</template>
<script setup>
import { computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import CartItem from "./CartItem.vue";

const store = useStore();
const cartItems = computed(() => store.getters.cartItems);

onMounted(() => {
  const savedCartItems = JSON.parse(localStorage.getItem("cart-list"));

  if (savedCartItems) {
    store.commit("SET_CART_ITEMS", savedCartItems);
  }
});

watch(
  cartItems,
  (newCartItems) => {
    localStorage.setItem("cart-list", JSON.stringify(newCartItems));
  },
  { deep: true }
);

defineEmits(["removeFromCart"]);
</script>
<style>
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
