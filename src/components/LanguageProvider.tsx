import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'fr';
  toggleLanguage: () => void;
  t: (en: string, fr: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
  t: (en) => en,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  }, []);

  const t = useCallback((en: string, fr: string) => {
    return language === 'fr' ? fr : en;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
