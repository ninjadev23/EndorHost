import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'ES' | 'EN';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  ES: {
    'nav.home': 'Inicio',
    'nav.plans': 'Planes',
    'nav.hardware': 'Hardware',
    'nav.process': 'Proceso',
    'nav.payment': 'Pago',
    'nav.discord': 'Discord',
    'hero.badge': 'Hardware de Última Generación',
    'hero.title.pre': 'Hosting Premium para Minecraft y ',
    'hero.title.gradient': 'Discord Bots',
    'hero.subtitle': 'EndorHost ofrece los mejores precios del mercado con hardware de última generación. Más de 32.000 clientes satisfechos y contando.',
    'hero.btn.plans': 'Ver Planes',
    'hero.btn.discord': 'Unirse al Discord'
  },
  EN: {
    'nav.home': 'Home',
    'nav.plans': 'Plans',
    'nav.hardware': 'Hardware',
    'nav.process': 'Process',
    'nav.payment': 'Payment',
    'nav.discord': 'Discord',
    'hero.badge': 'Next-Gen Hardware',
    'hero.title.pre': 'Premium Hosting for Minecraft & ',
    'hero.title.gradient': 'Discord Bots',
    'hero.subtitle': 'EndorHost offers the best market prices with next-generation hardware. Over 32,000 satisfied customers and counting.',
    'hero.btn.plans': 'View Plans',
    'hero.btn.discord': 'Join Discord'
  }
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ES');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
