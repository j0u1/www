import H2 from '../../UI/Heading/H2';
import P from '../../UI/Heading/P';
import Lnk from '../../UI/Lnk';
import { PROJECTS } from '../../../data/projects';
import { ArrowRightIcon } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ArrowIcon from './Arrow';

export default function LatestProject() {
  const firstProject = PROJECTS[0];

  const otherProjects = PROJECTS.slice(1, 5);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
        <H2 className="flex items-center gap-2">
          <span>{firstProject.title}</span> <P className="mt-1">— крайний проект</P>
        </H2>
        <Lnk href="#projects" className="ml-auto flex items-center gap-2 md:ml-0">
          <span>Все проекты</span>
          <ArrowRightIcon className="size-3" />
        </Lnk>
      </div>
      <div className="flex flex-col lg:flex-row">
        <Lnk
          href={firstProject.link ?? '#'}
          className="border-secondary group/project relative max-h-180 overflow-hidden rounded-t-xl border lg:w-1/2 lg:rounded-t-none lg:rounded-l-xl"
          target="_blank"
        >
          <img
            className="size-full max-h-125 object-cover object-top-left"
            src={firstProject.image}
            alt={firstProject.title}
          />
          <div className="absolute right-8 bottom-8 left-8 z-1 flex flex-col items-end">
            <ArrowIcon />
            <span className="text-additional">{firstProject.description}</span>
          </div>
          <div className='from-background absolute right-0 bottom-0 left-0 h-32 bg-linear-to-t to-transparent' />
        </Lnk>

        <div className='border-secondary flex flex-col overflow-hidden rounded-r-none rounded-b-xl border border-t-0 lg:w-1/2 lg:rounded-r-xl lg:rounded-bl-none lg:border-t lg:border-l-0'>
          {otherProjects.map((p, i) => (
            <ProjectCard key={i} project={p} className='even:border-l-0!' />
          ))}
        </div>
      </div>
    </section>
  );
}
