<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    likes?: number;
    liked?: boolean;
    class?: string;
    theme?: string;
  }>(),
  {
    likes: 0,
    liked: false,
  },
);

const emit = defineEmits<{
  (e: "toggle"): void;
}>();

const isLiked = ref(props.liked);
const totalLikes = ref(props.likes);

watch(
  () => props.liked,
  (newVal) => {
    isLiked.value = newVal;
  },
);

watch(
  () => props.likes,
  (newVal) => {
    totalLikes.value = newVal;
  },
);

const handleLike = () => {
  if (isLiked.value) {
    totalLikes.value = Math.max(0, totalLikes.value - 1);
    isLiked.value = false;
  } else {
    totalLikes.value += 1;
    isLiked.value = true;
  }

  emit("toggle");
};
</script>

<template>
  <button
    :class="
      cn(
        'group/likes inline-flex gap-1.5 cursor-pointer items-center',
        props.class,
      )
    "
    @click="handleLike"
  >
    <Icon
      name="ph:heart-fill"
      :class="
        cn(
          'group-hover/likes:scale-110 group-active/likes:scale-90 size-4.5 sm:size-5 transition-all duration-200 ease-out sm:shadow-sm',
          isLiked
            ? 'bg-red-500'
            : props.theme === 'light'
              ? 'bg-background/30'
              : 'bg-primary/70',
        )
      "
    />
    <span
      :class="
        cn(
          'text-base font-medium tracking-tight',
          props.theme === 'light'
            ? 'text-background sm:[text-shadow:0_1px_2px_rgba(0,0,0,0.12)]'
            : 'text-primary sm:[text-shadow:0_1px_3px_rgba(0,0,0,0.45)]',
        )
      "
      >{{ totalLikes }}</span
    >
  </button>
</template>
