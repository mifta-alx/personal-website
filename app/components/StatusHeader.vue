<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "Frontend Developer",
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="md:hidden flex flex-row gap-2 justify-between items-center">
    <div class="capitalize flex flex-row items-center gap-2 shrink-0">
      <div class="rounded-full size-1.5 bg-dark-1 dark:bg-dark-2" />
      <p class="text-sm text-dark-4 dark:text-dark-contrast-1 font-medium">
        {{ title }}
      </p>
    </div>
    <div
      :class="[
        'uppercase flex flex-row items-center gap-1 rounded-full px-2 py-0.5 shrink-0 transition-colors duration-300',
        isAvailable
          ? 'bg-green-200/50 dark:bg-green-900/40'
          : 'bg-light-5/50 dark:bg-light-6/40',
      ]"
    >
      <div
        :class="[
          'rounded-full size-1.5',
          isAvailable
            ? 'bg-green-600 dark:bg-green-500'
            : 'bg-light-6 dark:bg-light-3',
        ]"
      />

      <p
        :class="[
          'text-[10px] font-medium tracking-wide',
          isAvailable
            ? 'text-green-600 dark:text-green-500'
            : 'text-light-contrast-6 dark:text-light-3',
        ]"
      >
        {{ isAvailable ? 'available for work' : 'currently occupied' }}
      </p>
    </div>
  </div>
</template>
