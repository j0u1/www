import Link from "next/link";
import Hero from "./components/Main/Hero/Hero";
import Projects from "./components/Main/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <footer className="text-additional">
        <p className="lg:max-w-3xl text-sm md:text-base">
          *<span className="text-accent"><Link href='https://spoverlay.ru'>spoverlay</Link></span> — команда разработчиков сайтов. В основном занимаюсь дизайном и фронтендом
        </p>
      </footer>
    </>
  );
}
