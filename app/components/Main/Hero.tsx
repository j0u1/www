import H1 from "../UI/Heading/H1";
import Links from "./Links";
import LogoAndAvatar from "./LogoAndAvatar";
import Skills from "./Skills";

export default function Hero() {
  return (
    // lg:h-[85dvh]
    <section className="relative min-h-[97dvh] lg:min-h-162.5 lg:h-[94dvh] flex items-center justify-center">
      <Links />
      <H1 className="flex items-center gap-4 group h-full md:pb-30 xl:pb-22 duration-300 transition-all">
        <Cross />
        <span className="flex gap-2 items-center">Hey, I'm <LogoAndAvatar /> diy</span>
        <Cross />
      </H1>
      <Skills />
    </section>
  )
}

function Cross() {
  return (
    <p className="text-additional/70 flex gap-0.5 select-none" aria-hidden>
      <span className="transition-transform duration-500 group-hover:rotate-45">+</span>
      <span className="transition-transform duration-500 group-hover:rotate-45">+</span>
    </p>
  )
}
