<script lang="ts" setup>
const experienceStore = useExperienceStore();
const { getInfo, getExperiences } = experienceStore;
</script>
<template>
  <section id="experience" class="flex flex-col gap-10 lg:gap-15 py-10 lg:py-15 xl:py-20">
    <div class="space-y-2">
      <h2 class="text-base font-normal uppercase font-mono text-primary">
        {{ getInfo.title }}
      </h2>
      <p class="text-base font-normal text-secondary" v-if="getInfo.description">
        {{ getInfo.description }}
      </p>
    </div>
    <div class="space-y-10">
      <ExperienceItem
        v-for="(company, index) in getExperiences"
        :key="index"
        :company="company"
      />
    </div>
  </section>
</template>
