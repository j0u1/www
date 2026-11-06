import { Projects } from '@/app/types/projects';
import { ArrowUpRightIcon } from 'lucide-react';
import Image from 'next/image';
import Lnk from '../../UI/Lnk';

type ProjectCardProps = {
  project: Projects;
  className?: string;
};

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Lnk
      href={project.link ?? '#'}
      target="_blank"
      className={`group/project border-secondary hover:outline-accent grid grid-cols-3 items-center border-t font-medium transition-colors duration-300 min-h-32 first:border-t-transparent! even:border-l ${className ?? ''}`}
    >
      <div className="col-span-2 flex max-h-32 flex-col gap-2 p-6">
        <h3 className="text-foreground flex items-center gap-1.5">
          {project.title}{' '}
          <ArrowUpRightIcon className="size-4.5 transition-transform duration-200 group-hover/project:translate-x-1.5 group-hover/project:-translate-y-1.5" />
        </h3>
        <p className="line-clamp-2">{project.description}</p>
      </div>
      <Image
        className="bg-bg border-secondary h-full max-h-32 min-h-32 bg-secondary border-l object-cover object-top transition-all duration-200 group-hover/project:brightness-150"
        src={project.image}
        alt={`Проект ${project.title}`}
        width={720}
        height={128}
        quality={70}
        loading="lazy"
      />
    </Lnk>
  );
}
