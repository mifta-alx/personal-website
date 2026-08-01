<script setup lang="ts">
import type { StackItem } from "~/types/stack";

const props = defineProps<{
  items: StackItem[];
}>();

const emptySlots = computed(() => {
  const remainder = props.items.length % 4;
  return remainder === 0 ? 0 : 4 - remainder;
});
</script>

<template>
  <div
    class="grid grid-cols-2 lg:grid-cols-4 rounded-2xl border-t border-l border-r border-secondary/10 bg-background overflow-hidden"
  >
    <StackItem v-for="(item, index) in items" :key="index" :url="item.href" :icon="item.icon" :label="item.name" />

    <template v-if="emptySlots > 0">
      <div
        v-for="i in emptySlots"
        :key="`empty-${i}`"
        class="hidden lg:block bg-background border-b border-secondary/10 border-r lg:nth-[4n]:border-r-0"
      />
    </template>
  </div>
</template>
