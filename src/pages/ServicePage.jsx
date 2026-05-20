import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ServiceHero from "../components/services/ServiceHero";
import FeatureSplit from "../components/services/FeatureSplit";
import TrustBar from "../components/services/TrustBar";
import ProcessTimeline from "../components/services/ProcessTimeline";
import IndustryGrid from "../components/services/IndustryGrid";
import TechStack from "../components/services/TechStack";
import ServiceCTA from "../components/services/ServiceCTA";

import { services } from "../data/servicesData";

export default function ServicePage() {

  const { slug } = useParams();

  const service =
    services.find(
      (item) =>
        item.slug === slug
    );

  if (!service) {
    return (
      <div className="text-white p-20">
        Service not found
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main
        className="
          bg-[#050816]
          text-white
          overflow-hidden
        "
      >

        {/* HERO */}

        <ServiceHero
  eyebrow={service.hero.eyebrow}
  title={service.hero.title}
  description={service.hero.subtitle}
  metrics={service.trustBar}
/>

        {/* TRUST */}

        <TrustBar
          items={
            service.trustBar
          }
        />

        {/* SPLITS */}

        {service.splits.map(
          (split, index) => (
            <FeatureSplit
              key={index}
              eyebrow={
                split.eyebrow
              }
              title={
                split.title
              }
              description={
                split.description
              }
              features={
                split.features
              }
              reverse={
                split.reverse
              }
              image={
                split.image
              }
            />
          )
        )}

        {/* PROCESS */}

        <ProcessTimeline
          steps={
            service.process
          }
        />

        {/* INDUSTRIES */}

        <IndustryGrid
          items={
            service.industries
          }
        />

        {/* TECH */}

        <TechStack
          stacks={
            service.techStack
          }
        />

        {/* CTA */}

        <ServiceCTA />

 <Footer />
      </main>

     
    </>
  );
}