<script lang="ts" setup>
import type { ProjectItem } from "~/types/project";

defineProps<{
  project: ProjectItem;
}>();
</script>

<template>
  <NuxtLink
    :to="`/project/${project.slug}`"
    class="group relative flex flex-col items-start justify-center gap-5 lg:gap-6"
  >
    <div class="rounded-2xl w-full aspect-9/8 sm:aspect-5/3 overflow-hidden border border-secondary/10">
      <NuxtImg
        :src="`/images/${project.slug}/${project.cover}`"
        :alt="project.title"
        placeholder
        class="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
        format="webp"
        loading="lazy"
      />
    </div>

    <div class="flex flex-col gap-1.5 sm:w-1/2">
      <p class="text-base font-medium text-primary tracking-tight">
        {{ project.name }}
      </p>
      <p class="text-base font-normal text-secondary">
        {{ project.idea }}
      </p>
    </div>
  </NuxtLink>
</template>
