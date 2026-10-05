<script setup lang="ts">
defineProps<{
  class?: string;
}>();
</script>
<template>
  <div :class="cn('relative flex flex-col gap-3', $props.class)">
    <slot />
  </div>
</template>
