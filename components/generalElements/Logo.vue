<template>
  <NuxtLink to="/">
    <div
      class="flex items-center gap-2 text-lg font-bold">
      <img
        :src="logo"
        alt="Logo"
        width="32"
        height="32" />
      <span>{{ siteName }}</span>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
const { siteName } = useAppConfig();
const logo = '/logo.svg';
</script>
