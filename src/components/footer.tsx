import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faHouse, faLaptop, faUser, IconDefinition } from "@fortawesome/free-solid-svg-icons";


const LIST_IMAGE: string[]  = [
  "/icon-home.svg",
  "/icon-camera.svg",
  "/icon-rocket.svg",
  "/icon-user.svg",
  "/icon-uses.svg",
]

function FooterLink({ to, text, isActive ,icon }: { to: string; text?: string, isActive?: boolean, icon: IconDefinition }) {
  return (
    <Link
      href={to}
      className={`flex justify-center items-center text-white bg-grey-main cursor-pointer w-10 h-10 rounded-lg transition-transform duration-75 ${isActive ? "scale-110" :"hover:scale-110"}`}
    >
      <FontAwesomeIcon icon={icon} className="h-1/2"/>
    </Link>
  );
}

export default function Footer(
  // { index }: { index: number}
  {isDarkMode}: {isDarkMode: boolean}
) {
  return (
    <footer className={`mx-auto px-5 py-3 rounded-xl fixed ${isDarkMode ? "bg-white" : "bg-main"} backdrop-blur-xl bottom-5  right-1/2 translate-x-1/2 lg:static lg:translate-x-0`}>
      <ul className="flex gap-x-5">
        <li>
          <FooterLink to="/" icon={faHouse}/>
        </li>
        <li>
          <FooterLink to="/about"  icon={faRocket}/>
        </li>
        <li>
          <FooterLink to="/project"  icon={faRocket}/>
        </li>
        <li>
          <FooterLink to="/journey"  icon={faUser}/>
        </li>
        <li>
          <FooterLink to="/uses"  icon={faLaptop}/>
        </li>
      </ul>
    </footer>
  );
}
