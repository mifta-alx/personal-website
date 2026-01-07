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
  <Content>
    <div class="flex flex-col gap-6">
      <StatusHeader title="Frontend Developer" />
      <div
        class="flex flex-col justify-center items-center gap-2 mt-6 md:hidden"
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
              class="rounded-full bg-dark-1 dark:bg-light-contrast-2 size-24 relative outline-[6px] outline-light-3 dark:outline-dark-4"
            />
          </SpringAnimation>
        </div>
        <h5
          class="text-dark-contrast-6 dark:text-light-1 font-semibold text-xl mt-4"
        >
          I'm Miftakhussurur
        </h5>
        <p
          class="text-sm leading-6 text-dark-4 dark:text-dark-contrast-1 text-wrap text-center"
        >
          Frontend Developer from Malang, ID.<br />
          Currently working at PUSTIK ITN Malang.
        </p>
        <div class="flex flex-row gap-2 mt-4">
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
    </div>

    <div class="md:flex flex-row gap-2 hidden">
      <BlurReveal>
        <h2
          class="text-dark-contrast-6 dark:text-light-1 font-bold tracking-tighter sm:text-5xl xl:text-4xl/none"
        >
          I'm
        </h2>
      </BlurReveal>
      <BlurReveal :delay="500">
        <h2
          class="text-dark-contrast-6 dark:text-light-1 font-bold tracking-tighter sm:text-5xl xl:text-4xl/none"
        >
          Miftakhussurur Al Maliki
        </h2>
      </BlurReveal>
    </div>
  </Content>
  <!-- <SkillSet /> -->
</template>
