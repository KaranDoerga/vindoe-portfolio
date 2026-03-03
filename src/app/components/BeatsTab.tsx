import BeatCard from './BeatCard'
import { loadBeatsData } from '@/lib/beats'

export default function BeatsTab() {
  // Load beat data from JSON file
  const { beats } = loadBeatsData()
  
  if (beats.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-2xl text-gray-600">Beats komen eraan...</p>
      </div>
    )
  }
  
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
      {beats.map((beat) => (
        <BeatCard key={beat.title} {...beat} />
      ))}
    </div>
  )
}
