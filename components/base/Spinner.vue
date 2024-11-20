<template>
  <div
    :class="className"
    class="animate-spin rounded-full border-solid border-t-transparent"></div>
</template>
<script setup lang="ts">
interface Props {
  className: string;
}
const { className } = defineProps<Props>();
</script>
