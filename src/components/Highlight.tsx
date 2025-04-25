import { cn } from "@/lib/utils";

type HighlightColor =
  | "yellow"
  | "blue"
  | "green"
  | "pink"
  | "branding"
  | "purple"
  | "orange"
  | "red"
  | "violet"
  | "teal"
  | "rose"
  | "emerald"
  | "crimson"
  | "indigo"
  | "amber";

const colorClasses: Record<HighlightColor, string> = {
    yellow: "bg-yellow-500/20",
    blue: "bg-blue-500/20",
    green: "bg-green-500/20",
    pink: "bg-pink-500/20",
    branding: "bg-branding/20",
    purple: "bg-purple-500/20",
    orange: "bg-orange-500/20",
    red: "bg-red-500/20",
    violet: "bg-violet-500/20",
    teal: "bg-teal-500/20",
    rose: "bg-rose-500/20",
    emerald: "bg-emerald-500/20",
    crimson: "bg-crimson-500/20",
    indigo: "bg-indigo-500/20",
    amber: "bg-amber-500/20",
};

interface HighlightProps {
  children: React.ReactNode;
  color?: HighlightColor;
}

const Highlight = ({ children, color = "yellow" }: HighlightProps) => {
  return (
    <span
      className={cn(
        "rounded-tl-md rounded-br-md bg-gradient-to-r p-1 via-5% text-primary",
        colorClasses[color]
      )}
    >
      {children}
    </span>
  );
};

export default Highlight;
