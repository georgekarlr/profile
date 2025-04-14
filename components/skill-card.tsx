import { ProgressBar } from "./progress-bar"

interface SkillCardProps {
  name: string
  percentage: number
}

export function SkillCard({ name, percentage }: SkillCardProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-4">
      <span className="text-white font-medium text-sm sm:text-base w-full sm:w-[100px]">{name}</span>
      <div className="w-full flex-1">
        <ProgressBar percentage={percentage} />
      </div>
      <span className="text-pink-400 font-medium text-sm sm:text-base w-full sm:w-[50px] text-right">
        {percentage}%
      </span>
    </div>
  )
}

