/**
 * Extracts YouTube video ID from various URL formats
 *
 * Supports:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 * - VIDEO_ID (direct ID)
 *
 * @param urlOrId - Full YouTube URL or direct video ID
 * @returns Clean 11-character video ID
 */
export function extractYouTubeId(urlOrId: string): string {
  if (!urlOrId) return ''

  // Trim whitespace
  const input = urlOrId.trim()

  // Pattern 1: youtube.com/watch?v=VIDEO_ID
  const watchMatch = input.match(/(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/)
  if (watchMatch) return watchMatch[1]

  // Pattern 2: youtu.be/VIDEO_ID
  const shortMatch = input.match(/(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/)
  if (shortMatch) return shortMatch[1]

  // Pattern 3: youtube.com/embed/VIDEO_ID
  const embedMatch = input.match(/(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/)
  if (embedMatch) return embedMatch[1]

  // Pattern 4: Already a video ID (11 characters, alphanumeric with _ and -)
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) {
    return input
  }

  // If no pattern matched, return as-is (assume it's already an ID)
  return input
}
