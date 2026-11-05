import SpoverlayLogo from "@/app/components/icons/Logos/Spoverlay";
import { ArrowUpRightIcon, GitBranchIcon } from "lucide-react";
import Link from "next/link";
import { ComponentType, ElementType, SVGProps } from "react";

type TagType = {
  href: string;
  text: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export default function Tags() {
  return (
    <div className='flex gap-3.5 mt-2'>
      <TagElement text="Лид spoverlay" icon={SpoverlayLogo} href="https://spoverlay.ru" />
      <TagElement text="Open-source контрибьютер" icon={GitBranchIcon} href="https://github.com/j0u1" />
    </div>
  );
}

function TagElement({ href, text, icon }: TagType) {
  const Icon = icon

  return (
    <Link href={href} target="_blank" className='group flex items-center outline outline-secondary rounded-lg px-2.5 py-1.5 gap-1.5 bg-background text-additional hover:text-accent'>
      <Icon className='size-4.5 group' />
      <span>{text ?? 'Текст'}</span>
    </Link>
  )
}