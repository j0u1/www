import { headingProps } from "@/app/types/heading";

export default function P({ children, className }: headingProps) {
  return (
    <p className={`text-[clamp(0.8rem,1.6vw,1.25rem)] text-additional duration-300 transition-all ${className}`}>
      {children}
    </p>
  );
}