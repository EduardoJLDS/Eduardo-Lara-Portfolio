import { Code2, Palette, Rocket, Users } from 'lucide-react';
import { useLanguage } from '../../hooks';

export default function About() {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Code2,
      title: t('about.highlights.cleanCode.title'),
      description: t('about.highlights.cleanCode.description')
    },
    {
      icon: Palette,
      title: t('about.highlights.uiux.title'),
      description: t('about.highlights.uiux.description')
    },
    {
      icon: Rocket,
      title: t('about.highlights.performance.title'),
      description: t('about.highlights.performance.description')
    },
    {
      icon: Users,
      title: t('about.highlights.teamPlayer.title'),
      description: t('about.highlights.teamPlayer.description')
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/20 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('about.title')} <span className="text-gradient">{t('about.titleHighlight')}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.description1')}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.description2')}
              </p> 
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.description3')}
              </p>
            </div>
            <div className="card-glass p-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{t('about.experience')}</span>
                  <span className="text-primary-400 font-semibold">3+ {t('common.years')}</span>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{t('about.projectsCompleted')}</span>
                  <span className="text-primary-400 font-semibold">15+</span>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{t('about.technologiesMastered')}</span>
                  <span className="text-primary-400 font-semibold">18+</span>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{t('about.location')}</span>
                  <span className="text-primary-400 font-semibold">{t('about.availableRemote')}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-glass p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gradient">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
