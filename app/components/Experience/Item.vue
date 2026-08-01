<script setup lang="ts">
import type { Company } from "~/types/experience";

const props = defineProps<{
  company: Company;
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
        class="relative z-10 flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-secondary/15"
      >
        <NuxtImg
          lazy
          placeholder
          :src="company.logo"
          :alt="company.name"
          class="h-full w-full object-cover rounded-lg"
        />
      </div>
      <NuxtLink
        v-if="company.url"
        class="text-sm font-medium text-primary/70 hover:underline cursor-pointer"
        :to="company.url"
        target="_blank"
      >
        {{ company.name }}
      </NuxtLink>
      <h3 v-else class="text-sm font-medium text-primary/70">
        {{ company.name }}
      </h3>
    </div>

    <div class="relative ml-5 pt-2">
      <div
        v-for="(role, index) in company.roles"
        :key="index"
        class="relative pl-7 pb-6"
      >
        <div
          class="absolute border-b-2 border-l-2 border-border w-4.5 h-4.5 rounded-bl-md left-0 -top-2 pointer-events-none"
        />
        <div
          v-if="index !== company.roles.length - 1"
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
                  {{ role.name }}
                </h4>
              </div>

              <p class="mt-1 text-xs text-primary/70 font-normal">
                {{ role.period }} · {{ role.location }} · {{ role.contract }} ·
                {{ role.mode }}
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
                    v-for="(resp, rIndex) in role.responsibilities"
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
