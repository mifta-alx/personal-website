<script setup lang="ts">
const modelValue = defineModel<string>({ default: "" });

defineProps<{
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autocomplete?: string;
  class?: string;
  containerClass?: string;
}>();
</script>

<template>
  <div :class="cn('flex flex-col gap-2', containerClass)">
    <label :for="id" class="text-sm font-medium text-secondary/90 ml-0.5">
      {{ label }}
    </label>

    <input
      :id="id"
      :name="id"
      v-model="modelValue"
      :type="type || 'text'"
      :placeholder="placeholder"
      :required="required"
      :autocomplete="autocomplete"
      :class="
        cn(
          'bg-secondary/6 rounded-xl px-3.5 py-3 h-12  outline-none text-sm text-primary placeholder:text-secondary/60 focus:ring-1 focus:ring-border transition-all',
          $props.class,
        )
      "
    />
  </div>
</template>
