<script lang="ts" setup>
const props = defineProps<{
  src: string;
  alt: string;
}>();
</script>
<template>
  <div class="relative w-fit">
    <NuxtImg
      class="size-12 shrink-0 rounded-full"
      :src="src"
      :alt="alt"
      :preload="{ fetchPriority: 'high' }"
      format="webp"
    />
    <div class="size-3 rounded-full absolute right-0 bottom-0 bg-emerald-500 border-2 border-background"/>
  </div>
</template>
