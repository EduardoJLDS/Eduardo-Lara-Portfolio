import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import heroBackgroundGif from '../../assets/images/hero-background.gif';
import { useLanguage } from '../../hooks';
import { OptimizedImage } from '../index';

export default function Hero() {
  const { t, language } = useLanguage();
  const handleDownload = () => {
    const lang = language;
    const fileName = `cv-${lang}.pdf`;

    const link = document.createElement("a");
    link.href = `/assets/CVFiles/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden critical-resource">
      <div className="absolute inset-0 w-full h-full">
        <OptimizedImage
          src={heroBackgroundGif}
          alt="Hero background animation"
          className="w-full h-full object-cover opacity-100"
          priority={true}
          loading="eager"
          width={1920}
          height={1080}
        />
      </div>
      <div className="absolute inset-0 bg-gray-950/60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            {t('hero.name')}
          </h1>
          <div className="text-2xl md:text-3xl font-semibold mb-4 text-gradient">
            {t('hero.title')}
          </div>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button onClick={handleDownload} className="btn-primary group">
              <span className="flex items-center gap-2">
                {t('hero.downloadCV')}
                <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              </span>
            </button>
            <a href="#projects" className="card-glass px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300">
              {t('hero.seeMyWork')}
            </a>
          </div>
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/EduardoJLDS"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 card-glass flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/eduardojlds/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 card-glass flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:eduardojoselara12@gmail.com"
              className="w-12 h-12 card-glass flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown size={32} className="text-primary-400" />
      </a>
    </section>
  );
}
