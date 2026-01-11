<script setup>
const client = useSupabaseClient();
const user = useSupabaseUser();
const messages = ref([]);
const isLoading = ref(true);
const inputMessage = ref("");
const replyingTo = ref(null);
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

const setReply = (message) => {
  replyingTo.value = {
    id: message.id,
    content: message.content,
    user_name: message.user_name,
  };

  // Fokus ke input otomatis
  const input = document.querySelector('input[type="text"]');
  if (input) input.focus();
};

const cancelReply = () => {
  replyingTo.value = null;
};

const sendChat = async () => {
  if (!inputMessage.value.trim() || !user.value) return;

  const messageData = {
    content: inputMessage.value,
    user_id: user.value.sub,
    user_name: user.value.user_metadata.full_name || user.value.email,
    user_avatar: user.value.user_metadata.avatar_url,
    // Tambahkan field reply (Pastikan kolom ini ada di tabel Supabase kamu)
    reply_to_id: replyingTo.value?.id || null,
    reply_to_name: replyingTo.value?.user_name || null,
    reply_to_content: replyingTo.value?.content || null,
  };

  await client.from("messages").insert(messageData);
  inputMessage.value = "";
  replyingTo.value = null;
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
    class="flex flex-col max-h-[calc(100vh-80px)] min-h-[calc(100svh-280px)] md:min-h-[calc(100vh-48px)] w-full"
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
        class="flex gap-1 cursor-pointer items-center justify-center w-fit bg-red-light hover:bg-red-contrast-light dark:bg-red-dark dark:hover:bg-red-contrast-dark transition-all duration-300 ease-in-out text-light-1 rounded-md h-8 px-3 text-xs font-semibold"
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
                'inline-flex flex-col p-1 rounded-xl text-sm group relative max-w-2xs sm:max-w-md md:max-w-xs lg:max-w-lg',
                'wrap-break-words',
                m.user_id === user?.sub
                  ? 'bg-blue-light dark:bg-blue-dark text-light-1 rounded-tr-none'
                  : 'bg-light-contrast-2 dark:bg-dark-contrast-5 text-dark-6 dark:text-light-1 rounded-tl-none',
              ]"
            >
              <div
                v-if="m.reply_to_content"
                class="min-w-0 flex-1 flex flex-col mb-1 p-2 rounded-lg bg-black/20 border-l-4 border-light-1 text-xs"
              >
                <p class="font-semibold text-light-1">{{ m.reply_to_name }}</p>
                <p class="truncate">{{ m.reply_to_content }}</p>
              </div>
              <div class="px-2 py-1">
                {{ m.content }}
              </div>

              <button
                v-if="user"
                @click="setReply(m)"
                class="absolute top-1/2 cursor-pointer -translate-y-1/2 md:opacity-0 md:group-hover:opacity-100 transition-opacity p-1 text-dark-3 hover:bg-dark-4 rounded-full dark:text-light-3 flex items-center justify-center"
                :class="
                  m.user_id === user?.sub
                    ? '-left-8 right-auto scale-x-[-1]'
                    : '-right-8'
                "
              >
                <Icon name="solar:reply-linear" size="18" />
              </button>
            </div>

            <span class="text-[10px] text-dark-3 dark:text-light-3 mt-1 px-1">
              {{ formatTime(m.created_at) }}
            </span>
          </div>
        </div>
      </template>
    </div>

    <div
      v-if="user"
      class="grid transition-[grid-template-rows] duration-200 ease-in-out"
      :class="replyingTo ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
    >
      <div class="overflow-hidden">
        <div
          v-if="replyingTo"
          class="pt-2 px-2 border-t border-light-3 dark:border-dark-4 flex gap-4 items-center w-full min-w-0 bg-light-contrast-2 dark:bg-dark-5"
        >
          <div
            class="flex-1 w-0 flex flex-col bg-light-contrast-1 dark:bg-dark-4 rounded-md py-2 px-2 border-l-4 border-blue-light dark:border-blue-dark"
          >
            <p
              class="text-blue-light dark:text-blue-dark text-xs font-semibold"
            >
              {{ replyingTo.user_name }}
            </p>

            <p class="text-dark-3 dark:text-light-3 text-xs truncate">
              {{ replyingTo.content }}
            </p>
          </div>

          <button
            @click="cancelReply"
            class="shrink-0 cursor-pointer text-dark-3 dark:text-light-3 bg-light-contrast-1 dark:bg-dark-4 dark:hover:bg-dark-5 rounded-full size-6 flex items-center justify-center mr-1 transition-all duration-300 ease-in-out"
          >
            <Icon name="iconoir:xmark" size="16" />
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="user"
      class="p-2 border-b rounded-b-xl border-light-3 dark:border-dark-4 bg-light-contrast-2 dark:bg-dark-5 mb-6 md:m-0"
    >
      <form
        @submit.prevent="sendChat"
        class="flex items-center gap-3 bg-light-contrast-1 dark:bg-dark-4 rounded-lg px-2 py-1.5"
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
              : 'bg-light-contrast-3 dark:bg-dark-3 text-white cursor-not-allowed',
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
