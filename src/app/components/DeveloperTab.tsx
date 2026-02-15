import SkillCard from './SkillCard'
import ProjectCard from './ProjectCard'

// Placeholder data - user can update these later
const skills = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'HTML/CSS', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Git', category: 'Tools' },
  { name: 'Node.js', category: 'Backend' },
]

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website showcasing my work as both a developer and beat producer.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/vindoe/portfolio',
    liveUrl: 'https://vindoe.dev',
  },
  {
    title: 'Project Two',
    description: 'Description of your second project. Add your real projects here later.',
    techStack: ['React', 'Node.js', 'Express'],
    githubUrl: 'https://github.com/vindoe/project2',
  },
  {
    title: 'Project Three',
    description: 'Description of your third project. Showcase your best work here.',
    techStack: ['TypeScript', 'Next.js', 'API Integration'],
    githubUrl: 'https://github.com/vindoe/project3',
    liveUrl: 'https://project3.vindoe.dev',
  },
]

const education = {
  school: 'Your University/School Name',
  program: 'Computer Science / Software Engineering',
  year: '2024 - Present',
}

export default function DeveloperTab() {
  return (
    <div className="space-y-12">
      {/* Skills Section */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Skills & Technologies</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} category={skill.category} />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Education</h2>
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="text-xl font-bold text-gray-900">{education.school}</h3>
          <p className="mt-2 text-gray-700">{education.program}</p>
          <p className="mt-1 text-sm text-gray-500">{education.year}</p>
        </div>
      </section>
    </div>
  )
}
