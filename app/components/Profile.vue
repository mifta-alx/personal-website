<script lang="ts" setup>
import { ref } from "vue";

const email = "alx.yoi67@gmail.com";
const copyText = ref("Copy Email");

const handleCopyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email);
    copyText.value = "Copied!";

    setTimeout(() => {
      copyText.value = "Copy Email";
    }, 2000);
  } catch (error) {
    console.error("Failed to copy email:", error);
  }
};
</script>

<template>
  <div
    class="hidden md:flex flex-col px-2 pt-8 items-center justify-center gap-2"
  >
    <div class="relative">
      <SpringAnimation
        :delay="200"
        :initial-scale="0.8"
        class="absolute -top-3.5 bottom-0 -right-0.5 z-10 scale-[1.22]"
      >
        <NuxtImg src="/images/icon1.webp" alt="Foto Profil" />
      </SpringAnimation>
      <SpringAnimation :delay="0">
        <div
          class="rounded-full bg-dark-1 dark:bg-light-contrast-2 size-20 relative outline-[6px] outline-light-3 dark:outline-dark-4"
        />
      </SpringAnimation>
    </div>
    <p
      class="text-dark-contrast-6 dark:text-light-1 text-center font-medium text-base mt-2"
    >
      Miftakhussurur Al Maliki
    </p>
    <div class="flex flex-col gap-2 justify-between items-center">
      <div class="capitalize flex flex-row items-center gap-2 shrink-0">
        <div class="rounded-full size-1.5 bg-dark-1 dark:bg-dark-2" />
        <p class="text-sm text-dark-4 dark:text-dark-contrast-1 font-medium">
          Frontend Developer
        </p>
      </div>
      <div
        class="uppercase flex flex-row items-center gap-1 bg-green-200/50 dark:bg-green-900/40 rounded-full px-2 py-0.5 shrink-0"
      >
        <div class="rounded-full size-1.5 bg-green-700 dark:bg-green-500" />
        <p
          class="text-[10px] text-green-700 dark:text-green-500 font-medium tracking-wide"
        >
          available for work
        </p>
      </div>
    </div>
    <div class="flex flex-row gap-2 w-full mt-4">
      <NuxtLink
        to="/hire-me"
        class="flex gap-1 cursor-pointer items-center justify-center w-full bg-dark-6 hover:bg-dark-contrast-5 dark:bg-dark-contrast-4 dark:hover:bg-dark-contrast-5 transition-all duration-300 ease-in-out text-light-1 rounded-md h-8 text-xs font-semibold"
      >
        <Icon name="solar:add-circle-line-duotone" size="14" />
        Hire Me
      </NuxtLink>
      <button
        @click="handleCopyEmail"
        class="flex gap-1 cursor-pointer items-center justify-center w-full bg-light-contrast-1 hover:bg-light-4 dark:bg-dark-contrast-6 dark:hover:bg-dark-contrast-4 outline outline-light-4 dark:outline-dark-contrast-4 transition-all duration-300 ease-in-out text-dark-6 dark:text-light-1 rounded-md h-8 text-xs font-semibold"
      >
        <Icon
          :name="
            copyText === 'Copied!'
              ? 'solar:unread-linear'
              : 'solar:copy-line-duotone'
          "
          :size="copyText === 'Copied!' ? '18' : '14'"
        />
        {{ copyText }}
      </button>
    </div>
  </div>
</template>
