import Image from "next/image";

const fleet = [
  {
    title: "Bulldozers",
    image: "/images/fleet/bulldozer-01.jpeg",
  },
  {
    title: "Chargeuses",
    image: "/images/fleet/chargeuse-06.jpeg",
  },
  {
    title: "Compacteurs",
    image: "/images/fleet/compacteur-05.jpeg",
  },
  {
    title: "Niveleuses",
    image: "/images/fleet/nivelleuse-02.jpeg",
  },
  {
    title: "Pelles hydroliques",
    image: "/images/fleet/pelle-01.jpeg",
  },
  {
    title: "Porte-engins",
    image: "/images/fleet/porte engin-03.jpeg",
  },
  {
    title: "Camions",
    image: "/images/fleet/truck-10.jpeg",
  },
  {
    title: "Camions toupies",
    image: "/images/fleet/truck-05.jpeg",
  },
];

export default function Fleet() {
  return (
    <section
      id="flotte"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-500">
            Nos équipements
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-green-900">
            Notre Flotte
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-8 text-gray-600">
            SENTRANSCOM dispose d'une flotte moderne d'engins et de camions
            pour assurer des travaux de terrassement, de transport,
            de carrières et de pistes sur l'ensemble du territoire sénégalais.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {fleet.map((item) => (

            <div
              key={item.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative h-56 sm:h-64 overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-6">

                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}