import React from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Map, Trophy } from 'lucide-react'

export const BottomNav: React.FC = () => {
  const routerState = useRouterState()
  const isProgress = routerState.location.pathname === '/progress'

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-2 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        <Link
          to="/"
          className={`flex flex-col items-center p-3 rounded-xl transition-colors ${!isProgress ? 'text-primary' : 'text-muted-foreground hover:bg-muted'}`}
        >
          <Map size={28} className={!isProgress ? 'fill-primary/20' : ''} />
          <span className="text-xs font-bold mt-1">Quest</span>
        </Link>
        <Link
          to="/progress"
          className={`flex flex-col items-center p-3 rounded-xl transition-colors ${isProgress ? 'text-primary' : 'text-muted-foreground hover:bg-muted'}`}
        >
          <Trophy size={28} className={isProgress ? 'fill-primary/20' : ''} />
          <span className="text-xs font-bold mt-1">Progress</span>
        </Link>
      </div>
    </div>
  )
}
