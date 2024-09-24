<template>
  <section
    class="pt-16 pb-8 lg:py-28 bg-[url('../assets/img/footer-pattern.jpg')]"
    id="get-in-touch"
  >
    <div class="container flex flex-col xl:max-w-6xl mx-auto px-4">
      <ig-h2-component class="text-center text-white">{{
        $t(getIntouchTitle)
      }}</ig-h2-component>
      <form
        @submit="onSubmit"
        class="overflow-hidden py-12 lg:pb-28 flex flex-nowrap flex-col justify-center items-stretch"
      >
        <FloatLabel>
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
            id="fullName"
            v-model="fullName"
            aria-describedby="fullName-help"
            :class="{ 'p-invalid': errors.fullName }"
          />

          <small id="fullName-help" class="p-error">
            {{ errors.fullName }}
          </small>
          <label class="text-xl" for="fullName">{{
            $t("formFields.fullname")
          }}</label>
        </FloatLabel>
        <FloatLabel>
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
          />
          <small id="email-help" class="p-error">{{ errors.email }}</small>
          <label class="text-xl" for="email">Email</label>
        </FloatLabel>
        <FloatLabel>
          <Textarea
            id="message"
            v-model="message"
            autoResize
            rows="1"
            cols="8"
          />
          <label class="text-xl" for="message">{{
            $t("formFields.message")
          }}</label>
        </FloatLabel>
        <Button
          class="w-6/12 !py-4 !rounded-2xl"
          :label="$t('client.send')"
          type="submit"
        />
      </form>
    </div>
  </section>
</template>
<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
import { useI18n } from "vue-i18n";
import FloatLabel from "primevue/floatlabel";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import IgH2Component from "@/components/ui/IgH2Component.vue";
import { menuLinks } from "@/data/menuLinks";

const { t } = useI18n();

const schema = yup.object({
  email: yup
    .string()
    .required(t("validation.required"))
    .email(t("validation.email")),
  fullName: yup
    .string()
    .min(2, t("validation.min", { length: 2 }))
    .required(t("validation.required")),
  message: yup.string(),
});
const { defineField, handleSubmit, errors } = useForm({
  validationSchema: schema,
});

const [fullName] = defineField("fullName");
const [email] = defineField("email");
const [message] = defineField("message");

const onSubmit = handleSubmit((values) => {
  console.log("Submitted with", values);
});

const getIntouchTitle = menuLinks.find((link) => link.id === 4).title;
</script>
<style scoped>
.p-error {
  color: #f87171;
}
</style>
