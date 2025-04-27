import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="max-w-11/12 mx-auto text-center text-sm space-y-1 pb-4">
      <Separator className="mb-4" />
      <p>Enough scrolling. 😤</p>
      <p className="text-muted-foreground">
        <span>Made with </span>
        <span className="font-semibold text-destructive absolute hover:-rotate-45 hover:scale-105 duration-200">
          {"</3"}
        </span>
        <span className="ml-7">by pranav</span>
      </p>
    </footer>
  );
};

export default Footer;
