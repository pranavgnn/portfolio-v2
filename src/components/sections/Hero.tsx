// import { useRef, MouseEvent as ReactMouseEvent } from "react";

import { motion } from "motion/react";

import { Button } from "../ui/button";

const Hero = () => {
  // const cursorRef = useRef<HTMLDivElement>(null);

  // const handleMouseMove = (event: ReactMouseEvent) => {
  //   cursorRef.current!.style.left = `${event.clientX}px`;
  //   cursorRef.current!.style.top = `${event.clientY}px`;
  // };

  return (
    <section
      id="#"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b to-background from-branding/10 gap-16 md:min-h-screen md:snap-start"
      // onMouseMove={handleMouseMove}
    >
      <div className="space-y-8">
        <motion.h1
          className="font-bold text-5xl font-poppins text-branding"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          whileHover={{ scale: 1.05 }}
        >
          Pranav G Nayak
        </motion.h1>
        <motion.h2
          className="text-lg md:text-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25 }}
        >
          Fullstack | Automation | Scraping | Cybersecurity
        </motion.h2>
      </div>

      <motion.div
        className="space-x-4"
        initial={{ opacity: 0, scale: 0.97, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.5 }}
      >
        <Button
          size="lg"
          className="bg-branding hover:bg-branding/80 text-xl p-6"
        >
          <a href="#projects">View Projects</a>
        </Button>

        {/* <div
          ref={cursorRef}
          className="absolute w-8 h-8 blur-md bg-branding/25 rounded-full"
        /> */}

        <Button size="lg" variant="outline" className="text-xl p-6">
          <a href="#contact">Contact Me</a>
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
