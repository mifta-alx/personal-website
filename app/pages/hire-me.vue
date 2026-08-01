<script setup lang="ts">
definePageMeta({
  layout: "main-layout",
});
useSeoMeta({
  title: "Hire Me - Miftakhussurur Al Maliki",
  ogTitle: "Hire Me - Miftakhussurur Al Maliki",
 description: "Interested in working together? Reach out to Miftakhussurur Al Maliki for collaborations, job opportunities, or just to say hello. Let's build something amazing together!",
  ogDescription: "Interested in working together? Reach out to Miftakhussurur Al Maliki for collaborations, job opportunities, or just to say hello. Let's build something amazing together.",});

const formData = ref({
  name: "",
  email: "",
  message: "",
});
const statusMsg = ref("");
const toastType = ref<"success" | "error">("success");
const showToast = ref(false);
const { execute, status } = await useFetch("/api/hire", {
  method: "POST",
  body: formData,
  watch: false,
  immediate: false,
  onResponse({ response }) {
    if (response.ok) {
      statusMsg.value = "Message sent successfully!";
      toastType.value = "success";
      showToast.value = true;
      formData.value = { name: "", email: "", message: "" };
    }
  },
  onResponseError({ response }) {
    statusMsg.value =
      response.statusText || response._data?.message || "An error occurred";
    toastType.value = "error";
    showToast.value = true;
  },
});

const handleSubmit = async () => {
  if (status.value === "pending") return;
  await execute();
};
</script>

<template>
  <ToastIsland
    :show="showToast"
    :message="statusMsg"
    :type="toastType"
    @close="showToast = false"
  />
  <Content>
    <StatusHeader title="Hire Me" />
    <div class="flex flex-col gap-6 md:gap-10 pt-6 pb-4 md:p-0">
      <BlurReveal>
        <div class="flex flex-col">
          <h1
            class="text-dark-contrast-6 dark:text-light-1 font-bold tracking-tighter text-3xl"
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
      <BlurReveal :delay="500">
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
            rows="12"
            placeholder="Message"
            class="w-full h-full bg-light-2 dark:bg-dark-5 rounded-md px-3.5 py-3 focus:outline-none text-sm text-dark-6 dark:text-light-1"
          />
        </div>
        <div class="col-span-2">
          <button
            :disabled="status === 'pending'"
            class="w-full text-light-1 bg-dark-6 hover:bg-dark-contrast-5 dark:bg-dark-contrast-4 dark:hover:bg-dark-contrast-5 rounded-md h-10 text-sm font-medium tracking-tight duration-300 transition-all ease-in-out"
          >
            <template v-if="status === 'pending'">
              <Icon name="svg-spinners:ring-resize" size="18" />
            </template>
            <template v-else> Submit Inquiry </template>
          </button>
        </div>
      </form>
      </BlurReveal>
    </div>
  </Content>
</template>