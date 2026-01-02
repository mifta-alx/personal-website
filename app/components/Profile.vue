<script lang="ts" setup>
import { ref } from "vue";

const email = "alx.yoi67@gmail.com";
const whatsappNumber = "628123456789";
const copyText = ref("Copy Email");

const handleHireMe = () => {
  const message =
    "Halo Miftakhussurur, saya tertarik untuk bekerja sama dengan Anda.";
  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};

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
  <div class="hidden lg:flex flex-col p-2 items-center justify-center gap-2">
    <p class="text-white text-center font-medium text-md">
      Miftakhussurur Al Maliki
    </p>
    <div class="flex flex-col gap-2 justify-between items-center">
      <div class="capitalize flex flex-row items-center gap-2 shrink-0">
        <div class="rounded-full size-1.5 bg-gray-dark-4 dark:bg-gray-dark-2" />
        <p
          class="text-sm text-gray-dark-2 dark:text-gray-dark-contrast-1 font-medium"
        >
          Frontend Developer
        </p>
      </div>
      <div
        class="uppercase flex flex-row items-center gap-1 bg-green-100 dark:bg-green-900 rounded-full px-2 py-0.5 shrink-0"
      >
        <div class="rounded-full size-1.5 bg-green-600 dark:bg-green-500" />
        <p
          class="text-[10px] text-green-600 dark:text-green-500 font-medium tracking-wide"
        >
          available for work
        </p>
      </div>
    </div>
    <div class="flex flex-row gap-2 w-full mt-4">
      <button
        @click="handleHireMe"
        class="flex gap-1 cursor-pointer items-center justify-center w-full bg-gray-light-contrast-2 hover:bg-gray-light-contrast-3 dark:bg-gray-dark-contrast-4 dark:hover:bg-gray-dark-contrast-5 transition-all duration-300 ease-in-out text-gray-dark-6 dark:text-gray-light-1 rounded-md h-8 text-xs font-medium"
      >
        <Icon name="solar:add-circle-line-duotone" class="size-4" />
        Hire Me
      </button>
      <button
        @click="handleCopyEmail"
        class="flex gap-1 cursor-pointer items-center justify-center w-full bg-gray-dark-contrast-6 hover:bg-gray-dark-contrast-4 border border-gray-dark-contrast-4 transition-all duration-300 ease-in-out text-white rounded-md h-8 text-xs font-medium"
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
