import Link from "next/link";
import Logo from "./icons/Logo";
import { ChevronDownIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-center pt-4 lg:pt-8">
      <div className="justify-self-start flex items-center gap-2.5 text-neutral-300 text-xl font-medium">
        <Logo className="size-10" />
        <div className="flex items-center gap-1">
          diy
          <ChevronDownIcon className="size-5" />
        </div>
      </div>
    </header>
  )
}