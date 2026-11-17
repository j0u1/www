import { type ContributeProjects } from "@/app/types/contributingProjects";
import Lnk from "../../UI/Lnk";
import ArrowIcon from "../Projects/Arrow";

export default function ContributeItem({ href, project, contribution, description, stack }: ContributeProjects) {
  return (
    <Lnk
      href={href}
      target="_blank"
      className="border-secondary group/project flex w-full flex-col gap-2 border-t border-l p-4 first:rounded-tl-xl last:rounded-br-xl last:border-r nth-3:rounded-tr-xl last:nth-[-n+3]:rounded-tr-xl nth-[3n]:border-r nth-last-[-n+3]:border-b nth-[3n]:nth-last-[-n+3]:rounded-br-xl nth-[3n+1]:nth-last-[-n+3]:rounded-bl-xl"
    >
      <h3 className="text-foreground group-hover/project:text-accent flex items-center gap-1.5">{project} · {contribution}</h3>
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