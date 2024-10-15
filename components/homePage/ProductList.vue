<template>
  <div class="container my-16">
    <div
      class="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-6">
      <ProductItem
        v-for="(product, index) in products"
        :key="index"
        :product="product"
        class="w-full" />
    </div>
  </div>
</template>
<script setup lang="ts">
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
const { data: results } = await useFetch<
  Product[]
>('https://fakestoreapi.com/products');
const products = computed(() => {
  return (
    results.value?.filter(
      (el) => el.category === "women's clothing",
    ) || []
  );
});
</script>
