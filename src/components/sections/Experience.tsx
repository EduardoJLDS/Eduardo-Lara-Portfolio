import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../../hooks';

const Experience: React.FC = () => {
  const { t, tArray } = useLanguage();

  const getExperiences = () => {
    const getAchievements = (companyKey: string): string[] => {
    const achievementsKey = `experience.experiences.${companyKey}.achievements`;
    return tArray(achievementsKey);
  };
    return [
      {
        company: t('experience.experiences.glyff.company'),
        position: t('experience.experiences.glyff.position'),
        period: t('experience.experiences.glyff.period'),
        location: t('experience.experiences.glyff.location'),
        description: t('experience.experiences.glyff.description'),
        achievements: getAchievements('glyff'),
        technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS3 / SCSS', 'Shopify CLI', 'GraphQL', 'REST APIs', 'Dawn Theme']
      },
      {
        company: t('experience.experiences.clorian.company'),
        position: t('experience.experiences.clorian.position'),
        period: t('experience.experiences.clorian.period'),
        location: t('experience.experiences.clorian.location'),
        description: t('experience.experiences.clorian.description'),
        achievements: getAchievements('clorian'),
        technologies: ['React', 'TypeScript', 'SASS', 'Vitest', 'Tauri']
      },
      {
        company: t('experience.experiences.lasVillas.company'),
        position: t('experience.experiences.lasVillas.position'),
        period: t('experience.experiences.lasVillas.period'),
        location: t('experience.experiences.lasVillas.location'),
        description: t('experience.experiences.lasVillas.description'),
        achievements: getAchievements('lasVillas'),
        technologies: ['React', 'JavaScript', 'Redux', 'Material-UI', 'REST APIs']
      }
    ];
  };
  const experiences = getExperiences();

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-950/10 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('experience.title')} <span className="text-gradient">{t('experience.titleHighlight')}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              {t('experience.description')}
            </p>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="card-glass p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Briefcase size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gradient">{exp.position}</h3>
                        <p className="text-xl text-gray-300">{exp.company}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 mt-4 md:mt-0">
                    <div className="flex items-center gap-2 text-primary-400">
                      <Calendar size={18} />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin size={18} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-primary-400 mb-3">{t('experience.keyAchievements')}</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3">
                        <span className="text-accent-400 mt-1">▸</span>
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">{t('experience.technologiesUsed')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-900/30 border border-primary-500/30 rounded-full text-sm text-primary-300 hover:bg-primary-900/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
