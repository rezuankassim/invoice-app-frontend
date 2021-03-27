import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import { ScrollProvider } from "../context/ScrollContext";

export default function Layout({ children }) {
  const [scroll, setScroll] = useState("");

  return (
    <div className="flex bg-theme-light-gray dark:bg-theme-dark-navy-blue font-sans text-base">
      <Sidebar />

      <main className={"flex-grow" + ` ${scroll}`}>
        <div className="w-full h-full">
          <div className="container mx-auto max-w-2.5xl h-full">
            <ScrollProvider value={{ scroll, setScroll }}>
              {children}
            </ScrollProvider>
          </div>
        </div>
      </main>
    </div>
  );
}
