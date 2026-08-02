<script setup lang="ts">
defineProps<{
  url: string;
  target: string;
  icon: string;
}>();
</script>
<template>
  <NuxtLink
    :href="url"
    :target="target"
    class="shrink-0 rounded-full bg-sidebar size-8 flex items-center justify-center text-primary/50 border border-border/50 hover:scale-110 transition-all duration-300 hover:text-primary active:scale-95"
  >
    <Icon :name="icon" class="size-4.5" />
  </NuxtLink>
</template>
