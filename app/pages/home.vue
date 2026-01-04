<script setup lang="ts">
import { ref } from "vue";
definePageMeta({
  layout: "landing-page",
});
useSeoMeta({
  title: "Miftakhussurur Al Maliki | Personal Website",
  ogTitle: "Miftakhussurur Al Maliki | Personal Website",
  description: "Halaman utama sistem informasi akademik.",
  ogDescription: "Halaman utama sistem informasi akademik.",
});

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
  <div class="flex flex-col gap-6">
    <div class="md:hidden flex flex-row gap-2 justify-between items-center">
      <div class="capitalize flex flex-row items-center gap-2 shrink-0">
        <div class="rounded-full size-1.5 bg-dark-1 dark:bg-dark-2" />
        <p class="text-sm text-dark-4 dark:text-dark-contrast-1 font-medium">
          Frontend Developer
        </p>
      </div>
      <div
        class="uppercase flex flex-row items-center gap-1 bg-green-200/50 dark:bg-green-900/40 rounded-full px-2 py-0.5 shrink-0"
      >
        <div class="rounded-full size-1.5 bg-green-600 dark:bg-green-500" />
        <p
          class="text-[10px] text-green-600 dark:text-green-500 font-medium tracking-wide"
        >
          available for work
        </p>
      </div>
    </div>
    <div class="flex flex-row justify-between items-center gap-4">
      <div class="flex flex-col gap-2">
        <h5
          class="text-dark-contrast-6 dark:text-light-1 font-medium text-xl md:hidden"
        >
          I'm Miftakhussurur
        </h5>
        <h5
          class="text-dark-contrast-6 dark:text-light-1 font-medium text-xl lg:text-3xl hidden md:block"
        >
          I'm Miftakhussurur Al Maliki
        </h5>
        <p
          class="text-[13px] text-dark-4 dark:text-dark-contrast-1 text-wrap md:hidden"
        >
          Frontend Developer from Malang, ID.<br />
          Currently working at PUSTIK ITN Malang.
        </p>
        <div class="flex flex-row gap-2 w-full mt-2 md:hidden">
          <NuxtLink
            to="/hire-me"
            class="flex gap-1 cursor-pointer items-center justify-center w-fit bg-dark-6 hover:bg-dark-contrast-5 dark:bg-dark-contrast-4 dark:hover:bg-dark-contrast-5 transition-all duration-300 ease-in-out text-light-1 rounded-md h-8 px-2.5 text-xs font-semibold"
          >
            <Icon name="solar:add-circle-line-duotone" size="14" />
            Hire Me
          </NuxtLink>
          <button
            @click="handleCopyEmail"
            class="flex gap-1 cursor-pointer items-center justify-center w-fit bg-light-contrast-1 hover:bg-light-4 dark:bg-dark-contrast-6 dark:hover:bg-dark-contrast-4 outline outline-light-4 dark:outline-dark-contrast-4 transition-all duration-300 ease-in-out text-dark-6 dark:text-light-1 rounded-md h-8 px-2.5 text-xs font-semibold"
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
      <div class="relative md:hidden mr-2">
        <NuxtImg
          src="/images/icon1.webp"
          alt="Foto Profil"
          class="absolute -top-3.5 bottom-0 -right-0.5 z-10 scale-[1.22]"
        />
        <div
          class="rounded-full bg-dark-1 dark:bg-light-contrast-2 size-20 relative outline-[6px] outline-light-3 dark:outline-dark-4 duration-300 ease-in-out transition-all"
        />
      </div>
    </div>
    <p class="text-base text-dark-4 dark:text-dark-contrast-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a fringilla
      justo, et finibus lorem. Pellentesque rutrum scelerisque viverra.
      Pellentesque luctus, nibh vitae faucibus commodo, nisl mi lobortis ex, in
      semper tellus urna sit amet odio. Suspendisse vehicula suscipit massa,
      quis suscipit purus condimentum eu. Sed at quam in lacus tincidunt finibus
      sit amet id purus. Suspendisse dapibus ipsum sit amet augue rhoncus
      rutrum.
    </p>
  </div>
</template>
