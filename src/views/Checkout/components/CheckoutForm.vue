<template>
  <div>
    <form
      @submit="onSubmit"
      class="overflow-hidden py-12 lg:pb-28 flex flex-nowrap flex-col justify-center items-stretch"
    >
      <FloatLabel class="!mb-8"
        ><Select
          inputId="bl-countries"
          v-model="selectedCountry"
          :options="translatedCountries"
          optionLabel="name"
          name="selectedCountry"
          class="w-full h-12 text-left !border-iggrey !border-b-4 !border-t-0 !border-r-0 !border-l-0 !rounded-none text-xl"
        />
        <small v-if="!selectedCountry" id="country-help" class="text-[#f87171]">
          {{ errors.selectedCountry }}
        </small>
        <label class="!text-iggrey" for="bl-countries">{{
          $t("checkout.selectCountry")
        }}</label>
      </FloatLabel>
      <template v-for="(field, index) in fields" :key="index">
        <div v-if="index === 2 || index === 6" class="flex gap-4">
          <div class="w-6/12">
            <CheckoutFormField :field="field" />
          </div>
          <div class="w-6/12">
            <CheckoutFormField :field="fields[index + 1]" />
          </div>
        </div>
        <template v-else-if="index !== 3 && index !== 7">
          <CheckoutFormField :field="field" />
        </template>
      </template>
      <div class="inline-flex flex-col lg:flex-row gap-4">
        <ToggleSwitch
          v-model="terms"
          inputId="terms"
          name="terms"
          aria-describedby="terms-help"
        />
        <label class="!text-iggrey" for="terms" name="terms">
          {{ $t("checkout.terms") }}</label
        >
      </div>
      <small id="terms-help" class="text-[#f87171]">
        {{ errors.terms }}
      </small>
      <Button
        class="lg:w-6/12 !py-4 !rounded-2xl"
        :loading="loading"
        :label="isSubmitting ? $t('Einreichung') : $t('client.proceedPayment')"
        type="submit"
      />
    </form>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { dataFields } from "@/data/dataCheckoutFields";
import { dataCountries } from "@/data/dataCheckoutSelectCountryField";
import { useI18n } from "vue-i18n";
import FloatLabel from "primevue/floatlabel";
import Select from "primevue/select";
import Button from "primevue/button";
import ToggleSwitch from "primevue/toggleswitch";
import CheckoutFormField from "./CheckoutFormField.vue";

const store = useStore();
const router = useRouter();

const countries = ref(dataCountries);
const fields = ref(dataFields);

const loading = ref(false);

const cartItems = computed(() => store.getters.cartItems);
const cartSummery = computed(() => store.getters.cartSummery);

const totalPrice = computed(() => cartSummery.value.cartTotalPrice);
const subtotal = computed(() => cartSummery.value.cartTotalPriceWithShipping);
const totalQuantity = computed(() => cartSummery.value.cartTotalQuantity);

const { t } = useI18n();

const schema = yup.object({
  selectedCountry: yup
    .object()
    .shape({ name: yup.string().required(t("validation.required")) })
    .nullable()
    .required(t("validation.required")),
  email: yup
    .string()
    .required(t("validation.required"))
    .email(t("validation.email")),
  state: yup.string().required(t("validation.required")),
  name: yup
    .string()
    .min(2, t("validation.min", { length: 2 }))
    .required(t("validation.required")),
  last_name: yup
    .string()
    .min(2, t("validation.min", { length: 2 }))
    .required(t("validation.required")),
  address: yup.string().required(t("validation.required")),
  city: yup.string().required(t("validation.required")),
  zip: yup
    .number()
    .required()
    .positive()
    .integer()
    .min(4, t("validation.min", { length: 4 })),
  terms: yup
    .bool()
    .oneOf([true], t("validation.terms"))
    .required(t("validation.required")),
});

const { handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
    selectedCountry: null,
    terms: false,
  },
});

const { value: selectedCountry } = useField("selectedCountry");
const { value: terms } = useField("terms");

const translatedCountries = computed(() =>
  countries.value.map((country) => ({
    ...country,
    name: t(`countries.${country.code}`),
  }))
);

const onSubmit = handleSubmit(async (values) => {
  loading.value = true;
  try {
    const response = await store.dispatch("order/submitOrder", {
      clientInfo: values,
      itemsInfo: cartItems.value,
      orderInfo: {
        totalPrice: totalPrice.value,
        subtotalPrice: subtotal.value,
        totalQuantity: totalQuantity.value,
      },
    });
    loading.value = false;
    setTimeout(() => {
      router.push({
        name: "succesfullOrder",
        params: {
          orderId: response.id,
        },
      });
    }, 1000);
  } catch (err) {
    console.error("Order submission failed:", err);
    loading.value = false;
  }
});
</script>
<style scoped></style>
