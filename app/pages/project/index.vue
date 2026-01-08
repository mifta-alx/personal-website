<script setup lang="ts">
import { projects } from "~/data/project";

definePageMeta({
  layout: "landing-page",
});
useSeoMeta({
  title: "Project | Miftakhussurur Al Maliki",
  ogTitle: "Project | Miftakhussurur Al Maliki",
  description: "Project Miftakhussurur Al Maliki.",
  ogDescription: "Project Miftakhussurur Al Maliki.",
});
</script>

<template>
  <Content>
    <div class="flex flex-col gap-4">
      <BlurReveal :duration="800">
        <div class="flex flex-col">
          <h1
            class="text-dark-contrast-6 dark:text-light-1 font-bold tracking-tighter text-2xl"
          >
            Project
          </h1>
          <p class="text-dark-contrast-3 dark:text-light-6 font-medium text-lg">
            Showcase of my project.
          </p>
        </div>
      </BlurReveal>
      <BlurReveal :duration="1500" :delay="500">
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
