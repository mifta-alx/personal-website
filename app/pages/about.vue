<script setup lang="ts">
definePageMeta({
  layout: "main-layout",
});
useSeoMeta({
  title: "About | Miftakhussurur Al Maliki",
  description:
    "I'm Mifta, a 23-year-old Frontend Developer. Driven by curiosity and a detail-oriented mindset to craft intuitive web experiences.",
  ogTitle: "About | Miftakhussurur Al Maliki",
  ogDescription:
    "Learn more about my journey as a Frontend Developer, focusing on precision in code and curiosity in life.",
  ogType: "profile",
  ogUrl: "https://withalx.com/about",
});
</script>

<template>
  <div class="flex flex-col max-w-3xl w-full">
    <AboutSection />
    <ExperienceSection />
    <EducationSection />
    <InvolvementSection />
  </div>
</template>
