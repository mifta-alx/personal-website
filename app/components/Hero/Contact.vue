<script setup lang="ts">
const isOpen = ref(false);
const copied = ref(false);
const cardRef = ref<HTMLElement | null>(null);

const siteStore = useSiteStore();
const intro = computed(() => siteStore.getIntro);
const {email, linkedinUrl, linkedinId} = intro.value;

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const close = () => {
  isOpen.value = false;
};

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error("Failed to copy email:", err);
  }
};

const handleClickOutside = (event: MouseEvent) => {
  if (
    isOpen.value &&
    cardRef.value &&
    !cardRef.value.contains(event.target as Node)
  ) {
    close();
  }
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Escape" && isOpen.value) {
    close();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
  document.removeEventListener("click", handleClickOutside);
});

const buttonClass = "group/row flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-left transition-colors hover:bg-secondary/20 cursor-pointer"
</script>

<template>
  <div class="relative w-30 h-10 shrink-0">
    <div
      id="hero-contact"
      ref="cardRef"
      :class="
        cn(
          isOpen
            ? 'w-76 h-44 rounded-3xl shadow-2xl'
            : 'w-30 h-10 rounded-[20px]',
          'absolute duration-380 left-0 top-0 z-30 overflow-hidden bg-primary text-background transition-[width,height,border-radius] outline-none has-focus-visible:outline-2 has-focus-visible:outline-offset-2',
        )
      "
      style="transition-timing-function: cubic-bezier(0.34, 1.12, 0.64, 1)"
    >
      <button
        type="button"
        :aria-expanded="isOpen"
        aria-controls="contact-details-popup"
        :tabindex="isOpen ? -1 : 0"
        :class="
          cn(
            isOpen
              ? 'opacity-0 blur-[2px] pointer-events-none'
              : 'opacity-100 blur-0',
            'absolute inset-0 flex items-center justify-center gap-1.5 text-base font-medium outline-none transition-[opacity,filter] duration-200 ease-out cursor-pointer',
          )
        "
        @click="toggleOpen"
      >
        <span class="-ml-1 flex">
          <Icon name="ph:paper-plane-tilt-fill" class="size-3.5" />
        </span>
        Contact
      </button>

      <div
        id="contact-details-popup"
        :aria-hidden="!isOpen"
        :class="
          cn(
            isOpen
              ? 'opacity-100 blur-0 pointer-events-auto'
              : 'opacity-0 blur-[2px] pointer-events-none',
            'absolute inset-0 flex flex-col justify-center gap-1.5 p-3 transition-[opacity,filter] delay-75 duration-200 ease-out',
          )
        "
      >
        <div class="flex items-center justify-between px-3 pb-1">
          <p class="text-xs font-medium tracking-tight text-secondary">
            Get in touch
          </p>
          <button
            type="button"
            :tabindex="isOpen ? 0 : -1"
            aria-label="Close"
            class="text-secondary transition-colors hover:text-background cursor-pointer duration-200"
            @click="close"
          >
            <Icon name="ph:x-bold" class="size-3.5" />
          </button>
        </div>

        <button
          type="button"
          :tabindex="isOpen ? 0 : -1"
          :class="buttonClass"
          @click="copyEmail"
        >
          <span class="flex min-w-0 flex-col">
            <span class="text-[11px] tracking-tight text-secondary">Email</span>
            <span class="truncate text-sm font-medium tracking-tight">{{
              email
            }}</span>
          </span>

          <span
            class="relative size-4 shrink-0 text-background/55 transition-colors group-hover/row:text-background"
          >
            <span
              :class="
                cn(
                  copied
                    ? 'scale-90 opacity-0 blur-[2px]'
                    : 'scale-100 opacity-100 blur-0',
                  'absolute inset-0 transition-[opacity,filter,transform] duration-200 ease-out',
                )
              "
            >
              <Icon name="ph:copy-fill" class="size-4" />
            </span>

            <span
              class="absolute inset-0 transition-[opacity,filter,transform] duration-200 ease-out"
              :class="
                cn(
                  copied
                    ? 'scale-100 opacity-100 blur-0'
                    : 'scale-90 opacity-0 blur-[2px]',
                  'absolute inset-0 transition-[opacity,filter,transform] duration-200 ease-out',
                )
              "
            >
              <Icon name="ph:check-circle-fill" class="size-4" />
            </span>
          </span>
        </button>

        <a
          :href="linkedinUrl"
          target="_blank"
          rel="noreferrer"
          :tabindex="isOpen ? 0 : -1"
          :class="buttonClass"
        >
          <span class="flex min-w-0 flex-col">
            <span class="text-[11px] tracking-tight text-secondary"
              >LinkedIn</span
            >
            <span class="truncate text-sm font-medium tracking-tight">{{
              linkedinId
            }}</span>
          </span>
          <span
            class="relative size-4 shrink-0 text-background/55 transition-colors group-hover/row:text-background"
          >
            <Icon name="ph:arrow-square-out" class="size-4" />
          </span>
        </a>
      </div>
    </div>
  </div>
</template>
