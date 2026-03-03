import BeatCard from './BeatCard'
import { loadBeatsData } from '@/lib/beats'

export default function BeatsTab() {
  // Load beat data from JSON file
  const { beats } = loadBeatsData()
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
      {beats.map((beat) => (
        <BeatCard key={beat.title} {...beat} />
      ))}
    </div>
  )
}
