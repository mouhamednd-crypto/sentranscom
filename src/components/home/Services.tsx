import {
  Truck,
  Building2,
  Mountain,
  Hammer,
  Wrench,
  Route,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Transport",
    description:
      "Transport sécurisé de marchandises et de matériaux sur l'ensemble du territoire sénégalais.",
  },
  {
    icon: Building2,
    title: "BTP",
    description:
      "Travaux de bâtiment et de travaux publics réalisés avec professionnalisme.",
  },
  {
    icon: Route,
    title: "Aménagement de pistes",
    description:
      "Création, réhabilitation et entretien de pistes pour les collectivités et les entreprises.",
  },
  {
    icon: Hammer,
    title: "Terrassement",
    description:
      "Préparation de terrains et travaux de terrassement avec des engins modernes.",
  },
  {
    icon: Mountain,
    title: "Exploitation de carrière",
    description:
      "Production et fourniture de matériaux de qualité pour les chantiers.",
  },
  {
    icon: Wrench,
    title: "Pièces détachées",
    description:
      "Vente de pièces détachées pour camions et engins de chantier.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[0.18em] text-yellow-500">
            NOS SERVICES
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-green-900">
            Notre expertise
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-8 text-gray-600">
            SENTRANSCOM met son savoir-faire au service des entreprises,
            des collectivités et des particuliers partout au Sénégal.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-yellow-100">
                  <Icon className="h-8 w-8 text-yellow-600" />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-green-900">
                  {service.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}