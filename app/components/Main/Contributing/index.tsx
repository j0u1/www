import { contributingsProjects } from "@/app/data/contributing";
import H2 from "../../UI/Heading/H2";
import P from "../../UI/Heading/P";
import ContributeItem from "./Item";


export default function Contributing() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
        <H2 className="flex items-center gap-4">
          Open Source
        </H2>
        <p className="text-additional flex items-center gap-2">
          Открытые проекты, в которые я вносил свой вклад
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:flex-row xl:grid-cols-3">
        {contributingsProjects.map((p, i) => (
          <ContributeItem key={i} {...p} />
        ))}
      </div>
    </section>
  );
}