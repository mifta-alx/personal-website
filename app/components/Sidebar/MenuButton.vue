<script setup lang="ts">
const route = useRoute();

const props = defineProps({
  href: {
    type: String,
    default: "#",
    required: true,
  },
  icon: {
    type: [String, null],
    default: null,
  },
  target: {
    type: String,
    default: "_self",
  },
});

const isActive = computed(() => {
  if (props.href === "/") {
    return route.path === "/";
  }
  return route.path.startsWith(props.href);
});
</script>

<template>
  <NuxtLink
    :to="href"
    :target="target"
    :class="
      cn(
        isActive ? 'text-primary bg-secondary/5' : 'text-secondary',
        'group inline-flex gap-2.5 w-full h-10 items-center justify-start tracking-wide shrink-0 overflow-hidden hover:scale-[1.04] rounded-lg py-2 px-3 text-left text-base text-nowrap transition-all duration-300 ease-in-out outline-none',
        'focus-visible:bg-secondary/5 focus-visible:text-primary hover:bg-secondary/5 hover:text-primary',
      )
    "
  >
    <Icon v-if="icon" :name="icon" class="size-5.5" />
    <slot />
  </NuxtLink>
</template>
