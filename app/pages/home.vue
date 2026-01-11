<script setup lang="ts">
import { ref } from "vue";
import { projects } from "~/data/project";
definePageMeta({
  layout: "landing-page",
});
useSeoMeta({
  title: "Miftakhussurur Al Maliki - Frontend Developer",
  ogTitle: "Miftakhussurur Al Maliki - Frontend Developer",
  description:
    "Explore the professional portfolio of Miftakhussurur Al Maliki, a Frontend Developer specialized in building modern, responsive, and high-performance web applications.",
  ogDescription:
    "Explore the professional portfolio of Miftakhussurur Al Maliki, a Frontend Developer specialized in building modern, responsive, and high-performance web applications.",
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
          Frontend Developer from Malang, Indonesia.<br />
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

    <BlurReveal>
      <div class="md:flex flex-col hidden">
        <h1
          class="text-dark-contrast-6 dark:text-light-1 font-bold tracking-tighter text-3xl"
        >
          Hey, I'm Mifta!
        </h1>
        <div class="flex flex-row items-center gap-2 shrink-0 mt-2">
          <div class="capitalize flex flex-row items-center gap-2 shrink-0">
            <div class="rounded-full size-1.5 bg-dark-1 dark:bg-dark-2" />
            <p
              class="text-dark-contrast-3 dark:text-light-6 font-medium text-sm leading-6"
            >
              Frontend Developer
            </p>
          </div>
          <div class="flex flex-row items-center gap-2 shrink-0">
            <div class="rounded-full size-1.5 bg-dark-1 dark:bg-dark-2" />
            <p
              class="text-dark-contrast-3 dark:text-light-6 font-medium text-sm leading-6"
            >
              Based in Malang, East Java, Indonesia
            </p>
          </div>
        </div>
      </div>
    </BlurReveal>
    <div class="flex flex-col gap-8 mt-8 md:mt-4">
      <BlurReveal :delay="400">
        <p class="text-base text-dark-5 dark:text-light-3 leading-7">
          I design and build modern web applications with a strong focus on
          performance, usability, and clean architecture. Working primarily with
          the React ecosystem, I help turn ideas into reliable products from
          early concepts to production-ready solutions. Looking for someone
          reliable to bring your product to life? Let’s work together.
        </p>
      </BlurReveal>
      <BlurReveal :delay="600">
        <div class="flex flex-col gap-4">
          <SectionHeader
            title="Tech Stack"
            description="The tech stack I use for my personal and client work"
            icon="solar:code-linear"
          />
          <SkillSet />
        </div>
      </BlurReveal>
      <BlurReveal :delay="800">
        <div class="flex flex-col gap-4">
          <SectionHeader
            title="Recent Project"
            description="A curated showcase of my latest projects and technical work"
            icon="solar:code-linear"
          />
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <MiniProjectItem
              v-for="(project, index) in projects.slice(0, 3)"
              :key="index"
              :project="project"
            />
          </div>
          <NuxtLink
            to="/project"
            class="self-center mb-4 flex items-center text-dark-5 dark:text-light-1 justify-center gap-1.5 rounded-full border border-light-5 dark:border-dark-3 w-fit py-2 ps-4 pe-3 text-sm font-medium"
          >
            See more
            <Icon name="solar:arrow-down-linear" />
          </NuxtLink>
        </div>
      </BlurReveal>
    </div>
  </Content>
</template>
