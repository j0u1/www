import LogoAndAvatar from "./LogoAndAvatar";

export default function About() {
  return (
    <section className="min-h-162.5 h-[85dvh] flex items-center justify-center">
      <h1 className="flex items-center gap-4 text-[clamp(1.5rem,5vw,3rem)]">
        <Cross />
        <span className="flex gap-2 items-center">Hey, I'm <LogoAndAvatar /> diy</span>
        <Cross />
      </h1>
    </section>
  )
}

function Cross() {
  return (
    <span className="text-neutral-500" aria-hidden>++</span>
  )
}