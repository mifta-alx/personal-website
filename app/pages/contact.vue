<script setup lang="ts">
const { url } = useSiteConfig();
const route = useRoute();
definePageMeta({
  layout: "main-layout",
});

useSeoMeta({
  title: "Contact | Miftakhussurur Al Maliki",
  description:
    "Interested in collaborating? Reach out to me for frontend development opportunities. Let's build your next high-performance web project.",
  ogTitle: "Contact | Miftakhussurur Al Maliki",
  ogDescription:
    "Let's build something amazing together. Reach out for development inquiries.",
  ogType: "website",
  ogUrl: `${url}${route.path}`,
});

const contactStore = useContactStore();
const { getInfo } = contactStore;
</script>

<template>
  <div class="flex flex-col gap-10 lg:gap-15 py-10">
    <div class="space-y-2">
      <h1 class="text-base font-normal uppercase font-mono text-primary">
        {{ getInfo.title }}
      </h1>
      <p class="text-base font-normal text-secondary">
        {{ getInfo.description }}
      </p>
    </div>
    <ContactForm />
  </div>
</template>
