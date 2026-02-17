import YouTubeEmbed from './YouTubeEmbed'
import BeatCard from './BeatCard'

// Placeholder data - user can update with real YouTube video IDs later
const featuredBeat = {
  title: 'Featured Beat Title',
  youtubeId: 'dQw4w9WgXcQ', // Replace with real YouTube video ID
}

const beats = [
  {
    title: 'Beat Name 1',
    youtubeId: 'dQw4w9WgXcQ', // Replace with real YouTube video ID
    tags: ['Trap', '140 BPM', 'Dark'],
  },
  {
    title: 'Beat Name 2',
    youtubeId: 'dQw4w9WgXcQ', // Replace with real YouTube video ID
    tags: ['Hip-Hop', '90 BPM', 'Chill'],
  },
  {
    title: 'Beat Name 3',
    youtubeId: 'dQw4w9WgXcQ', // Replace with real YouTube video ID
    tags: ['Drill', '138 BPM', 'Aggressive'],
  },
  {
    title: 'Beat Name 4',
    youtubeId: 'dQw4w9WgXcQ', // Replace with real YouTube video ID
    tags: ['R&B', '85 BPM', 'Smooth'],
  },
  {
    title: 'Beat Name 5',
    youtubeId: 'dQw4w9WgXcQ', // Replace with real YouTube video ID
    tags: ['Pop', '120 BPM', 'Upbeat'],
  },
  {
    title: 'Beat Name 6',
    youtubeId: 'dQw4w9WgXcQ', // Replace with real YouTube video ID
    tags: ['Lo-Fi', '75 BPM', 'Relaxed'],
  },
]

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

      {/* Beat Grid Section */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900">More Beats</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {beats.map((beat) => (
            <BeatCard key={beat.title} {...beat} />
          ))}
        </div>
      </section>
    </div>
  )
}
