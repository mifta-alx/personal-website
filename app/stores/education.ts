import { educationDetails } from "~/data/education";

export const useEducationsStore= defineStore('education', {
state: () => ({
    educationData: educationDetails,
  }),
  getters: {
    getEducations: (state) => state.educationData.education,
    getInfo: (state) => ({
      title : state.educationData.title,
      description : state.educationData.description
    }),
  },
})