import H1 from "../../UI/Heading/H1";
import LogoAndAvatar from "./LogoAndAvatar";

export default function Me() {
  return (
    <H1 className="group pointer-events-auto flex items-center gap-4">
      <span className="flex items-center gap-3.5">
        Привет! Я <LogoAndAvatar /> Дий
      </span>
    </H1>
  );
}