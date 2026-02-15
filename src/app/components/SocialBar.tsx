// Social links configuration - user can update these later
const socialLinks = {
  github: 'https://github.com/vindoe',
  linkedin: 'https://linkedin.com/in/vindoe',
  email: 'mailto:vindoe@example.com',
  youtube: 'https://youtube.com/@vindoe',
  soundcloud: 'https://soundcloud.com/vindoe',
  instagram: 'https://instagram.com/vindoe',
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
              className="text-gray-600 transition-colors hover:text-blue-600"
              aria-label="GitHub"
            >
              <span className="hidden sm:inline">GitHub</span>
              <span className="sm:hidden">GH</span>
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-blue-600"
              aria-label="LinkedIn"
            >
              <span className="hidden sm:inline">LinkedIn</span>
              <span className="sm:hidden">LI</span>
            </a>
          )}
          {socialLinks.email && (
            <a
              href={socialLinks.email}
              className="text-gray-600 transition-colors hover:text-blue-600"
              aria-label="Email"
            >
              Email
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
              className="text-gray-600 transition-colors hover:text-red-600"
              aria-label="YouTube"
            >
              <span className="hidden sm:inline">YouTube</span>
              <span className="sm:hidden">YT</span>
            </a>
          )}
          {socialLinks.soundcloud && (
            <a
              href={socialLinks.soundcloud}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-orange-600"
              aria-label="SoundCloud"
            >
              <span className="hidden sm:inline">SoundCloud</span>
              <span className="sm:hidden">SC</span>
            </a>
          )}
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-pink-600"
              aria-label="Instagram"
            >
              <span className="hidden sm:inline">Instagram</span>
              <span className="sm:hidden">IG</span>
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
