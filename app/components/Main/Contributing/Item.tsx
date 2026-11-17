import { type ContributeProjects } from "@/app/types/contributingProjects";
import Lnk from "../../UI/Lnk";
import ArrowIcon from "../Projects/Arrow";

export default function ContributeItem({ href, project, contribution, description, stack }: ContributeProjects) {
  return (
    <Lnk
      href={href}
      target="_blank"
      className="flex w-full flex-col gap-2 border-t border-l border-secondary p-4
    nth-[3n]:border-r last:border-r
    nth-last-[-n+3]:border-b
    first:rounded-tl-xl
    nth-3:rounded-tr-xl last:nth-[-n+3]:rounded-tr-xl
    nth-[3n+1]:nth-last-[-n+3]:rounded-bl-xl
    nth-[3n]:nth-last-[-n+3]:rounded-br-xl last:rounded-br-xl group/project"
    >
      <h3 className="text-foreground flex items-center gap-1.5 group-hover/project:text-accent">{project} · {contribution}</h3>
      <p>{description}</p>
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          {stack.map((p, i) => (
            <div key={i}>{p}</div>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <p>Pull request</p>
          <ArrowIcon />
        </div>
      </div>
    </Lnk>
  )
}