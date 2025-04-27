import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

import { cn } from "@/lib/utils";

interface ModeToggleProps {
  className?: string;
  includeName?: boolean;
}

export function ModeToggle({ className, includeName }: ModeToggleProps) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size={includeName ? "sm" : "icon"}
      onClick={toggleTheme}
      className={cn("cursor-pointer", className)}
    >
      {theme === "dark" ? (
        <Moon className="h-4 w-4 text-gray-500" />
      ) : (
        <Sun className="h-4 w-4 text-yellow-500" />
      )}

      {includeName && (
        <span className="text-sm font-poppins font-normal text-muted-foreground">
          {`${theme.charAt(0).toUpperCase()}${theme.slice(1)} Mode`}
        </span>
      )}
    </Button>
  );
}
