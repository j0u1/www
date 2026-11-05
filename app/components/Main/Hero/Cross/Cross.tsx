import { PlusIcon } from "lucide-react";

export function CrossElement() {
  return (
    <p
      className="flex size-13.25 items-center justify-center select-none text-treaty duration-300 transition-colors hover:text-accent group"
      aria-hidden
    >
      <PlusIcon className="size-6 origin-center transition-transform duration-1000 group-hover:rotate-45" />
    </p>
  );
}