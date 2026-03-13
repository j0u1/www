import { Projects } from "@/app/types/projects";
import { ArrowUpRightIcon } from "lucide-react"
import Image from "next/image"

export default function ProjectCard({ project }: { project: Projects }) {
  const Component = project.link ? "a" : "div"
  return (
    <Component
      draggable={!!project.link}
      key={project.title}
      className={`break-inside-avoid overflow-hidden rounded-xl outline outline-secondary/70 h-fit group/project inline-block select-none transition-all duration-300 ${project.link ? 'cursor-pointer hover:brightness-125' : 'pointer-events-none'}`}
      href={project.link}
      target="_blank"
    >
      <div className={`relative overflow-hidden ${project.link ? "rounded-b-xl" : "h-full rounded-b-none"}`}>
        <Image
          className="w-full object-cover object-top"
          src={project.image}
          alt={`Project ${project.title}`}
          width={1280}
          height={300}
        />

        {project.title && (
          <div className={`absolute left-4 space-y-2 ${project.position === 'bottom' ? 'bottom-4' : 'top-4'}`}>
            <h2 className="text-sm font-medium text-additional">
              {project.title}
            </h2>
          </div>
        )}
      </div>

      {project.link && (
        <div className="inline-block p-1.5 w-full cursor-pointer h-fit">
          <div className="flex gap-2 justify-center items-center p-3.5 mx-auto font-medium text-center rounded-lg transition-all duration-500 text-neutral-300 dark:text-additional bg-button group-hover/project:bg-button-foreground">
            <ArrowUpRightIcon className="transition-all duration-500 group-hover/project:translate-x-1 group-hover/project:-translate-y-0.75" size={20} />
            Посмотреть
          </div>
        </div>
      )}
    </Component>
  )
}