<script setup lang="ts">
defineProps<{
  url?: string;
  icon: string;
  label: string;
}>();
</script>

<template>
  <a
    :href="url"
    target="_blank"
    rel="noreferrer"
    class="group relative flex flex-col items-center justify-center p-5 gap-3 bg-background hover:bg-secondary/3 focus-visible:bg-secondary/3 transition-colors duration-200 cursor-pointer text-center border-b border-r border-border/60 -mb-px -mr-px outline-none"
  >
    <div
      class="size-14 rounded-xl bg-background border border-border/60 flex items-center justify-center"
    >
      <Icon :name="icon" class="size-6 text-primary" />
    </div>

    <span
      class="text-sm font-normal text-secondary/90 group-hover:text-primary transition-colors duration-300"
    >
      {{ label }}
    </span>
  </a>
</template>