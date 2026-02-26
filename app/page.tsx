import Hero from "./components/Main/Hero";
import Projects from "./components/Main/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <footer className="text-additional">
        <p className="lg:max-w-3xl text-sm md:text-base">
          *<span className="text-accent">spoverlay</span> — команда разработчиков сайтов для серверов СП. Я основал её, придумал большинство идей, в основном занимаюсь дизайном, вёрсткой и фронтендом 
        </p>
      </footer>
    </>
  );
}
