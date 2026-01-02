<script setup lang="ts">
const colorMode = useColorMode();

const toggleMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>

<template>
  <button
    @click="toggleMode"
    class="flex w-fit items-center justify-center p-1.5 rounded-full active:bg-gray-light-contrast-2 hover:bg-gray-light-contrast-2 dark:active:bg-gray-dark-5 dark:hover:bg-gray-dark-5 transition-all duration-300 ease-in"
    aria-label="Toggle Color Mode"
  >
    <Icon name="solar:sun-linear" v-if="colorMode.value === 'dark'" class="size-5" />
    <Icon name="solar:moon-stars-linear" v-else class="size-5" />
  </button>
</template>