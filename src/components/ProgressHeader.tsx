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

  const toggleLanguage = () => {
    const languages = ['de', 'en', 'es', 'gl', 'vbg'];
    const currentIndex = languages.indexOf(i18n.resolvedLanguage || 'de');
    const nextIndex = (currentIndex + 1) % languages.length;
    i18n.changeLanguage(languages[nextIndex]);
  }

  return (
    <div className="w-full bg-primary text-primary-foreground p-4 shadow-md sticky top-0 z-40">
      <div className="max-w-md mx-auto flex flex-col gap-2">
        <div className="flex justify-between items-end">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black tracking-tight">{t('app.title')}</h1>
            <button
              onClick={toggleLanguage}
              className="text-xs font-bold bg-primary-foreground/20 hover:bg-primary-foreground/30 px-2 py-1 rounded-md transition-colors uppercase"
            >
              {i18n.resolvedLanguage || 'de'}
            </button>
          </div>
          <span className="font-bold text-sm bg-primary-foreground/20 px-2 py-1 rounded-md">
            {t('progress.foundCount', { found, total })}
          </span>
        </div>
        <Progress value={percentage} className="h-3 bg-primary-foreground/20" />
      </div>
    </div>
  )
}
