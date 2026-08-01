import React from 'react'
import { Progress } from './ui/progress'

interface ProgressHeaderProps {
  total: number
  found: number
}

export const ProgressHeader: React.FC<ProgressHeaderProps> = ({ total, found }) => {
  const percentage = total > 0 ? Math.round((found / total) * 100) : 0

  return (
    <div className="w-full bg-primary text-primary-foreground p-4 shadow-md sticky top-0 z-40">
      <div className="max-w-md mx-auto flex flex-col gap-2">
        <div className="flex justify-between items-end">
          <h1 className="text-2xl font-black tracking-tight">Fauna Quest</h1>
          <span className="font-bold text-sm bg-primary-foreground/20 px-2 py-1 rounded-md">
            {found} / {total} Found
          </span>
        </div>
        <Progress value={percentage} className="h-3 bg-primary-foreground/20" />
      </div>
    </div>
  )
}
