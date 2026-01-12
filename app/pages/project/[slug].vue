<script setup lang="ts">
import { frameworkType, projects } from "~/data/project";

definePageMeta({
  layout: "landing-page",
});
const route = useRoute();
const slug = route.params.slug;

const project = projects?.find((p) => p.slug === slug);

if (!project) {
  throw createError({ statusCode: 404, statusMessage: "Project Not Found" });
}
useSeoMeta({
  title: project?.title,
  ogTitle: project?.title,
  description: "Project Miftakhussurur Al Maliki.",
  ogDescription: "Project Miftakhussurur Al Maliki.",
});
</script>

<template>
  <Content>
    <BackButton />
    <div class="flex flex-col gap-4 mt-8 md:mt-12">
      <div
        class="flex flex-col lg:flex-row gap-4 justify-between mb-8 md:mb-12"
      >
        <BlurReveal
          :delay="100"
          :duration="800"
          :class="'flex flex-col gap-3 lg:w-1/2'"
        >
          <h1 class="text-3xl text-dark-5 dark:text-light-1 font-medium">
            {{ project.idea }}
          </h1>
          <p class="text-sm text-dark-contrast-2 dark:text-light-5 leading-6">
            {{ project.description }}
          </p>
        </BlurReveal>
        <BlurReveal
          :delay="300"
          :duration="800"
          :class="'dark:bg-dark-5 bg-light-1 h-fit lg:w-1/3 rounded-xl divide-y-2 divide-light-2 dark:divide-dark-4 outline-2 outline-light-2 dark:outline-dark-4'"
        >
          <div class="flex flex-row justify-between items-center px-4 py-3">
            <p class="font-medium text-light-6 dark:text-dark-1 text-sm">
              Role
            </p>
            <p class="font-medium text-dark-4 dark:text-light-3 text-sm">
              {{ project.role }}
            </p>
          </div>
          <div class="flex flex-row justify-between items-center px-4 py-3">
            <p class="font-medium text-light-6 dark:text-dark-1 text-sm">
              Stack
            </p>
            <div class="flex gap-1.5 items-center">
              <Icon
                v-for="icon in project.technologies"
                :name="frameworkType[icon]"
                class="size-4"
              />
            </div>
          </div>
        </BlurReveal>
      </div>
      <BlurReveal
        :delay="600"
        v-for="(image, index) in project.gallery"
        :key="index"
        :class="'flex bg-light-2 dark:bg-dark-5 min-h-52 py-8 md:min-h-[calc(100svh/1.8)] rounded-lg items-center justify-center'"
      >
        <div class="h-auto w-64 md:w-[calc(100svw/2.2)]">
          <NuxtImg
            :src="`/images/${project.slug}/${image}`"
            :alt="`${project.slug}-${index}`"
            class="w-full h-auto rounded-sm"
            format="webp"
            loading="lazy"
          />
        </div>
      </BlurReveal>
    </div>
  </Content>
</template>
