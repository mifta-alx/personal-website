import type { ContactPayload, ContactResponse } from "~/types/contact";

export const sendContactInquiry = async (
  payload: ContactPayload,
): Promise<ContactResponse> => {
  return await $fetch<ContactResponse>("/api/contact", {
    method: "POST",
    body: payload,
  });
};
