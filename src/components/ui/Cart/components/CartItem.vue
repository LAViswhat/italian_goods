<template>
  <li
    class="flex flex-row flex-nowrap justify-center items-center mb-4 border-b-2 pb-4"
  >
    <div class="flex justify-center items-end basis-4/12 px-2">
      <img class="mx-auto" :src="imgURL" :alt="title" />
    </div>
    <div class="flex flex-col basis-8/12">
      <RouterLink :to="{ name: 'product', params: { productname: title } }">
        <h4 class="hover:opacity-80">{{ title }}</h4>
      </RouterLink>

      <div class="flex flex-row flex-nowrap items-end">
        <div class="flex items-center">
          <InputNumber
            class="w-4/12"
            v-model="quantity"
            inputId="minmax-buttons"
            mode="decimal"
            showButtons
            :min="1"
            :max="10"
            @input="onQuantityChange"
          />
          <label for="minmax-buttons" class="font-bold block pl-3"
            ><span>x {{ price }} $</span></label
          >
        </div>
        <Button
          class="!my-0 hover:bg-transparent hover:opacity-80 !text-iggrey"
          @click="onClickRemoveFromCart"
          icon="pi pi-trash"
          outlined
          rounded
        />
      </div>
    </div>
  </li>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";

const store = useStore();

const quantity = ref(1);

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
  price: {
    type: String,
    required: true,
  },
  onClickRemoveFromCart: {
    type: Function,
    required: true,
  },
});

// Обработка изменения количества
const onQuantityChange = (newQuantity) => {
  quantity.value = newQuantity.value; // Update the quantity value
  if (
    newQuantity.value !== null &&
    newQuantity.value !== 0 &&
    newQuantity.value <= 10
  ) {
    store.dispatch("updateItemQuantity", {
      id: props.id,
      quantity: newQuantity.value,
    });
  }
};

onMounted(() => {
  const cartItem = store.state.cartItems.find((item) => item.id === props.id);
  if (cartItem) {
    quantity.value = cartItem.quantity;
  }
});
</script>
<style scoped>
:deep(.p-inputnumber) .p-inputtext {
  width: 100%;
}
:deep(.p-inputnumber) button {
  background-color: transparent;
}
</style>
