import { Globe } from 'lucide-react';
import { useLanguage } from '../../hooks';
import type { Language } from '../../context/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg card-glass hover:bg-white/10 transition-all duration-300 group"
      aria-label={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
    >
      <Globe size={18} className="group-hover:rotate-12 transition-transform" />
      <span className="text-sm font-medium uppercase">
        {language === 'en' ? 'ES' : 'EN'}
      </span>
    </button>
  );
}
