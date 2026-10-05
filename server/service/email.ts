import { Resend } from 'resend'
import { InquiryData } from '../types/inquiry'

export const sendEmail = async (data: InquiryData) => {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { name, email, message }
 = data
  
  try {
    await resend.emails.send({
      from: 'Portfolio Inquiry <contact@withalx.com>',
      to: ['miftakhussurural@gmail.com'],
      replyTo: email,
      subject: `🚀 New Project Inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #333;">New Lead via withalx.com</h2>
          <p>You have a new inquiry from your portfolio contact form.</p>
          <hr style="border: none; border-top: 1px solid #eee;" />
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="font-size: 12px; color: #999;">Sent via Resend from withalx.com</p>
        </div>
      `
    })
    return true
  } catch (error: any) {
    console.error('Resend Email Error:', error.message)
    throw new Error(`Failed to send email: ${error.message}`)
  }
}