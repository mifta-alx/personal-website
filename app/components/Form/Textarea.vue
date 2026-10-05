<script setup lang="ts">
const modelValue = defineModel<string>({ default: "" });

withDefaults(
  defineProps<{
    id: string;
    label: string;
    placeholder?: string;
    rows?: number;
    class?: string;
    containerClass?: string;
  }>(),
  {
    rows: 6,
  },
);
</script>

<template>
  <div :class="cn('flex flex-col gap-2', containerClass)">
    <label :for="id" class="text-sm font-medium text-secondary/90 ml-0.5">
      {{ label }}
    </label>

    <textarea
      :id="id"
      :name="id"
      v-model="modelValue"
      :rows="rows"
      :placeholder="placeholder"
      :class="
        cn(
          'w-full bg-secondary/8 rounded-xl px-3.5 py-3 outline-none text-sm text-primary placeholder:text-secondary/60 focus:ring-1 focus:ring-border transition-all resize-y',
          $props.class,
        )
      "
    />
  </div>
</template>
