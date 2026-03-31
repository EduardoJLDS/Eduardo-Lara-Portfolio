import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import App from './App.tsx';
import './styles/index.css';
import { initPerformanceOptimizations } from './utils/performance.ts';

initPerformanceOptimizations();

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <SpeedInsights />
    <Analytics />
  </StrictMode>
);
