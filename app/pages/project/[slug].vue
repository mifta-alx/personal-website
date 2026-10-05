<script setup lang="ts">
import { projectDetails } from "~/data/project";
import { projectStories } from "~/data/project-stories";

definePageMeta({
  layout: "main-layout",
  key: (route) => route.params.slug as string,
});
const route = useRoute();
const project = projectDetails.projects.find(
  (item) => item.slug === route.params.slug,
);
if (!project)
  throw createError({ statusCode: 404, statusMessage: "Project Not Found" });
const sections = projectStories[project.slug] ?? [];
const imagePath = (file: string) => `/images/${project.slug}/${file}`;
useSeoMeta({
  title: `${project.name} | Miftakhussurur Al Maliki`,
  description: project.idea,
  ogTitle: project.title,
  ogDescription: project.idea,
  ogImage: imagePath(project.cover),
});
</script>

<template>
  <div class="case-study w-full min-w-0 pb-10 text-primary">
    <article>
      <nav
        aria-label="Project navigation"
        class="sticky top-20 z-30 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 bg-transparent py-4 lg:top-22 xl:top-0 sm:grid-cols-[1fr_minmax(0,2fr)_1fr]"
      >
        <NuxtLink
          to="/"
          class="inline-flex h-10 w-fit items-center justify-center gap-1.5 rounded-full bg-sidebar px-4.5 text-base font-medium leading-none text-primary outline-none transition-all duration-300 hover:bg-secondary/0.5 focus-visible:ring-2 focus-visible:ring-secondary/20 focus-visible:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:scale-95"
        >
          <Icon
            name="ph:arrow-u-down-left"
            class="size-3.5"
            aria-hidden="true"
          />
          Return
        </NuxtLink>
      </nav>
      <header class="mx-auto max-w-2xl pb-8 pt-8 text-center sm:pt-12 sm:pb-10">
        <p class="text-sm font-medium text-center sticky">{{ project.name }}</p>
        <h1
          class="text-3xl font-medium leading-tight tracking-tight text-balance sm:text-5xl mt-4"
        >
          {{ project.idea }}
        </h1>
        <p class="mt-5 text-base text-secondary">{{ project.title }}</p>
        <dl
          class="mt-9 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-6 text-sm sm:grid-cols-4"
        >
          <div>
            <dt class="mb-2 text-secondary">Role</dt>
            <dd class="font-medium">{{ project.role }}</dd>
          </div>
          <div>
            <dt class="mb-2 text-secondary">Year</dt>
            <dd class="font-medium">{{ project.year || "2026" }}</dd>
          </div>
          <div>
            <dt class="mb-2 text-secondary">Type</dt>
            <dd class="font-medium">{{ project.type }}</dd>
          </div>
          <div>
            <dt class="mb-2 text-secondary">Live</dt>
            <dd class="font-medium text-secondary">
              {{ project.live ?? "Unavailable" }}
            </dd>
          </div>
        </dl>
      </header>

      <NuxtImg
        :src="imagePath(project.cover)"
        :alt="project.title"
        class="story-image hero-image"
        loading="eager"
        fetchpriority="high"
      />

      <div
        class="my-8 grid gap-6 border-b border-border pb-6 text-sm sm:grid-cols-[1fr_auto] sm:items-end"
      >
        <nav
          aria-label="On this page"
          class="flex flex-wrap gap-x-5 gap-y-1 text-secondary"
        >
          <a
            href="#overview"
            class="inline-flex min-h-11 items-center hover:text-primary"
            >Overview</a
          >
          <a
            v-for="section in sections"
            :key="section.id"
            :href="`#${section.id}`"
            class="inline-flex min-h-11 items-center hover:text-primary"
            >{{ section.title }}</a
          >
        </nav>
        <div class="sm:text-right">
          <p class="mb-2 text-secondary">Tech stack</p>
          <p class="font-medium">{{ project.technologies.join(" · ") }}</p>
        </div>
      </div>

      <section id="overview" class="story-section">
        <h2>Overview</h2>
        <p>{{ project.description }}</p>
      </section>

      <section
        v-for="section in sections"
        :id="section.id"
        :key="section.id"
        class="story-section"
      >
        <h2>{{ section.title }}</h2>
        <template v-for="(block, index) in section.blocks" :key="index">
          <p v-if="block.type === 'text'">{{ block.text }}</p>
          <figure v-else-if="block.type === 'image'">
            <NuxtImg
              :src="imagePath(block.file)"
              :alt="block.alt"
              loading="lazy"
              class="story-image object-top"
            />
            <figcaption
              v-if="block.caption"
              class="mt-3 text-center text-xs leading-relaxed text-secondary"
            >
              {{ block.caption }}
            </figcaption>
          </figure>
          <div v-else class="story-gallery">
            <NuxtImg
              v-for="image in block.images"
              :key="image.file"
              :src="imagePath(image.file)"
              :alt="image.alt"
              loading="lazy"
              class="story-image object-top"
            />
          </div>
        </template>
      </section>
    </article>
  </div>
</template>

<style scoped>
.story-section {
  margin-top: 4rem;
  scroll-margin-top: 10rem;
}
.story-section > * + * {
  margin-top: 1.25rem;
}
.story-section h2 {
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: -0.025em;
}
.story-section p {
  max-width: 42rem;
  color: var(--secondary);
  font-size: 1rem;
  line-height: 1.8;
}
.story-image {
  display: block;
  width: 100%;
  aspect-ratio: 5 / 3;
  object-fit: cover;
  border: 1px solid var(--border);
  border-radius: 0.75rem;
}
.story-gallery {
  display: grid;
  gap: 1.25rem;
}
a:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 4px;
}
@media (min-width: 640px) {
  .story-section {
    margin-top: 5rem;
  }
}
@media (min-width: 1280px) {
  .story-section {
    scroll-margin-top: 5rem;
  }
}
</style>
