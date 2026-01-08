<script lang="ts" setup>
import type { PropType } from 'vue';
import { frameworkType } from '~/data/project';
import type { Project } from '~/types/project';

const props = defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
});
</script>

<template>
  <NuxtLink
    :to="`/project/${project.slug}`"
    class="group relative flex bg-light-2 dark:bg-dark-5 h-52 md:h-[calc(100svh/1.8)] rounded-lg items-center justify-center"
  >
    <div
      class="group-hover:scale-[1.02] transition-transform duration-500 h-auto w-64 md:w-[calc(100svw/2.2)]"
    >
      <NuxtImg
        :src="`/images/${project.slug}/${project.cover}`"
        :alt="project.title"
        class="rounded-lg"
        format="webp"
        loading="lazy"
      />
    </div>
    <div
      class="absolute bottom-4 left-4 flex items-center gap-1.5 bg-light-1 rounded-full ps-1 py-2 pe-3 h-7 shadow-light"
    >
      <div class="rounded-full size-4.5">
        <Icon :name="frameworkType[project.framework]" class="size-4.5" />
      </div>
      <span class="text-dark-6 font-medium text-xs">{{ project.name }}</span>
    </div>
  </NuxtLink>
</template>
