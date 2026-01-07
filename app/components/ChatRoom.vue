<script setup>
const client = useSupabaseClient();
const user = useSupabaseUser();
const messages = ref([]);
const isLoading = ref(true);
const inputMessage = ref("");
const chatContainer = ref(null);
const isLoggingIn = ref(null);
const config = useRuntimeConfig();

const AUTHOR_ID = config.public.authorId;

const scrollToBottom = () => {
  nextTick(() => {
    if (chatContainer.value)
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  });
};

const formatTime = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const now = new Date();

  const isToday =
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();

  if (isToday) {
    return date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });
  } else {
    return date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }
};

const fetchMessages = async () => {
  isLoading.value = true;
  try {
    const { data } = await client
      .from("messages")
      .select("*")
      .order("created_at", { ascending: true });
    if (data) {
      messages.value = data;
      scrollToBottom();
    }
  } finally {
    isLoading.value = false;
  }
};

const sendChat = async () => {
  if (!inputMessage.value.trim() || !user.value) return;

  await client.from("messages").insert({
    content: inputMessage.value,
    user_id: user.value.sub,
    user_name: user.value.user_metadata.full_name || user.value.email,
    user_avatar: user.value.user_metadata.avatar_url,
  });
  inputMessage.value = "";
};

onMounted(() => {
  fetchMessages();
  client
    .channel("public:messages")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "messages" },
      (payload) => {
        messages.value.push(payload.new);
        scrollToBottom();
      }
    )
    .subscribe();
});

const handleLogin = async (provider) => {
  isLoggingIn.value = provider;
  try {
    const { error } = await client.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: window.location.origin + "/chat",
      },
    });
    if (error) throw error;
  } catch (error) {
    console.error(error);
    isLoggingIn.value = null;
  }
};

const handleLogout = async () => {
  await client.auth.signOut();
};
</script>

<template>
  <div
    class="flex flex-col max-h-[calc(100vh-80px)] md:min-h-[calc(100vh-48px)] w-full"
  >
    <div
      class="p-4 flex justify-between items-center bg-light-contrast-2 dark:bg-dark-5 gap-2 rounded-t-xl"
    >
      <div class="flex flex-col gap-0.5">
        <h2
          class="text-dark-contrast-4 dark:text-light-1 font-bold tracking-tighter text-base"
        >
          Chat Room
        </h2>
        <span
          v-if="user"
          class="text-xs text-dark-contrast-3 dark:text-light-5"
          >{{ user.user_metadata.full_name }}</span
        >
      </div>

      <button
        v-if="user"
        @click="handleLogout"
        class="flex gap-1 cursor-pointer items-center justify-center w-fit bg-red-light hover:bg-red-contrast-light dark:bg-red-dark dark:hover:bg-red-contrast-dark transition-all duration-300 ease-in-out text-light-1 rounded-md h-8 px-2.5 text-xs font-semibold"
      >
        <Icon name="solar:logout-linear" size="14" />
        Logout
      </button>
    </div>

    <div
      ref="chatContainer"
      class="flex-1 overflow-y-auto p-4 space-y-2 flex flex-col"
    >
      <LoadingLogin v-if="isLoggingIn" :type="isLoggingIn" />
      <LoadingChat v-else-if="isLoading" />
      <template v-else>
        <div
          v-for="(m, index) in messages"
          :key="m.id || index"
          :class="[
            'flex items-start gap-2 max-w-[85%]',
            m.user_id === user?.sub
              ? 'self-end flex-row-reverse'
              : 'self-start',
          ]"
        >
          <NuxtImg
            :src="
              m.user_avatar || 'https://ui-avatars.com/api/?name=' + m.user_name
            "
            class="size-8 rounded-full object-cover border dark:border-light-4 border-dark-contrast-5 mt-1"
            alt="avatar"
          />

          <div
            :class="[
              'flex flex-col',
              m.user_id === user?.sub ? 'items-end' : 'items-start',
            ]"
          >
            <span
              v-if="m.user_id !== user?.sub"
              class="text-xs text-dark-3 dark:text-light-3 mb-1 flex items-center gap-1"
            >
              {{ m.user_name }}
              <span
                v-if="m.user_id === AUTHOR_ID"
                class="bg-blue-dark dark:bg-blue-light/50 text-light-1 px-1.5 h-4 rounded-full font-semibold text-[8px] flex items-center justify-center"
                >AUTHOR</span
              >
            </span>

            <div
              :class="[
                'px-4 py-2 rounded-2xl text-sm',
                'break-all overflow-hidden whitespace-pre-wrap',
                m.user_id === user?.sub
                  ? 'bg-blue-light dark:bg-blue-dark text-light-1 rounded-br-none'
                  : 'bg-light-contrast-2 dark:bg-dark-contrast-5 text-dark-6 dark:text-light-1 rounded-tl-none',
              ]"
            >
              {{ m.content }}
            </div>

            <span class="text-[10px] text-dark-3 dark:text-light-3 mt-1 px-1">
              {{ formatTime(m.created_at) }}
            </span>
          </div>
        </div>
      </template>
    </div>

    <div v-if="user" class="p-2">
      <form
        @submit.prevent="sendChat"
        class="flex items-center gap-3 bg-light-contrast-2 dark:bg-dark-4 rounded-lg px-2 py-1.5"
      >
        <input
          v-model="inputMessage"
          type="text"
          placeholder="Enter your message"
          class="flex-1 bg-transparent py-2 ps-1.5 focus:outline-none text-sm text-dark-6 dark:text-light-1"
        />
        <button
          type="submit"
          :class="[
            'size-8 rounded-md flex justify-center items-center transition-all duration-300 ease-in-out',
            inputMessage
              ? 'cursor-pointer bg-blue-light hover:bg-blue-contrast-light dark:bg-blue-dark dark:hover:bg-blue-contrast-dark text-white'
              : 'bg-light-contrast-4 dark:bg-dark-3 text-white cursor-not-allowed',
          ]"
        >
          <Icon name="solar:arrow-up-linear" size="20" />
        </button>
      </form>
    </div>

    <div
      v-else-if="!user && !isLoggingIn"
      class="flex flex-col items-center justify-center w-full p-4 gap-4"
    >
      <p class="text-center text-sm text-dark-5 dark:text-light-1">
        Join the conversation! Please log in to start chatting with others.
      </p>
      <div class="flex flex-col md:flex-row w-full justify-center gap-3">
        <button
          @click="handleLogin('github')"
          class="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 h-10 rounded-lg hover:bg-black transition-all ease-in-out duration-300 text-sm font-medium"
        >
          <Icon name="logos:github-icon" size="16" class="invert" />
          Continue with GitHub
        </button>
        <button
          @click="handleLogin('google')"
          class="flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 h-10 rounded-lg hover:bg-gray-50 transition-all ease-in-out duration-300 text-sm font-medium"
        >
          <Icon name="logos:google-icon" size="16" />
          Continue with Google
        </button>
      </div>
    </div>
  </div>
</template>
