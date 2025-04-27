import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./ui/mode-toggle";
import {
  Sheet,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
  SheetContent,
} from "./ui/sheet";

import { AlignJustify } from "lucide-react";

import { useSection } from "@/contexts/SectionContext";

import { cn } from "@/lib/utils";

const NavItem = ({
  href,
  text,
  selected = false,
}: {
  href?: string;
  text: string;
  selected?: boolean;
}) => {
  return (
    <Button
      variant="ghost"
      className={cn(
        "font-poppins text-md font-normal duration-300",
        selected
          ? "text-primary scale-105 before:content-['>'] before:text-branding"
          : "text-muted-foreground"
      )}
    >
      <a href={href || `#${text.toLowerCase()}`}>{text}</a>
    </Button>
  );
};

const Navbar = () => {
  const { activeSection } = useSection();

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between md:justify-around p-4 bg-background/50 backdrop-blur-md">
        <a href="/" className="text-branding">
          <span className="font-semibold text-xl font-poppins">{"<P/> "}</span>
          <span className="text-primary font-poppins">pranavgn</span>
        </a>

        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="text-muted-foreground">
                <AlignJustify />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-1/2">
              <SheetHeader className="flex flex-col items-start gap-4">
                <SheetTitle className="font-poppins font-normal text-lg">
                  Menu
                </SheetTitle>
                <Separator />
                <nav className="flex flex-col gap-4 w-full">
                  <NavItem text="/" selected={activeSection == ""} />
                  <NavItem text="about" selected={activeSection == "about"} />
                  <NavItem
                    text="projects"
                    selected={activeSection == "projects"}
                  />
                  <NavItem
                    text="interests"
                    selected={activeSection == "interests"}
                  />
                  <NavItem
                    text="contact"
                    selected={activeSection == "contact"}
                  />
                  <ModeToggle className="text-muted-foreground" includeName />
                </nav>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <nav className="hidden md:flex items-center gap-4">
          <NavItem text="/" href="#" selected={activeSection == ""} />
          <NavItem text="about" selected={activeSection == "about"} />
          <NavItem text="projects" selected={activeSection == "projects"} />
          <NavItem text="interests" selected={activeSection == "interests"} />
          <NavItem text="contact" selected={activeSection == "contact"} />
          <ModeToggle />
        </nav>
      </div>
      <Separator />
    </div>
  );
};

export default Navbar;
