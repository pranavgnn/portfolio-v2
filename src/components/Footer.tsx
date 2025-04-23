import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="max-w-4xl mx-auto text-center text-sm space-y-1 pb-4">
      <Separator className="mb-4" />
      <p className="hidden md:block">Enough scrolling. 😤</p>
      <p className="text-muted-foreground">Made with {"</3"} by pranav @ 23rd April 2025.</p>
    </footer>
  );
};

export default Footer;
