<script lang="ts" setup>
 const props = defineProps({
    type: {
      type: String,
      default: "github",
    },
  })
</script>
<template>
    <div class="flex-col items-center justify-center gap-2 flex h-[calc(100svh-20px)] ">
      <Icon :name="`logos:${props.type}-icon`" size="48" :class="props.type === 'github' ? 'invert' : ''" />
      <span class="text-lg text-dark-5 dark:text-light-1 font-semibold">Connecting...</span>
    </div>
</template>