<template>
  <div v-if="product" class="pb-4 pt-28 bg-white">
    <div class="container xl:max-w-6xl mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-center gap-4">
        <div class="md:basis-2/4">
          <div
            class="relative flex justify-center items-center before:absolute before:left-0 before:right-0 before:bottom-0 before:h-20 before:bg-gradient-to-t before:from-[#fffff5] before:to-transparent"
          >
            <img
              class="mx-auto"
              :src="
                product.imgURL
                  ? `../src/assets/img${product.imgURL}`
                  : '../src/assets/img/products/product.png'
              "
              :alt="product.name"
            />
          </div>
        </div>
        <div class="md:basis-2/4 flex flex-col">
          <h2 class="mt-4 border-b-4 border-secondary">
            {{ product.name }}
          </h2>
          <p class="mt-4 pb-4 text-iggrey border-b-2 border-secondary">
            {{
              product.description ? product.description : $t("client.noInfo")
            }}
          </p>
          <h3 class="mt-4 text-black text-3xl">{{ product.price }} $</h3>
          <div class="mt-2 flex flex-row flex-nowrap item-center">
            <div class="flex justify-between items-center basis-1/4">
              <InputNumber
                class="w-8/12"
                v-model="quantity"
                inputId="minmax-buttons"
                mode="decimal"
                showButtons
                :min="1"
                :max="10"
              />
              <label for="minmax-buttons" class="font-bold block pl-3"></label>
            </div>
            <Toast
              :pt="{
                root: { class: '!w-[21.5rem] !top-2 !right-2' },
                messageText: { class: '!gap-0' },
                messageIcon: { class: 'hidden' },
              }"
            />
            <Button
              :label="$t('client.addToCart')"
              class="w-8/12 !my-0 !block basis-3/4"
              @click="addToCart"
            />
          </div>
          <Panel
            class="mt-16"
            :header="$t('client.productDescription')"
            toggleable
            collapsed
          >
            <p class="m-0">
              {{ product.description }} <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Panel>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";
import Panel from "primevue/panel";

const store = useStore();
const route = useRoute();

const product = ref(null);

let quantity = ref(1);

const loadProduct = async () => {
  const productName = route.params.productname;
  product.value = store.getters.items.find((item) => item.name === productName);

  if (!product.value) {
    await store.dispatch("loadItems");
    product.value = store.getters.items.find(
      (item) => item.name === productName
    );
  }
  quantity = ref(1);
};

onMounted(() => {
  loadProduct();
});

// Обновляем данные при изменении маршрута
watch(
  () => route.params.productname,
  () => {
    loadProduct();
  }
);

const addToCart = () => {
  store.dispatch("addToCart", { ...product.value, quantity: quantity.value });
  store.dispatch("updateItemQuantity", {
    id: product.value.id,
    quantity: quantity.value,
  });
  showToast();
};

const { t } = useI18n();

const toast = useToast();

const showToast = () => {
  toast.add({
    severity: "secondary",
    summary: product.value.name + t("client.addToast"),
    life: 1500,
  });
};
</script>
<style scoped>
:deep(.p-inputnumber) .p-inputtext {
  width: 100%;
}
:deep(.p-inputnumber) button {
  background-color: transparent;
}
:deep(.p-panel) {
  border: none;
  border-top: 2px solid #e5ddd8;
}
:deep(.p-panel) .p-panel-header {
  text-transform: uppercase;
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #c2a16d;
}
:deep(.p-panel) .p-panel-header .p-button:hover {
  background-color: #c2a16d;
  color: #fff;
}
:deep(.p-panel) .p-panel-content {
  color: #6e6e6e;
}
</style>
