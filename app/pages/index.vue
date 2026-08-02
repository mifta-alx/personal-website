<script setup lang="ts">
const { url } = useSiteConfig();
const route = useRoute();
definePageMeta({
  layout: "main-layout",
});
useSeoMeta({
  title: "Miftakhussurur Al Maliki | Frontend Developer",
  description:
    "Mifta is a Frontend Developer focused on building solid, intuitive web applications. Precision in code, curiosity in life.",
  ogTitle: "Miftakhussurur Al Maliki | Frontend Developer",
  ogDescription:
    "Building solid, intuitive web applications. Frontend Developer based in Malang, Indonesia.",
  ogType: "website",
  ogUrl: `${url}${route.path}`,
});
</script>

<template>
  <HeroSection />
  <ProjectSection />
</template>
