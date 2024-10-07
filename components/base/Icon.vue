<template>
  <MdiIcon
    :icon="props.icon"
    preserveAspectRatio="xMidYMid meet" />
</template>

<script setup lang="ts">
interface Props {
  icon: string;
}
const props = defineProps<Props>();
</script>
