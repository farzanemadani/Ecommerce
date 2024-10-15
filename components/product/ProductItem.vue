<template>
  <NuxtLink :to="`/product/${product.id}`"
    class="flex h-fit flex-col rounded border border-gray-200 bg-white p-3">
    <div class="h-[220px]">
      <NuxtImg
        class="block h-full w-full"
        :src="product.image"
        :alt="product.title"
        :width="imgWidth"
        :height="imgHeight" />
    </div>
    <span class="block py-2 text-left text-xs h-[48px]">
      {{ product.title }}
    </span>
  </NuxtLink>
</template>
<script setup lang="ts">
interface product {
  category?: string;
  description?: string;
  id?: number;
  image?: string;
  price?: number;
  rating?: object;
  title?: string;
}
const { product } = defineProps<{
  product: product;
}>();
const imgWidth = 220;
const imgHeight = Math.round(imgWidth * 1.125);
</script>
