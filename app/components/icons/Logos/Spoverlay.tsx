type SpoverlayLogo = {
  className?: string;
};

export default function SpoverlayLogo({ className }: SpoverlayLogo) {
  return (
    <svg
      className={className}
      width="550" height="550" viewBox="0 0 550 550" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M358.333 25C450.381 25 525 99.6192 525 191.667V358.333C525 450.381 450.381 525 358.333 525H191.667C99.6192 525 25 450.381 25 358.333V191.667C25 99.6192 99.6192 25 191.667 25H358.333ZM233.333 150C187.31 150 150 187.31 150 233.333V316.667C150 362.69 187.31 400 233.333 400H316.667C362.69 400 400 362.69 400 316.667V233.333C400 187.31 362.69 150 316.667 150H233.333Z" fillRule="evenodd" clipRule="evenodd" fill="currentColor" />
    </svg>
  );
}