'use client';

import ChangeThemeButton from './ChangeThemeButton';
import { useColorTheme } from '../../UI/ColorTheme/useColorTheme';
import CrossGrid from './Cross';
import Me from './Me';
import Description from './Description';
import Skills from './Skills';

export default function Hero() {
  const { toggle } = useColorTheme();

  return (
    <section className="flex flex-col gap-6 relative justify-center items-center transition-all duration-300 min-h-190 lg:min-h-150 lg:h-[92dvh]">
      <ChangeThemeButton toggle={toggle} />
      <div className='relative z-1 flex flex-col gap-2 items-center'>
        <Me />
        <Description />
      </div>
      <CrossGrid />
      <Skills />
    </section>
  );
}
