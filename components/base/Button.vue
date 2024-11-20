<template>
  <button
    :class="buttonClasses"
    @click.stop="emitClickEvent"
    @mouseover="mouseoverEvent"
    @mouseleave="mouseleaveEvent">
    <spinner v-if="loading" className="h-4 w-4 border-2 m-auto" />
    <slot v-else></slot>
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
  loading:{
    type:Boolean,
    default: false,
  }
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
