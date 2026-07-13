'use client';

import { ChevronLeftIcon } from 'lucide-react';
import Skills from '../components/Main/Hero/Skills';
import { useRouter } from 'next/navigation';

export default function SkillsPage() {
  const router = useRouter();

  return (
    <>
      <ChevronLeftIcon
        onClick={() => router.push("/")}
        className="size-8.5 cursor-pointer active:scale-80 hover:text-accent duration-300 transition-all"
      />
      <Skills />
    </>
  );
}
