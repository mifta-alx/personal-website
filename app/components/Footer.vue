<template>
  <div class="flex flex-col gap-2 md:hidden">
    <div
      class="w-full rounded-xl bg-light-contrast-1 dark:bg-dark-contrast-6 p-5 border border-light-2 dark:border-dark-5 flex flex-row justify-between items-center gap-4"
    >
      <div class="capitalize flex flex-row items-center gap-2 shrink-0">
        <div class="rounded-full size-1.5 bg-dark-1 dark:bg-dark-2" />
        <p class="text-sm text-dark-4 dark:text-dark-contrast-1 font-medium">
          Follow me
        </p>
      </div>
      <div class="flex flex-row items-center gap-2">
        <NuxtLink
          to="https://www.tiktok.com/@alxsemuanya"
          class="flex items-center justify-center size-7 gap-2.5 shrink-0 rounded-full text-left bg-light-contrast-2 text-dark-5 dark:bg-dark-5 dark:text-light-1 shadow-light dark:shadow-dark"
        >
          <Icon name="cib:tiktok" class="size-4" />
        </NuxtLink>
        <NuxtLink
          to="https://www.instagram.com/alx.al"
          class="flex items-center justify-center size-7 gap-2.5 shrink-0 rounded-full text-left bg-light-contrast-2 text-dark-5 dark:bg-dark-5 dark:text-light-1 shadow-light dark:shadow-dark"
        >
          <Icon name="cib:instagram" class="size-4" />
        </NuxtLink>
        <NuxtLink
          to="https://www.linkedin.com/in/miftakhussurur"
          class="flex items-center justify-center size-7 gap-2.5 shrink-0 rounded-full text-left bg-light-contrast-2 text-dark-5 dark:bg-dark-5 dark:text-light-1 shadow-light dark:shadow-dark"
        >
          <Icon name="cib:linkedin-in" class="size-4" />
        </NuxtLink>
        <NuxtLink
          to="https://github.com/mifta-alx"
          class="flex items-center justify-center size-7 gap-2.5 shrink-0 rounded-full text-left bg-light-contrast-2 text-dark-5 dark:bg-dark-5 dark:text-light-1 shadow-light dark:shadow-dark"
        >
          <Icon name="cib:github" class="size-4" />
        </NuxtLink>
      </div>
    </div>
    <div
      class="w-full rounded-xl bg-light-contrast-1 dark:bg-dark-contrast-6 p-8 border border-light-2 dark:border-dark-5 flex flex-row justify-center items-center gap-4"
    >
      <p class="text-[11px] text-dark-4 dark:text-dark-1">
        &copy; 2026 Miftakhussurur Al Maliki
      </p>
    </div>
  </div>
</template>
