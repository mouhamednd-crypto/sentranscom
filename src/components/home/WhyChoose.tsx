import { Truck, Clock3, Users, MapPinned } from "lucide-react";

const items = [
  {
    icon: Truck,
    title: "Flotte moderne",
    text: "Une flotte de camions et d'engins performants pour répondre efficacement à tous vos projets.",
  },
  {
    icon: Clock3,
    title: "Respect des délais",
    text: "Une organisation rigoureuse afin de livrer chaque chantier dans les délais convenus.",
  },
  {
    icon: Users,
    title: "Équipe qualifiée",
    text: "Des opérateurs et techniciens expérimentés au service de vos projets.",
  },
  {
    icon: MapPinned,
    title: "Intervention nationale",
    text: "Nous intervenons partout sur le territoire sénégalais selon vos besoins.",
  },
];

export default function WhyChoose() {
  return (
    <section id="pourquoi"  className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="uppercase tracking-[0.18em] text-yellow-500 font-semibold">
            Pourquoi nous choisir
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-green-900">
            Votre partenaire de confiance
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-2xl bg-white p-6 sm:p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-yellow-100">
                  <Icon className="h-8 w-8 text-yellow-600" />
                </div>

                <h3 className="mb-4 text-xl sm:text-2xl font-bold text-green-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}