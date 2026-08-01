import { involvementExperiences } from "~/data/involvement";

export const useInvolvementStore = defineStore("involvement", {
  state: () => ({
    involvement: involvementExperiences,
  }),
  getters: {
    getExperience: (state) => state.involvement.organization,
    getInfo: (state) => ({
      title: state.involvement.title,
      description: state.involvement.description,
    }),
  },
});
