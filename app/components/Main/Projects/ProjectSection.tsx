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
        <Lnk href={firstProject.link ?? '#'} className="relative rounded-xl outline outline-secondary overflow-hidden max-h-180" target="_blank">
          <img className="object-top object-contain size-full" src={firstProject.image} />
          <div className="absolute bottom-8 right-8 drop-shadow-black drop-shadow-2xl">
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
        <div className="grid grid-cols-2 gap-0 overflow-hidden outline outline-secondary rounded-xl">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((pr, i) => (
              <Lnk key={i} href={pr.link ?? '#'} target="_blank" className="grid grid-cols-3 items-center font-medium border-t even:border-l border-secondary first:border-t-transparent! duration-300 transition-colors hover:outline-accent">
                <div className="flex flex-col gap-2 p-6 col-span-2 max-h-32">
                  <h3 className="text-foreground">{pr.title}</h3>
                  <p className="line-clamp-2">{pr.description}</p>
                </div>
                <Image className="object-top object-cover bg-bg border-l border-secondary h-full max-h-32" src={pr.image} alt="" width={720} height={128} />
              </Lnk>
            ))
          ) : (
            <div className="min-h-24"><P className="size-fit m-auto flex items-center gap-2">Такого проекта не существует <FrownIcon className="size-6" /></P></div>)}
        </div>
      </section>
    </>
  );
}