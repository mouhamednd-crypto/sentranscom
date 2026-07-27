import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Bonjour, je souhaite obtenir un devis concernant vos services."
  );

  return (
    <a
      href={`https://wa.me/221774234210?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter SENTRANSCOM sur WhatsApp"
      className="group fixed bottom-6 right-6 z-50"
    >
      {/* Bulle */}
      <div className="absolute right-20 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-800 opacity-0 shadow-xl transition-all duration-300 group-hover:block group-hover:opacity-100">
        Besoin d'un devis ?<br />
        <span className="text-green-600 font-semibold">
          Discutez avec nous
        </span>
      </div>

      {/* Bouton */}
      <div className="flex h-16 w-16 whatsapp-pulse items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/50">

        <FaWhatsapp size={36} />

      </div>

    </a>
  );
}