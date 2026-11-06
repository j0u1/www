import H2 from '../../UI/Heading/H2';
import P from '../../UI/Heading/P';
import Lnk from '../../UI/Lnk';
import { PROJECTS } from '../../../data/projects';
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react';

export default function LatestProject() {
  const firstProject = PROJECTS[0];

  return (
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
      <Lnk
        href={firstProject.link ?? '#'}
        className="outline-secondary relative max-h-180 overflow-hidden rounded-xl outline"
        target="_blank"
      >
        <img
          className="size-full object-contain object-top"
          src={firstProject.image}
          alt={firstProject.title}
        />
        <div className="absolute right-8 bottom-8 drop-shadow-2xl drop-shadow-black">
          <ArrowUpRightIcon className="ml-auto size-5.5" />
          <span className="text-additional">{firstProject.description}</span>
        </div>
      </Lnk>
    </section>
  );
}
