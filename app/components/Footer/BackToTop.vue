<script lang="ts" setup>
const { scrollTo } = useLenis();
const backToTop = (e: MouseEvent) => {
  e.preventDefault();
  scrollTo(0, {
    duration: 1.5,
    easing: (t: number) => 1 - Math.pow(1 - t, 5),
  });
};
</script>
<template>
  <button
    type="button"
    class="cursor-pointer inline-flex gap-2 items-center justify-center sm:px-4 border border-border/40 rounded-full leading-none bg-sidebar w-8.5 sm:w-fit text-primary text-sm font-medium h-8.5 transition-all duration-300 hover:bg-secondary/0.5 outline-none focus-visible:ring-2 focus-visible:ring-secondary/20 focus-visible:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:scale-95 hover:scale-105 will-change-transform"
    @click="backToTop"
  >
    <span class="hidden sm:inline-block">Back to top</span>
    <Icon name="ph:arrow-up-bold" class="size-3.5" />
  </button>
</template>
