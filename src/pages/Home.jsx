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
{/* TECHNOLOGY STACK */}
<div className="mt-32">

  <div className="text-center">

    <h2 className="text-xl font-semibold text-white">
  Modern Web & Cloud Technology Stack
</h2>

    <p
      className="
        mt-5
        text-gray-400
        text-sm
        max-w-2xl
        mx-auto
        leading-relaxed
      "
    >
      NOVA leverages trusted platforms,
      cloud infrastructure and enterprise-grade
      technologies used globally.
    </p>

  </div>

  <div
    className="
      flex
      flex-wrap
      justify-center
      items-center
      gap-x-12
      gap-y-10
      mt-16
    "
  >

    {[
      {
        name: "React",
        logo:
          "https://cdn.simpleicons.org/react",
      },

      {
        name: "Tailwind",
        logo:
          "https://cdn.simpleicons.org/tailwindcss",
      },

      {
        name: "Node.js",
        logo:
          "https://cdn.simpleicons.org/nodedotjs",
      },

      {
        name: "MongoDB",
        logo:
          "https://cdn.simpleicons.org/mongodb",
      },

      {
        name: "Vercel",
        logo:
          "https://cdn.simpleicons.org/vercel/ffffff",
      },

      {
        name: "Render",
        logo:
          "https://cdn.simpleicons.org/render",
      },

      {
        name: "Cloudinary",
        logo:
          "https://cdn.simpleicons.org/cloudinary",
      },

      {
        name: "Hikvision",
        logo:
          "https://res.cloudinary.com/diszilwhc/image/upload/v1778460523/hikvision-seeklogo_ctapx5.png",
      },

      {
        name: "AWS",
        logo:
          "https://img.icons8.com/color/48/amazon-web-services.png",
      },

            {
        name: "Google Cloud",
        logo:
          "https://cdn.simpleicons.org/googlecloud",
      },
    ].map((tech, index) => (
      <div
        key={index}
        className="
          group
          flex flex-col
          items-center
          gap-3
          opacity-70
          hover:opacity-100
          transition-all duration-300
        "
      >

        <div
          className="
            w-14 h-14
            flex items-center justify-center
          "
        >
          <img
            src={tech.logo}
            alt={`${tech.name} technology logo`}
            className="
              max-w-full
              max-h-full
              object-contain
              grayscale
              brightness-200
              group-hover:grayscale-0
              transition-all duration-300
            "
          />
        </div>

        <p
          className="
            text-xs
            text-gray-500
            group-hover:text-gray-300
            transition
          "
        >
          {tech.name}
        </p>

      </div>
    ))}

  </div>

  

</div>
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