import { CalendarDays, Truck, MapPinned, Users } from "lucide-react";

const stats = [
  {
    icon: CalendarDays,
    value: "2022",
    label: "Création de l'entreprise",
  },
  {
    icon: Truck,
    value: "25+",
    label: "Engins et camions",
  },
  {
    icon: MapPinned,
    value: "14",
    label: "Régions du Sénégal",
  },
  {
    icon: Users,
    value: "100%",
    label: "Clients satisfaits",
  },
];

export default function Stats() {
  return (
    <section id="statistiques" className="bg-green-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="uppercase tracking-[0.3em] text-yellow-400 font-semibold">
            SENTRANSCOM EN CHIFFRES
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Notre expérience à votre service
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm transition duration-300 hover:bg-white/20"
              >
                <div className="mb-6 flex justify-center">
                  <Icon className="h-12 w-12 text-yellow-400" />
                </div>

                <h3 className="text-5xl font-bold text-yellow-400">
                  {stat.value}
                </h3>

                <p className="mt-4 text-lg">
                  {stat.label}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}