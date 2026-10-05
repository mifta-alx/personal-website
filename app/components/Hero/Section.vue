<script setup lang="ts">
const introStore = useIntroStore();
const intro = computed(() => introStore.getIntro);
</script>

<template>
  <section class="flex flex-col gap-6 pt-10 pb-10 lg:pb-15 xl:pb-20" id="hero">
    <ProfilePicture :src="intro.profilePicture" alt="Profile Picture" />
    <div class="space-y-0.5">
      <h1 class="text-2xl font-medium tracking-tight text-primary">
        {{ intro.name }}
      </h1>
      <p class="text-lg font-normal text-secondary">{{ intro.currentRole }}</p>
    </div>
    <div class="space-y-6 text-lg font-normal text-secondary max-w-md">
      <p>
        {{ intro.bio }}
      </p>
      <p>Currently based in {{ intro.based }}</p>
    </div>
    <div class="flex flex-row gap-3">
      <HeroContact />
      <HeroExplore />
    </div>
  </section>
</template>
