import Image from 'next/image';

export default function AboutTab() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="space-y-8">
        {/* Hero Section */}
        <section
          className="relative overflow-hidden rounded-2xl border border-gray-700 p-8 md:p-12"
          style={{
            background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
          }}
        >
          {/* Decorative gradient overlay */}
          <div
            className="pointer-events-none absolute right-0 top-0 h-64 w-64 opacity-15"
            style={{
              background: 'radial-gradient(circle, #ef4444 0%, transparent 70%)',
            }}
          />

          <div className="relative grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-10">
            {/* Photo */}
            <div className="mx-auto flex h-60 w-60 items-center justify-center rounded-2xl border-3 border-red-400 md:mx-0">
              <Image
                src="/profile.jpg"
                alt="Karan"
                width={240}
                height={240}
                className="rounded-2xl object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <p className="mb-2 text-sm uppercase tracking-wide text-gray-400">Karan</p>
              <h1 className="mb-2.5 text-3xl font-bold leading-tight text-white md:text-4xl">
                Building & Creating in Code and Sound
              </h1>
              <p className="mb-4 text-lg font-medium text-red-500">
                Software Developer • Beat Producer
              </p>
              <p className="text-sm leading-relaxed text-gray-300 md:text-base">
                Ik ben een student software developer met een passie voor het creëren van intuïtieve webapplicaties.
                Naast software ontwikkeling ben ik ook een beatmaker, waarbij ik mijn creativiteit uitdruk in de wereld van muziekproductie.
              </p>
            </div>
          </div>
        </section>

        {/* Developer Journey */}
        <section className="rounded-lg border border-green-200 bg-gray-50 p-6">
          <h3 className="mb-3 text-xl font-bold text-gray-900">💻 Developer Journey</h3>
          <p className="leading-relaxed text-gray-700">
            As a student developer, I'm constantly learning and building projects that challenge me
            to grow. I love working with modern web technologies like React, Next.js, and TypeScript
            to create fast, responsive, and user-friendly applications. Every project is an
            opportunity to improve my skills and explore new concepts in software development.
          </p>
        </section>

        {/* Music Journey */}
        <section className="rounded-lg border border-purple-200 bg-gray-50 p-6">
          <h3 className="mb-3 text-xl font-bold text-gray-900">🎵 Music Production</h3>
          <p className="leading-relaxed text-gray-700">
            Beat making is my creative outlet. I produce beats across various genres, focusing on
            creating unique soundscapes and hard-hitting rhythms. Whether it's trap, drill, or chill
            lo-fi beats, I pour the same attention to detail into my music as I do into my code.
            Each beat tells a story and creates an atmosphere.
          </p>
        </section>

        {/* Current Status & Goals */}
        <section className="rounded-lg border border-blue-200 bg-gray-50 p-6">
          <h3 className="mb-3 text-xl font-bold text-gray-900">🚀 Current Focus</h3>
          <p className="leading-relaxed text-gray-700">
            Right now, I'm focused on expanding my technical skills while continuing to develop my
            unique sound as a producer. I'm actively seeking opportunities to collaborate, learn from
            experienced developers, and connect with fellow creators in both the tech and music
            industries.
          </p>
        </section>

        {/* Call to Action */}
        <section className="rounded-lg border-2 border-orange-200 bg-orange-50 p-6 text-center">
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
