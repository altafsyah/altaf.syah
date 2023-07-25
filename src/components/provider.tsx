"use client";
import { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "700", "900"], subsets: ["latin"] });

export default function Provider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <body
      className={`${isDarkMode ? "bg-grey-main" : "bg-white"} ${
        poppins.className
      } transition-all duration-200 w-full h-screen px-5 xl:px-32 py-12 flex flex-col justify-between text-main relative`}
    >
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      {children}
      <Footer isDarkMode={isDarkMode} />
    </body>
  );
}
