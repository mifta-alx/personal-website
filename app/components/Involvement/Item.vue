<script setup lang="ts">
import type { Organization } from "~/types/involvement";

const props = defineProps<{
  organization: Organization;
}>();

const activeRoleIndex = ref<number | null>(null);

const toggleRole = (index: number) => {
  activeRoleIndex.value = activeRoleIndex.value === index ? null : index;
};
</script>

<template>
  <div class="relative w-full">
    <div class="flex items-center gap-2">
      <div
        class="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-secondary/15"
      >
        <NuxtImg
          quality="80"
          format="webp"
          loading="lazy"
          placeholder
          :src="organization.logo"
          :alt="organization.name"
          class="h-full w-full object-cover rounded-lg"
        />
      </div>
      <div>
        <h3 class="text-sm font-medium text-primary/70">
          {{ organization.name }}
        </h3>
        <p v-if="organization.institution" class="text-xs text-primary/70 font-normal">
          {{ organization.institution }}
        </p>
      </div>
    </div>

    <div class="relative ml-5 pt-2">
      <div
        v-for="(experience, index) in organization.experience"
        :key="index"
        class="relative pl-7 pb-6"
      >
        <div
          class="absolute border-b-2 border-l-2 border-border w-4.5 h-4.5 rounded-bl-md left-0 -top-2 pointer-events-none"
        />
        <div
          v-if="index !== organization.experience.length - 1"
          class="absolute left-0 top-0 w-0.5 bg-border h-full"
        />

        <div
          class="group cursor-pointer rounded-lg transition-colors"
          @click="toggleRole(index)"
        >
          <div class="flex items-start justify-between gap-4">
            <div>
              <div class="flex items-center gap-2">
                <h4
                  class="text-sm font-medium text-primary/70 transition-all duration-300 group-hover:text-primary"
                >
                  {{ experience.role }}
                </h4>
              </div>

              <p class="mt-1 text-xs text-primary/70 font-normal">
                {{ experience.period }} · {{ experience.location }}
              </p>
            </div>

            <button
              type="button"
              class="mt-1 text-primary/70 transition-all duration-300 group-hover:text-primary"
              :class="activeRoleIndex === index ? 'rotate-180' : ''"
              aria-label="Toggle detail"
            >
              <Icon name="ph:caret-down" class="size-4" />
            </button>
          </div>

          <div
            class="grid transition-[grid-template-rows,opacity] duration-300 ease-in-out"
            :class="
              activeRoleIndex === index
                ? 'grid-rows-[1fr] opacity-100'
                : 'grid-rows-[0fr] opacity-0'
            "
          >
            <div class="overflow-hidden">
              <div class="pt-4">
                <ul
                  class="space-y-2 pl-4 text-xs text-primary/70 list-disc marker:text-primary/70 ml-2"
                >
                  <li
                    v-for="(resp, rIndex) in experience.responsibilities"
                    :key="rIndex"
                    class="leading-relaxed"
                  >
                    {{ resp }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
