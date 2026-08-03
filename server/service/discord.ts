import { InquiryData } from "../types/inquiry"

export const sendDiscordNotification = async (webhookUrl: string, data: InquiryData) => {
  const { name, email, message } = data
  
  if (!webhookUrl) {
    console.warn('Discord Webhook URL is not configured. Skipping Discord notification.')
    return false
  }

  try {
    await $fetch(webhookUrl, {
      method: 'POST',
      body: {
        content: "🚀 **New Frontend Development Inquiry!**\n\n_A new project lead has just landed through your portfolio contact system._",
        embeds: [{
          title: "Development Request Details",
          color: 0x3498db,
          fields: [
            { name: "👤 Client Name", value: `\`${name}\``, inline: true },
            { name: "📧 Client Address", value: `\`${email}\``, inline: true },
            { name: "💬 Message", value: message || 'No message provided.' }
          ],
          footer: { text: "Portfolio Bot • Frontend Inquiry System" },
          timestamp: new Date().toISOString()
        }]
      }
    })
    return true
  } catch (error: any) {
    console.error('Discord Notification Error:', error.data || error.message)
    throw new Error(`Failed to send Discord notification: ${error.message}`)
  }
}