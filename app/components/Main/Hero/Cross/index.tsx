import { CrossElement } from "./Cross";


export default function CrossGrid() {
  return (
    <div className="absolute inset-0 z-0 grid w-full auto-rows-13.25 grid-cols-[repeat(auto-fill,61.9px)] overflow-hidden xl:grid-cols-[repeat(auto-fill,62.5px)] 2xl:grid-cols-[repeat(auto-fill,53px)]">
      {Array.from({ length: 330 }, (_, i) => (
        <CrossElement key={i} />
      ))}
    </div>
  );
}