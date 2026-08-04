import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center animate-in fade-in zoom-in duration-300">
      <div className="bg-card text-card-foreground p-8 rounded-3xl shadow-sm border mb-8 max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-4">{t('about.title')}</h1>

        <p className="text-muted-foreground mb-8 text-base leading-relaxed">
          {t('about.description')}
        </p>

        <div className="pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground mb-1">
            {t('about.authorPrefix')}
          </p>
          <a
            href="https://albertogregorio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium text-lg inline-flex items-center gap-1"
          >
            {t('about.authorName')}
          </a>
        </div>
      </div>
    </div>
  )
}
