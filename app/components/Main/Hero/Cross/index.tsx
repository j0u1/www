import { CrossElement } from "./Cross";


export default function CrossGrid() {
  return (
    <div className="absolute inset-0 z-0 w-full auto-rows-13.25 overflow-hidden">
      <div className="pointer-events-none hidden xl:pointer-events-auto xl:grid xl:grid-cols-[repeat(auto-fill,62.5px)] 2xl:hidden">
        {Array.from({ length: 330 }, (_, i) => (
          <CrossElement key={i} />
        ))}
      </div>
      <div className="pointer-events-none hidden 2xl:pointer-events-auto 2xl:grid 2xl:grid-cols-[repeat(auto-fill,53px)] 3xl:hidden">
        {Array.from({ length: 665 }, (_, i) => (
          <CrossElement key={i} />
        ))}
      </div>
      <div className="pointer-events-none hidden 2xl:grid-cols-[repeat(auto-fill,53px)] 3xl:pointer-events-auto 3xl:grid">
        {Array.from({ length: 703 }, (_, i) => (
          <CrossElement key={i} />
        ))}
      </div>
    </div>
  );
}