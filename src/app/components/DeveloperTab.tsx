import SkillCard from './SkillCard'
import ProjectCard from './ProjectCard'

// Featured project - highlighted at the top
const featuredProject = {
  title: 'Upcoming...',
  description: 'Een spannend nieuw project is in de maak! Binnenkort zal ik een gloednieuw project onthullen dat momenteel in ontwikkeling is. Blijf op de hoogte voor meer details en een diepgaande blik op wat er komen gaat. Dit project belooft innovatief en boeiend te worden, dus zorg ervoor dat je het niet mist!',
  techStack: ['Technologieën worden binnenkort onthuld!'],
  githubUrl: '',
  liveUrl: '',
  imageUrl: 'https://victoriadelgadillo.com/wp-content/uploads/2020/11/upcoming.jpg'
}

// Other projects
const otherProjects = [
  {
    title: 'Festival Travel System',
    description: 'Een festival reissysteem gemaakt met Laravel voor een schoolproject. Het project omvatte het bouwen van een webapplicatie waarmee gebruikers reizen kunnen plannen en boeken voor verschillende festivals. De applicatie bevatte functies zoals het bekijken van beschikbare reizen, het boeken van reizen, en het beheren van boekingen. Het doel was om mijn vaardigheden in webontwikkeling te demonstreren en een functionele applicatie te creëren die gebruikers helpt bij het plannen van hun festivalervaring.',
    techStack: ['Laravel', 'PHP', 'MySQL', 'Blade'],
    githubUrl: 'https://github.com/KaranDoerga/ftsproject',
  },
  {
    title: 'Portfolio website (old)',
    description: 'Een portfolio website gemaakt met PHP voor een schoolproject. Het project omvatte het bouwen van een persoonlijke portfolio website met PHP, HTML, CSS en MySQL. De website bevatte verschillende secties zoals een homepage, over mij, projecten en contactpagina. Het doel was om mijn vaardigheden in webontwikkeling te demonstreren en een platform te creëren om mijn werk te presenteren.',
    techStack: ['PHP', 'HTML', 'CSS', 'MySQL'],
    githubUrl: 'https://github.com/KaranDoerga/profileapp',
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
  { name: 'Blade', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
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
                    className="rounded-lg bg-red-600 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-red-700 hover:cursor-not-allowed"
                  >
                    View Live
                  </a>
                )}
                {featuredProject.githubUrl && (
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-red-600 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-red-700 hover:cursor-not-allowed"
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
