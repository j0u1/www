import H1 from "../UI/Heading/H1";
import Links from "./Links";
import LogoAndAvatar from "./LogoAndAvatar";
import Skills from "./Skills";

export default function Hero() {
  return (
    // lg:h-[85dvh]
    <section className="flex relative justify-center items-center min-h-[97dvh] lg:min-h-162.5 lg:h-[94dvh]">
      <Links />
      <H1 className="flex gap-4 items-center h-full transition-all duration-300 group md:pb-30 xl:pb-22">
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
    <p className="flex gap-0.5 select-none text-additional/70" aria-hidden>
      <span className="transition-transform duration-500 group-hover:rotate-45">+</span>
      <span className="transition-transform duration-500 group-hover:rotate-45">+</span>
    </p>
  )
}
