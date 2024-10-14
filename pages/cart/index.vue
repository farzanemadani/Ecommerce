<template>
  <div class="container">
    <Breadcrumbs
      :items="items" />
  </div>
</template>
<script setup>
useSeoMeta({
  title: `سبدخرید`,
});

const items = [
  { name: 'صفحه اصلی', url: '/' },
  { name: 'سبدخرید', url: '/cart' },
];
</script>
