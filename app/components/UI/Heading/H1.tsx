import { headingProps } from "@/app/types/heading";

export default function H1({ children, className }: headingProps) {
  return <h1 className={`text-[clamp(1.75rem,5vw,3rem)] font-medium duration-300 transition-all ${className}`}>{children}</h1>;
}