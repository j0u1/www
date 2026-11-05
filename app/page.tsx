import { Code2Icon, GithubIcon, Grid2X2Icon, HomeIcon } from "lucide-react";
import Hero from "./components/Main/Hero/Hero";
import ModrinthLogo from "./components/icons/Logos/ModrinthLogo";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="fixed left-10 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-1 p-1.5 rounded-full bg-background/60 backdrop-blur-[3px] border border-secondary">
        <div className="flex flex-col items-center gap-1 text-accent px-4 py-6 bg-secondary/40 rounded-full border border-white/16">
          <HomeIcon className="size-6" />
          <span className="text-xs font-medium">Главная</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-additional px-4 py-6 bg-transparent rounded-full border border-transparent duration-300 transition-all hover:border-white/5 hover:bg-additional/10">
          <Grid2X2Icon className="size-6" />
          <span className="text-xs font-medium">Проекты</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-additional px-4 py-6 bg-transparent rounded-full border border-transparent duration-300 transition-all hover:border-white/5 hover:bg-additional/10">
          <Code2Icon className="size-6" />
          <span className="text-xs font-medium">Скиллы</span>
        </div>

        <div className="h-px w-10 bg-additional-foreground rounded-sm" />

        <div className="flex flex-col items-center gap-1 text-additional px-4 py-6 bg-transparent rounded-full border border-transparent duration-300 transition-all hover:border-white/5 hover:bg-additional/10">
          <GithubIcon className="size-6" />
          <span className="text-xs font-medium">Github</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-additional px-4 py-6 bg-transparent rounded-full border border-transparent duration-300 transition-all hover:border-white/5 hover:bg-additional/10">
          <ModrinthLogo className="size-6" />
          <span className="text-xs font-medium">Modrinth</span>
        </div>
      </div>
    </>
  );
}
