import { defineStore } from 'pinia'
import { projectDetails } from '~/data/project'

export const useProjectStore = defineStore("projects", {
  state: () => ({
    projectsData: projectDetails,
  }),
  getters: {
    getProjects: (state) => state.projectsData.projects,
    getInfo: (state) => ({
      title : state.projectsData.title,
      description : state.projectsData.description
    }),
  },
})
