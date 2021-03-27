import Image from "next/image";
import Moon from "@/components/icons/Moon";
import Logo from "@/components/icons/Logo";
import Sun from "@/components/icons/Sun";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <aside className="z-10 sticky top-0 flex flex-col items-center justify-between pb-6 w-[103px] h-screen rounded-r-2.5xl bg-theme-dark-gray">
      <div className="relative flex flex-col items-center justify-end h-[103px] w-[103px] bg-theme-primary rounded-r-2.5xl">
        <div className="w-full h-1/2 rounded-tl-2.5xl rounded-br-2.5xl bg-theme-secondary"></div>

        <Logo className="absolute m-auto inset-0" />
      </div>

      <div className="flex flex-col w-full h-[117px] items-center justify-between">
        <button
          type="button"
          onClick={() => {
            if (isMounted) {
              setTheme(theme === "dark" ? "light" : "dark");
            }
          }}
        >
          <div>{isMounted ? theme === "dark" ? <Sun /> : <Moon /> : ""}</div>
        </button>

        <div className="w-full h-px bg-theme-grayer"></div>

        <div className="relative w-10 h-10 rounded-full">
          <Image
            src="/assets/image-avatar.jpg"
            layout="fill"
            objectFit="contain"
            className="rounded-full"
          />
        </div>
      </div>
    </aside>
  );
}
