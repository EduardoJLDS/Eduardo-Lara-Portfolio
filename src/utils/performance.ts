
export const preloadCriticalFonts = () => {
  if (typeof window === 'undefined') return;
};

export const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src!;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });

  images.forEach(img => imageObserver.observe(img));
};

export const optimizeAnimations = () => {
  const animatedElements = document.querySelectorAll('.hover\\:scale-110, .group-hover\\:scale-110, .animate-bounce');
  
  animatedElements.forEach(element => {
    (element as HTMLElement).style.willChange = 'transform';
    
    element.addEventListener('transitionend', () => {
      (element as HTMLElement).style.willChange = 'auto';
    }, { once: true });
  });
};

export const prefetchCriticalResources = () => {
  const criticalResources = [
    '/src/assets/images/hero-background.gif',
    '/src/assets/CVFiles/cv-en.pdf',
    '/src/assets/CVFiles/cv-es.pdf'
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = resource;
    document.head.appendChild(link);
  });
};

export const setupModulePreloading = () => {
  if ('modulepreload' in HTMLLinkElement.prototype) {
    const criticalModules = [
      '/src/context/LanguageProvider.tsx',
      '/src/components/sections/Hero.tsx'
    ];

    criticalModules.forEach(module => {
      const link = document.createElement('link');
      link.rel = 'modulepreload';
      link.href = module;
      document.head.appendChild(link);
    });
  }
};

export const optimizeScrolling = () => {
  let ticking = false;
  
  const updateScrollPosition = () => {
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
};

export const initPerformanceOptimizations = () => {
  if (typeof window === 'undefined') return;
};