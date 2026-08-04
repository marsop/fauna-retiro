import React from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Map, Trophy, Info } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const BottomNav: React.FC = () => {
  const { t } = useTranslation()
  const routerState = useRouterState()

  const isQuest = routerState.location.pathname === '/'
  const isProgress = routerState.location.pathname === '/progress'
  const isAbout = routerState.location.pathname === '/about'

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-2 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        <Link
          to="/"
          className={`flex flex-col items-center p-3 rounded-xl transition-colors ${isQuest ? 'text-primary' : 'text-muted-foreground hover:bg-muted'}`}
        >
          <Map size={28} className={isQuest ? 'fill-primary/20' : ''} />
          <span className="text-xs font-bold mt-1">{t('nav.quest')}</span>
        </Link>
        <Link
          to="/progress"
          className={`flex flex-col items-center p-3 rounded-xl transition-colors ${isProgress ? 'text-primary' : 'text-muted-foreground hover:bg-muted'}`}
        >
          <Trophy size={28} className={isProgress ? 'fill-primary/20' : ''} />
          <span className="text-xs font-bold mt-1">{t('nav.progress')}</span>
        </Link>
        <Link
          to="/about"
          className={`flex flex-col items-center p-3 rounded-xl transition-colors ${isAbout ? 'text-primary' : 'text-muted-foreground hover:bg-muted'}`}
        >
          <Info size={28} className={isAbout ? 'fill-primary/20' : ''} />
          <span className="text-xs font-bold mt-1">{t('nav.about')}</span>
        </Link>
      </div>
    </div>
  )
}
