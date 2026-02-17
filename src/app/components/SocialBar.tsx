// Social links configuration
const socialLinks = {
  github: 'https://github.com/KaranDoerga',
  linkedin: 'https://www.linkedin.com/in/karan-doerga/',
  email: 'mailto:karanv29@hotmail.com',
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
              className="text-gray-600 transition-all duration-200 hover:-translate-y-0.5 hover:text-red-600 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="GitHub"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-7 w-7"
                aria-hidden="true"
              >
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
              className="text-gray-600 transition-all duration-200 hover:-translate-y-0.5 hover:text-red-600 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="LinkedIn"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <path d="M4.5 3C3.12 3 2 4.12 2 5.5S3.12 8 4.5 8 7 6.88 7 5.5 5.88 3 4.5 3zM2 10h5v10H2V10zm8 0h5v1.4c.7-.9 2.1-1.7 3.5-1.7C21.2 9.7 23 11.8 23 15v5h-5v-4.5c0-1.4-.6-2.5-2-2.5s-2 1.1-2 2.5V20h-5V10h.5z" />
              </svg>
            </a>
          )}
          {socialLinks.email && (
            <a
              href={socialLinks.email}
              className="text-gray-600 transition-all duration-200 hover:-translate-y-0.5 hover:text-red-600 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-ring"
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
                <path d="M2 6l8 5 8-5" />
              </svg>
            </a>
          )}

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
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <path d="M2 10.5l.5 2-.5 2-.5-2 .5-2zm1.5-.5l.5 3-.5 3-.5-3 .5-3zm1.5 0l.5 3.5-.5 3.5-.5-3.5.5-3.5zm1.5.5l.5 3-.5 4-.5-4 .5-3zm1.5 0l.5 3-.5 4.5-.5-4.5.5-3zm1.5-.5l.5 3.5-.5 5-.5-5 .5-3.5zM11 7l.5 6.5-.5 6.5-.5-6.5.5-6.5zm1.5 1l.5 5.5-.5 5.5-.5-5.5.5-5.5zm2-1c0-.5.2-1 .5-1.5.8-.5 1.8-.5 2.5 0s1 1.2 1 2v.5c1.4.3 2.5 1.5 2.5 3 0 1.7-1.3 3-3 3h-8l-.5-6.5L12.5 7z" />
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
              </svg>
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
