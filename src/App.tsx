import Background from "@/components/ui/Background";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Coding from "@/components/sections/Coding";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
function App() {
  return (
    <main className="bg-slate-950 text-white overflow-hidden">
      <Background />
      <SmoothScroll />

      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Coding />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;