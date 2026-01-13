<script lang="ts" setup>
import { twMerge } from "tailwind-merge";

const isOpen = ref(false);

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  imageClass: {
    type: String,
    default: "",
  },
  info: {
    type: Array as () => string[],
    default: () => [],
  },
  bgImage: {
    type: Boolean,
    default: false,
  },
});

const autoAlt = computed(() => {
  if (!props.image) return "Education Logo";

  const fileName = props.image.split("/").pop() || "";
  const nameNoExt = fileName.replace(/\.[^/.]+$/, "");

  return nameNoExt
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
});

const mergedImageClass = computed(() => {
  return twMerge(
    "size-14 md:size-16 rounded-lg object-contain",
    props.imageClass
  );
});
</script>

<template>
  <div
    class="flex flex-col w-full overflow-hidden rounded-lg bg-light-2 dark:bg-dark-5 shadow-light dark:shadow-dark"
  >
    <div class="flex p-4 gap-5 items-start">
      <div
        class="size-14 md:size-16 rounded-lg flex items-center justify-center"
        :class="bgImage ? 'bg-light-1 dark:bg-dark-4' : ''"
      >
        <NuxtImg
          :src="image"
          :custom="true"
          v-slot="{ src, isLoaded, imgAttrs }"
        >
          <img
            v-if="isLoaded"
            v-bind="imgAttrs"
            :src="src"
            :alt="autoAlt"
            :class="mergedImageClass"
          />

          <div
            v-else
            class="size-14 md:size-16 bg-dark-1 dark:bg-dark-4 rounded-lg animate-pulse"
          />
        </NuxtImg>
      </div>
      <div class="flex flex-col gap-1 flex-1">
        <!-- template content -->
        <slot name="content" />
        <!-- more info expand button -->
        <button
          @click="isOpen = !isOpen"
          class="cursor-pointer flex items-center gap-1 mt-1 text-xs font-medium text-dark-contrast-3 dark:text-light-5 transition-all w-fit"
        >
          {{ isOpen ? "Show less" : "More details" }}
          <Icon
            name="solar:alt-arrow-down-linear"
            class="transition-transform duration-300"
            :class="{ 'rotate-180': isOpen }"
            size="14"
          />
        </button>
        <!-- more info content -->
        <div
          class="grid transition-[grid-template-rows] duration-500 ease-in-out"
          :class="isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
        >
          <div class="overflow-hidden">
            <div v-if="info.length > 0">
              <ul class="space-y-1 mt-1">
                <li
                  v-for="(item, index) in info"
                  :key="index"
                  class="text-sm font-normal text-dark-contrast-3 dark:text-light-5 flex gap-2 items-start"
                >
                  <div
                    class="rounded-full size-1 bg-dark-1 dark:bg-dark-2 shrink-0 mt-2"
                  />
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
