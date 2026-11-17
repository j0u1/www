import { type ContributeProjects } from "@/app/types/contributingProjects";
import Lnk from "../../UI/Lnk";
import ArrowIcon from "../Projects/Arrow";

export default function ContributeItem({ href, project, contribution, description, stack }: ContributeProjects) {
  return (
    <Lnk href={href} className="flex flex-col gap-2 border border-secondary p-4 w-full first:rounded-t-xl last:rounded-b-xl group/project">
      <h3 className="text-foreground flex items-center gap-1.5">{project} · {contribution}</h3>
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