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
{/* TECHNOLOGY STACK */}
<div className="mt-32">

  <div className="text-center">

    <p
      className="
        uppercase
        tracking-[0.28em]
        text-[11px]
        text-blue-400
        font-semibold
        mb-5
      "
    >
      TECHNOLOGY ECOSYSTEM
    </p>

    <h2
      className="
        text-3xl
        md:text-4xl
        font-semibold
      "
    >
      Trusted Technologies &
      <span className="text-blue-500">
        {" "}Infrastructure
      </span>
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
            alt={tech.name}
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
      <OfferBanner />
      <Services />
      <CaseStudies />
      <CTA />
      <Footer />
      <AIAssistant />
    </div>
  );
}