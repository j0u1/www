import { SKILLS } from "@/app/data/skillsText";
import H2 from "../../UI/Heading/H2";
import P from "../../UI/Heading/P";

export default function Skills() {
  const iconSizes = "active:scale-110 size-5 md:size-6 lg:size-8 duration-300 transition-all"

  return (
    <section className="flex flex-col gap-6 justify-between w-full transition-all duration-300">
      {SKILLS.map((skill, index) => (
        <div key={index} className={`relative flex flex-col gap-6 ${skill.right ? 'text-right group/uxui' : 'text-left group/frontend'}`}>
          <H2 className={`relative z-10 leading-none flex items-center gap-3.5 ${skill.right ? 'justify-end' : 'justify-start'}`}>
            {skill.right && skill.icon && <skill.icon className={`${iconSizes}`} />}
            {skill.title}
            {!skill.right && skill.icon && <skill.icon className={`${iconSizes}`} />}
          </H2>
          <P className="relative z-10">
            {skill.description.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </P>
        </div>
      ))}
    </section>
  )
}