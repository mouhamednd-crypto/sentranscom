"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Accueil", href: "#accueil" },
    { name: "À propos", href: "#apropos" },
    { name: "Services", href: "#services" },
    { name: "Flotte", href: "#flotte" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/images/logo/sentranscom-logo.png"
            alt="SENTRANSCOM SAURL"
            width={180}
            height={60}
            priority
          />

          <div className="hidden lg:block leading-tight">
            <p className="text-[11px] font-semibold tracking-[0.25em] text-gray-500">
              SAURL
            </p>
          </div>

        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-800">

          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="transition hover:text-yellow-500"
            >
              {item.name}
            </a>
          ))}

        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link
            href="/devis"
            className="rounded-lg bg-yellow-500 px-5 py-2 font-semibold text-black transition hover:bg-yellow-400"
          >
            Demander un devis
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? (
            <X size={32} />
          ) : (
            <Menu size={32} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="space-y-6 border-t bg-white px-6 py-8 shadow-xl">

          <div className="border-b pb-5">

            <h2 className="text-2xl font-bold text-green-900">
              SENTRANSCOM
            </h2>

            <p className="mt-1 text-sm tracking-[0.3em] text-gray-500">
              SAURL
            </p>

          </div>

          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-lg font-medium text-gray-700 transition hover:text-yellow-500"
            >
              {item.name}
            </a>
          ))}

          <Link
            href="/devis"
            onClick={() => setOpen(false)}
            className="mt-6 block rounded-xl bg-yellow-500 py-4 text-center font-bold text-black transition hover:bg-yellow-400"
          >
            Demander un devis
          </Link>

        </div>
      </div>

    </header>
  );
}