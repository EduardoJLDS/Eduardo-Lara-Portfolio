import { useLanguage } from '../../hooks';
import { 
  SiReact, 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiJavascript, 
  SiHtml5,
  SiCss3, 
  SiNodedotjs, 
  SiPostgresql, 
  SiSupabase, 
  SiGit,
  SiTestinglibrary,
  SiOpenapiinitiative,
  SiShopify,
  SiGraphql
} from 'react-icons/si';
import { Database, Server, Code2, Layers } from 'lucide-react';

export default function Skills() {
  const { t } = useLanguage();

  const skillLevels = {
    expert: { 
      color: 'text-purple-400', 
      bgColor: 'bg-purple-500/20', 
      borderColor: 'border-purple-400/30',
      icon: '🟣'
    },
    advanced: { 
      color: 'text-blue-400', 
      bgColor: 'bg-blue-500/20', 
      borderColor: 'border-blue-400/30',
      icon: '🔵'
    },
    intermediate: { 
      color: 'text-green-400', 
      bgColor: 'bg-green-500/20', 
      borderColor: 'border-green-400/30',
      icon: '🟢'
    }
  };

  const frontendSkills = [
    { name: 'Shopify', level: 'expert', icon: SiShopify },
    { name: 'Liquid', level: 'expert', icon: Code2 },
    { name: 'React', level: 'expert', icon: SiReact },
    { name: 'JavaScript', level: 'expert', icon: SiJavascript },
    { name: 'TypeScript', level: 'advanced', icon: SiTypescript },
    { name: 'HTML5', level: 'expert', icon: SiHtml5 },
    { name: 'CSS3 / SCSS', level: 'expert', icon: SiCss3 },
    { name: 'Tailwind CSS', level: 'expert', icon: SiTailwindcss },
    { name: 'Next.js', level: 'advanced', icon: SiNextdotjs },
    { name: 'Zustand', level: 'intermediate', icon: Layers },
    { name: 'Vitest', level: 'intermediate', icon: SiTestinglibrary }
  ];

  const backendSkills = [
    { name: 'Shopify APIs', level: 'advanced', icon: SiShopify },
    { name: 'GraphQL', level: 'advanced', icon: SiGraphql },
    { name: 'Node.js', level: 'advanced', icon: SiNodedotjs },
    { name: 'REST APIs', level: 'advanced', icon: Server },
    { name: 'PostgreSQL', level: 'intermediate', icon: SiPostgresql },
    { name: 'Supabase', level: 'advanced', icon: SiSupabase },
    { name: 'Swagger', level: 'intermediate', icon: SiOpenapiinitiative },
    { name: 'Git & GitHub', level: 'expert', icon: SiGit }
  ];

  const SkillCard = ({ skill }: { skill: { name: string; level: string; icon: React.ComponentType<{ className?: string }> } }) => {
    const levelConfig = skillLevels[skill.level as keyof typeof skillLevels];
    const IconComponent = skill.icon;
    
    return (
      <div className={`
        relative group p-4 rounded-xl border transition-all duration-300 
        hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10
        ${levelConfig.bgColor} ${levelConfig.borderColor}
        backdrop-blur-sm
      `}>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-gray-700 group-hover:to-gray-800 transition-all duration-300">
            <IconComponent className={`w-5 h-5 ${levelConfig.color}`} />
          </div>
          <div className="flex-1">
            <h4 className="text-white font-semibold text-sm">{skill.name}</h4>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-xs">{levelConfig.icon}</span>
              <span className={`text-xs font-medium ${levelConfig.color}`}>
                {t(`skills.levels.${skill.level}`)}
              </span>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/0 via-blue-600/0 to-purple-600/0 group-hover:from-purple-600/5 group-hover:via-blue-600/5 group-hover:to-purple-600/5 transition-all duration-300" />
      </div>
    );
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-slate-900/50 to-gray-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-blue-900/10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('skills.title')} <span className="text-gradient">{t('skills.titleHighlight')}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              {t('skills.description')}
            </p>
            <div className="inline-flex flex-wrap gap-4 p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/30">
              <div className="flex items-center space-x-2 text-sm">
                <span>🟣</span>
                <span className="text-purple-400 font-medium">{t('skills.legend.expert')}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span>🔵</span>
                <span className="text-blue-400 font-medium">{t('skills.legend.advanced')}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span>🟢</span>
                <span className="text-green-400 font-medium">{t('skills.legend.intermediate')}</span>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <Code2 size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gradient">
                  {t('skills.categories.frontend')}
                </h3>
              </div>
              <div className="grid gap-4">
                {frontendSkills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Database size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gradient">
                  {t('skills.categories.backend')}
                </h3>
              </div>
              <div className="grid gap-4">
                {backendSkills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
