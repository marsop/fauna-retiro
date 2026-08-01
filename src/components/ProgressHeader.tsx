import React from 'react'
import { Progress } from './ui/progress'
import { useTranslation } from 'react-i18next'

interface ProgressHeaderProps {
  total: number
  found: number
}

export const ProgressHeader: React.FC<ProgressHeaderProps> = ({ total, found }) => {
  const { t, i18n } = useTranslation()
  const percentage = total > 0 ? Math.round((found / total) * 100) : 0

  return (
    <div className="w-full bg-primary text-primary-foreground p-4 shadow-md sticky top-0 z-40">
      <div className="max-w-md mx-auto flex flex-col gap-2">
        <div className="flex justify-between items-end">
          <h1 className="text-2xl font-black tracking-tight">{t('header.title')}</h1>
          <div className="flex items-center gap-2">
            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="bg-primary-foreground/20 text-primary-foreground rounded text-xs p-1 outline-none font-medium cursor-pointer"
            >
              <option value="de" className="text-black">DE</option>
              <option value="en" className="text-black">EN</option>
            </select>
            <span className="font-bold text-sm bg-primary-foreground/20 px-2 py-1 rounded-md">
              {t('header.found', { found, total })}
            </span>
          </div>
        </div>
        <Progress value={percentage} className="h-3 bg-primary-foreground/20" />
      </div>
    </div>
  )
}
