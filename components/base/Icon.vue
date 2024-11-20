<template>
  <MdiIcon
    :icon="icon"
    preserveAspectRatio="xMidYMid meet" />
</template>

<script setup lang="ts">
interface Props {
  icon: string;
}
const { icon } = defineProps<Props>();
</script>
