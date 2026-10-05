<script setup lang="ts">
import { contacts } from "~/data/navigation";

const config = useRuntimeConfig();
const version = config.public.appVersion;
</script>

<template>
  <footer class="pt-10 text-secondary/80 flex flex-col gap-10">
    <div class="flex flex-row justify-between items-center gap-2">
      <div class="flex items-center gap-3 bg-secondary/10 text-secondary/90 px-4 py-1.5 rounded-full">
        <span class="font-mono text-xs">v{{ version }}</span>
      </div>
      <p class="text-secondary text-sm">
        &copy; {{ new Date().getFullYear() }} Miftakhussurur
      </p>
    </div>
    <div class="flex flex-row justify-between items-center gap-6">
      <div class="flex flex-row gap-2 items-center">
        <FooterContactItem
          v-for="item in contacts"
          :key="item.url"
          :url="item.url"
          :target="item.target"
          :icon="item.icon"
        />
      </div>
      <FooterBackToTop />
    </div>
  </footer>
</template>
