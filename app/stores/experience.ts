import { workExperiences } from "~/data/experience";

export const useExperienceStore = defineStore('experience', {
state: () => ({
    works: workExperiences,
  }),
  getters: {
    getExperiences: (state) => state.works.companies,
    getInfo: (state) => ({
      title : state.works.title,
      description : state.works.description
    }),
  },
})
