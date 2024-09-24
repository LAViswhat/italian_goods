<template>
  <FloatLabel class="!mb-8">
    <InputText
      :id="field.id"
      v-model="modelValue"
      :aria-describedby="`${field.id}-help`"
      :class="{ 'p-invalid': errorMessage }"
      :pt="{
        root: {
          class: [
            'relative',
            '!border-iggrey !border-b-4 !border-t-0 !border-r-0 !border-l-0',
            '!bg-transparent',
            '!rounded-none',
            'w-full',
            'h-12',
            '!text-xl',
          ],
        },
      }"
    />

    <small :id="`${field.id}-help`" class="p-error">
      {{ errorMessage }}
    </small>
    <label class="!text-iggrey" :for="field.id">{{ $t(field.label) }}</label>
  </FloatLabel>
</template>
<script setup>
import { useField } from "vee-validate";
import FloatLabel from "primevue/floatlabel";
import InputText from "primevue/inputtext";

const props = defineProps({
  field: {
    type: Object,
    required: true,
  },
});

const { value: modelValue, errorMessage } = useField(props.field.name);
</script>
<style scoped>
.p-floatlabel:has(input:focus) label,
:has(input.p-filled) label {
  top: -0.15rem;
}
input:-webkit-autofill,
input:-webkit-autofill:focus {
  box-shadow: 0 0 0 1000px white inset;
  -webkit-text-fill-color: #333;
}
.p-error {
  color: #f87171;
}
</style>
