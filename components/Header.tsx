import Link from "next/link";
import logo from "..public/logo.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="">
      <div className=""></div>
      <Link href="/">
        <img src="Logo.svg" alt="" width={43} height={34} />
      </Link>
    </header>
  );
}
