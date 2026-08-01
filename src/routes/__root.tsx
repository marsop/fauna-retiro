import { createRootRoute, Outlet } from '@tanstack/react-router'
import { BottomNav } from '../components/BottomNav'
import { ProgressHeader } from '../components/ProgressHeader'
import { useQuery } from '@tanstack/react-query'
import { fetchAnimals } from '../lib/api'
import { useQuestStore } from '../hooks/useQuestStore'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const { data: animals = [] } = useQuery({
    queryKey: ['animals'],
    queryFn: fetchAnimals
  })

  const foundAnimalIds = useQuestStore((state) => state.foundAnimalIds)

  return (
    <div className="min-h-screen bg-muted/30 pb-24 font-sans">
      <ProgressHeader total={animals.length} found={foundAnimalIds.length} />

      <main className="p-4 max-w-md mx-auto">
        <Outlet />
      </main>

      <BottomNav />
    </div>
  )
}
