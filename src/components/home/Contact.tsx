import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-green-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
            Parlons de votre projet
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-8 text-gray-200">
            Notre équipe est à votre disposition pour répondre à toutes vos
            demandes concernant le transport, le terrassement, les carrières,
            les pistes et la logistique.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Coordonnées */}

          <div className="space-y-8">

            <div className="flex gap-5">

              <Phone className="h-8 w-8 text-yellow-400" />

              <div>

                <h3 className="text-xl font-bold">
                  Téléphone
                </h3>

                <a
                  href="tel:+221774234210"
                  className="block text-gray-200 hover:text-yellow-400 transition"
                >
                  +221 77 423 42 10
                </a>

                <a
                  href="tel:+221336368686"
                  className="block text-gray-200 hover:text-yellow-400 transition"
                >
                  +221 33 636 86 86
                </a>

              </div>

            </div>

            <div className="flex gap-5">

              <Mail className="h-8 w-8 text-yellow-400" />

              <div>

                <h3 className="text-xl font-bold">
                  Email
                </h3>

                <a
                  href="mailto:sentranscom221@gmail.com"
                  className="text-gray-200 hover:text-yellow-400 transition"
                >
                  sentranscom221@gmail.com
                </a>

              </div>

            </div>

            <div className="flex gap-5">

              <MapPin className="h-8 w-8 text-yellow-400" />

              <div>

                <h3 className="text-xl font-bold">
                  Adresse
                </h3>

                <p className="text-gray-200">
                  Dakar, en face du Pont Bascule de Diamniadio,
                  près de SMT.
                </p>

              </div>

            </div>

          </div>

          {/* Carte d'action */}

          <div className="rounded-3xl bg-white p-10 text-center text-gray-900 shadow-2xl">

            <h3 className="text-3xl font-bold text-green-900">
              Besoin d'un devis ?
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              Décrivez votre projet en quelques minutes.
              Notre équipe vous répondra rapidement avec une
              proposition adaptée à vos besoins.
            </p>

            <Link
              href="/devis"
              className="mt-10 inline-block rounded-xl bg-yellow-500 px-8 py-4 font-bold text-black transition hover:bg-yellow-400"
            >
              Demander un devis
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}