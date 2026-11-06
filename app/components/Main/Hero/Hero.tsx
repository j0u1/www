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
    <section className="relative transition-all duration-300 min-h-190 lg:min-h-150 xl:min-h-140 lg:h-[calc(100dvh-4.5rem)]">
      <ChangeThemeButton toggle={toggle} />
      <CrossGrid />
      <div className="absolute inset-0 z-1 flex flex-col gap-2 items-center justify-center pointer-events-none">
        <Me />
        <Description />
      </div>
      <Skills />
    </section>
  );
}