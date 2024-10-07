<template>
  <div
    class="fixed bottom-0 right-0 top-0 z-50 flex w-full max-w-lg flex-col overflow-x-hidden bg-white shadow-lg">
    <Icon
      icon="mdiClose"
      @click="emit('closeMenu')" />
    <MainMenu class="m-4 grid gap-6 p-4" />
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['closeMenu']);
</script>
