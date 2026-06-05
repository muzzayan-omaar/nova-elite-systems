import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Services from "../components/Services";
import OfferBanner from "../components/OfferBanner";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import AIAssistant from "../components/AIAssistant";
import FeaturedTemplates from "../components/FeaturedTemplates";
import ProcessTimeline from "../components/ProcessTimeline";
import Industries from "../components/Industries";
import Infrastructure from "../components/Infrastructure";
import HomeTestimonials from "../components/HomeTestimonials";
import CaseStudies from "../components/CaseStudies";
import { Check, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div className="bg-[#0B0F1A]">
      <Helmet>
  <title>NOVA Elite Systems | Web Development & Software Engineering</title>

  <meta
    name="description"
    content="NOVA Elite Systems is a modern web development and software engineering brand building scalable websites, applications, SEO systems, and digital products for global clients."
  />

  <meta
    name="keywords"
    content="web development, software engineering, SEO services, ecommerce development, web apps, UI UX design, cloud solutions"
  />

  <meta property="og:title" content="NOVA Elite Systems" />
  <meta
    property="og:description"
    content="Modern digital solutions: web development, apps, SEO, and scalable systems."
  />
  <meta property="og:type" content="website" />
</Helmet>
      <Navbar />
      <Hero />

     <CaseStudies />
      <Services />
      
      <ProcessTimeline />
      <Industries />
      <Infrastructure />
      <FeaturedTemplates />
      <HomeTestimonials />
      <CTA />
      <Footer />
      <AIAssistant />
    </div>
  );
}