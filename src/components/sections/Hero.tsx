// import { useRef, MouseEvent as ReactMouseEvent } from "react";

import { cn } from "@/lib/utils";

import SectionLayout from "../layouts/SectionLayout";

import { Button } from "../ui/button";

const Hero = () => {
  // const cursorRef = useRef<HTMLDivElement>(null);

  // const handleMouseMove = (event: ReactMouseEvent) => {
  //   cursorRef.current!.style.left = `${event.clientX}px`;
  //   cursorRef.current!.style.top = `${event.clientY}px`;
  // };

  return (
    <SectionLayout
      id=""
      title="hero"
      alternate={false}
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b to-background from-branding/10 gap-16"
    >
      {(inView) => (
        <>
          <div className="space-y-8">
            <h1
              className={cn(
                "font-bold text-5xl font-poppins text-branding duration-500 opacity-0",
                inView &&
                  "animate-in fade-in slide-in-from-bottom-8 opacity-100"
              )}
            >
              Pranav G Nayak
            </h1>
            <h2
              className={cn(
                "text-lg md:text-2xl duration-600 delay-100 opacity-0",
                inView &&
                  "animate-in fade-in slide-in-from-bottom-8 opacity-100"
              )}
            >
              Fullstack | Automation | Scraping | Cybersecurity
            </h2>
          </div>

          <div
            className={cn(
              "space-x-4 duration-700 delay-200 opacity-0",
              inView &&
                "animate-in fade-in slide-in-from-bottom-4 zoom-in-80 opacity-100"
            )}
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
          </div>
        </>
      )}
    </SectionLayout>
  );
};

export default Hero;
