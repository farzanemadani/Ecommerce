<template>
  <div
    v-if="visible"
    :class="toastClass"
    class="ltr fixed bottom-4 left-4 rounded p-4 text-left text-xs shadow-lg">
    {{ message }}
  </div>
</template>

<script setup>
const { type, message, duration } = defineProps({
  type: String,
  message: String,
  duration: Number,
});

const visible = ref(false);

const toastClass = computed(() => {
  switch (type) {
    case 'success':
      return 'bg-green-900 text-white';
    case 'error':
      return 'bg-red-900 text-white';
    case 'warning':
      return 'bg-yellow-900 text-black';
    default:
      return 'bg-blue-900 text-white';
  }
});

onMounted(() => {
  visible.value = true;
  setTimeout(() => {
    visible.value = false;
  }, duration);
});
</script>
