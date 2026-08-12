import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="top-0 z-50 sticky flex justify-between items-center bg-blue-800 shadow-lg backdrop:blur-md px-4 sm:px-10 py-4">
      <Link href="/#home">
        <Image
          src="/chandra-anggara-diputra.webp"
          alt="Chandra Anggara Diputra"
          width={50}
          height={50}
          loading="eager"
          className="rounded-full"
        />
      </Link>
      <nav>
        <ul className="flex gap-6 text-white">
          <li>
            <Link href="/#kegiatan" className="hover:underline">
              Kegiatan
            </Link>
          </li>
          <li>
            <Link href="/#portfolio" className="hover:underline">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/#kontak" className="hover:underline">
              Kontak
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
