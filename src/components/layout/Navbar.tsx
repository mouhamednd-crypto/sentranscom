import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a href="/">
          <Image
            src="/images/logo/sentranscom-logo.png"
            alt="SENTRANSCOM"
            width={190}
            height={60}
            className="h-auto w-auto"
            priority
          />
        </a>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-800">
         <a href="#accueil" className="hover:text-yellow-500 transition">
  Accueil
</a>

<a href="#apropos" className="hover:text-yellow-500 transition">
  À propos
</a>

<a href="#services" className="hover:text-yellow-500 transition">
  Services
</a>

<a href="#flotte" className="hover:text-yellow-500 transition">
  Flotte
</a>

<a href="#contact" className="hover:text-yellow-500 transition">
  Contact
</a>
        </nav>

        {/* Bouton */}
        <Link
  href="/devis"
  className="rounded-lg bg-yellow-500 px-5 py-2 font-semibold text-black transition hover:bg-yellow-400"
>
  Demander un devis
</Link>

      </div>
    </header>
  );
}