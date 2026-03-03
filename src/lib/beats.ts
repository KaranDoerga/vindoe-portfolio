import beatsData from '@/data/beats.json'
import { extractYouTubeId } from './youtube'

type BeatFromJson = {
  title: string
  youtubeUrl: string
}

type ProcessedBeat = {
  title: string
  youtubeId: string
}

type BeatsJsonData = {
  beats: BeatFromJson[]
}

type ProcessedBeatsData = {
  beats: ProcessedBeat[]
}

/**
 * Loads and processes beat data from JSON file
 * - Extracts YouTube IDs from URLs
 * - Returns beats ready for component consumption
 */
export function loadBeatsData(): ProcessedBeatsData {
  const data = beatsData as BeatsJsonData

  // Process beats array
  const beats = data.beats.map((beat) => ({
    title: beat.title,
    youtubeId: extractYouTubeId(beat.youtubeUrl),
  }))

  return {
    beats,
  }
}
