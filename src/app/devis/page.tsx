"use client";
import { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone, Clock3 } from "lucide-react";

export default function DevisPage() {
    const [nom, setNom] = useState("");
const [telephone, setTelephone] = useState("");
const [email, setEmail] = useState("");
const [service, setService] = useState("");
const [message, setMessage] = useState("");
const [loading, setLoading] = useState(false);
const [errors, setErrors] = useState({
  nom: "",
  telephone: "",
  email: "",
  service: "",
  message: "",
});
 async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setErrors({
  nom: "",
  telephone: "",
  email: "",
  service: "",
  message: "",
});
 const newErrors = {
  nom: "",
  telephone: "",
  email: "",
  service: "",
  message: "",
};

if (!nom.trim()) {
  newErrors.nom = "Le nom est obligatoire.";
}

if (
  newErrors.nom
) {
  setErrors(newErrors);
  return;
}
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  toast.error("Veuillez saisir une adresse e-mail valide.");
  return;
}

  setLoading(true);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nom,
        telephone,
        email,
        service,
        message,
      }),
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Votre demande a été envoyée avec succès !");

      setNom("");
      setTelephone("");
      setEmail("");
      setService("");
      setMessage("");
    } else {
      toast.error("Une erreur est survenue.");
    }
  } catch (error) {
    toast.error("Impossible d'envoyer la demande.");
  }

  setLoading(false);
}
 return (
    <main className="min-h-screen bg-gray-100 py-20">

      <div className="mx-auto max-w-7xl px-6">

        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-green-800 hover:text-yellow-500"
        >
          <ArrowLeft size={18} />
          Retour à l'accueil
        </Link>

        <div className="mb-16 text-center">

          <p className="uppercase tracking-[0.35em] text-yellow-500 font-semibold">
            DEMANDE DE DEVIS
          </p>

          <h1 className="mt-4 text-5xl font-bold text-green-900">
            Parlons de votre projet
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Décrivez votre besoin. Notre équipe vous répondra dans les
            meilleurs délais.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-3">

          {/* Informations */}

          <div className="rounded-3xl bg-green-900 p-10 text-white">

            <h2 className="mb-8 text-3xl font-bold">
              Nos coordonnées
            </h2>

            <div className="space-y-8">

              <div className="flex gap-4">
                <Phone className="text-yellow-400" />
                <div>
                  <p>+221 77 423 42 10</p>
                  <p>+221 33 636 86 86</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-yellow-400" />
                <p>sentranscom221@gmail.com</p>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-yellow-400" />
                <p>
                  Dakar,
                  près de SMT,
                  en face du Pont Bascule
                  de Diamniadio.
                </p>
              </div>

              <div className="flex gap-4">
                <Clock3 className="text-yellow-400" />
                <p>
                  Lundi - Samedi
                  <br />
                  08h00 - 18h00
                </p>
              </div>

            </div>

          </div>

          {/* Formulaire */}

          <div className="lg:col-span-2 rounded-3xl bg-white p-10 shadow-xl">

            <form onSubmit={handleSubmit} className="grid gap-6">

              <input
  type="text"
  value={nom}
  onChange={(e) => {
  setNom(e.target.value);

  if (errors.nom) {
    setErrors({
      ...errors,
      nom: "",
    });
  }
}}
  className="rounded-xl border p-4"
  placeholder="Nom complet"
/>
{errors.nom && (
  <p className="text-sm text-red-600">
    {errors.nom}
  </p>
)}

              <input
  type="tel"
  value={telephone}
  onChange={(e) => setTelephone(e.target.value)}
  className="rounded-xl border p-4"
  placeholder="Téléphone"
/>

              <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="rounded-xl border p-4"
  placeholder="Adresse email"
/>

              <select
  value={service}
  onChange={(e) => setService(e.target.value)}
  className="rounded-xl border p-4"
>
  <option value="">
    Choisissez un service
  </option>

  <option value="Transport">
    Transport
  </option>

  <option value="Terrassement">
    Terrassement
  </option>

  <option value="Construction de pistes">
    Construction de pistes
  </option>

  <option value="Exploitation de carrière">
    Exploitation de carrière
  </option>

  <option value="Location d'engins">
    Location d'engins
  </option>
</select>

              <textarea
  rows={6}
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  className="rounded-xl border p-4"
  placeholder="Décrivez votre projet..."
/>

              <button
  type="submit"
  disabled={loading}
  className="rounded-xl bg-yellow-500 py-4 font-bold text-black transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-50"
>
  {loading ? "Envoi en cours..." : "Envoyer la demande"}
</button>

            </form>

          </div>

        </div>

      </div>

    </main>
  );
}