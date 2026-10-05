<script setup lang="ts">
import type { EducationItem } from "~/types/education";

defineProps<{
  education: EducationItem;
  isLast?: boolean;
}>();
</script>

<template>
  <div class="relative flex gap-4">
    <div class="relative flex flex-col items-center">
      <div
        class="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/15 text-secondary"
      >
        <Icon :name="education.icon" class="size-5" />
      </div>

      <div
        v-if="!isLast"
        class="w-0.5 grow bg-border"
      />
    </div>

    <div class="flex flex-col gap-1 pb-8">
      <h3 class="text-sm font-medium text-primary/70">
        {{ education.degree }}
      </h3>
      
      <p class="text-xs text-primary/70 font-normal">
        {{ education.institution }}
      </p>

      <span class="text-xs text-primary/70 font-normal">
        {{ education.duration }}
      </span>
    </div>
  </div>
</template>