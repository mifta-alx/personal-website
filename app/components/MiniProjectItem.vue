<script lang="ts" setup>
import type { PropType } from "vue";
import type { Project } from "~/types/project";

const props = defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
});
</script>

<template>
  <NuxtLink
    class="group flex flex-col gap-2 rounded-lg bg-light-2 dark:bg-dark-5"
    :to="`/project/${project.slug}`"
  >
    <div class="h-52 md:h-40 overflow-clip rounded-t-lg">
      <NuxtImg
        :src="`/images/${project.slug}/${project.cover}`"
        :alt="project.title"
        class="group-hover:scale-105 duration-300 ease-in-out transition-all h-full w-full object-cover"
      />
    </div>
    <div class="px-4 py-3 flex flex-col gap-1">
      <div class="flex justify-between items-start">
        <div
          class="flex flex-row items-center gap-1 rounded-full px-2.5 py-0.5 shrink-0 bg-light-3 dark:bg-dark-4 w-fit"
        >
          <p class="text-[10px] text-dark-3 dark:text-light-1">
            {{ project.type }}
          </p>
        </div>
        <div
          class="text-dark-2 dark:text-light-1 rounded-full border border-light-5 dark:border-dark-contrast-4 size-7 flex justify-center items-center"
        >
          <Icon name="solar:arrow-up-linear" class="rotate-45 size-4" />
        </div>
      </div>
      <p class="font-semibold text-lg text-dark-4 dark:text-light-1">
        {{ project.name }}
      </p>
      <p class="text-sm line-clamp-3 text-dark-2 dark:text-dark-1">
        {{ project.description }}
      </p>
    </div>
  </NuxtLink>
</template>
