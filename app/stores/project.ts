import { defineStore } from "pinia";
import { projectDetails } from "~/data/project";
import {
  fetchProjectLikes,
  toggleProjectLikeApi,
} from "~/services/project.service";

export const useProjectStore = defineStore("projects", {
  state: () => ({
    projectsData: projectDetails,
    userLikes: {} as Record<string, boolean>,
  }),
  getters: {
    getProjects: (state) => state.projectsData.projects,
    getInfo: (state) => ({
      title: state.projectsData.title,
      description: state.projectsData.description,
    }),
    isProjectLiked: (state) => (slug: string) => !!state.userLikes[slug],
  },
  actions: {
    async initLikes() {
      const likesMap = await fetchProjectLikes();
      this.projectsData.projects = this.projectsData.projects.map((project) => {
        const isLikedLocal =
          localStorage.getItem(`liked_${project.slug}`) === "1";
        this.userLikes[project.slug] = isLikedLocal;

        return {
          ...project,
          likes: likesMap[project.slug] ?? project.likes ?? 0,
        };
      });
    },

    async toggleLike(slug: string) {
      const targetProject = this.projectsData.projects.find((p) => p.slug === slug);
      if (!targetProject) return;

      const isCurrentlyLiked = !!this.userLikes[slug];
      const newLikedStatus = !isCurrentlyLiked;

      this.userLikes[slug] = newLikedStatus;
      targetProject.likes += newLikedStatus ? 1 : -1;

      if (newLikedStatus) {
        localStorage.setItem(`liked_${slug}`, "1");
      } else {
        localStorage.removeItem(`liked_${slug}`);
      }

      await toggleProjectLikeApi(slug, newLikedStatus);
    },
  },
});
