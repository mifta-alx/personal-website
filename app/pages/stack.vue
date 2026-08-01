<script lang="ts" setup>
definePageMeta({
  layout: "main-layout",
});

useSeoMeta({
  title: "Tech Stack & Tools | Miftakhussurur Al Maliki",
  description:
    "The tools and technologies I use daily to build high-performance web applications, including Nuxt, Next.js, Supabase, and PostgreSQL.",
  ogTitle: "Tech Stack | Miftakhussurur Al Maliki",
  ogDescription:
    "Modern web technologies I specialize in for building robust digital products.",
  ogType: "website",
  ogUrl: "https://withalx.com/stack",
});

const stackStore = useStackStore();
const { getInfo, getStacks } = stackStore;
</script>
<template>
  <div class="flex flex-col gap-10 lg:gap-15 max-w-3xl w-full py-10">
    <div class="space-y-2">
      <h1 class="text-base font-normal uppercase font-mono text-primary">
        {{ getInfo.title }}
      </h1>
      <p class="text-base font-normal text-secondary">
        {{ getInfo.description }}
      </p>
    </div>
    <StackGrid :items="getStacks" />
  </div>
</template>
