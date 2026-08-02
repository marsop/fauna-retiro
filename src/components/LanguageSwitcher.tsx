import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { formatAssetUrl } from '../lib/utils';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'de', name: 'Deutsch', flag: 'de.svg' },
    { code: 'en', name: 'English', flag: 'en.svg' },
    { code: 'es', name: 'Español', flag: 'es.svg' },
    { code: 'gl', name: 'Galego', flag: 'gl.svg' },
    { code: 'vbg', name: 'Vorarlbergerisch', flag: 'vbg.svg' },
  ];

  const currentLang =
    languages.find((l) => l.code === i18n.resolvedLanguage) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-8 w-8 inline-flex items-center justify-center rounded-md bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors">
        <img
          src={formatAssetUrl(`/flags/${currentLang.flag}`)}
          alt={currentLang.name}
          className="w-5 h-5 rounded-full object-cover"
        />
        <span className="sr-only">Toggle language</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src={formatAssetUrl(`/flags/${lang.flag}`)}
              alt={lang.name}
              className="w-4 h-4 rounded-full object-cover"
            />
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
