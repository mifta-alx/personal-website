<script lang="ts" setup>
import { sendContactInquiry } from "~/services/contact.service";

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const isSubmitting = ref(false);
const statusMsg = ref("");
const toastType = ref<"success" | "error">("success");
const showToast = ref(false);

const handleSubmit = async () => {
  if (
    !formData.value.name ||
    !formData.value.email ||
    !formData.value.message
  ) {
    statusMsg.value = "Please fill in all fields.";
    toastType.value = "error";
    showToast.value = true;
    return;
  }

  isSubmitting.value = true;

  try {
    const res = await sendContactInquiry(formData.value);

    statusMsg.value = res.message || "Message sent successfully!";
    toastType.value = "success";
    showToast.value = true;

    // Reset Form
    formData.value = { name: "", email: "", message: "" };
  } catch (err: any) {
    statusMsg.value =
      err?.data?.message ||
      err?.statusText ||
      "An error occurred while sending your message.";
    toastType.value = "error";
    showToast.value = true;
  } finally {
    isSubmitting.value = false;
  }
};
</script>
<template>
  <div>
    <ToastIsland
      :show="showToast"
      :message="statusMsg"
      :type="toastType"
      @close="showToast = false"
    />
    <form @submit.prevent="handleSubmit" class="grid grid-cols-2 gap-4">
      <FormInput
        id="name"
        required
        v-model="formData.name"
        label="Name"
        placeholder="e.g. Arthur Conan Doyle"
        autocomplete="name"
        containerClass="col-span-2 sm:col-span-1"
      />
      <FormInput
        id="email"
        required
        v-model="formData.email"
        type="email"
        label="Email"
        placeholder="e.g. arthur@example.com"
        autocomplete="email"
        containerClass="col-span-2 sm:col-span-1"
      />
      <FormTextarea
        id="message"
        v-model="formData.message"
        label="Message"
        placeholder="What's on your mind? Share your project ideas, scope, or just say hi!"
        container-class="col-span-2"
        :rows="6"
        required
      />

      <div class="col-span-2 mt-2">
        <button
          type="submit"
          :disabled="isSubmitting"
          class="flex items-center justify-center w-full sm:w-36 px-4 bg-primary text-background hover:bg-primary/90 cursor-pointer rounded-full h-11.5 text-sm font-medium tracking-tight duration-300 transition-all ease-in-out outline-none focus:ring-1 focus-visible:ring-border disabled:bg-primary/50 disabled:cursor-not-allowed active:scale-98"
        >
          <template v-if="isSubmitting">
            <Icon name="svg-spinners:ring-resize" class="size-4.5" />
          </template>
          <template v-else> Send message </template>
        </button>
      </div>
    </form>
  </div>
</template>
