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
    class="group flex w-fit lg:w-full lg:h-10 items-center gap-2.5 shrink-0 overflow-hidden hover:scale-[1.04] rounded-full lg:rounded-lg p-1.5 lg:px-3 text-left text-sm text-nowrap transition-all duration-300 ease-in-out hover:bg-gray-light-contrast-2 text-gray-dark-2 hover:text-gray-dark-6 dark:hover:bg-gray-dark-5 dark:text-gray-light-6 dark:hover:text-gray-light-1"
    active-class="bg-gray-light-contrast-2 text-gray-dark-6 dark:bg-gray-dark-5 dark:!text-gray-light-1 !scale-100"
  >
    <Icon :name="icon" class="size-5 lg:size-4" />
    <div class="hidden lg:inline-block">
      <slot />
    </div>
  </NuxtLink>
</template>
