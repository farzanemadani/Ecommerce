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
      ref="wrapper"
      @click="focus">
      <template v-if="$slots.preIcon">
        <slot name="preIcon"></slot>
      </template>
      <input
        @input="$emit('validate')"
        :maxlength="maxlength"
        v-model="model"
        class="focus:outline-0"
        :class="['w-full', textAlign]"
        :id="name"
        :placeholder="placeholder"
        :autocomplete="
          autocomplete ? 'on' : 'off'
        "
        ref="input"
        :type="type" />
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
const model = defineModel();
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
  height,
  maxlength,
} = defineProps({
  name: { type: String, default: '' },
  inputClass: { type: String, default: '' },
  type: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  autocomplete: { type: Boolean, default: false },
  required: { type: Boolean, default: false },
  fontSize: { type: String, default: '' },
  dir: { type: String, default: '' },
  labelClass: { type: String, default: '' },
  errorMessage: { type: String, default: '' },
  height: { type: String, default: '' },
  maxlength: { type: String, default: '' },
});

const emit = defineEmits(['validate']);
const input = ref<HTMLInputElement | null>(null);
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
    ? 'ltr'
    : 'rtl';
});

const wrapper = ref<HTMLElement | null>(null);

const focus = () => {
  wrapper.value?.classList.add(
    'border-solid',
    'border-2',
    'border-primary',
  );
  input.value?.focus();
};
const handleClickOutside = (event: MouseEvent) => {
  if (wrapper.value && !wrapper.value.contains(event.target as Node)) {
    wrapper.value.classList.remove(
      'border-solid',
      'border-2',
      'border-primary',
    );
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

defineExpose({ focus });
</script>
<style scoped>
.ltr {
  direction: ltr;
}
.rtl {
  direction: rtl;
}
</style>
