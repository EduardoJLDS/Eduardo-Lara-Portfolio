import { useLanguage } from '../../hooks';
import { 
  SiReact, 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiJavascript, 
  SiHtml5,
  SiCss,
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

  const frontendSkills = [
    { name: 'Shopify', icon: SiShopify },
    { name: 'Liquid', icon: Code2 },
    { name: 'React', icon: SiReact },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3 / SCSS', icon: SiCss },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Zustand', icon: Layers },
    { name: 'Vitest', icon: SiTestinglibrary }
  ];

  const backendSkills = [
    { name: 'Shopify APIs', icon: SiShopify },
    { name: 'GraphQL', icon: SiGraphql },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'REST APIs', icon: Server },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Supabase', icon: SiSupabase },
    { name: 'Swagger', icon: SiOpenapiinitiative },
    { name: 'Git & GitHub', icon: SiGit }
  ];

  const SkillCard = ({ skill }: { skill: { name: string; icon: React.ComponentType<{ className?: string }> } }) => {
    const IconComponent = skill.icon;
    
    return (
      <div className={`
        relative group p-4 rounded-xl border transition-all duration-300 
        hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10
        bg-white/5 border-white/10 backdrop-blur-sm
      `}>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-gray-700 group-hover:to-gray-800 transition-all duration-300">
            <IconComponent className="w-5 h-5 text-primary-400" />
          </div>
          <div className="flex-1">
            <h4 className="text-white font-semibold text-sm">{skill.name}</h4>
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
