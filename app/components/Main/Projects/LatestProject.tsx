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
      <div className="flex flex-col md:flex-row md:items-center gap-2 justify-between">
        <H2 className="flex items-center gap-2">
          <span>{firstProject.title}</span> <P className="mt-1">— крайний проект</P>
        </H2>
        <Lnk href="#projects" className="flex items-center gap-2 ml-auto md:ml-0">
          <span>Все проекты</span>
          <ArrowRightIcon className="size-3" />
        </Lnk>
      </div>
      <div className="flex flex-col lg:flex-row">
        <Lnk
          href={firstProject.link ?? '#'}
          className="w-1/2 border-secondary relative max-h-180 overflow-hidden roudned-xl md:rounded-l-xl border group/project"
          target="_blank"
        >
          <img
            className="size-full max-h-125 object-cover object-top-left"
            src={firstProject.image}
            alt={firstProject.title}
          />
          <div className="absolute flex flex-col items-end right-8 left-8 bottom-8 z-1">
            <ArrowIcon />
            <span className="text-additional">{firstProject.description}</span>
          </div>
          <div className='absolute left-0 bottom-0 right-0 h-32 bg-linear-to-t from-background to-transparent' />
        </Lnk>

        <div className='w-1/2 flex flex-col border border-secondary border-l-0 overflow-hidden md:rounded-r-xl'>
          {otherProjects.map((p, i) => (
            <ProjectCard key={i} project={p} className='even:border-l-0!' />
          ))}
        </div>
      </div>
    </section>
  );
}
