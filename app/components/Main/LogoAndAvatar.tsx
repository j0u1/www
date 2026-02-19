"use client"

import Image from "next/image";
import Logo from "../icons/Logo";
import { useState } from "react";

export default function LogoAndAvatar() {
  const [changeLogo, setChangeLogo] = useState(true);
  const sizeClass = "size-8 md:size-10 lg:size-14"
  const logoClasses = `${sizeClass} hover:scale-105 active:scale-105 duration-300 transition-all origin-bottom-right`

  return (
    <div onClick={() => setChangeLogo(!changeLogo)} className={`${sizeClass} cursor-pointer`}>
      <Logo className={`${logoClasses} ${changeLogo ? 'translate-y-0' : '-translate-y-12 opacity-0 pointer-events-none'}`} />
      <Image className={`${logoClasses} ${!changeLogo ? '-translate-y-8 md:-translate-y-10 lg:-translate-y-14' : 'translate-y-12 opacity-0 pointer-events-none'}`} src="https://avatar.spoverlay.ru/face/d1yy?w=128" alt="мой minecraft скин" width={56} height={56} />
    </div>
  )
}