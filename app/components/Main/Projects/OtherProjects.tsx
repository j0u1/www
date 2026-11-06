'use client';

import { useState } from 'react';
import H2 from '../../UI/Heading/H2';
import Search from './Search';
import ProjectCard from './ProjectCard';
import NotFound from './NotFound';
import { PROJECTS } from '../../../data/projects';

export default function OtherProjects() {
  const [searchTerm, setSearchTerm] = useState('');

  const query = searchTerm.trim().toLowerCase();
  const filteredProjects = PROJECTS.filter(
    pr =>
      !query ||
      pr.title?.toLowerCase().includes(query) ||
      pr.description.toLowerCase().includes(query),
  );

  return (
    <section id="projects" className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <H2 className="flex items-center gap-4">Другие проекты</H2>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="outline-secondary grid gap-0 overflow-hidden rounded-xl outline lg:grid-cols-2">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((pr, i) => (
            <ProjectCard key={pr.title || i} project={pr} />
          ))
        ) : (
          <NotFound />
        )}
      </div>
    </section>
  );
}
