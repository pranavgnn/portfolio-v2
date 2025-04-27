import React, { useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

import { useSection } from "@/contexts/SectionContext";

interface SectionLayoutProps {
  id?: string;
  title: string;
  children: (inView: boolean) => React.ReactNode;
  alternate?: boolean;
  className?: string;
}

const SectionLayout = ({
  id,
  title,
  children,
  alternate = false,
  className,
}: SectionLayoutProps) => {
  id = typeof id === "string" ? id : title.toLowerCase();

  const { setActiveSection } = useSection();

  const [sectionRef, inView] = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });

  useEffect(() => {
    if (window.location.hash === `#${id}`) {
      const element = document.getElementById(id);
      element?.scrollIntoView();
    }
  }, [id]);

  useEffect(() => {
    if (inView) {
      setActiveSection(id);
      //   window.history.replaceState(null, "", `#${id}`);
    }
  }, [inView, id, setActiveSection]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        // md:min-h-screen md:snap-start
        "py-24 md:py-32 px-8",
        alternate && "bg-secondary/50",
        className
      )}
    >
      {children(inView)}
    </section>
  );
};

export default SectionLayout;
