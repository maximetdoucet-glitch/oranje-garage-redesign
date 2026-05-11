import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Werkplaats from "@/components/Werkplaats";
import Transparency from "@/components/Transparency";
import Reviews from "@/components/Reviews";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-bg text-fg">
      <Hero accent="red" />
      <Stats />
      <Services />
      <Werkplaats />
      <Transparency />
      <Reviews />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
}
