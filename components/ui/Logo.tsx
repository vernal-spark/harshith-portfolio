import Image from "next/image";
import React from "react";

const Logo = ({ source }: { source: string }) => {
  return (
    <div className="bg-red-500 p-1 h-6 w-6 flex items-center justify-center rounded-full bg-gradient-to-br from-zinc-800 to-zinc-950 z-10">
      <Image
        src={source}
        alt="logo"
        width={15}
        height={15}
        className="rounded-full"
      />
    </div>
  );
};

export default Logo;
