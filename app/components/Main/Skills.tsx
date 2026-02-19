import FigmaLogo from "../icons/Logos/FigmaLogo";
import TSLogo from "../icons/Logos/TSLogo";

export default function Skills() {
  return (
    <section className="absolute bottom-0 left-0 right-0 p-4 lg:p-8 duration-300 transition-all w-full flex justify-between">

      <div className="relative flex flex-col gap-4 group/frontend">
        <h1 className="relative z-10 text-4xl flex items-center gap-3.5">
          FrontEnd-разработчик <TSLogo className="size-8" />
        </h1>
        <p className="relative z-10 text-2xl text-neutral-300">
          Делаю интерфейсы, которые выглядят просто и адаптивно работают <br />
          Основной стек — <span className="underline decoration-accent">TypeScript</span>, <span className="underline decoration-accent">Nuxt (Vue)</span>, <span className="underline decoration-accent">TailwindCSS</span> <br />
          Владею так же React, JavaScript, Sass, Astro, Python, Vite, SQL
        </p>
        {/* <div className="absolute size-132 rounded-full bg-[#3178C6] -bottom-60 -left-60 blur-3xl opacity-5 group-hover/frontend:opacity-10 duration-500 transition-all" /> */}
      </div>

      <div className="relative flex flex-col gap-6 text-right group/uxui">
        <h1 className="relative z-10 text-4xl flex items-center gap-3.5 justify-end">
          <FigmaLogo className="size-8" />
          UI/UX-дизайнер
        </h1>
        <p className="relative z-10 text-2xl text-neutral-300">
          Проектирую интерфейсы, которые остаются удобными в работе <br />
          Фокус — <span className="underline decoration-accent">функциональность</span>, <span className="underline decoration-accent">ясность</span> и <span className="underline decoration-accent">удобство</span>  <br />
          Владею Figma, Adobe Photoshop и Adobe Illustrator
        </p>
        {/* <div className="absolute size-132 rounded-full bg-[#F24E1E] -bottom-60 -right-60 blur-3xl opacity-5 group-hover/uxui:opacity-10 duration-500 transition-all" /> */}
      </div>
    </section>
  )
}