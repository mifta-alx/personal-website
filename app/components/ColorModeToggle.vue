<script setup lang="ts">
const colorMode = useColorMode();

const toggleMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};

const isDark = computed(() => colorMode.value === "dark");
</script>

<template>
  <ClientOnly>
    <button
      @click="toggleMode"
      class="relative flex h-8 w-28 cursor-pointer items-center rounded-full bg-light-contrast-2 p-1 transition-colors duration-300 ease-in-out dark:bg-dark-6"
      aria-label="Toggle Color Mode"
    >
      <div
        class="absolute z-20 h-6 transform rounded-full w-12 bg-white dark:bg-dark-1 shadow-md transition-transform duration-300 ease-in-out flex items-center justify-center"
        :class="isDark ? 'translate-x-14' : 'translate-x-0'"
      >
        <Icon
          v-if="isDark"
          name="solar:moon-linear"
          class="size-4 text-light-1"
        />
        <Icon v-else name="solar:sun-linear" class="size-4 text-dark-5" />
      </div>

      <div class="flex w-full justify-between">
        <div class="flex items-center justify-center w-12">
          <Icon name="solar:sun-linear" class="size-4 text-light-6" />
        </div>
        <div class="flex items-center justify-center w-12">
          <Icon name="solar:moon-linear" class="size-4 text-dark-1" />
        </div>
      </div>
    </button>
  </ClientOnly>
</template>
