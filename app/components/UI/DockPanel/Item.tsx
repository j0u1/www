import { DockItemProps } from "@/app/types/dock";
import Link from "next/link";

export default function DockItem({ icon, text, href }: DockItemProps) {
  const Icon = icon
  return (
    <Link href={href} className="flex w-full flex-col items-center gap-1 text-accent px-4 py-6 bg-secondary/40 rounded-full border border-white/16">
      <Icon className="size-6" />
      <span className="text-xs font-medium">{text}</span>
    </Link>
    // <div className="flex flex-col items-center gap-1 text-additional px-4 py-6 bg-transparent rounded-full border border-transparent duration-300 transition-all hover:border-white/5 hover:bg-additional/10">
    //     <Grid2X2Icon className="size-6" />
    //     <span className="text-xs font-medium">Проекты</span>
    //   </div>
  );
}