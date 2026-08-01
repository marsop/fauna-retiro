import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import type { Database } from '../types/supabase'
import { CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

type Animal = Database['public']['Tables']['animals']['Row']

interface AnimalCardProps {
  animal: Animal
  onFound: (id: string) => void
  onNext?: (id: string) => void
  isFound?: boolean
}

export const AnimalCard: React.FC<AnimalCardProps> = ({ animal, onFound, onNext, isFound = false }) => {
  const { t } = useTranslation()
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden shadow-lg border-4 border-transparent hover:border-primary/20 transition-all">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        {isFound && animal.video_url ? (
          <video
            src={animal.video_url}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          />
        ) : (
          <img
            src={animal.image_url}
            alt={animal.name}
            className="object-cover w-full h-full"
          />
        )}
        {isFound && !animal.video_url && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px]">
            <div className="bg-white text-green-600 rounded-full p-2 shadow-xl animate-in zoom-in duration-300">
              <CheckCircle2 size={64} className="fill-green-100" />
            </div>
          </div>
        )}
      </div>
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-3xl font-bold text-primary">{animal.name}</CardTitle>
        <CardDescription className="text-lg font-medium text-muted-foreground mt-2">
          {animal.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter className="pt-2 pb-6 px-6">
        {isFound && onNext ? (
          <Button
            size="lg"
            className="w-full text-xl py-8 rounded-2xl font-bold tracking-wide shadow-md transition-transform active:scale-95 bg-green-600 hover:bg-green-700 text-white"
            onClick={() => onNext(animal.id)}
          >
            {t('animalCard.continue')}
          </Button>
        ) : (
          <Button
            size="lg"
            className="w-full text-xl py-8 rounded-2xl font-bold tracking-wide shadow-md transition-transform active:scale-95"
            onClick={() => onFound(animal.id)}
            disabled={isFound}
            variant={isFound ? "secondary" : "default"}
          >
            {isFound ? t('animalCard.foundItAlready') : t('animalCard.foundIt')}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
