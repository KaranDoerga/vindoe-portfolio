'use server'

import { Resend } from 'resend'
import { z } from 'zod'

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

// Zod schema for server-side validation (same as client)
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
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
