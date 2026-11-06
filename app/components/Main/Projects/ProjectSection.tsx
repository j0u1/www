"use client"

import H2 from "../../UI/Heading/H2";
import { ArrowRightIcon, ArrowUpRightIcon, FrownIcon } from "lucide-react";
import Lnk from "../../UI/Lnk";
import { PROJECTS } from "../../../data/projects"
import P from "../../UI/Heading/P";
import Search from "./Search";
import { useState } from "react";
import Image from "next/image";

export default function ProjectSection() {
  const firstProject = PROJECTS[0]
  const [searchTerm, setSearchTerm] = useState("")

  const query = searchTerm.trim().toLowerCase()
  const filteredProjects = PROJECTS.filter(pr => !query || pr.title?.toLowerCase().includes(query) || pr.description.toLowerCase().includes(query))

  return (
    <>
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <H2 className="flex items-center gap-4">
            <span>{firstProject.title}</span> <P className="mt-1">— крайний проект</P>
          </H2>
          <Lnk href="#projects" className="flex items-center gap-2">
            <span>Все проекты</span>
            <ArrowRightIcon className="size-3" />
          </Lnk>
        </div>
        <Lnk href={firstProject.link ?? '#'} className="outline-secondary relative max-h-180 overflow-hidden rounded-xl outline" target="_blank">
          <img className="size-full object-contain object-top" src={firstProject.image} />
          <div className="absolute right-8 bottom-8 drop-shadow-2xl drop-shadow-black">
            <ArrowUpRightIcon className="ml-auto size-5.5" />
            <span className="text-additional">
              {firstProject.description}
            </span>
          </div>
        </Lnk>

      </section>
      <section id="projects" className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <H2 className="flex items-center gap-4">
            Другие проекты
          </H2>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div className="outline-secondary grid gap-0 overflow-hidden rounded-xl outline lg:grid-cols-2">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((pr, i) => (
              <Lnk key={i} href={pr.link ?? '#'} target="_blank" className="group/project border-secondary hover:outline-accent grid grid-cols-3 items-center border-t font-medium transition-colors duration-300 min-h-32 first:border-t-transparent! even:border-l">
                <div className="col-span-2 flex max-h-32 flex-col gap-2 p-6">
                  <h3 className="text-foreground flex items-center gap-1.5">{pr.title} <ArrowUpRightIcon className="size-4.5 transition-transform duration-200 group-hover/project:translate-x-1.5 group-hover/project:-translate-y-1.5" /></h3>
                  <p className="line-clamp-2">{pr.description}</p>
                </div>
                <Image className="bg-bg border-secondary h-full max-h-32 min-h-32 bg-secondary border-l object-cover object-top transition-all duration-200 group-hover/project:brightness-150" src={pr.image} alt={`Проект ${pr.title}`} width={720} height={128} quality={70} loading="lazy" />
              </Lnk>
            ))
          ) : (
            <div className="min-h-24"><P className="m-auto flex size-fit items-center gap-2">Такого проекта не существует <FrownIcon className="size-6" /></P></div>)}
        </div>
      </section>
    </>
  );
}