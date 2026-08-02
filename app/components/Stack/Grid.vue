<script setup lang="ts">
import type { StackItem } from "~/types/stack";

const props = defineProps<{
  items: StackItem[];
}>();

// Menghitung slot kosong agar grid tetap terisi penuh di desktop (kelipatan 4)
const emptySlots = computed(() => {
  const remainder = props.items.length % 4;
  return remainder === 0 ? 0 : 4 - remainder;
});
</script>

<template>
  <!-- Container utama memegang border luar & background border (bg-secondary/10) -->
  <div
    class="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl border border-border/60 bg-background overflow-hidden"
  >
    <StackItem
      v-for="(item, index) in items"
      :key="index"
      :url="item.href"
      :icon="item.icon"
      :label="item.name"
    />

    <!-- Empty slot otomatis mewarisi bg-background sehingga celah gap-[1px] jadi border -->
    <template v-if="emptySlots > 0">
      <div
        v-for="i in emptySlots"
        :key="`empty-${i}`"
        class="hidden lg:block bg-background border-b border-r border-border/60 -mb-px -mr-px"
      />
    </template>
  </div>
</template>
