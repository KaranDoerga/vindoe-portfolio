import SkillCard from './SkillCard'
import ProjectCard from './ProjectCard'

// Featured project - highlighted at the top
const featuredProject = {
  title: 'Portfolio Website',
  description: 'A modern portfolio website showcasing my work as both a developer and beat producer.',
  techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  githubUrl: 'https://github.com/vindoe/portfolio',
  liveUrl: 'https://vindoe.dev',
  imageUrl: undefined, // Optional: Add image URL here
}

// Other projects
const otherProjects = [
  {
    title: 'Festival Travel System',
    description: 'A web application for managing travel arrangements for music festivals.',
    techStack: ['Laravel', 'PHP', 'MySQL', 'Blade'],
    githubUrl: 'https://github.com/KaranDoerga/ftsproject',
  },
  {
    title: 'Project Three',
    description: 'Description of your third project. Showcase your best work here.',
    techStack: ['TypeScript', 'Next.js', 'API Integration'],
    githubUrl: 'https://github.com/vindoe/project3',
    liveUrl: 'https://project3.vindoe.dev',
  },
]

// Skills organized by category
const languageSkills = [
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'HTML/CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
]

const frameworksAndTools = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Blade', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
]

export default function DeveloperTab() {
  return (
    <div className="space-y-12">
      {/* Featured Hero Project Section */}
      <section>
        <div className="rounded-xl border-2 border-red-600 bg-gradient-to-br from-gray-800 to-gray-700 p-8">
          <div className="grid items-center gap-8 md:grid-cols-2">
            {/* Left side: Content */}
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-red-400">
                ⭐ Featured Project
              </p>
              <h2 className="mb-4 text-3xl font-bold text-white">{featuredProject.title}</h2>
              <p className="mb-5 leading-relaxed text-gray-300">{featuredProject.description}</p>

              {/* Tech Stack Tags */}
              <div className="mb-5 flex flex-wrap gap-2">
                {featuredProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-red-600 px-3 py-1 text-xs text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {featuredProject.liveUrl && (
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-red-600 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-red-700"
                  >
                    View Live
                  </a>
                )}
                {featuredProject.githubUrl && (
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-red-600 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-red-700"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>

            {/* Right side: Image or Placeholder */}
            <div>
              {featuredProject.imageUrl ? (
                <img
                  src={featuredProject.imageUrl}
                  alt={featuredProject.title}
                  className="rounded-lg"
                />
              ) : (
                <div className="flex h-48 items-center justify-center rounded-lg border border-gray-500 bg-gray-600">
                  <span className="text-sm text-gray-400">Project Screenshot</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Other Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {otherProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Skills & Technologies Section */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Skills & Technologies</h2>

        {/* Languages */}
        <div className="mb-8">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-red-600">
            Languages
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {languageSkills.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        {/* Frameworks & Tools */}
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-red-600">
            Frameworks & Tools
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {frameworksAndTools.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
