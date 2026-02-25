import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import H1 from "../../UI/Heading/H1";
import { projects } from "../../../data/projects";

export default function Projects() {
  return (
    <section className="space-y-4 transition-all duration-300 lg:space-y-8">
      <div className="flex items-center gap-4">
        <H1>Проекты</H1>
        <div className="flex gap-2 mt-1.5">
          <div className="py-2 px-3.5 rounded-lg bg-background outline outline-secondary">
            СП5
          </div>
        </div>
      </div>
      <div className="columns-1 md:columns-2 xl:columns-3 space-y-6 duration-1000 transition-all">
        {projects.map((project, i) => (
          <div
            key={i}
            className="break-inside-avoid overflow-hidden rounded-xl outline outline-secondary/70 h-fit group/project"
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
              <a className="p-1.5 group/button cursor-pointer h-fit inline-block w-full" href={project.link} target="_blank">
                <div className="flex items-center justify-center gap-2 mx-auto p-3.5 text-center font-medium text-neutral-200 bg-button group-hover/button:bg-[#222335] duration-500 transition-all rounded-lg">
                  <ArrowUpRightIcon className="group-hover/button:translate-x-1 group-hover/button:-translate-y-0.75 duration-500 transition-all" size={20} />
                  Посмотреть
                </div>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}