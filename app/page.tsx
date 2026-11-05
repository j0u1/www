import { Code2Icon, GithubIcon, Grid2X2Icon, HomeIcon } from "lucide-react";
import Hero from "./components/Main/Hero/Hero";
import ModrinthLogo from "./components/icons/Logos/ModrinthLogo";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="fixed left-1/2 bottom-[calc(50px+env(safe-area-inset-bottom,0px))] -translate-x-1/2 z-50 flex items-center gap-1 p-1.5 rounded-full bg-white/[0.07] backdrop-blur-[18px] backdrop-saturate-[1.8] backdrop-brightness-110 border border-white/[0.16] shadow-[0_18px_44px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4),inset_0_-1px_1px_rgba(255,255,255,0.12),inset_0_0_22px_rgba(255,255,255,0.06)]">
        <div className="flex flex-col items-center gap-1 text-accent py-2 px-7 bg-additional/20 rounded-full border border-white/[0.16]">
          <HomeIcon className="size-6" />
          <span className="text-xs font-medium">Главная</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-additional py-2 px-7 bg-transparent rounded-full border border-transparent duration-300 transition-all hover:border-white/[0.05] hover:bg-additional/10">
          <Grid2X2Icon className="size-6" />
          <span className="text-xs font-medium">Проекты</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-additional py-2 px-7 bg-transparent rounded-full border border-transparent duration-300 transition-all hover:border-white/[0.05] hover:bg-additional/10">
          <Code2Icon className="size-6" />
          <span className="text-xs font-medium">Скиллы</span>
        </div>
        <div className="w-px h-8.5 bg-additional-foreground rounded-sm" />
        <div className="flex flex-col items-center gap-1 text-additional py-2 px-7 bg-transparent rounded-full border border-transparent duration-300 transition-all hover:border-white/[0.05] hover:bg-additional/10">
          <GithubIcon className="size-6" />
          <span className="text-xs font-medium">Github</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-additional py-2 px-7 bg-transparent rounded-full border border-transparent duration-300 transition-all hover:border-white/[0.05] hover:bg-additional/10">
          <ModrinthLogo className="size-6" />
          <span className="text-xs font-medium">Modrinth</span>
        </div>
      </div>
    </>
  );
}
