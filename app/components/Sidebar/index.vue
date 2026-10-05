<script setup lang="ts">
const isMobileOpen = ref(false);

const toggle = () => {
  isMobileOpen.value = !isMobileOpen.value;
};

const close = () => {
  isMobileOpen.value = false;
};

const route = useRoute();
watch(
  () => route.fullPath,
  () => {
    close();
  },
);
</script>
<template>
  <header
    :class="
      cn(
        'xl:hidden fixed top-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full',
        isMobileOpen ? 'bg-sidebar' : 'bg-background',
        'py-5 lg:py-6',
      )
    "
  >
    <div class="flex items-center justify-between w-full max-w-3xl px-5 lg:px-10">
      <ColorModeToggle />
      <button
        type="button"
        :class="
          cn(
            'size-10 flex items-center justify-center rounded-xl border transition-all cursor-pointer outline-none active:scale-90 duration-300',
            'border-secondary/5 bg-secondary/10 hover:bg-secondary/15',
            'focus-visible:ring-2 focus-visible:ring-secondary/30 [&_svg]:pointer-events-none [&_svg]:shrink-0',
          )
        "
        aria-label="Toggle Menu"
        @click="toggle"
      >
        <div class="relative size-5 flex flex-col justify-center items-center">
          <div
            class="h-0.5 w-5 bg-secondary/50 rounded-full transition-all duration-300 ease-in-out absolute"
            :class="isMobileOpen ? 'rotate-45' : '-translate-y-1'"
          />
          <div
            class="h-0.5 w-5 bg-secondary/50 rounded-full transition-all duration-300 ease-in-out absolute"
            :class="isMobileOpen ? '-rotate-45' : 'translate-y-1'"
          />
        </div>
      </button>
    </div>

    <div
      class="w-full grid transition-[grid-template-rows,opacity] duration-300 ease-in-out xl:hidden"
      :class="[
        isMobileOpen
          ? 'grid-rows-[1fr] opacity-100 pointer-events-auto h-screen'
          : 'grid-rows-[0fr] opacity-0 pointer-events-none',
      ]"
    >
      <div class="overflow-hidden">
        <nav
          class="flex flex-col gap-10 max-w-3xl mx-auto pt-8 lg:pt-10 px-5 lg:px-10"
        >
          <slot />
        </nav>
      </div>
    </div>
  </header>

  <aside
    class="hidden xl:flex w-xs border-r border-secondary/10 px-6 pb-6 pt-10 flex-col justify-between shrink-0 h-screen sticky top-0 bg-sidebar"
  >
    <nav class="flex flex-col gap-10">
      <slot />
    </nav>
  </aside>
</template>
