<script lang="ts" setup>
const involvementStore = useInvolvementStore();
const { getInfo, getExperience } = involvementStore;
</script>
<template>
  <section id="experience" class="flex flex-col gap-10 lg:gap-15 pb-10 pt-10 lg:pt-15 xl:pt-20">
    <div class="space-y-2">
      <h2 class="text-base font-normal uppercase font-mono text-primary">
        {{ getInfo.title }}
      </h2>
      <p class="text-base font-normal text-secondary">
        {{ getInfo.description }}
      </p>
    </div>
    <div class="space-y-10">
      <InvolvementItem
        v-for="(organization, index) in getExperience"
        :key="index"
        :organization="organization"
      />
    </div>
  </section>
</template>
