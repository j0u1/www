import Links from "./Links";

export default function Description() {
  return (
    <div className="pointer-events-auto relative z-2 flex items-center gap-2 transition-all duration-300 lg:gap-3.5">
      <p className="text-additional text-xs transition-all duration-300 md:text-sm lg:text-base">Фронтенд-разработчик, веб-дизайнер</p>
      <span className="text-additional-foreground text-sm select-none">/</span>
      <Links />
    </div>
  );
}