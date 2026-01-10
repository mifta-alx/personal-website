<script setup lang="ts">
definePageMeta({
  layout: "landing-page",
});
useSeoMeta({
  title: "Hire Me | Miftakhussurur Al Maliki",
  ogTitle: "Hire Me | Miftakhussurur Al Maliki",
  description: "Hire Me Miftakhussurur Al Maliki.",
  ogDescription: "Hire Me Miftakhussurur Al Maliki.",
});

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const { execute, status, error } = await useFetch("/api/hire", {
  method: "POST",
  body: formData,
  watch: false,
  immediate: false,
});

const handleSubmit = async () => {
  await execute();
};

const getFieldError = (fieldName: string) => {
  return error.value?.data?.data?.errors[fieldName];
};
</script>

<template>
  <Content>
    <StatusHeader title="Hire Me" />
    <div class="flex flex-col gap-6 pt-6 pb-4 md:p-0">
      <BlurReveal>
        <div class="flex flex-col">
          <h1
            class="text-dark-contrast-6 dark:text-light-1 font-bold tracking-tighter text-2xl"
          >
            Development Inquiry
          </h1>
          <p
            class="text-dark-contrast-3 dark:text-light-6 font-medium text-sm mt-2 leading-6"
          >
            Need help turning a design into a high-performance web application?
            Let's build it together.
          </p>
        </div>
      </BlurReveal>
      <form @submit.prevent="handleSubmit" class="grid grid-cols-2 gap-2.5">
          <input
            v-model="formData.name"
            type="text"
            placeholder="Name"
            class="bg-light-2 dark:bg-dark-5 rounded-md px-3.5 py-3 focus:outline-none text-sm text-dark-6 dark:text-light-1"
          />
        <input
          v-model="formData.email"
          type="text"
          placeholder="Email"
          class="bg-light-2 dark:bg-dark-5 rounded-md px-3.5 py-3 focus:outline-none text-sm text-dark-6 dark:text-light-1"
        />
        <div class="col-span-2">
          <textarea
            v-model="formData.message"
            rows="10"
            placeholder="Message"
            class="w-full h-full bg-light-2 dark:bg-dark-5 rounded-md px-3.5 py-3 focus:outline-none text-sm text-dark-6 dark:text-light-1"
          />
        </div>
        <div class="col-span-2">
          <button
            class="w-full text-light-1 bg-dark-6 hover:bg-dark-contrast-5 dark:bg-dark-contrast-4 dark:hover:bg-dark-contrast-5 rounded-md h-10 text-sm font-medium tracking-tight duration-300 transition-all ease-in-out"
          >
            Submit Inquiry
          </button>
        </div>
      </form>
    </div>
  </Content>
</template>
