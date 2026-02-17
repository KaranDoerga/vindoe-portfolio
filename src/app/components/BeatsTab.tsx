import YouTubeEmbed from './YouTubeEmbed'
import BeatCard from './BeatCard'

// Placeholder data - user can update with real YouTube video IDs later
const featuredBeat = {
  title: 'Featured Beat',
  youtubeId: 'dQw4w9WgXcQ', // Replace with real YouTube video ID
  tags: ['Shatta', '140 BPM', 'Energy'],
}

// Recent beats for "Latest Beats" section
const recentBeats = [
  {
    title: 'New Afro Vibes',
    youtubeId: 'dQw4w9WgXcQ', // Replace with real YouTube video ID
    tags: ['Afro', '110 BPM', 'Dance'],
  },
  {
    title: 'Kizomba Love',
    youtubeId: 'dQw4w9WgXcQ', // Replace with real YouTube video ID
    tags: ['Kizomba', '95 BPM', 'Romantic'],
  },
  {
    title: 'Shatta Fire',
    youtubeId: 'dQw4w9WgXcQ', // Replace with real YouTube video ID
    tags: ['Shatta', '138 BPM', 'Party'],
  },
  {
    title: 'Trap Wave',
    youtubeId: 'dQw4w9WgXcQ', // Replace with real YouTube video ID
    tags: ['Trap', '145 BPM', 'Hard'],
  },
]

// Genre collections
const genreCollections = {
  Shatta: [
    {
      title: 'Shatta Energy',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['140 BPM', 'Party', 'Dance'],
    },
    {
      title: 'Shatta Vibes',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['138 BPM', 'Upbeat', 'Club'],
    },
    {
      title: 'Shatta Fire',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['145 BPM', 'Hard', 'Energy'],
    },
    {
      title: 'Shatta Wave',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['142 BPM', 'Dancehall', 'Hot'],
    },
    {
      title: 'Shatta Move',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['140 BPM', 'Groove', 'Party'],
    },
    {
      title: 'Shatta Riddim',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['138 BPM', 'Riddim', 'Dance'],
    },
    {
      title: 'Shatta Heat',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['143 BPM', 'Hot', 'Club'],
    },
    {
      title: 'Shatta Flex',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['140 BPM', 'Flex', 'Energy'],
    },
  ],
  Kizomba: [
    {
      title: 'Kizomba Love',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['95 BPM', 'Romantic', 'Smooth'],
    },
    {
      title: 'Kizomba Soul',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['90 BPM', 'Soul', 'Sensual'],
    },
    {
      title: 'Kizomba Passion',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['92 BPM', 'Passion', 'Love'],
    },
    {
      title: 'Kizomba Night',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['88 BPM', 'Night', 'Intimate'],
    },
    {
      title: 'Kizomba Emotion',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['93 BPM', 'Emotional', 'Deep'],
    },
    {
      title: 'Kizomba Flow',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['90 BPM', 'Flow', 'Smooth'],
    },
  ],
  Afro: [
    {
      title: 'Afrobeat Groove',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['110 BPM', 'Groove', 'Dance'],
    },
    {
      title: 'Afro Vibes',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['108 BPM', 'Vibes', 'Party'],
    },
    {
      title: 'Afro Energy',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['115 BPM', 'Energy', 'Dance'],
    },
    {
      title: 'Afro Wave',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['112 BPM', 'Wave', 'Modern'],
    },
    {
      title: 'Afro Fusion',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['110 BPM', 'Fusion', 'Groove'],
    },
    {
      title: 'Afro Dance',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['114 BPM', 'Dance', 'Party'],
    },
    {
      title: 'Afro Soul',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['108 BPM', 'Soul', 'Smooth'],
    },
  ],
  Hiphop: [
    {
      title: 'Hip-Hop Classic',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['90 BPM', 'Classic', 'Boom Bap'],
    },
    {
      title: 'Hip-Hop Flow',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['88 BPM', 'Flow', 'Smooth'],
    },
    {
      title: 'Hip-Hop Vibes',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['92 BPM', 'Vibes', 'Chill'],
    },
    {
      title: 'Hip-Hop Beat',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['95 BPM', 'Modern', 'Bounce'],
    },
    {
      title: 'Hip-Hop Wave',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['90 BPM', 'Wave', 'Cool'],
    },
    {
      title: 'Hip-Hop Soul',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['85 BPM', 'Soul', 'Jazz'],
    },
  ],
  'R&B': [
    {
      title: 'R&B Smooth',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['85 BPM', 'Smooth', 'Soul'],
    },
    {
      title: 'R&B Vibes',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['80 BPM', 'Vibes', 'Sensual'],
    },
    {
      title: 'R&B Soul',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['82 BPM', 'Soul', 'Emotion'],
    },
    {
      title: 'R&B Love',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['88 BPM', 'Love', 'Romantic'],
    },
  ],
  Trap: [
    {
      title: 'Trap Hard',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['140 BPM', 'Hard', '808s'],
    },
    {
      title: 'Trap Vibes',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['138 BPM', 'Vibes', 'Dark'],
    },
    {
      title: 'Trap Beat',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['145 BPM', 'Heavy', 'Bass'],
    },
    {
      title: 'Trap Wave',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['142 BPM', 'Wave', 'Melodic'],
    },
    {
      title: 'Trap Energy',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['140 BPM', 'Energy', 'Club'],
    },
    {
      title: 'Trap Soul',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['135 BPM', 'Soul', 'Emotional'],
    },
    {
      title: 'Trap Fire',
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['143 BPM', 'Fire', 'Hard'],
    },
  ],
}

export default function BeatsTab() {
  return (
    <div className="space-y-12">
      {/* Featured Beat Section */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Featured Beat</h2>
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
          <YouTubeEmbed
            videoId={featuredBeat.youtubeId}
            title={featuredBeat.title}
            featured
          />
          <div className="mt-4">
            <h3 className="text-xl font-bold text-gray-900">{featuredBeat.title}</h3>
          </div>
        </div>
      </section>

      {/* Latest Beats Section */}
      {recentBeats.length > 0 && (
        <section>
          <div className="mb-3">
            <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium uppercase text-green-600">
              New This Week
            </span>
          </div>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Latest Beats</h2>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            {recentBeats.map((beat) => (
              <BeatCard key={beat.title} {...beat} />
            ))}
          </div>
        </section>
      )}

      {/* Genre Collections */}
      <div className="space-y-8">
        {Object.entries(genreCollections).map(([genre, beats]) => (
          <section key={genre}>
            {/* Collection Header */}
            <div className="mb-4 flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold text-gray-900">{genre}</h3>
                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600">
                  {beats.length} beats
                </span>
              </div>
              <span className="text-sm text-red-600 hover:underline">View All →</span>
            </div>

            {/* Beat Grid */}
            <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
              {beats.slice(0, 4).map((beat) => (
                <BeatCard key={beat.title} {...beat} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
