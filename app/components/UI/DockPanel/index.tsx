import { DockItemProps } from "@/app/types/dock";
import DockItem from "./Item";
import { Code2Icon, Grid2x2Icon, HomeIcon } from "lucide-react";

const Links: DockItemProps[] = [
  {
    icon: HomeIcon,
    text: "Главная",
    href: "/"
  },
  {
    icon: Grid2x2Icon,
    text: "Проекты",
    href: "/"
  },
  {
    icon: Code2Icon,
    text: "Скилы",
    href: "/"
  }
]

export default function DockPanel() {
  return (
    <div className="fixed left-10 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-1 p-1.5 rounded-full bg-background/60 backdrop-blur-[3px] border border-secondary">
      {Links.map((l, i) => (
        <DockItem key={i} icon={l.icon} text={l.text} href={l.href} />
      ))}
    </div>
  );
}