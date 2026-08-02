import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { fetchAnimals } from '../lib/api'
import { useQuestStore } from '../hooks/useQuestStore'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { CheckCircle2, Circle } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../components/ui/alert-dialog'
import { useTranslation } from 'react-i18next'
import { formatAssetUrl } from '../lib/utils'

export const Route = createFileRoute('/progress')({
  component: ProgressScreen,
})

function ProgressScreen() {
  const { t } = useTranslation()
  const { data: animals = [], isLoading } = useQuery({
    queryKey: ['animals'],
    queryFn: fetchAnimals
  })

  const { foundAnimalIds, resetProgress } = useQuestStore()

  if (isLoading) {
    return <div className="text-center p-10 font-bold text-muted-foreground animate-pulse">{t('progress.loading')}</div>
  }

  const sortedAnimals = [...animals].sort((a, b) => a.display_order - b.display_order)

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300 pb-10">
      <h2 className="text-2xl font-black text-center text-primary mt-2">{t('progress.checklist')}</h2>

      <div className="grid gap-3">
        {sortedAnimals.map((animal) => {
          const isFound = foundAnimalIds.includes(animal.id)
          return (
            <Card key={animal.id} className={`p-3 flex items-center gap-4 transition-all ${isFound ? 'bg-primary/5 border-primary/20' : 'bg-background'}`}>
              <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-muted relative flex items-center justify-center">
                 {isFound ? (
                   <img src={formatAssetUrl(animal.image_url)} alt={t(animal.name)} className="w-full h-full object-cover transition-all" />
                 ) : (
                   <span className="text-3xl font-bold text-muted-foreground/30">?</span>
                 )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={`font-bold text-lg truncate ${isFound ? 'text-primary' : 'text-muted-foreground'}`}>
                  {isFound ? t(animal.name) : "???"}
                </h3>
                <p className="text-sm text-muted-foreground truncate">{isFound ? t('progress.found') : t('progress.hiding')}</p>
              </div>
              <div className="shrink-0 pr-2">
                {isFound ? (
                  <CheckCircle2 size={32} className="text-green-500 fill-green-100" />
                ) : (
                  <Circle size={32} className="text-muted-foreground/30" />
                )}
              </div>
            </Card>
          )
        })}
      </div>

      <div className="pt-8 flex justify-center">
        <AlertDialog>
          <AlertDialogTrigger
            render={
              <Button
                variant="outline"
                className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
              />
            }
          >
            {t('progress.reset')}
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{t('progress.resetTitle')}</AlertDialogTitle>
              <AlertDialogDescription>
                {t('progress.resetDesc')}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                render={<Button variant="outline" />}
              >
                {t('progress.cancel')}
              </AlertDialogCancel>
              <AlertDialogAction
                render={<Button />}
                onClick={() => resetProgress()}
              >
                {t('progress.continue')}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  )
}
