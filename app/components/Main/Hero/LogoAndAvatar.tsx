"use client";

import Image from "next/image";
import Logo from "../../icons/Logo";
import { useState } from "react";

export default function LogoAndAvatar() {
  const [changeLogo, setChangeLogo] = useState(true);
  const sizeClass = "size-10 md:size-12 lg:size-16";
  const logoClasses = `${sizeClass} hover:scale-105 active:scale-105 duration-300 transition-all`;

  return (
    <div
      onClick={() => setChangeLogo(!changeLogo)}
      className={`${sizeClass} cursor-pointer active:scale-95 select-none`}
    >
      <Logo
        className={`${logoClasses} ${changeLogo ? "translate-y-0" : "-translate-y-12 opacity-0 pointer-events-none"}`}
      />
      <Image
        className={`${logoClasses} ${!changeLogo ? "-translate-y-10 md:-translate-y-12 lg:-translate-y-14 xl:-translate-y-16" : "translate-y-12 opacity-0 pointer-events-none shrink-0"}`}
        src="/images/avatar-mc.webp"
        alt="Мой Minecraft скин"
        width={56}
        height={56}
      />
    </div>
  );
}
