'use client';

import H1 from '../../UI/Heading/H1';
import Links from './Links';
import LogoAndAvatar from './LogoAndAvatar';
import ChangeThemeButton from './ChangeThemeButton';
import { useColorTheme } from '../../UI/ColorTheme/useColorTheme';
import CrossGrid from './Cross';

export default function Hero() {
  const { toggle } = useColorTheme();

  return (
    <section className="flex flex-col gap-6 relative justify-center items-center transition-all duration-300 min-h-190 lg:min-h-150 lg:h-[92dvh]">
      <div className="flex absolute top-0 right-0 flex-col gap-4 transition-all duration-300">
        <ChangeThemeButton toggle={toggle} />
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <H1 className="relative z-1 flex gap-4 items-center group">
          <span className="flex gap-3.5 items-center">
            Привет! Я <LogoAndAvatar /> Дий
          </span>
        </H1>
        <div className="relative flex items-center gap-2 lg:gap-4 z-10 duration-300 transition-all">
          <p className="text-xs md:text-sm lg:text-base text-additional duration-300 transition-all">Фронтенд-разработчик, веб-дизайнер</p>
          <span className="text-sm text-additional-foreground">/</span>
          <Links />
        </div>
      </div>
      <CrossGrid />
    </section>
  );
}
