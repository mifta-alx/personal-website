import { introDetails } from "~/data/intro";

export const useSiteStore = defineStore('site', {
  state: () => ({
      details : introDetails,
    }),
    getters: {
      getIntro: (state) => state.details,
    },
})
