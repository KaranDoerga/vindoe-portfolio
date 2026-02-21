'use client'

import Link from 'next/link'

// Social links configuration
const socialLinks = {
  github: 'https://github.com/KaranDoerga',
  linkedin: 'https://www.linkedin.com/in/karan-doerga/',
  youtube: 'https://youtube.com/@vindoe',
  soundcloud: 'https://soundcloud.com/vindoebeats',
  instagram: 'https://www.instagram.com/vinesshh__/',
}

export default function SocialBar() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm sm:gap-6">
          {/* Developer Links */}
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-all duration-200 hover:-translate-y-0.5 hover:text-purple-600 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="GitHub"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <title>GitHub</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
                />
              </svg>
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-all duration-200 hover:-translate-y-0.5 hover:text-blue-600 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="LinkedIn"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
                aria-hidden="true"
                >
                <title>LinkedIn</title>
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          )}
          <Link
            href="/contact"
            className="text-gray-600 transition-all duration-200 hover:-translate-y-0.5 hover:text-blue-600 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Email"
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-7 w-7"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="16" height="12" rx="2" />
              <title>Email</title>
              <path d="M2 6l8 5 8-5" />
            </svg>
          </Link>

          {/* Divider */}
          <span className="text-gray-300">|</span>

          {/* Music Links */}
          {socialLinks.youtube && (
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-all duration-200 hover:-translate-y-0.5 hover:text-red-600 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="YouTube"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <title>YouTube</title>
                <path d="M19.615 6.287c-.23-.863-.908-1.541-1.77-1.77C16.287 4 10 4 10 4s-6.287 0-7.845.517c-.863.229-1.541.907-1.77 1.77C0 7.845 0 10 0 10s0 2.155.385 3.713c.229.863.907 1.541 1.77 1.77C3.713 16 10 16 10 16s6.287 0 7.845-.517c.862-.229 1.541-.907 1.77-1.77C20 12.155 20 10 20 10s0-2.155-.385-3.713zM8 12.5V7.5l5.197 2.5L8 12.5z" />
              </svg>
            </a>
          )}
          {socialLinks.soundcloud && (
            <a
              href={socialLinks.soundcloud}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-all duration-200 hover:-translate-y-0.5 hover:text-orange-600 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="SoundCloud"
            >
              <svg 
                role="img" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <title>SoundCloud</title>
                <path d="M23.999 14.165c-.052 1.796-1.612 3.169-3.4 3.169h-8.18a.68.68 0 0 1-.675-.683V7.862a.747.747 0 0 1 .452-.724s.75-.513 2.333-.513a5.364 5.364 0 0 1 2.763.755 5.433 5.433 0 0 1 2.57 3.54c.282-.08.574-.121.868-.12.884 0 1.73.358 2.347.992s.948 1.49.922 2.373ZM10.721 8.421c.247 2.98.427 5.697 0 8.672a.264.264 0 0 1-.53 0c-.395-2.946-.22-5.718 0-8.672a.264.264 0 0 1 .53 0ZM9.072 9.448c.285 2.659.37 4.986-.006 7.655a.277.277 0 0 1-.55 0c-.331-2.63-.256-5.02 0-7.655a.277.277 0 0 1 .556 0Zm-1.663-.257c.27 2.726.39 5.171 0 7.904a.266.266 0 0 1-.532 0c-.38-2.69-.257-5.21 0-7.904a.266.266 0 0 1 .532 0Zm-1.647.77a26.108 26.108 0 0 1-.008 7.147.272.272 0 0 1-.542 0 27.955 27.955 0 0 1 0-7.147.275.275 0 0 1 .55 0Zm-1.67 1.769c.421 1.865.228 3.5-.029 5.388a.257.257 0 0 1-.514 0c-.21-1.858-.398-3.549 0-5.389a.272.272 0 0 1 .543 0Zm-1.655-.273c.388 1.897.26 3.508-.01 5.412-.026.28-.514.283-.54 0-.244-1.878-.347-3.54-.01-5.412a.283.283 0 0 1 .56 0Zm-1.668.911c.4 1.268.257 2.292-.026 3.572a.257.257 0 0 1-.514 0c-.241-1.262-.354-2.312-.023-3.572a.283.283 0 0 1 .563 0Z"/>
              </svg>
            </a>
          )}
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-all duration-200 hover:-translate-y-0.5 hover:text-pink-600 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="16" height="16" rx="4" />
                <circle cx="10" cy="10" r="4" />
                <circle cx="15" cy="5" r="0.5" fill="currentColor" />
                <title>Instagram</title>
              </svg>
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
