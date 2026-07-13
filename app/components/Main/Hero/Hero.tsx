'use client';

import H1 from '../../UI/Heading/H1';
import { Cross } from './Cross';
import Links from './Links';
import LogoAndAvatar from './LogoAndAvatar';
import ChangeThemeButton from './ChangeThemeButton';
import { useColorTheme } from '../../UI/ColorTheme/useColorTheme';
import { PROJECTS } from '@/app/data/projects';
import ProjectCard from '../Projects/ProjectCard';
import Lnk from '../../UI/Lnk';

const projct = PROJECTS[0];
export default function Hero() {
  const { toggle } = useColorTheme();

  return (
    <section className="flex flex-col gap-6 relative justify-center items-center transition-all duration-300 min-h-190 lg:min-h-150 lg:h-[92dvh]">
      <div className="flex absolute top-0 right-0 flex-col gap-4 transition-all duration-300">
        <ChangeThemeButton toggle={toggle} />
      </div>
      <H1 className="flex gap-4 items-center group">
        <Cross />
        <span className="flex gap-3.5 items-center">
          Привет! Я <LogoAndAvatar /> Дий
        </span>
        <Cross />
      </H1>
      <div className="relative flex items-center gap-2 lg:gap-4 z-10 duration-300 transition-all">
        <p className="text-xs md:text-sm lg:text-base text-additional duration-300 transition-all">Фронтенд-разработчик, веб-дизайнер</p>
        <span className="text-sm text-additional-foreground">/</span>
        <Links />
      </div>

      <div className="absolute right-0 bottom-0 flex flex-col gap-2">
        <div className="flex justify-between items-center w-full">
          <p>Крайний проект</p>
          <Lnk href="/projects">Все проекты</Lnk>
        </div>
        {projct && (
          <ProjectCard
            className="zoom-40 md:zoom-50 origin-bottom-right duration-300 transition-all"
            project={projct}
            noButton
          />
        )}
      </div>
    </section>
  );
}
