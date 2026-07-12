export function Cross() {
  return (
    <p
      className="flex gap-1.5 font-normal text-3xl lg:text-5xl select-none text-neutral-500 duration-300 transition-all"
      aria-hidden
    >
      <span className="transition-transform duration-500 group-hover:rotate-45">
        +
      </span>
      <span className="transition-transform duration-500 group-hover:rotate-45">
        +
      </span>
    </p>
  );
}