'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { sendContactEmail } from '../actions/contact'

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Vul je naam in'),
  email: z.string().email('Vul een geldig e-mailadres in'),
  subject: z.string().min(3, 'Vul een onderwerp in'),
  message: z.string().min(10, 'Vul een bericht in van minimaal 10 tekens'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    mode: 'onBlur',
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      const result = await sendContactEmail(data)

      if (result.success) {
        toast.success("Message sent successfully! I'll get back to you soon.")
        reset()
      } else {
        toast.error('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error('Failed to send message. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="mx-auto max-w-2xl px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => router.push('/')}
          className="mb-6 flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900 hover:cursor-pointer"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>Terug</span>
        </button>

        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">
            Neem contact op
          </h1>
          <p className="text-gray-600">
            Heb je een vraag of wil je samenwerken? Stuur me een bericht en ik neem zo snel mogelijk contact met je op!
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Naam
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              className="w-full rounded-lg border border-gray-200 p-3 transition-all focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder:text-gray-300 text-gray-600"
              placeholder="Jouw naam"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="w-full rounded-lg border border-gray-200 p-3 transition-all focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder:text-gray-300 text-gray-600"
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <label
              htmlFor="subject"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Onderwerp
            </label>
            <input
              {...register('subject')}
              type="text"
              id="subject"
              className="w-full rounded-lg border border-gray-200 p-3 transition-all focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder:text-gray-300 text-gray-600"
              placeholder="Wat is het onderwerp?"
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-500" role="alert">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Bericht
            </label>
            <textarea
              {...register('message')}
              id="message"
              rows={6}
              className="w-full resize-y rounded-lg border border-gray-200 p-3 transition-all focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder:text-gray-300 text-gray-600"
              placeholder="Vertel me meer..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500" role="alert">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50 hover:cursor-pointer"
          >
            {isSubmitting ? 'Verzenden...' : 'Verstuur Bericht'}
          </button>
        </form>
      </div>
    </div>
  )
}
