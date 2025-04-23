import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

import EasterEgg from "./components/sections/EasterEgg";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Interests from "./components/sections/Interests";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Interests />
      <Contact />

      <Footer />
      <EasterEgg />

      <Toaster />
    </ThemeProvider>
  );
}

export default App;
