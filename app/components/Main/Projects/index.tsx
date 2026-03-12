"use client"
import H1 from "../../UI/Heading/H1";
import { PROJECTS } from "../../../data/projects";
import { useMemo, useState } from "react";
import { useDebounce } from "@/app/hooks/useDebounce";
import ProjectCard from "./ProjectCard";
import Search from "./Search";
import NotFound from "./NotFound";

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 300)

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
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className={`space-y-2.5 transition-all duration-1000 min-h-87.5 ${filteredProjects.length !== 0 ? "columns-1 md:columns-2 xl:columns-3" : "flex flex-col justify-center"}`}>
        {filteredProjects.length ? filteredProjects.map(project => <ProjectCard key={project.title} project={project} /> )
        :
        ( <NotFound /> )
        }
      </div>
    </section>
  )
}