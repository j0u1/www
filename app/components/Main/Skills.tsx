import { SKILLS } from "@/app/data/skillsText";
import H2 from "../UI/Heading/H2";
import P from "../UI/Heading/P";

export default function Skills() {
  const iconSizes = "hover:scale-110 size-5 md:size-6 lg:size-8 duration-300 transition-all"

  return (
    <section className="flex absolute right-0 bottom-0 left-0 flex-col gap-4 justify-between w-full transition-all duration-300 lg:flex-row lg:gap-0">
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
          <div className={`hidden lg:block absolute size-132 rounded-full opacity-5 -bottom-60 blur-3xl duration-500 transition-all pointer-events-none ${skill.right ? 'group-hover/uxui:opacity-10 bg-[#F24e1e] right-0' : 'group-hover/frontend:opacity-10 bg-[#3178c6] left-0'}`} />
        </div>
      ))}
    </section>
  )
}