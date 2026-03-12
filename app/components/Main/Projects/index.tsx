"use client"

import { ArrowUpRightIcon, FrownIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import H1 from "../../UI/Heading/H1";
import { PROJECTS } from "../../../data/projects";
import { useMemo, useState } from "react";
import { useDebounce } from "@/app/hooks/useDebounce";


// TODO: Расположить всё по компонентам
// TODO: Добавить отдельную страницу под каждый проект, чтобы можно было описать для кого и почему, если такую информация я добавил
export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('')

  const debouncedSearch = useDebounce(searchTerm, 400)

  const filteredProjects = useMemo(() => {
    const search = debouncedSearch.toLocaleLowerCase()
    return PROJECTS.filter(project =>
      project.title.toLowerCase().includes(search)
    )
  }, [debouncedSearch])

  return (
    <section className="space-y-4 transition-all duration-300 lg:space-y-8">
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <H1>Проекты</H1>
        <div className="relative">
          <SearchIcon className="absolute left-4 size-4 top-1/2 -translate-y-1/2 text-neutral-500" />
          <input className="outline outline-secondary rounded-xl py-3 pl-12 pr-4 bg-background/70 z-1 placeholder:text-neutral-500 w-full" type="search" value={searchTerm} onChange={e => { setSearchTerm(e.target.value) }} placeholder="Поиск по проектам" />
        </div>
      </div>
      <div className={`space-y-2.5 transition-all duration-1000 min-h-87.5 ${filteredProjects.length !== 0 && "columns-1 md:columns-2 xl:columns-3"}`}>
        {filteredProjects.length ? filteredProjects.map(project => {
          const Component = project.link ? "a" : "div"

          return (
            <Component
              draggable={!!project.link}
              key={project.title}
              className={`break-inside-avoid overflow-hidden rounded-xl outline outline-secondary/70 h-fit group/project inline-block select-none transition-all duration-300 ${project.link ? 'cursor-pointer hover:brightness-125' : 'pointer-events-none'}`}
              href={project.link}
              target="_blank"
            >
              <div className="relative">
                <Image
                  className={`w-full object-cover object-top ${project.link ? "rounded-b-xl" : "h-full rounded-b-none"}`}
                  src={project.image}
                  alt={`Project ${project.title}`}
                  width={1280}
                  height={300}
                />

                {project.title && (
                  <div className={`absolute left-4 space-y-2 ${project.position === 'bottom' ? 'bottom-4' : 'top-4'}`}>
                    <h2 className="text-sm font-medium text-neutral-300">
                      {project.title}
                    </h2>
                  </div>
                )}
              </div>

              {project.link && (
                <div className="inline-block p-1.5 w-full cursor-pointer h-fit">
                  <div className="flex gap-2 justify-center items-center p-3.5 mx-auto font-medium text-center rounded-lg transition-all duration-500 text-neutral-300 bg-button group-hover/project:bg-button-foreground">
                    <ArrowUpRightIcon className="transition-all duration-500 group-hover/project:translate-x-1 group-hover/project:-translate-y-0.75" size={20} />
                    Посмотреть
                  </div>
                </div>
              )}
            </Component>
          )
        })
          :
          (
            <div className="flex justify-center items-center gap-4 text-neutral-300">
              <span className="text-2xl">:/</span>
              <p className="flex flex-col">
                <span>Такого проекта не существует,</span>
                <span>перепроверьте введёное значение</span>
              </p>
            </div>
          )
        }
      </div>
    </section>
  )
}