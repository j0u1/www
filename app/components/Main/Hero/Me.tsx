import H1 from "../../UI/Heading/H1";
import LogoAndAvatar from "./LogoAndAvatar";

export default function Me() {
  return (
    <H1 className="flex gap-4 items-center group pointer-events-auto">
      <span className="flex gap-3.5 items-center">
        Привет! Я <LogoAndAvatar /> Дий
      </span>
    </H1>
  );
}