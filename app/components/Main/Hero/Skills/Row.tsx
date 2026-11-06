import { SkillProps } from "@/app/types/skills";

export function Row({ icons, size, up }: SkillProps) {
  return (
    <ul className="flex flex-wrap justify-center gap-4">
      {icons.map((id) => (
        <li key={id} className="relative group bg-background rounded-lg outline outline-secondary">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://skillicons.dev/icons?i=${id}`}
            alt={id}
            className={`${size} rounded-lg opacity-60 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0`}
          />
          <span className={`absolute left-1/2 -translate-x-1/2 ${up ? '-top-7' : '-bottom-7'} text-sm text-additional opacity-0 duration-300 bg-background outline outline-secondary rounded-sm px-2 py-0.5 transition-opacity group-hover:opacity-100`}>
            {id}
          </span>
        </li>
      ))}
    </ul>
  );
}