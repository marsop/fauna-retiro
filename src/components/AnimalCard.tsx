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
  isFound?: boolean
}

export const AnimalCard: React.FC<AnimalCardProps> = ({ animal, onFound, isFound = false }) => {
  const { t } = useTranslation()

  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden shadow-lg border-4 border-transparent hover:border-primary/20 transition-all">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <img
          src={animal.image_url}
          alt={t(animal.name)}
          className="object-cover w-full h-full"
        />
        {isFound && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px]">
            <div className="bg-white text-green-600 rounded-full p-2 shadow-xl animate-in zoom-in duration-300">
              <CheckCircle2 size={64} className="fill-green-100" />
            </div>
          </div>
        )}
      </div>
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-3xl font-bold text-primary">{t(animal.name)}</CardTitle>
        <CardDescription className="text-lg font-medium text-muted-foreground mt-2">
          {t(animal.description)}
        </CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter className="pt-2 pb-6 px-6">
        <Button
          size="lg"
          className="w-full text-xl py-8 rounded-2xl font-bold tracking-wide shadow-md transition-transform active:scale-95"
          onClick={() => onFound(animal.id)}
          disabled={isFound}
          variant={isFound ? "secondary" : "default"}
        >
          {isFound ? t('animalCard.foundIt') : t('animalCard.iFoundIt')}
        </Button>
      </CardFooter>
    </Card>
  )
}
