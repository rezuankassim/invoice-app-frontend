import Image from "next/image";
import Moon from "@/components/icons/Moon";
import Logo from "@/components/icons/Logo";
import Sun from "@/components/icons/Sun";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import PrimaryButton from "./PrimaryButton";

export default function Sidebar() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [show, setShow] = useState(false);

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

        <div
          className="relative w-full flex items-center justify-center"
          onClick={() => setShow(!show)}
        >
          <div className="cursor-pointer relative w-10 h-10 rounded-full">
            <Image
              src="/assets/image-avatar.jpg"
              layout="fill"
              objectFit="contain"
              className="z-20 rounded-full"
            />
          </div>

          <Transition
            show={show}
            enter="transition ease-in-out duration-500"
            enterFrom="opacity-30"
            enterTo="opacity-100"
            leave="transition ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-30"
            className="absolute inset-x-0 ml-7"
          >
            <div className="flex items-center justify-end w-72 h-12 pl-10 pr-1 py-2 bg-white shadow-theme-lg rounded-full">
              <PrimaryButton padding="px-5 py-3">Login</PrimaryButton>
            </div>
          </Transition>
        </div>
      </div>
    </aside>
  );
}
