<script lang="ts" setup>
const props = defineProps({
  delay: {
    type: Number,
    default: 200,
  },
  duration: {
    type: Number,
    default: 1000,
  },
  class: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, filter: 'blur(10px)', y: 20 }"
    :enter="{
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: props.duration,
        type: 'keyframes',
        ease: 'easeOut',
        delay: props.delay,
      },
    }"
    :class="class"
  >
    <slot />
  </div>
</template>
