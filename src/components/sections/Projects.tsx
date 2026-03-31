import { ExternalLink, Github, Code2, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../../hooks';
import techGearImage from '../../assets/images/tech-gear.png';
import monarcaImage from '../../assets/images/Monarca.png';
import twoBrothersImage from '../../assets/images/TwoBrothers.png';
import growNationImage from '../../assets/images/GrowNation.png';
import amoaHealthImage from '../../assets/images/AmoaHealth.png';
import leGrenierImage from '../../assets/images/LeGrenier.png';
import mirazuImage from '../../assets/images/Mirazu.png';

export default function Projects() {
const { t } = useLanguage();

  const projects: {
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    github?: string;
    demo: string;
    featured?: boolean;
    client?: boolean;
  }[] = [
    {
      title: "Tech & Gear Emporium",
      description: "Modern e-commerce application for tech products featuring interactive shopping cart, product catalog with quantity selection, and comprehensive testing suite. Built with React and TypeScript for optimal performance and type safety.",
      image: techGearImage,
      technologies: ["React", "TypeScript", "Zustand", "Vitest", "Testing Library", "CSS3", "Vite", "ESLint"],
      github: "https://github.com/EduardoJLDS/Tech---Gear-Emporium",
      demo: "https://tech-gear-emporium.vercel.app/",
      featured: true
    },
    {
      title: "Monarca UL JE",
      description: "Custom Shopify storefront for a fashion & lifestyle brand. Built a fully custom Liquid theme with bespoke sections, dynamic product filtering, and a seamless checkout experience optimized for conversion.",
      image: monarcaImage,
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3 / SCSS", "Shopify CLI", "Metafields"],
      demo: "https://monarcaulje.com/",
      client: true
    },
    {
      title: "Two Brothers Miami",
      description: "Shopify storefront for a Miami-based business. Developed a custom Dawn-based theme with tailored sections for product showcasing, brand storytelling, and a mobile-first responsive layout.",
      image: twoBrothersImage,
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "Dawn Theme", "Shopify CLI"],
      demo: "https://twobrothersmiami.com/",
      client: true
    },
    {
      title: "Grow Nation Events",
      description: "E-commerce platform for an events company built on Shopify. Implemented custom ticketing product types, event-focused landing sections, and integrated third-party apps for event management.",
      image: growNationImage,
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "Shopify APIs", "Third-party Apps"],
      demo: "https://www.grownationevents.com/",
      client: true
    },
    {
      title: "Amoa Health",
      description: "Health & wellness Shopify storefront built for conversion. Features custom subscription product sections, ingredient storytelling layouts, and performance-optimized pages with 90+ PageSpeed scores.",
      image: amoaHealthImage,
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3 / SCSS", "Shopify CLI", "Metafields"],
      demo: "https://amoahealth.com/",
      client: true
    },
    {
      title: "Le Grenier",
      description: "Curated lifestyle Shopify store for the Chilean market. Delivered a custom Liquid theme with elegant editorial sections, collection filtering, and a fully responsive design tailored to the brand identity.",
      image: leGrenierImage,
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "Shopify CLI", "Dawn Theme"],
      demo: "https://www.legrenier.cl/",
      client: true
    },
    {
      title: "Mirazu",
      description: "Fashion brand Shopify storefront for the Chilean market. Developed a custom theme with lookbook sections, size guide modals, and an optimized product page layout to maximize add-to-cart conversions.",
      image: mirazuImage,
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3 / SCSS", "Shopify CLI", "Metaobjects"],
      demo: "https://www.mirazu.cl/",
      client: true
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gray-900/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary-900/10 via-transparent to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('projects.title')} <span className="text-gradient">{t('projects.titleHighlight')}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              {t('projects.description')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card-glass overflow-hidden hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden h-48">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-900/60 via-blue-900/40 to-gray-900 flex items-center justify-center group-hover:from-purple-800/70 group-hover:via-blue-800/50 transition-all duration-500">
                      <ShoppingBag size={52} className="text-primary-400 opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-300" />
                    </div>
                  )}
                  {(project.featured || project.client) && (
                    <div className="absolute top-4 right-4 bg-gradient-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {project.featured ? t('projects.featured') : t('projects.clientProject')}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gradient group-hover:text-primary-300 transition-colors">
                      {project.title}
                    </h3>
                    <Code2 size={20} className="text-primary-400 flex-shrink-0" />
                  </div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-primary-900/30 border border-primary-500/30 rounded text-primary-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 card-glass hover:bg-white/10 rounded-lg transition-all duration-300"
                      >
                        <Github size={18} />
                        <span className="text-sm">{t('projects.viewCode')}</span>
                      </a>
                    )}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 py-2 bg-gradient-primary hover:shadow-lg hover:shadow-primary-500/50 rounded-lg transition-all duration-300 ${project.github ? 'flex-1' : 'w-full'}`}
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">{t('projects.viewProject')}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://github.com/EduardoJLDS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-primary"
            >
              <Github size={20} />
              {t('projects.viewMoreGithub')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
