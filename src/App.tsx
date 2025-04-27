import { ThemeProvider } from "@/contexts/ThemeContext";
import { SectionProvider } from "@/contexts/SectionContext";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Interests from "@/components/sections/Interests";
import Contact from "@/components/sections/Contact";

function App() {
  return (
    <ThemeProvider>
      <SectionProvider>
        <Navbar />

        <Hero />
        <About />
        <Projects />
        <Interests />
        <Contact />

        <Footer />
        
        <Toaster />
      </SectionProvider>
    </ThemeProvider>
  );
}

export default App;
