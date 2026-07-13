import { headingProps } from "@/app/types/heading";

export default function H1({ children, className }: headingProps) {
  return <h1 className={`flex items-center gap-2.5 text-[clamp(1.58rem,5vw,3.5rem)] font-medium duration-300 transition-all ${className}`}>{children}</h1>;
}