import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Education from '../components/sections/Education';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Coding from '../components/sections/Coding';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="bg-neutral-950 text-neutral-50 selection:bg-emerald-500 selection:text-black antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Coding />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}