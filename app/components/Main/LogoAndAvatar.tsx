"use client"

import Image from "next/image";
import Logo from "../icons/Logo";
import { useState } from "react";

export default function LogoAndAvatar() {
  const [changeLogo, setChangeLogo] = useState(true);

  return (
    <div onClick={() => setChangeLogo(!changeLogo)} className="size-14 cursor-pointer">
      <Logo className={`size-14 hover:scale-105 duration-300 transition-all ${changeLogo ? 'translate-y-0' : '-translate-y-12 opacity-0 pointer-events-none'}`} />
      <Image className={`size-14 hover:scale-105 duration-300 transition-all ${!changeLogo ? '-translate-y-14' : 'translate-y-12 opacity-0 pointer-events-none'}`} src="https://avatar.spoverlay.ru/face/d1yy?w=52" alt="мой minecraft скин" width={50} height={50} />
    </div>
  )
}