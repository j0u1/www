import { CrossElement } from "./Cross";


export default function CrossGrid() {
  return (
    <div className="absolute inset-0 z-0 grid w-full grid-cols-[repeat(auto-fill,53px)] auto-rows-13.25 overflow-hidden">
      {Array.from({ length: 700 }, (_, i) => (
        <CrossElement key={i} />
      ))}
    </div>
  );
}