<template>
  <form
    :class="className"
    @submit.prevent="handleSubmit"
    @keydown.enter="handleSubmit">
    <slot></slot>
  </form>
</template>
<script setup lang="ts">
const { className } = defineProps({
  className: { type: String },
});
const emit = defineEmits(['submit']);
const handleSubmit = (event: Event) => {
  event.preventDefault();
  emit('submit');
};
</script>
