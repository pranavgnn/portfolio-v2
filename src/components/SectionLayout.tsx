import { Separator } from "./ui/separator";

import { cn } from "@/lib/utils";

import { Link } from "lucide-react";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

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

  const sectionRef = useRef<HTMLDivElement>(null);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + `/#${id}`);
    toast.success("Link copied to clipboard!", {
      description: "You can now share this section with others.",
    });
  };

  useEffect(() => {
    if (window.location.hash === `#${id}`) {
      sectionRef.current?.scrollIntoView();
    }
  }, [id]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn("py-24 md:py-32 px-8 md:min-h-screen md:snap-start", alternate && "bg-secondary/50")}
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="relative group cursor-pointer" onClick={handleCopyLink}>
          <Link
            className="absolute translate-y-1/2 -translate-x-full -left-2 group-hover:block hidden"
            id={id}
          />
          <h1 className="font-poppins text-3xl text-branding group-hover:underline">
            {title}
          </h1>
        </div>
        <Separator />
        <div className="space-y-4">{children}</div>
      </div>
    </section>
  );
};

export default SectionLayout;
