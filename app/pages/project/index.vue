<script setup lang="ts">
import { projects } from "~/data/project";

definePageMeta({
  layout: "landing-page",
});
useSeoMeta({
  title: "Projects - Miftakhussurur Al Maliki",
  ogTitle: "Projects - Miftakhussurur Al Maliki",
  description: "A showcase of my recent work, featuring web applications built with modern technologies like Vue, Nuxt, and Tailwind CSS. Explore my journey through code.",
  ogDescription: "A showcase of my recent work, featuring web applications built with modern technologies like Vue, Nuxt, and Tailwind CSS. Explore my journey through code.",});
</script>

<template>
  <Content>
    <div class="flex flex-col gap-4">
      <BlurReveal :duration="800">
        <div class="flex flex-col">
          <h1
            class="text-dark-contrast-6 dark:text-light-1 font-bold tracking-tighter text-3xl"
          >
            Project
          </h1>
          <p
            class="text-dark-contrast-3 dark:text-light-6 font-medium text-sm mt-2 leading-6"
          >
            A collection of things I've built and worked on.
          </p>
        </div>
      </BlurReveal>
      <BlurReveal :duration="800" :delay="500">
        <div v-if="projects.length > 0" class="flex flex-col gap-4">
          <ProjectItem
            v-for="(project, index) in projects"
            :key="index"
            :project="project"
          />
        </div>
      </BlurReveal>
    </div>
  </Content>
</template>
