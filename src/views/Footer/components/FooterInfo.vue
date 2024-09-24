<template>
  <div
    class="relative pt-16 xl:pt-24 pb-14 xl:pb-12 flex flex-col md:flex-row gap-12 flex-nowrap justify-start items-start"
  >
    <div class="col md:basis-1/4">
      <h2
        class="relative pl-4 text-white uppercase lg:text-5xl leading-6 before:absolute before:left-0 before:top-0 before:w-2 before:h-full before:bg-primary"
      >
        {{ $t("footer.newsletter") }}
      </h2>
      <div class="lg:mt-16 mt-4">
        <h3 class="lg:text-3xl uppercase text-primary">
          {{ $t("footer.newsletterText") }}
        </h3>
        <form @submit="onSubmit">
          <FloatLabel class="mt-4 !mb-2">
            <InputText
              :pt="{
                root: {
                  class: [
                    'relative',
                    '!border-b-4 !border-t-0 !border-r-0 !border-l-0',
                    '!bg-transparent',
                    '!rounded-none',
                    'focus:border-primary hover:border-primary',
                    'w-full',
                    'h-16',
                    '!text-surface-0 dark:text-white/60',
                    '!text-xl',
                  ],
                },
              }"
              id="email"
              v-model="email"
              aria-describedby="email-help"
              type="email"
              :class="{ 'p-invalid': errors.email }"
              class="mt-2"
            />
            <small id="email-help" class="p-error text-[#f87171]">{{
              errors.email
            }}</small>
            <label class="!text-xl capitalize" for="email">Email</label>
          </FloatLabel>
          <Button
            class="w-3/4 !py-4 !rounded-2xl"
            :label="$t('client.subscribe')"
            type="submit"
          />
        </form>
      </div>
    </div>
    <div class="col md:basis-1/4">
      <h2
        class="relative pl-4 text-white uppercase lg:text-5xl leading-6 before:absolute before:left-0 before:top-0 before:w-2 before:h-full before:bg-primary"
      >
        {{ $t("footer.contacts") }}
      </h2>
      <div class="lg:mt-16 mt-4">
        <h3 class="lg:text-3xl uppercase text-primary">
          {{ $t("footer.phone") }}:
        </h3>
        <a
          href="tel:+123844456789"
          class="lg:text-xl hover:text-primary transition duration-500"
          >+123 (844) 456 789</a
        >
      </div>
      <div class="lg:mt-16 mt-4">
        <h3 class="lg:text-3xl uppercase text-primary">
          {{ $t("footer.address") }}:
        </h3>
        <p class="lg:text-xl">
          523 Sylvan Ave, 5th Floor <br />
          Mountain View, CA 94041 USA
        </p>
      </div>
      <div class="lg:mt-16 mt-4">
        <h3 class="lg:text-3xl uppercase text-primary">E-mail:</h3>
        <a
          href="mailto:info@demolink.org"
          class="lg:text-xl hover:text-primary transition duration-500"
          >info@demolink.org</a
        >
      </div>
    </div>
    <div class="col md:basis-1/4">
      <h2
        class="relative pl-4 text-white uppercase lg:text-5xl leading-6 before:absolute before:left-0 before:top-0 before:w-2 before:h-full before:bg-primary"
      >
        Menu
      </h2>
      <nav>
        <IgMenuLinksList
          menuLinksClass="lg:mt-16 mt-4"
          menuLinkClass="text-xl lg:text-3xl font-serif uppercase hover:text-primary transition duration-500 mb-2 xl:mb-4"
        >
        </IgMenuLinksList>
      </nav>
    </div>
  </div>
</template>
<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
import { useI18n } from "vue-i18n";
import FloatLabel from "primevue/floatlabel";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import IgMenuLinksList from "@/components/ui/NavBar/IgMenuLinksList.vue";

const { t } = useI18n();

const schema = yup.object({
  email: yup
    .string()
    .required(t("validation.required"))
    .email(t("validation.email")),
});
const { defineField, handleSubmit, errors } = useForm({
  validationSchema: schema,
});

const [email] = defineField("email");

const onSubmit = handleSubmit((values) => {
  console.log("Subscribed with", values);
});
</script>
<style scoped></style>
