import React from 'react'
import { Progress } from './ui/progress'
import { useTranslation } from 'react-i18next'
import { ModeToggle } from './mode-toggle'
import { LanguageSwitcher } from './LanguageSwitcher'
import { QuestTimer } from './QuestTimer'

interface ProgressHeaderProps {
  total: number
  found: number
}

export const ProgressHeader: React.FC<ProgressHeaderProps> = ({ total, found }) => {
  const { t } = useTranslation()
  const percentage = total > 0 ? Math.round((found / total) * 100) : 0

  return (
    <div className="w-full bg-primary text-primary-foreground p-4 shadow-md sticky top-0 z-40">
      <div className="max-w-md mx-auto flex flex-col gap-2">
        <div className="flex justify-between items-end">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black tracking-tight">{t('app.title')}</h1>
            <div className="flex items-center gap-1">
              <ModeToggle />
              <LanguageSwitcher />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <QuestTimer />
            <span className="font-bold text-sm bg-primary-foreground/20 px-2 py-1 h-8 flex items-center rounded-md">
              {t('progress.foundCount', { found, total })}
            </span>
          </div>
        </div>
        <Progress value={percentage} className="h-3 bg-primary-foreground/20" />
      </div>
    </div>
  )
}
