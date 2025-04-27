import { Link } from "lucide-react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";

import SectionLayout from "@/components/layouts/SectionLayout";

import { Separator } from "@/components/ui/separator";

interface OtherLayoutProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  alternate?: boolean;
}

const OtherLayout = ({ id, title, children, alternate }: OtherLayoutProps) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + `/#${id}`);
    toast.success("Link copied to clipboard!", {
      description: "You can now share this section with others.",
    });
  };

  return (
    <SectionLayout id={id} title={title} alternate={alternate}>
      {(inView) => (
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
      )}
    </SectionLayout>
  );
};

export default OtherLayout;
