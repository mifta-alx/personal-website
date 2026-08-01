import { stackDetails } from "~/data/stack";

export const useStackStore = defineStore("stack", {
  state: () => ({
    stacks: stackDetails,
  }),
  getters: {
    getStacks: (state) => state.stacks.stacks,
    getInfo: (state) => ({
      title: state.stacks.title,
      description: state.stacks.description,
    }),
  },
});
