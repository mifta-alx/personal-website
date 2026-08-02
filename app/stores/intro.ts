import { introDetails } from "~/data/intro";

export const useIntroStore = defineStore('intro', {
  state: () => ({
      details : introDetails,
    }),
    getters: {
      getIntro: (state) => state.details,
    },
})
