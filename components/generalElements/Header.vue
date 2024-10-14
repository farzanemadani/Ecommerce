<template>
  <header
    class="shadow-light-500 sticky top-0 z-40 bg-white shadow-sm">
    <div
      class="container flex items-center justify-between py-4">
      <div class="flex items-center">
        <Icon
          @click="emit('toggleMenu')"
          class="ml-2 lg:hidden"
          icon="mdiMenu" />
        <Logo />
        <MainMenu
          class="text-gray-500 hidden items-center gap-6 text-sm lg:flex lg:px-4" />
      </div>
      <div class="flex gap-3">
        <SignInLink />
        <CartLink/>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
const emit = defineEmits(['toggleMenu']);
</script>
