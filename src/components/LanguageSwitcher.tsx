import React from 'react'
import { useTranslation } from 'react-i18next'

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'de' : 'en'
    i18n.changeLanguage(nextLang)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="text-xs font-bold bg-primary-foreground/20 hover:bg-primary-foreground/30 px-2 py-1 rounded-md transition-colors uppercase"
    >
      {i18n.language === 'en' ? 'DE' : 'EN'}
    </button>
  )
}
