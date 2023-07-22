import Link from "next/link";
import Image from "next/image";

const LIST_IMAGE: string[]  = [
  "/icon-home.svg",
  "/icon-camera.svg",
  "/icon-rocket.svg",
  "/icon-user.svg",
  "/icon-uses.svg",
]

function FooterLink({ to, text, isActive ,index }: { to: string; text?: string, isActive: boolean, index: number }) {
  return (
    <Link
      href={to}
      className={`flex justify-center items-center bg-main cursor-pointer w-10 h-10 rounded-lg transition-transform duration-75 ${isActive ? "scale-110" :"hover:scale-110"}`}
    >
      <Image src={LIST_IMAGE[index]} alt="Icon Footer" width={20} height={20}  />
    </Link>
  );
}

export default function Footer({ index }: { index: number}) {
  return (
    <footer className="mx-auto px-5 py-3 rounded-xl fixed bg-white backdrop-blur-xl bottom-5  right-1/2 translate-x-1/2 lg:static lg:translate-x-0">
      <ul className="flex gap-x-5">
        <li>
          <FooterLink to="/" isActive={index == 0} index={0}/>
        </li>
        <li>
          <FooterLink to="/about" isActive={index == 1} index={1}/>
        </li>
        <li>
          <FooterLink to="/project" isActive={index == 2} index={2}/>
        </li>
        <li>
          <FooterLink to="/journey" isActive={index == 3} index={3}/>
        </li>
        <li>
          <FooterLink to="/uses" isActive={index == 4} index={4}/>
        </li>
      </ul>
    </footer>
  );
}
