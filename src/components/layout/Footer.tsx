import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          <div>

           <h2 className="text-3xl font-bold text-yellow-400">
  SENTRANSCOM
</h2>

<p className="mt-2 text-sm text-yellow-300 italic">
  Bâtir l'avenir, transporter l'excellence.
</p>

<p className="mt-5 leading-8 text-gray-300">
  Société spécialisée dans le transport,
  le terrassement,
  les carrières,
  le BTP
  et la logistique au Sénégal.
</p>

          </div>

          <div>

            <h3 className="mb-5 text-xl font-bold">
              Navigation
            </h3>

            <ul className="space-y-3 text-gray-300">

  <li>
    <Link href="/#accueil" className="hover:text-yellow-400 transition">
      Accueil
    </Link>
  </li>

  <li>
    <Link href="/#apropos" className="hover:text-yellow-400 transition">
      À propos
    </Link>
  </li>

  <li>
    <Link href="/#services" className="hover:text-yellow-400 transition">
      Services
    </Link>
  </li>

  <li>
    <Link href="/#flotte" className="hover:text-yellow-400 transition">
      Flotte
    </Link>
  </li>

  <li>
    <Link href="/#contact" className="hover:text-yellow-400 transition">
      Contact
    </Link>
  </li>

</ul>

          </div>

          <div>

            <h3 className="mb-5 text-xl font-bold">
              Contact
            </h3>

            <a
  href="tel:+221774234210"
  className="block text-gray-300 transition hover:text-yellow-400"
>
  +221 77 423 42 10
</a>

            <a
  href="tel:+221336368686"
  className="block text-gray-300 transition hover:text-yellow-400"
>
  +221 33 636 86 86
</a>

            <a
  href="mailto:sentranscom221@gmail.com"
  className="mt-3 block text-gray-300 transition hover:text-yellow-400"
>
  sentranscom221@gmail.com
</a>

          </div>

        </div>

      </div>

      <div className="border-t border-green-900 py-6 text-center text-sm text-gray-400">

        © {new Date().getFullYear()} SENTRANSCOM — Tous droits réservés.

      </div>

    </footer>
  );
}