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
    <section className="relative min-h-190 transition-all duration-300 lg:h-[calc(100dvh-4.5rem)] lg:min-h-150 xl:min-h-140">
      <ChangeThemeButton toggle={toggle} />
      <CrossGrid />
      <div className="pointer-events-none absolute inset-0 z-1 flex flex-col items-center justify-center gap-2">
        <Me />
        <Description />
      </div>
      <Skills />
    </section>
  );
}