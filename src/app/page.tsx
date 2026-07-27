import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Fleet from "@/components/home/Fleet";
import WhyChoose from "@/components/home/WhyChoose";
import Stats from "@/components/home/Stats";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Fleet />
      <WhyChoose />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
}
