import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
// import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';
import DownloadCV from './sections/DownloadCV.jsx';
import Slider from './sections/Slider.jsx';
import SliderCertif from './sections/SliderCertif.jsx';
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Slider />
      <SliderCertif />
      <Projects />
      {/* <Clients /> */}
      <WorkExperience />
      <Contact />
      <Footer />
      <DownloadCV />
      <Analytics />
    </main>
  );
};

export default App;
