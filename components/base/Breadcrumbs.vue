<template>
  <ul class="flex py-6 px-4">
    <li
        class="text-xs"
      v-for="(item, index) in items"
      :key="index">
      <NuxtLink
        v-if="index !== items.length - 1"
        :to="item.url"
        class="hover:text-primary"
        >{{ item.name }}</NuxtLink
      >
      <span v-else>{{ item.name }}</span>
      <span v-if="index < items.length - 1">
        /
      </span>
    </li>
  </ul>
</template>
<script setup lang="ts">
interface Breadcrumbs {
  name: string;
  url: string;
}
const { items, className } = defineProps<{
  items: Breadcrumbs[];
}>();
</script>
