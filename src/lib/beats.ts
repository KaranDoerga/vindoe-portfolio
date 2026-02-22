import beatsData from '@/data/beats.json'
import { extractYouTubeId } from './youtube'

type BeatFromJson = {
  title: string
  youtubeUrl: string
  tags: string[]
  uploadDate?: string
}

type ProcessedBeat = {
  title: string
  youtubeId: string
  tags: string[]
}

type BeatsJsonData = {
  featuredBeat: BeatFromJson
  genreCollections: {
    [genre: string]: BeatFromJson[]
  }
}

type ProcessedBeatsData = {
  featuredBeat: ProcessedBeat
  recentBeats: ProcessedBeat[]
  genreCollections: {
    [genre: string]: ProcessedBeat[]
  }
}

/**
 * Loads and processes beat data from JSON file
 * - Extracts YouTube IDs from URLs
 * - Calculates recent beats based on uploadDate
 * - Returns data ready for component consumption
 */
export function loadBeatsData(): ProcessedBeatsData {
  const data = beatsData as BeatsJsonData

  // Process featured beat
  const featuredBeat: ProcessedBeat = {
    title: data.featuredBeat.title,
    youtubeId: extractYouTubeId(data.featuredBeat.youtubeUrl),
    tags: data.featuredBeat.tags,
  }

  // Process genre collections
  const genreCollections: { [genre: string]: ProcessedBeat[] } = {}
  const allBeatsWithDates: (ProcessedBeat & { uploadDate: string })[] = []

  for (const [genre, beats] of Object.entries(data.genreCollections)) {
    genreCollections[genre] = beats.map((beat) => {
      const processed: ProcessedBeat = {
        title: beat.title,
        youtubeId: extractYouTubeId(beat.youtubeUrl),
        tags: beat.tags,
      }

      // Collect beats with upload dates for recent beats calculation
      if (beat.uploadDate) {
        allBeatsWithDates.push({
          ...processed,
          uploadDate: beat.uploadDate,
        })
      }

      return processed
    })
  }

  // Calculate recent beats: Sort by uploadDate descending, take first 4
  const recentBeats: ProcessedBeat[] = allBeatsWithDates
    .sort((a, b) => {
      // Sort descending (newest first)
      return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()
    })
    .slice(0, 4)
    .map(({ uploadDate, ...beat }) => beat) // Remove uploadDate from final output

  return {
    featuredBeat,
    recentBeats,
    genreCollections,
  }
}
