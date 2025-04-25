import { useEffect } from "react";

import { Link } from "lucide-react";
import { toast } from "sonner";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

import { Separator } from "./ui/separator";

interface SectionLayoutProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  alternate?: boolean;
}

const SectionLayout = ({
  id,
  title,
  children,
  alternate = false,
}: SectionLayoutProps) => {
  id = id || title.toLowerCase();

  const [sectionRef, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + `/#${id}`);
    toast.success("Link copied to clipboard!", {
      description: "You can now share this section with others.",
    });
  };

  useEffect(() => {
    if (window.location.hash === `#${id}`) {
      const element = document.getElementById(id);
      element?.scrollIntoView();
    }
  }, [id]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        "py-24 md:py-32 px-8 md:min-h-screen md:snap-start",
        alternate && "bg-secondary/50"
      )}
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <div
          className={cn(
            "relative group cursor-pointer duration-500 opacity-0 hover:translate-x-1 hover:duration-100",
            inView && "animate-in fade-in slide-in-from-bottom-8 opacity-100"
          )}
          onClick={handleCopyLink}
        >
          <Link
            className="absolute translate-y-1/2 -translate-x-full -left-2 group-hover:block hidden"
            id={id}
          />
          <h1 className="font-poppins text-3xl text-branding group-hover:underline">
            {title}
          </h1>
        </div>
        <Separator />
        <div
          className={cn(
            "space-y-4 opacity-0 duration-600 delay-100",
            inView && "animate-in fade-in slide-in-from-bottom-8 opacity-100"
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionLayout;
