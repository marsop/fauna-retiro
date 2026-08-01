import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { fetchAnimals } from '../lib/api'
import { useQuestStore } from '../hooks/useQuestStore'
import { AnimalCard } from '../components/AnimalCard'
import confetti from 'canvas-confetti'
import { Button } from '../components/ui/button'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const { data: animals = [], isLoading } = useQuery({
    queryKey: ['animals'],
    queryFn: fetchAnimals
  })

  const { foundAnimalIds, markAsFound } = useQuestStore()

  if (isLoading) {
    return <div className="text-center p-10 font-bold text-muted-foreground animate-pulse">Loading Quest...</div>
  }

  // Find the first animal that hasn't been found yet based on display_order
  const sortedAnimals = [...animals].sort((a, b) => a.display_order - b.display_order)
  const currentTarget = sortedAnimals.find(a => !foundAnimalIds.includes(a.id))

  const handleFound = (id: string) => {
    markAsFound(id)
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#22c55e', '#3b82f6', '#f59e0b', '#ec4899']
    })
  }

  if (!currentTarget) {
    return (
      <div className="text-center py-20 px-4 space-y-6 flex flex-col items-center">
        <div className="text-6xl mb-4">🏆</div>
        <h2 className="text-3xl font-black text-primary">Quest Complete!</h2>
        <p className="text-lg text-muted-foreground">You found all the animals! Amazing job!</p>
        <Link to="/progress">
          <Button size="lg" className="mt-8 rounded-full font-bold text-lg px-8">
            View Your Progress
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-6 text-center">
        <h2 className="text-xl font-bold text-muted-foreground uppercase tracking-widest text-sm">Current Target</h2>
      </div>
      <AnimalCard
        animal={currentTarget}
        onFound={handleFound}
        isFound={false}
      />
    </div>
  )
}
