import H1 from "../../UI/Heading/H1";
import LogoAndAvatar from "./LogoAndAvatar";

export default function Me() {
  return (
    <H1 className="relative z-1 flex gap-4 items-center group">
      <span className="flex gap-3.5 items-center">
        Привет! Я <LogoAndAvatar /> Дий
      </span>
    </H1>
  );
}