import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";

export default function Navbar({toggleDarkMode, isDarkMode}: {toggleDarkMode: () => void, isDarkMode: boolean}) {
  return (
    <nav className={`flex items-center justify-between ${isDarkMode ? "text-white" : "text-grey-main"}`}>
      <Link href="/" className={`text-4xl font-semibold `}>
        altaf.syah
      </Link>
      <div className={`cursor-pointer w-12 h-12 rounded-xl ${isDarkMode ? "bg-white text-grey-main" : "bg-grey-main text-white"} flex justify-center items-center`} onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} className="h-1/2" />
      </div>
    </nav>
  );
}
