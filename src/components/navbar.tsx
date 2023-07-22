import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/" className="text-4xl font-semibold">
        altaf.syah
      </Link>
      <div className="w-12 h-12 rounded-xl bg-main flex justify-center items-center text-white">
        <Image src="/icon-sun.svg" alt="Icon Sun" width={20} height={20} />
      </div>
    </nav>
  );
}
