<script setup lang="ts">
const projectStore = useProjectStore();
const { getInfo, getProjects } = projectStore;
</script>
<template>
  <section
    class="flex flex-col gap-10 lg:gap-15 py-10 lg:py-15 xl:py-20"
    id="projects"
  >
    <div class="space-y-2">
      <h2 class="text-base font-normal uppercase font-mono text-primary">
        {{ getInfo.title }}
      </h2>
      <p class="text-base font-normal text-secondary">
        {{ getInfo.description }}
      </p>
    </div>
    <div
      v-if="getProjects && getProjects.length > 0"
      class="grid grid-cols-1 gap-12"
    >
      <ProjectItem
        v-for="(project, index) in getProjects"
        :key="index"
        :project="project"
      />
    </div>
  </section>
</template>
