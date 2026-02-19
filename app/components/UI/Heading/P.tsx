export default function P({ children, className }: headingProps) {
  return (
    <p className={`text-[clamp(1.05rem,1.6vw,1.25rem)] text-additional  duration-300 transition-all ${className}`}>
      {children}
    </p>
  );
}