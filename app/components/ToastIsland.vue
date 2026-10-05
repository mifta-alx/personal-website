<script setup lang="ts">
const props = defineProps<{
  show: boolean;
  message: string;
  type: "success" | "error";
}>();

const emit = defineEmits(["close"]);

const isVisible = ref(false);
const isAnchored = ref(false);
const showText = ref(false);

watch(
  () => props.show,
  (v) => {
    if (v) {
      isVisible.value = true;
      setTimeout(() => {
        isAnchored.value = true;
      }, 50);

      setTimeout(() => {
        showText.value = true;
      }, 800);

      setTimeout(() => {
        emit("close");
      }, 3000);
    } else {
      showText.value = false;

      setTimeout(() => {
        isAnchored.value = false;
      }, 350);

      setTimeout(() => {
        isVisible.value = false;
      }, 850);
    }
  },
  { immediate: true },
);
</script>

<template>
  <div
    v-if="isVisible"
    class="fixed top-16 md:top-8 left-0 right-0 flex justify-center z-99 pointer-events-none"
  >
    <div
      class="flex items-center p-1 overflow-hidden transition-all duration-500 shadow-2xl rounded-full border border-secondary/10 bg-sidebar text-primary pointer-events-auto"
      :class="[
        isAnchored
          ? 'translate-y-0 opacity-100 scale-100'
          : '-translate-y-24 opacity-0 scale-50',
      ]"
    >
      <div
        class="flex items-center justify-center rounded-full shrink-0 size-8 text-white shadow-sm"
        :class="type === 'success' ? 'bg-emerald-600' : 'bg-red-600'"
      >
        <Icon
          :name="type === 'success' ? 'ph:check-bold' : 'ph:x-bold'"
          class="size-4"
        />
      </div>

      <div
        class="grid transition-[grid-template-columns] duration-300 ease-in-out"
        :class="showText ? 'grid-cols-[1fr]' : 'grid-cols-[0fr]'"
      >
        <div class="overflow-hidden">
          <span
            class="block px-3 text-sm font-medium tracking-tight whitespace-nowrap"
          >
            {{ message }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
