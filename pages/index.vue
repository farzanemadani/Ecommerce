<template>
  <HeroBanner />
  <ProductList />
</template>
<script setup lang="ts">
const {
  siteName,
  description,
  shortDescription,
  siteImage,
} = useAppConfig();
useSeoMeta({
  title: `صفحه اصلی`,
  ogTitle: siteName,
  description: description,
  ogDescription: shortDescription,
  ogImage: siteImage,
});
</script>
