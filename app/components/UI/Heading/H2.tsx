import { headingProps } from "@/app/types/heading";

export default function H2({ children, className }: headingProps) {
  return (
    <h2 className={`text-[clamp(1.25rem,3vw,2.25rem)] font-medium duration-300 transition-all ${className}`}>
      {children}
    </h2>
  );
}