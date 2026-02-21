'use server'

import { Resend } from 'resend'
import { z } from 'zod'

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

// Zod schema for server-side validation (same as client)
const contactSchema = z.object({
  name: z.string().min(2, 'Vul je naam in'),
  email: z.string().email('Vul een geldig e-mailadres in'),
  subject: z.string().min(3, 'Vul een onderwerp in'),
  message: z.string().min(10, 'Vul een bericht in van minimaal 10 tekens'),
})

export async function sendContactEmail(data: unknown) {
  try {
    // Server-side validation (CRITICAL - never skip)
    const validatedData = contactSchema.parse(data)

    // Send email via Resend
    const emailResult = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'contact@vindoe.nl',
      subject: `Portfolio Contact: ${validatedData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${validatedData.name} (${validatedData.email})</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `,
    })

    console.log('Email sent successfully:', emailResult)
    return { success: true }
  } catch (error) {
    // Log error for debugging
    console.error('Email send failed:', error)

    // Return error response (don't throw)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email',
    }
  }
}
