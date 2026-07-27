import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
  id="accueil"
  className="relative h-screen overflow-hidden"
>

      {/* Vidéo de fond */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Voile sombre */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Contenu */}
      <div className="relative z-10 flex min-h-[calc(100vh-88px)] items-center justify-center pt-10">
        <div className="max-w-5xl px-6 text-center text-white">

          <Image
  src="/images/logo/stc-logo.png"
  alt="STC"
  width={240}
  height={120}
  className="mx-auto mb-6 h-auto w-40 sm:w-48 md:w-60"
/>

         <p className="mb-4 text-sm sm:text-base md:text-lg text-yellow-400 font-semibold uppercase tracking-[0.18em] leading-relaxed">
  Transport • Logistique • BTP • Terrassement • Carrière
</p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold">
            SENTRANSCOM
          </h1>

          <p className="mt-6 px-2 text-lg sm:text-xl md:text-2xl leading-relaxed">
            Bâtir l'avenir, transporter l'excellence.
          </p>

          <div className="mt-10 flex flex-col gap-4 md:flex-row md:justify-center">

            <Link
  href="/devis"
  className="rounded-lg bg-yellow-500 px-6 py-3 sm:px-8 sm:py-4 font-semibold text-black transition hover:bg-yellow-400"
>
  Demander un devis
</Link>

            <a
  href="#services"
  className="rounded-lg bg-yellow-500 px-6 py-3 sm:px-8 sm:py-4 font-semibold text-black transition hover:bg-yellow-400"
>
  Découvrir nos services
</a>

          </div>

        </div>
      </div>

    </section>
  );
}