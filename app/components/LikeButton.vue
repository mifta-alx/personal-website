<script lang="ts" setup>
const props = defineProps<{
  likes?: number | 0;
  liked?: boolean;
}>();

const isLiked = ref(props.liked ?? false);
const totalLikes = ref(props.likes ?? 0);

const handleLike = () => {
  if (isLiked.value === true) {
    totalLikes.value -= 1;
    isLiked.value = false;
    return;
  }

  isLiked.value = true;
  totalLikes.value += 1;

  // emit('update', { liked: isLiked.value, count: count.value });
};
</script>

<template>
  <button class="group inline-flex gap-1.5 cursor-pointer items-center" @click="handleLike">
    <Icon
      name="solar:heart-bold"
      :class="
        cn(
          'group-hover:scale-115 size-5 transition-[colors, transform] duration-300',
          isLiked ? 'bg-red-500' : 'bg-secondary',
        )
      "
    />
    <span class="text-base font-medium tracking-tight text-primary">{{ totalLikes }}</span>
  </button>
</template>
