import H1 from "../UI/Heading/H1";
import Links from "./Links";
import LogoAndAvatar from "./LogoAndAvatar";
import Skills from "./Skills";

export default function Hero() {
  return (
    // lg:h-[85dvh]
    <section className="flex relative justify-center items-center pb-36 transition-all duration-500 min-h-[97dvh] md:pb-30 lg:min-h-162.5 lg:h-[94dvh] xl:pb-22">
      <Links />
      <H1 className="flex gap-4 items-center group">
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
    <p className="flex gap-0.5 font-normal select-none text-additional/70" aria-hidden>
      <span className="transition-transform duration-500 group-hover:rotate-45">+</span>
      <span className="transition-transform duration-500 group-hover:rotate-45">+</span>
    </p>
  )
}
