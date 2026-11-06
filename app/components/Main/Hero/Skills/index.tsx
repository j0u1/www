import { TOOLS, STACK } from "@/app/data/skills";
import { Row } from "./Row";

export default function Stack() {
  return (
    <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 flex-col gap-4">
      <Row up icons={TOOLS} size="size-5 xl:size-7" />
      <Row icons={STACK} size="size-7 xl:size-9" />
    </div>
  );
}

