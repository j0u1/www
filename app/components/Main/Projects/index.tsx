import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import H1 from "../../UI/Heading/H1";
import { projects } from "../../../data/projects";

export default function Projects() {

  return (
    <section className="space-y-4 transition-all duration-300 lg:space-y-8">
      <div className="flex gap-4 items-center">
        <H1>Проекты</H1>
        <div className="flex gap-2 mt-1.5">
          <div className="py-2 px-3.5 rounded-lg bg-background outline outline-secondary">
            СП5
          </div>
        </div>
      </div>
      <div className="space-y-4 transition-all duration-1000 columns-1 md:columns-2 xl:columns-3">
        {projects.map((project, i) => {
          const Component = project.link ? "a" : "div"

          return (
            <Component
              key={i}
              className={`break-inside-avoid overflow-hidden rounded-xl outline outline-secondary/70 h-fit group/project inline-block select-none ${project.link ? 'cursor-pointer' : 'pointer-events-none'}`}
              href={project.link}
              target="_blank"
            >
              <div className="relative">
                <Image
                  className={`w-full object-cover object-top ${project.link ? "rounded-b-xl" : "h-full rounded-b-none"}`}
                  src={project.image}
                  alt={`Project ${i}`}
                  width={1280}
                  height={300}
                />

                {project.title && (
                  <div className={`absolute left-4 space-y-2 ${project.position === 'bottom' ? 'bottom-4' : 'top-4'}`}>
                    <h2 className="text-sm font-medium text-neutral-200">
                      {project.title}
                    </h2>
                  </div>
                )}
              </div>

              {project.link && (
                <div className="inline-block p-1.5 w-full cursor-pointer h-fit">
                  <div className="flex gap-2 justify-center items-center p-3.5 mx-auto font-medium text-center rounded-lg transition-all duration-500 text-neutral-200 bg-button group-hover/project:bg-[#222335]">
                    <ArrowUpRightIcon className="transition-all duration-500 group-hover/project:translate-x-1 group-hover/project:-translate-y-0.75" size={20} />
                    Посмотреть
                  </div>
                </div>
              )}
            </Component>
          )
        })}
      </div>
    </section>
  )
}