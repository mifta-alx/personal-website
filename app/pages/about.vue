<script setup lang="ts">
import { calculateDuration } from "@/utils/date-format";
import { educationDetails, workExperiences } from "@/data/about";

definePageMeta({
  layout: "landing-page",
});
useSeoMeta({
  title: "About | Miftakhussurur Al Maliki",
  ogTitle: "About | Miftakhussurur Al Maliki",
  description: "About Miftakhussurur Al Maliki.",
  ogDescription: "About Miftakhussurur Al Maliki.",
});
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-col gap-4">
      <SectionHeader
        title="Experience"
        description="Work experience"
        icon="solar:case-linear"
      />
      <div v-if="workExperiences.length > 0" class="flex flex-col gap-4">
        <ItemCard
          v-for="(work, index) in workExperiences"
          :info="work?.responsibilities"
          :image="work?.companyLogo"
          :key="index"
        >
          <template #content>
            <p
              class="text-base font-medium text-dark-contrast-6 dark:text-light-1"
            >
              {{ work?.role }}
            </p>
            <div class="flex gap-x-2 items-center flex-wrap">
              <p
                class="text-sm font-normal text-dark-contrast-3 dark:text-light-5"
              >
                {{ work?.companyName }}
              </p>
              <div
                class="rounded-full size-1 bg-dark-contrast-3 dark:bg-light-5 shrink-0"
              />
              <p
                class="text-sm font-normal text-dark-contrast-3 dark:text-light-5"
              >
                {{ work?.employmentType }}
              </p>
            </div>
            <div class="flex gap-x-2 items-center flex-wrap">
              <p
                class="text-xs font-normal text-dark-contrast-2 dark:text-dark-1"
              >
                {{ work?.period }}
              </p>
              <div
                class="rounded-full size-1 bg-dark-1 dark:bg-dark-2 shrink-0"
              />
              <p
                class="text-xs font-normal text-dark-contrast-3 dark:text-light-5"
              >
                {{ calculateDuration(work?.period) }}
              </p>
            </div>
            <div class="flex gap-x-2 items-center flex-wrap">
              <p
                class="text-xs font-normal text-dark-contrast-2 dark:text-dark-1"
              >
                {{ work?.location }}
              </p>
              <div
                class="rounded-full size-1 bg-dark-1 dark:bg-dark-2 shrink-0"
              />
              <p
                class="text-xs font-normal text-dark-contrast-2 dark:text-dark-1"
              >
                {{ work?.workMode }}
              </p>
            </div>
          </template>
        </ItemCard>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <SectionHeader
        title="Education"
        description="Education background"
        icon="solar:square-academic-cap-linear"
      />
      <ItemCard
        :info="educationDetails?.details"
        :image="educationDetails?.logo"
      >
        <template #content>
          <p
            class="text-base font-medium text-dark-contrast-6 dark:text-light-1"
          >
            {{ educationDetails?.institution }}
          </p>
          <p class="text-sm font-normal text-dark-contrast-3 dark:text-light-5">
            {{ educationDetails?.degree }}
          </p>
          <div class="flex gap-2 items-center">
            <p
              class="text-xs font-normal text-dark-contrast-2 dark:text-dark-1"
            >
              {{ educationDetails?.duration }}
            </p>
            <div
              class="rounded-full size-1 bg-dark-1 dark:bg-dark-2 shrink-0"
            />
            <p
              class="text-xs font-normal text-dark-contrast-3 dark:text-light-5"
            >
              {{ educationDetails?.location }}
            </p>
          </div>
        </template>
      </ItemCard>
    </div>
  </div>
</template>
