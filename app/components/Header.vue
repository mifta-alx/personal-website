<script setup lang="ts">
const items = [
  {
    title: "Home",
    url: "/",
    icon: "solar:home-2-bold",
  },
  {
    title: "About",
    url: "#home",
    icon: "solar:wallet-bold",
  },
  {
    title: "Resume",
    url: "#budgets",
    icon: "solar:pie-chart-2-bold",
  },
];
</script>

<template>
  <div class="mx-auto flex max-w-[910px] items-center justify-between px-5 pt-5 transition-[padding] duration-300 ease-out sm:px-6 sm:pt-8">
  <nav class="sticky top-0 left-0 right-0 z-99 w-full">
    <BottomTabNavigator :items="items">
      <BottomTabItem
        v-for="(item, index) in items"
        :key="index"
        :icon="item.icon"
        :href="item.url"
      >
        {{ item.title }}
      </BottomTabItem>
    </BottomTabNavigator>
    <ActionButton />
  </nav>
  </div>
</template>
