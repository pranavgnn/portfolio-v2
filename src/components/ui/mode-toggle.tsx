import { useState, useEffect } from "react";

import { Moon, Sun, Laptop } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

import { cn } from "@/lib/utils";

type Theme = "light" | "dark" | "system";

export function ModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const themes: Theme[] = ["system", "light", "dark"];
  const [themeIndex, setThemeIndex] = useState(0);

  const toggleTheme = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
    setTheme(themes[themeIndex]);
  };

  useEffect(() => {
    setTheme(themes[themeIndex]);
  }, [themeIndex, themes, setTheme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={cn("w-10 h-10 p-0", className)}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4" />
      ) : theme === "light" ? (
        <Moon className="w-4 h-4" />
      ) : (
        <Laptop className="w-4 h-4" />
      )}
    </Button>
  );
}
