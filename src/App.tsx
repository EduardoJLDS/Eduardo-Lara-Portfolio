import { lazy, Suspense } from 'react';
import { Navigation, Footer } from './components';
import { LanguageProvider } from './context/LanguageProvider';

const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Projects = lazy(() => import('./components/sections/Projects'));

const SectionLoader = () => (
  <div className="flex items-center justify-center py-24">
    <div className="w-8 h-8 border-2 border-primary-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-950">
        <Navigation />
        <main>
          <Suspense fallback={<SectionLoader />}>
            <Hero />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Experience />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Projects />
          </Suspense>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
