'use client';

import ChangeThemeButton from './ChangeThemeButton';
import { useColorTheme } from '../../UI/ColorTheme/useColorTheme';
import CrossGrid from './Cross';
import Me from './Me';
import Description from './Description';
import Tags from './Tags';

export default function Hero() {
  const { toggle } = useColorTheme();

  return (
    <section className="flex flex-col gap-6 relative justify-center items-center transition-all duration-300 min-h-190 lg:min-h-150 lg:h-[92dvh]">
      <div className="flex absolute z-1 top-0 right-0 flex-col gap-4 transition-all duration-300">
        <ChangeThemeButton toggle={toggle} />
      </div>
      <div className='relative z-1 flex flex-col gap-1.75 items-center'>
        <Me />
        <Description />
        <Tags />
      </div>
      <CrossGrid />
    </section>
  );
}
