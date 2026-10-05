<script setup lang="ts">
const { scrollTo } = useLenis();

const handleExplore = (e: MouseEvent) => {
  e.preventDefault();
  scrollTo("#projects");
};
</script>
<template>
  <NuxtLink
    class="inline-flex items-center justify-center px-4.5 rounded-full leading-none bg-secondary/7 w-fit text-primary text-base font-medium h-10 transition-all duration-300 hover:bg-secondary/10 outline-none focus-visible:ring-2 focus-visible:ring-secondary/20 focus-visible:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:scale-95"
    href="#projects"
    @click="handleExplore"
    >Explore
  </NuxtLink>
</template>
