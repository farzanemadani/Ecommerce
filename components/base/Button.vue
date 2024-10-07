<template>
  <button
    :class="buttonClasses"
    @click.stop="emitClickEvent"
    @mouseover="mouseoverEvent"
    @mouseleave="mouseleaveEvent">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits([
  'submit',
  'click',
  'mouseover',
  'mouseleave',
]);

const { className, disabled } = defineProps({
  className: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const buttonClasses = computed<string>(() => {
  const classes = ['', className];
  if (disabled) {
    classes.push('');
  }
  return classes.filter(Boolean).join(' ');
});

const emitClickEvent = () => {
  emit('click');
  emit('submit');
};
const mouseoverEvent = () => {
  emit('mouseover');
};

const mouseleaveEvent = () => {
  emit('mouseleave');
};
</script>
