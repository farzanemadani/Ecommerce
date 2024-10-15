<template>
  <div class="container">
    <Breadcrumbs :items="items" />
    <div class="grid grid-cols-2">
      <div>
        <NuxtImg :src="data?.image" />
      </div>
      <div>
        <p>{{ data?.description }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Product {
  category?: string;
  description?: string;
  id?: number;
  image?: string;
  price?: number;
  rating?: object;
  title?: string;
}
const { id } = useRoute().params;
const { data, error } = await useFetch<Product>(
  `https://fakestoreapi.com/products/${id}`,
);
const items = [
  { name: 'صفحه اصلی', url: '/' },
  { name: 'محصولات', url: '/products' },
  {
    name: data.value?.title,
    url: `/${data.value?.id}`,
  },
];
//console.log('product', data.value);
if (error.value) {
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.statusMessage,
  });
}
</script>
