import YouTubeEmbed from './YouTubeEmbed'
import BeatCard from './BeatCard'
import { loadBeatsData } from '@/lib/beats'

// Load beat data from JSON file
const { featuredBeat, recentBeats, genreCollections } = loadBeatsData()

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
