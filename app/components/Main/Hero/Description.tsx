import Links from "./Links";

export default function Description() {
  return (
    <div className="flex items-center gap-2 lg:gap-3.5 duration-300 transition-all">
      <p className="text-xs md:text-sm lg:text-base text-additional duration-300 transition-all">Фронтенд-разработчик, веб-дизайнер</p>
      <span className="text-sm text-additional-foreground select-none">/</span>
      <Links />
    </div>
  );
}