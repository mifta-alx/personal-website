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
      class="relative flex h-10 w-24 active:scale-95 cursor-pointer items-center rounded-full bg-secondary/10 p-1 transition-all duration-300 ease-in-out outline-none focus-visible:ring-2 focus-visible:ring-secondary/30 [&_svg]:pointer-events-none [&_svg]:shrink-0"
      aria-label="Toggle Color Mode"
    >
      <div
        class="absolute z-20 h-8 transform rounded-full w-10 bg-background shadow-sm transition-transform duration-300 ease-in-out flex items-center justify-center"
        :class="isDark ? 'translate-x-12' : 'translate-x-0'"
      />

      <div class="flex gap-2 absolute z-30">
        <div class="flex items-center justify-center w-10">
          <Icon
            :name="!isDark ? 'ph:sun-fill' : 'ph:sun'"
            :class="
              cn('size-4', !isDark ? 'text-primary' : 'text-secondary/50')
            "
          />
        </div>
        <div class="flex items-center justify-center w-10">
          <Icon
            :name="isDark ? 'ph:moon-fill' : 'ph:moon'"
            :class="cn('size-4', isDark ? 'text-primary' : 'text-secondary/50')"
          />
        </div>
      </div>
    </button>
  </ClientOnly>
</template>
