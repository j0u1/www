"use client"

import H2 from "../../UI/Heading/H2";
import { ArrowRightIcon, ArrowUpRightIcon, FrownIcon } from "lucide-react";
import Lnk from "../../UI/Lnk";
import { PROJECTS } from "../../../data/projects"
import P from "../../UI/Heading/P";
import Search from "./Search";
import { useState } from "react";

export default function ProjectSection() {
  const firstProject = PROJECTS[0]
  const [searchTerm, setSearchTerm] = useState("bgffg")

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
        <Lnk href={firstProject.link ?? '#'} className="relative rounded-xl outline outline-secondary overflow-hidden" target="_blank">
          <img src={firstProject.image} />
          <div className="absolute right-0 -bottom-6 w-1/3 h-1/5 bg-black/70 blur-2xl" />
          <div className="absolute bottom-8 right-8">
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
        <div className="flex flex-col gap-0">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((pr, i) => (
              <Lnk key={i} href={pr.link ?? '#'} className="font-medium outline outline-secondary first:rounded-t-xl last:rounded-b-xl p-6 duration-300 transition-colors hover:outline-accent">
                <h3 className="text-foreground">{pr.title}</h3>
                <p>{pr.description}</p>
              </Lnk>
            ))
          ) : (
            <div className="min-h-24"><P className="size-fit m-auto flex items-center gap-2">Такого проекта не существует <FrownIcon className="size-6" /></P></div>)}
        </div>
      </section>
    </>
  );
}