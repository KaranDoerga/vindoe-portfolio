import YouTubeEmbed from './YouTubeEmbed'

type BeatCardProps = {
  title: string
  youtubeId: string
  tags?: string[]
}

export default function BeatCard({
  title,
  youtubeId,
  tags,
}: BeatCardProps) {
  return (
    <div className="group rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-red-600 hover:shadow-lg">
      <YouTubeEmbed videoId={youtubeId} title={title} />

      <div className="mt-4">
        <h3 className="font-bold text-gray-900">{title}</h3>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
