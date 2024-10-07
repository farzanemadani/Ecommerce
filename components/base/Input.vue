<template>
  <div :class="height">
    <template v-if="$slots.label">
      <label :for="name" :class="labelWrapper">
        <slot name="label"></slot>
        <span
          v-if="required"
          class="px-1 text-red"
          >*</span
        >
        <br />
      </label>
    </template>
    <div
      :class="[
        inputWrapper,
        { 'border-red': hasError },
      ]"
      class="flex"
      ref="wrapper">
      <template v-if="$slots.preIcon">
        <slot name="preIcon"></slot>
      </template>
      <input
        :maxlength="maxlength"
        :value="modelValue"
        @input="update($event)"
        class="focus:outline-0"
        :class="['w-full', textAlign]"
        :id="name"
        :placeholder="placeholder"
        :autocomplete="
          autocomplete ? 'on' : 'off'
        "
        :type="type"
        @focus="addFocusClass"
        @blur="removeFocusClass" />
      <template v-if="$slots.postIcon">
        <slot name="postIcon"></slot>
      </template>
    </div>
    <div
      v-if="errorMessage"
      class="py-1 text-xs text-red">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  name,
  type,
  placeholder,
  autocomplete,
  required,
  inputClass,
  fontSize,
  dir,
  labelClass,
  errorMessage,
  modelValue,
  height,
  maxlength,
} = defineProps({
  name: { type: String },
  inputClass: { type: String },
  type: { type: String },
  placeholder: { type: String },
  autocomplete: { type: Boolean },
  required: { type: Boolean },
  fontSize: { type: String },
  dir: { type: String },
  labelClass: { type: String },
  modelValue: {
    type: [Number, String],
    default: '',
  },
  errorMessage: { type: String },
  height: { type: String },
  maxlength: { type: String },
});

const hasError = computed<boolean>(() => {
  return errorMessage ? true : false;
});

const labelWrapper = computed<string>(() => {
  const direction =
    dir === 'ltr' ? 'flex-row-reverse' : null;
  return `flex ${labelClass} ${fontSize} ${direction}`;
});

const inputWrapper = computed<string>(() => {
  const direction =
    dir === 'ltr' ? 'flex-row-reverse' : '';
  return `${inputClass} ${fontSize} ${direction}`;
});

const textAlign = computed<string>(() => {
  return dir === 'ltr'
    ? 'text-left'
    : 'text-right';
});

const emit = defineEmits(['update:modelValue']);
const update = (event: Event) => {
  const newValue = (
    event.target as HTMLInputElement
  ).value;
  emit('update:modelValue', newValue);
};

const wrapper = ref<HTMLElement | null>(null);

const addFocusClass = () => {
  wrapper.value?.classList.add(
    'border-solid',
    'border-2',
    'border-primary',
  );
};

const removeFocusClass = () => {
  wrapper.value?.classList.remove(
    'border-solid',
    'border-2',
    'border-primary',
  );
};
</script>
