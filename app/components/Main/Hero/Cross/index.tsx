import { CrossElement } from "./Cross";


export default function CrossGrid() {
  return (
    <div className='absolute z-0 grid w-full grid-cols-[repeat(auto-fill,56px)] grid-rows-12'>
      {Array.from({ length: 561 }, (_, i) => (<CrossElement key={i} />))}
    </div>
  );
}