<script lang="ts" setup>
const props = defineProps({
  class: {
    type: String,
    default: "",
  },
  delay: {
    type: Number,
    default: 0,
  },
  // Stiffness: seberapa "keras" pernya. Semakin tinggi semakin cepat mantulnya.
  stiffness: {
    type: Number,
    default: 250,
  },
  // Damping: seberapa cepat pantulannya berhenti.
  damping: {
    type: Number,
    default: 15,
  },
  // Skala awal sebelum membesar
  initialScale: {
    type: Number,
    default: 0.5,
  }
})
</script>

<template>
  <div
    v-motion
    :initial="{ 
      opacity: 0, 
      scale: props.initialScale,
      y: 20 
    }"
    :enter="{
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: props.stiffness,
        damping: props.damping,
        delay: props.delay,
      },
    }"
    :class="class"
  >
    <slot />
  </div>
</template>