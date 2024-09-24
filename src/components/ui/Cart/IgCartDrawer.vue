<template>
  <OverlayBadge
    v-if="totalQuantity > 0"
    :value="totalQuantity"
    @click="visibleRight = true"
    class="-mt-[6px] cursor-pointer"
  >
    <img src="@/assets/icons/cart.png" alt="cart" class="max-w-11" />
  </OverlayBadge>
  <img
    v-else
    @click="visibleRight = true"
    src="@/assets/icons/cart.png"
    alt="cart"
    class="max-w-11 mb-[6px] cursor-pointer"
  />
  <teleport to="body">
    <Drawer v-model:visible="visibleRight" position="right">
      <template #container="{ closeCallback }">
        <div class="flex flex-col h-full">
          <div class="flex items-top justify-between px-4">
            <h3 class="text-3xl pt-1 text-iggrey">{{ $t("client.cart") }}</h3>
            <span>
              <Button
                class="!bg-transparent !my-0 !text-iggrey hover:opacity-80"
                type="button"
                @click="closeCallback"
                ><i class="pi pi-times-circle !text-2xl"></i
              ></Button>
            </span>
          </div>
          <Divider />
          <p v-show="!cartItems.length" class="px-2">
            <i>{{ $t("client.cartEmpty") }}</i>
          </p>
          <div
            class="relative overflow-y-auto flex-auto flex-grow-0 min-h-0 h-2/4 lg:h-3/4 px-2"
          >
            <CartList @remove-from-cart="removeFromCart" />

            <CartSummery
              v-if="cartItems.length"
              class="fixed bottom-20 right-0 left-2 z-30 bg-white px-2"
            />
            <router-link
              to="/checkout"
              v-if="cartItems.length"
              class="text-center fixed bottom-0 right-0 left-2 z-30 bg-white px-2"
              ><Button :label="$t('client.proceedCheckout')"
            /></router-link>
          </div>
        </div>
      </template>
    </Drawer>
  </teleport>
</template>
<script setup>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";
import OverlayBadge from "primevue/overlaybadge";
import Drawer from "primevue/drawer";
import Button from "primevue/button";
import Divider from "primevue/divider";
import CartList from "./components/CartList.vue";
import CartSummery from "./components/CartSummery.vue";

const visibleRight = ref(false);

const store = useStore();

const cartItems = computed(() => store.getters.cartItems);
const cartSummery = computed(() => store.getters.cartSummery);
const totalQuantity = computed(() => cartSummery.value.cartTotalQuantity);

const removeFromCart = (item) => {
  store.dispatch("removeFromCart", item);
};
</script>
<style scoped>
.p-overlaybadge :deep(.p-badge) {
  transform: translate(25%, 100%);
}

:deep(.p-button) span {
  font-size: 18px;
}
</style>
