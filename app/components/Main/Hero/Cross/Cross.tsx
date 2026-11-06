import { PlusIcon } from "lucide-react";

export function CrossElement() {
  return (
    <div
      className="text-treaty hover:text-accent group flex size-13.25 items-center justify-center transition-colors duration-300 select-none"
      aria-hidden
    >
      <PlusIcon className="size-6 origin-center transition-transform duration-1000 group-hover:rotate-45" />
    </div>
  );
}