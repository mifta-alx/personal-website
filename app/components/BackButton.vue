<script lang="ts" setup>
const router = useRouter();

const handleGoBack = () => {
  router.back();
};
</script>

<template>
  <button
    @click="handleGoBack"
    class="group relative flex items-center h-8 w-8 hover:w-18 hover:bg-light-2 dark:hover:bg-dark-5 border border-light-5 dark:border-dark-contrast-3 rounded-full p-2 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden"
  >
    <div
      class="flex items-center justify-center text-light-6 group-hover:text-dark-contrast-3 dark:text-dark-2 dark:group-hover:text-light-1 transition-all duration-300 ease-in-out"
    >
      <Icon name="solar:arrow-left-linear" size="14" />
    </div>

    <span
      class="ml-2 text-xs text-dark-3 dark:text-light-1 whitespace-nowrap opacity-0 translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out"
    >
      Back
    </span>
  </button>
</template>
