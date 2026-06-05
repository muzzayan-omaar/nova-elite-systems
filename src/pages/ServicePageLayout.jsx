import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ServiceHero from "../components/service/ServiceHero";
import ServiceAudience from "../components/service/ServiceAudience";
import ServiceDeliverables from "../components/service/ServiceDeliverables";
import ServiceBundles from "../components/service/ServiceBundles";
import ServiceWhyNova from "../components/service/ServiceWhyNova";
import ServiceFAQ from "../components/service/ServiceFAQ";
import ServiceCTA from "../components/service/ServiceCTA";

export default function ServicePageLayout({
  seo,
  hero,
  audience,
  benefits,
  deliverables,
  bundles,
  faq
}) {
  return (
    <>
      {/* SEO PER PAGE */}
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />

        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* PAGE FLOW (your conversion funnel) */}
      <Navbar />
      <ServiceHero {...hero} />
      <ServiceAudience {...audience} />
      <ServiceDeliverables {...deliverables} />

      
      <ServiceBundles {...bundles} />
      <ServiceWhyNova />
      <ServiceFAQ {...faq} />
      <ServiceCTA />

      <Footer />
    </>
  );
}