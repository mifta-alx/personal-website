import { contactDetails } from "~/data/contact";

export const useContactStore = defineStore('contact', {
  state: () => ({
      contacts : contactDetails,
  }),
  getters: {
    getInfo: (state) => ({
      title: state.contacts.title,
      description: state.contacts.description,
    }),
  },
});
