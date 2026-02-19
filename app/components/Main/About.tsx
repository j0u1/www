import H1 from "../UI/Heading/H1";
import LogoAndAvatar from "./LogoAndAvatar";

export default function About() {
  return (
    <section className="min-h-162.5 h-[85dvh] flex items-center justify-center">
      <H1 className="flex items-center gap-4 group">
        <Cross />
        <span className="flex gap-2 items-center">Hey, I'm <LogoAndAvatar /> diy</span>
        <Cross />
      </H1>
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
