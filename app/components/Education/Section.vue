<script setup lang="ts">
const educationStore = useEducationsStore();
const { getInfo, getEducations } = educationStore;
</script>
<template>
  <section id="education" class="flex flex-col gap-10 lg:gap-15 py-10 lg:py-15 xl:py-20">
    <div class="space-y-2">
      <h2 class="text-base font-normal uppercase font-mono text-primary">
        {{ getInfo.title }}
      </h2>
      <p
        class="text-base font-normal text-secondary"
        v-if="getInfo.description"
      >
        {{ getInfo.description }}
      </p>
    </div>
    <div class="flex flex-col">
     <EducationItem
        v-for="(item, index) in getEducations"
        :key="item.institution"
        :education="item"
        :is-last="index === getEducations.length - 1"
      />
    </div>
  </section>
</template>
