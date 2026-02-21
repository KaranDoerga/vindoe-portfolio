'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { sendContactEmail } from '../actions/contact'

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
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
          className="mb-6 flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900"
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
          <span>Back</span>
        </button>

        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">
            Get in Touch
          </h1>
          <p className="text-gray-600">
            Have a question or want to work together? Drop me a message!
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
              Name
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              className="w-full rounded-lg border border-gray-200 p-3 transition-all focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Your name"
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
              className="w-full rounded-lg border border-gray-200 p-3 transition-all focus:outline-none focus:ring-2 focus:ring-purple-600"
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
              Subject
            </label>
            <input
              {...register('subject')}
              type="text"
              id="subject"
              className="w-full rounded-lg border border-gray-200 p-3 transition-all focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="What's this about?"
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
              Message
            </label>
            <textarea
              {...register('message')}
              id="message"
              rows={6}
              className="w-full resize-y rounded-lg border border-gray-200 p-3 transition-all focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Tell me more..."
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
            className="w-full rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  )
}
