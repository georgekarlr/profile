interface ProgressBarProps {
  percentage: number
  color?: string
}

export function ProgressBar({ percentage, color = "pink" }: ProgressBarProps) {
  return (
    <div className="w-full bg-zinc-800 rounded-full h-2">
      <div
        className={`bg-${color}-500 h-2 rounded-full transition-all duration-500 ease-out`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}

