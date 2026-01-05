<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: "Title",
    required: true,
  },
  description: {
    type: String,
    default: "Description",
    required: true,
  },
  icon: {
    type: String,
    default: "solar:square-academic-cap-linear",
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col gap-1">
      <div
        class="flex flex-row items-center gap-2 text-dark-contrast-6 dark:text-light-1 text-xl font-medium"
      >
        <Icon :name="icon" size="20" />
        {{title}}
      </div>
      <p
        class="text-base font-normal text-dark-contrast-3 dark:text-light-5"
      >
        {{description}}
      </p>
    </div>
</template>