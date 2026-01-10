import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, message } = body

  const errors: Record<string, string> = {}

  if (!name) errors.name = "Name is required!"
  if (!email) {
    errors.email = "Email is required!"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Email format is invalid!"
  }
  if (!message) errors.message = "Message is required!"

  if (Object.keys(errors).length > 0) {
    const firstError = Object.values(errors)[0]
    throw createError({
      statusCode: 400,
      statusMessage: firstError,
      data: { errors }
    })
  }

  const config = useRuntimeConfig()
  const client = await serverSupabaseClient<any>(event)
  
  const { error: dbError } = await client
    .from('hire_request')
    .insert([{ name, email, message }])

  if (dbError) {
    throw createError({ statusCode: 500, statusMessage: dbError.message })
  }

  try {
    const response = await $fetch(config.discordWebhookUrl, {
      method: 'POST',
      body: {
        content: "🚀 **New Frontend Development Inquiry!**\n\n_A new project lead has just landed through your portfolio contact system._",
        embeds: [{
          title: "Development Request Details",
          description: "Someone is interested in your frontend services. Here are the details:",
          color: 0x3498db,
          fields: [
            { 
              name: "👤 Client Name", 
              value: `\`${name}\``, 
              inline: true 
            },
            { 
              name: "📧 Client Address", 
              value: `\`${email}\``, 
              inline: true 
            },
            { 
              name: "💬 Message", 
              value: message || 'No message provided.' 
            }
          ],
          footer: {
            text: "Portfolio Bot • Frontend Inquiry System"
          },
          timestamp: new Date().toISOString()
        }]
      }
    })
    
  } catch (err: any) {
    console.error('Failed sent to discord', err.data || err.message)
  }

  return { status: 'success', message: 'Message sent successfully' }
})