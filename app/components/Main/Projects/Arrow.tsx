import { ClassNameType } from "@/app/types/className";
import { ArrowUpRightIcon } from "lucide-react";

export default function ArrowIcon({className}: ClassNameType) {
  return (
    <ArrowUpRightIcon className="size-4.5 transition-transform duration-200 group-hover/project:translate-x-1.5 group-hover/project:-translate-y-1.5" />
  );
}