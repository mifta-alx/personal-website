<script setup lang="ts">
const data = [
  { name: "HTML", icon: "logos:html-5" },
  { name: "CSS", icon: "logos:css-3" },
  { name: "Javascript", icon: "logos:javascript" },
  { name: "PHP", icon: "logos:php" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "Bootstrap", icon: "logos:bootstrap" },
  { name: "Laravel", icon: "logos:laravel" },
  { name: "Node", icon: "logos:nodejs-icon" },
  { name: "Express", icon: "devicon:express" },
  { name: "React", icon: "logos:react" },
  { name: "Tanstack Query", icon: "logos:react-query-icon" },
  { name: "Next", icon: "logos:nextjs-icon" },
  { name: "Vue", icon: "logos:vue" },
  { name: "Nuxt", icon: "logos:nuxt-icon" },
  { name: "Remix", icon: "logos:remix-icon" },
  { name: "Sveltekit", icon: "logos:svelte-icon" },
  { name: "MongoDB", icon: "logos:mongodb-icon" },
  { name: "Redis", icon: "logos:redis" },
  { name: "MySQL", icon: "logos:mysql-icon" },
  { name: "Postgres", icon: "logos:postgresql" },
  { name: "Supabase", icon: "logos:supabase-icon" },
  { name: "Prisma", icon: "logos:prisma" },
  { name: "Postman", icon: "logos:postman-icon" },
  { name: "Docker", icon: "logos:docker-icon" },
  { name: "Figma", icon: "logos:figma" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "Github", icon: "logos:github-icon" },
  { name: "Gitlab", icon: "logos:gitlab-icon" },
  { name: "Vercel", icon: "logos:vercel-icon" },
  { name: "Netlify", icon: "logos:netlify-icon" },
  { name: "Arduino", icon: "logos:arduino" },
  { name: "Obsidian", icon: "logos:obsidian-icon" },
  { name: "Webstorm", icon: "logos:webstorm" },
];
</script>
<template>
  <div class="flex flex-row gap-2 items-center flex-wrap">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="bg-light-contrast-2 dark:bg-dark-contrast-5 rounded-full flex flex-row gap-2 items-center justify-center px-3 py-1.5"
    >
      <Icon :name="item.icon" class="size-4" />
      <p class="text-xs font-medium text-dark-6 dark:text-light-1">
        {{ item.name }}
      </p>
    </div>
  </div>
</template>
