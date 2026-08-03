import { toggleProjectLike } from "../../service/db";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { slug, isLiking } = body;

  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: "Slug is required" });
  }

  await toggleProjectLike(event, slug, isLiking);
  return { success: true };
});
