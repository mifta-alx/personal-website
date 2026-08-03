import { saveMessage } from "../service/db";
import { sendDiscordNotification } from "../service/discord";
import { sendEmail } from "../service/email";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, email, message } = body;
  const config = useRuntimeConfig();

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Name is required!";
  if (!email) {
    errors.email = "Email is required!";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Email format is invalid!";
  }
  if (!message) errors.message = "Message is required!";

  if (Object.keys(errors).length > 0) {
    throw createError({
      statusCode: 400,
      statusMessage: Object.values(errors)[0],
      data: { errors },
    });
  }

  const inquiryData = { name, email, message };

  try {
    await saveMessage(event, inquiryData);
  } catch (err: any) {
    throw createError({
      statusCode: 500,
      statusMessage: `Database error: ${err.message}`,
    });
  }

  Promise.allSettled([
    sendEmail(inquiryData),
    sendDiscordNotification(config.discordWebhookUrl, inquiryData),
  ]).then((results) => {
    results.forEach((res, i) => {
      if (res.status === "rejected") {
        console.error(
          `Post-inquiry service failed (${i === 0 ? "Email" : "Discord"}):`,
          res.reason,
        );
      }
    });
  });
  return { status: "success", message: "Message sent successfully" };
});
