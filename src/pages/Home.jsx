import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Services from "../components/Services";
import CaseStudies from "../components/CaseStudies";
import OfferBanner from "../components/OfferBanner";

export default function Home() {
  return (
    <div className="bg-[#0B0F1A]">
      <Hero />
      <Clients />
      <OfferBanner />
      <Services />
      <CaseStudies />
    </div>
  );
}