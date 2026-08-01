<script setup lang="ts">
const props = defineProps<{
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
    class="group relative flex flex-col items-center justify-center p-5 gap-3 bg-transparent hover:bg-secondary/3 transition-colors duration-300 cursor-pointer text-center border-b border-secondary/10 border-r nth-[2n]:border-r-0 lg:nth-[2n]:border-r lg:nth-[4n]:border-r-0 outline-none focus-visible:bg-secondary/3"
  >
    <div
      class="size-14 rounded-xl bg-background border border-secondary/10 flex items-center justify-center"
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
