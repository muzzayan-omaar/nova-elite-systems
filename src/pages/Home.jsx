import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Services from "../components/Services";
import CaseStudies from "../components/CaseStudies";
import OfferBanner from "../components/OfferBanner";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import AIAssistant from "../components/AIAssistant";

export default function Home() {
  return (
    <div className="bg-[#0B0F1A]">
      <Navbar />
      <Hero />
      <Clients />
      <OfferBanner />
      <Services />
      <CaseStudies />
      <CTA />
      <Footer />
      <AIAssistant />
    </div>
  );
}