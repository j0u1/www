import { PlusIcon } from "lucide-react";

export function CrossElement() {
  return (
    <p
      className="flex gap-1.5 font-normal size-16 select-none text-treaty duration-300 hover:delay transition-colors hover:text-accent group"
      aria-hidden
    >
      <PlusIcon className="transition-transform duration-1000 origin-center group-hover:rotate-45 size-6" />
    </p>
  );
}