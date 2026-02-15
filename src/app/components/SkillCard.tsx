type SkillCardProps = {
  name: string
  category?: string
}

export default function SkillCard({ name, category }: SkillCardProps) {
  return (
    <div className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-400 hover:shadow-md">
      <div className="text-center">
        <h3 className="font-semibold text-gray-900">{name}</h3>
        {category && (
          <p className="mt-1 text-xs text-gray-500">{category}</p>
        )}
      </div>
    </div>
  )
}
