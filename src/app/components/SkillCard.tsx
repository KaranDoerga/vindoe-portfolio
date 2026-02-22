type SkillCardProps = {
  name: string
  category?: string
  icon?: string
}

export default function SkillCard({ name, category, icon }: SkillCardProps) {
  return (
    <div className="group rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-red-600 hover:shadow-md">
      <div className="flex flex-col items-center text-center">
        {icon && (
          <img
            src={icon}
            alt={`${name} logo`}
            className="mb-3 h-10 w-10 object-contain"
          />
        )}
        <h3 className="font-semibold text-gray-900">{name}</h3>
        {category && (
          <p className="mt-1 text-xs text-gray-500">{category}</p>
        )}
      </div>
    </div>
  )
}
