import About from "./components/Main/About";
import Links from "./components/Main/Links";
import Skills from "./components/Main/Skills";

export default function Home() {
  return (
    <main className="relative min-h-dvh">
      <Links />
      <About />
      <Skills />
    </main>
  );
}
