export default function AboutTab() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Hey, ik ben Karan</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Ik ben een student software developer met een passie voor het creëren van intuïtieve webapplicaties.
            Naast software ontwikkeling ben ik ook een beatmaker, waarbij ik mijn creativiteit uitdruk in de wereld van muziekproductie.
          </p>
        </section>

        {/* Developer Journey */}
        <section className="rounded-lg border border-gray-200 bg-gray-50 p-6">
          <h3 className="mb-3 text-xl font-bold text-gray-900">💻 Developer Journey</h3>
          <p className="leading-relaxed text-gray-700">
            As a student developer, I'm constantly learning and building projects that challenge me
            to grow. I love working with modern web technologies like React, Next.js, and TypeScript
            to create fast, responsive, and user-friendly applications. Every project is an
            opportunity to improve my skills and explore new concepts in software development.
          </p>
        </section>

        {/* Music Journey */}
        <section className="rounded-lg border border-gray-200 bg-gray-50 p-6">
          <h3 className="mb-3 text-xl font-bold text-gray-900">🎵 Music Production</h3>
          <p className="leading-relaxed text-gray-700">
            Beat making is my creative outlet. I produce beats across various genres, focusing on
            creating unique soundscapes and hard-hitting rhythms. Whether it's trap, drill, or chill
            lo-fi beats, I pour the same attention to detail into my music as I do into my code.
            Each beat tells a story and creates an atmosphere.
          </p>
        </section>

        {/* Current Status & Goals */}
        <section className="rounded-lg border border-gray-200 bg-gray-50 p-6">
          <h3 className="mb-3 text-xl font-bold text-gray-900">🚀 Current Focus</h3>
          <p className="leading-relaxed text-gray-700">
            Right now, I'm focused on expanding my technical skills while continuing to develop my
            unique sound as a producer. I'm actively seeking opportunities to collaborate, learn from
            experienced developers, and connect with fellow creators in both the tech and music
            industries.
          </p>
        </section>

        {/* Call to Action */}
        <section className="rounded-lg border-2 border-red-200 bg-red-50 p-6 text-center">
          <h3 className="mb-3 text-xl font-bold text-gray-900">Let's Connect</h3>
          <p className="leading-relaxed text-gray-700">
            I'm always interested in connecting with other developers, musicians, and creators.
            Whether you want to collaborate on a project, discuss tech, or just vibe to some beats,
            feel free to reach out through any of the social links below.
          </p>
        </section>
      </div>
    </div>
  )
}
