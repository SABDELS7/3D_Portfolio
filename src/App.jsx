import { Suspense, lazy } from 'react';
import Navbar from './sections/Navbar.jsx';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Lazy load components to optimize performance
const DownloadCV = lazy(() => import('./sections/DownloadCV.jsx'));
const Chatbot = lazy(() => import('./sections/Chatbot.jsx'));
const Hero = lazy(() => import('./sections/Hero.jsx'));
const About = lazy(() => import('./sections/About.jsx'));
const Slider = lazy(() => import('./sections/Slider.jsx'));
const SliderCertif = lazy(() => import('./sections/SliderCertif.jsx'));
const Projects = lazy(() => import('./sections/Projects.jsx'));
const WorkExperience = lazy(() => import('./sections/Experience.jsx'));
const Contact = lazy(() => import('./sections/Contact.jsx'));
const Footer = lazy(() => import('./sections/Footer.jsx'));

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      
      {/* Suspense for lazy-loaded components */}
      <Suspense fallback={<div>Loading...</div>}>
        <DownloadCV />
        <Chatbot />
        <Hero />
        <About />
        <Slider />
        <SliderCertif />
        <Projects />
        <WorkExperience />
        <Contact />
        <Footer />
      </Suspense>

      {/* Analytics and Speed Insights */}
      <Analytics />
      <SpeedInsights />
    </main>
  );
};

export default App;
