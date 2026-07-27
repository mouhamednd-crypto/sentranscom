import Image from "next/image";

export default function About() {
  return (
    <section id="apropos" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Photo */}
          <div>
            <Image
              src="/images/hero/photo2.jpeg"
              alt="SENTRANSCOM"
              width={700}
              height={500}
              className="w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>

          {/* Texte */}
          <div>

            <span className="text-yellow-500 font-semibold tracking-[0.18em] uppercase">
              À PROPOS
            </span>

            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-green-900">
              SENTRANSCOM
            </h2>

            <p className="mt-8 text-base sm:text-lg leading-8 text-gray-600">
              Depuis 2022, SENTRANSCOM accompagne les entreprises,
              les collectivités et les particuliers dans les domaines
              du transport, de la logistique, du terrassement,
              de l'aménagement de pistes, de l'exploitation de carrière
              et de la vente de pièces détachées sur toute l'étendue
              du territoire sénégalais.
            </p>

            <div className="mt-10 space-y-4">

              <div>✅ Respect des délais</div>

              <div>✅ Qualité des travaux</div>

              <div>✅ Professionnalisme</div>

              <div>✅ Satisfaction des clients</div>

            </div>

           <a
  href="#services"
  className="mt-10 inline-block rounded-lg bg-green-900 px-6 py-3 sm:px-8 sm:py-4 font-semibold text-white transition hover:bg-green-800"
>
  Découvrir nos services
</a>

          </div>

        </div>

      </div>
    </section>
  );
}