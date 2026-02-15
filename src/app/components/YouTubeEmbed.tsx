type YouTubeEmbedProps = {
  videoId: string
  title: string
  featured?: boolean
}

export default function YouTubeEmbed({
  videoId,
  title,
  featured = false,
}: YouTubeEmbedProps) {
  return (
    <div
      className={`overflow-hidden rounded-lg ${
        featured ? 'aspect-video' : 'aspect-video'
      }`}
    >
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
