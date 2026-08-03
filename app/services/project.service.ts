import type { ProjectLikePayload } from "~/types/project";

export const fetchProjectLikes = async (): Promise<Record<string, number>> => {
  try {
    const data = await $fetch<Record<string, number>>("/api/projects/likes");
    return data || {};
  } catch (error) {
    console.error("Failed to fetch project likes:", error);
    return {};
  }
};

export const toggleProjectLikeApi = async (slug: string, isLiking: boolean): Promise<boolean> => {
  try {
    await $fetch("/api/projects/likes", {
      method: "POST",
      body: { slug, isLiking } as ProjectLikePayload,
    });
    return true;
  } catch (error) {
    console.error("Error toggling project like:", error);
    return false;
  }
};