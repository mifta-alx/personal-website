<script setup lang="ts">
definePageMeta({
  layout: "landing-page",
});
useSeoMeta({
  title: "About | Miftakhussurur Al Maliki",
  ogTitle: "About | Miftakhussurur Al Maliki",
  description: "About Miftakhussurur Al Maliki.",
  ogDescription: "About Miftakhussurur Al Maliki.",
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <div
        class="flex flex-row items-center gap-2 text-dark-contrast-6 dark:text-light-1 text-xl font-medium"
      >
        <Icon name="solar:square-academic-cap-linear" size="20" />
        Education
      </div>
      <p class="text-base font-normal text-light-5 mt-1">Education background</p>
    </div>
    <div
      class="rounded-lg bg-light-contrast-1 dark:bg-dark-5 flex p-4 gap-5 shadow-dark items-center"
    >
      <NuxtImg
        src="/images/itn-logo-origin.webp"
        alt="Itn Logo Origin"
        class="size-14 md:size-16"
      />
      <div class="">
        <p class="text-base font-medium">Institut Teknologi Nasional Malang</p>
        <p class="text-sm font-normal text-light-5 mt-1">
          Bachelor of Computer Science
        </p>
        <div class="flex gap-2 items-center mt-1">
          <p class="text-xs font-normal text-dark-1">2021 - 2025</p>
          <div class="rounded-full size-1 bg-dark-1 dark:bg-dark-2" />
          <p class="text-xs font-normal text-light-5">Malang, Indonesia</p>
        </div>
      </div>
    </div>
  </div>
</template>
