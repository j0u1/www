import H2 from "../../UI/Heading/H2";
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import Lnk from "../../UI/Lnk";
import { PROJECTS } from "../../../data/projects"
import P from "../../UI/Heading/P";

export default function ProjectSection() {
  const firstProject = PROJECTS[0]
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
        <Lnk href={firstProject.link ?? '/'} className="relative rounded-xl outline outline-secondary overflow-hidden" target="_blank">
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
    </>
  );
}