<script setup lang="ts">
const colorMode = useColorMode();

const toggleMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
</script>

<template>
  <ClientOnly>
    <button
      @click="toggleMode"
      class="md:hidden cursor-pointer flex w-fit items-center justify-center p-1.5 rounded-full active:bg-light-contrast-2 hover:bg-light-contrast-2 dark:active:bg-dark-5 dark:hover:bg-dark-5 transition-all duration-300 ease-in"
      aria-label="Toggle Color Mode"
    >
      <Icon
        name="solar:sun-linear"
        v-if="colorMode.value === 'dark'"
        class="size-5"
      />
      <Icon name="solar:moon-linear" v-else class="size-5" />
    </button>
  </ClientOnly>
</template>
