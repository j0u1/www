export default function P({ children, className }: headingProps) {
  return (
    <p className={`text-[clamp(1.05rem,1.6vw,1.25rem)] text-neutral-300  duration-300 transition-all ${className}`}>
      {children}
    </p>
  );
}