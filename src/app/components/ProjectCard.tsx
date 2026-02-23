type ProjectCardProps = {
  title: string
  description: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
}

export default function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="group rounded-lg border border-gray-200 bg-gray-50 p-6 transition-all hover:border-red-600 hover:shadow-lg">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 line-clamp-8">{description}</p>

      {/* Tech Stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {(githubUrl || liveUrl) && (
        <div className="mt-4 flex gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-red-600"
            >
              GitHub →
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-red-600"
            >
              Live Demo →
            </a>
          )}
        </div>
      )}
    </div>
  )
}
