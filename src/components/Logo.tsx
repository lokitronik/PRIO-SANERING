import React from "react";
import logoImg from "../assets/logo.png";

interface LogoProps {
  className?: string;
  imgClassName?: string;
}

export default function Logo({
  className = "",
  imgClassName = "h-9 sm:h-10 md:h-11 w-auto",
}: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoImg}
        alt="NEXE SPECIALSANERING"
        className={`${imgClassName} object-contain select-none`}
        referrerPolicy="no-referrer"
        loading="eager"
      />
    </div>
  );
}
