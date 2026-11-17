import { headingProps } from "@/app/types/heading";

export default function H1({ children, className }: headingProps) {
  return <h1 className={`flex items-center gap-2.5 text-[clamp(2rem,5vw,3rem)] font-medium duration-300 transition-transform ${className}`}>{children}</h1>;
}