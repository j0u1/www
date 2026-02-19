import H1 from "../UI/Heading/H1";
import LogoAndAvatar from "./LogoAndAvatar";

export default function About() {
  return (
    <section className="min-h-162.5 h-[85dvh] flex items-center justify-center">
      <H1 className="flex items-center gap-4">
        <Cross />
        <span className="flex gap-2 items-center">Hey, I'm <LogoAndAvatar /> diy</span>
        <Cross />
      </H1>
    </section>
  )
}

function Cross() {
  return (
    <span className="text-neutral-500" aria-hidden>++</span>
  )
}