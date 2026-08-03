<script lang="ts" setup>
import type { ProjectItem } from "~/types/project";

defineProps<{
  project: ProjectItem;
}>();
const projectStore = useProjectStore();
</script>

<template>
  <div
    class="group/card flex flex-col items-start justify-center gap-5 lg:gap-6"
  >
    <NuxtLink
      :to="`/project/${project.slug}`"
      class="relative rounded-2xl w-full aspect-9/8 sm:aspect-5/3 overflow-hidden border border-secondary/10 outline-none focus-visible:ring-2 focus-visible:ring-secondary/10 focus-visible:ring-offset-2 transition-all duration-300"
    >
      <NuxtImg
        :src="`/images/${project.slug}/${project.cover}`"
        :alt="project.title"
        placeholder
        class="h-full w-full object-cover"
        quality="80"
        format="webp"
        loading="lazy"
      />
      <div
        class="absolute bottom-4 left-5 z-10 hidden sm:block"
        @click.prevent.stop
      >
        <LikeButton
          :likes="project.likes"
          :liked="projectStore.isProjectLiked(project.slug)"
          :theme="project.coverTheme"
          @toggle="projectStore.toggleLike(project.slug)"
        />
      </div>
    </NuxtLink>

    <div class="flex items-start w-full">
      <div class="flex flex-col gap-1.5 sm:w-1/2">
        <div class="flex flex-row gap-3">
          <p class="text-base font-medium text-primary tracking-tight">
            {{ project.name }}
          </p>
          <div @click.prevent.stop class="sm:hidden">
            <LikeButton
              :likes="project.likes"
              :liked="projectStore.isProjectLiked(project.slug)"
              @toggle="projectStore.toggleLike(project.slug)"
            />
          </div>
        </div>
        <p class="text-base font-normal text-secondary">
          {{ project.idea }}
        </p>
      </div>
    </div>
  </div>
</template>
