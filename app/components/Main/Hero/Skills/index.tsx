import { TOOLS, STACK } from "@/app/data/skills";
import { Row } from "./Row";

export default function Stack() {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col gap-4">
      <Row up icons={TOOLS} size="size-7" />
      <Row icons={STACK} size="size-9" />
    </div>
  );
}

