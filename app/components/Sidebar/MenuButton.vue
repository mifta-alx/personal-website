<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    default: "#",
    required: true,
  },
  icon: {
    type: String,
    default: "solar:home-2-linear",
  },
});
</script>

<template>
  <NuxtLink
    :to="href"
    class="group flex w-fit md:w-full md:h-10 items-center gap-2.5 shrink-0 overflow-hidden hover:scale-[1.04] rounded-full md:rounded-lg p-1.5 md:px-3 text-left text-sm text-nowrap transition-all duration-300 ease-in-out hover:bg-light-contrast-2 text-dark-2 hover:text-dark-6 dark:hover:bg-dark-5 dark:text-light-6 dark:hover:text-light-1"
    active-class="bg-light-contrast-2 text-dark-6 dark:bg-dark-5 dark:!text-light-1 !scale-100"
  >
    <Icon :name="icon" class="size-5 md:size-4" />
    <div class="hidden md:inline-block">
      <slot />
    </div>
  </NuxtLink>
</template>
