// import { useRef, MouseEvent as ReactMouseEvent } from "react";

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
        <h1 className="font-bold text-5xl font-poppins text-branding">
          Pranav G Nayak
        </h1>
        <h2 className="text-lg md:text-2xl">
          Fullstack | Automation | Scraping | Cybersecurity
        </h2>
      </div>

      <div className="space-x-4">
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
      </div>
    </section>
  );
};

export default Hero;
