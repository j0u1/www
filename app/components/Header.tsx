import Link from "next/link";
import Logo from "./icons/Logo";
import { ChevronDownIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-center items-center pt-4 lg:pt-8">
      <div className="flex gap-2.5 justify-self-start items-center text-xl font-medium text-additional/70 dark:text-additional">
        <Logo className="size-10" />
        <div className="flex gap-1 items-center">
          diy
          <ChevronDownIcon className="size-5" />
        </div>
      </div>
    </header>
  )
}