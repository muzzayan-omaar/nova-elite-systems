import {
  Building2,
  UtensilsCrossed,
  Briefcase,
  Hospital,
  GraduationCap,
  HardHat,
  ArrowRight,
  Check,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Industries() {
  const industries = [
    {
      icon: <UtensilsCrossed size={22} />,
      title: "Hospitality & Restaurants",
      desc:
        "Modern websites, booking systems, CCTV, digital menus and guest connectivity solutions.",
    },

    {
      icon: <Building2 size={22} />,
      title: "Retail & Commerce",
      desc:
        "Ecommerce platforms, inventory systems, surveillance infrastructure and automation tools.",
    },

    {
      icon: <Hospital size={22} />,
      title: "Healthcare & Clinics",
      desc:
        "Appointment systems, internal management platforms and secure networking environments.",
    },

    {
      icon: <Briefcase size={22} />,
      title: "Corporate Offices",
      desc:
        "Business platforms, networking infrastructure, access systems and workflow automation.",
    },

    {
      icon: <HardHat size={22} />,
      title: "Construction & Real Estate",
      desc:
        "Portfolio platforms, property systems, surveillance solutions and infrastructure planning.",
    },

    {
      icon: <GraduationCap size={22} />,
      title: "Education",
      desc:
        "School portals, attendance systems, campus networking and digital management solutions.",
    },
  ];

  return (
    <section
      className="
        relative
        min-h-screen
        bg-[#050816]
        text-white
        overflow-hidden
      "
    >
      <Navbar />

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* GLOW */}
        <div
          className="
            absolute
            top-[-180px]
            left-1/2
            -translate-x-1/2
            w-[950px]
            h-[950px]
            rounded-full
            bg-blue-500/10
            blur-[170px]
          "
        />

        {/* GRID */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
            bg-[size:90px_90px]
            opacity-20
          "
        />

      </div>

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          pt-32
          pb-24
        "
      >

        {/* HERO */}

        {/* INDUSTRIES */}
<div className="mt-24">

  <div className="text-center max-w-3xl mx-auto">

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
      INDUSTRIES WE SUPPORT
    </p>

    <h2
      className="
        text-3xl
        md:text-5xl
        font-bold
        leading-tight
      "
    >
      Built Around
      <span className="text-blue-500">
        {" "}Real Business Operations
      </span>
    </h2>

  </div>

  <div
    className="
      grid
      md:grid-cols-2
      lg:grid-cols-3
      gap-6
      mt-16
    "
  >

    {industries.map((item, index) => (
      <div
        key={index}
        className="
          rounded-[28px]
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-7
          hover:border-blue-500/20
          hover:bg-blue-500/[0.03]
          transition-all duration-300
        "
      >

        <div
          className="
            w-14 h-14
            rounded-2xl
            bg-blue-500/10
            flex items-center justify-center
            text-blue-400
            mb-6
          "
        >
          {item.icon}
        </div>

        <h3
          className="
            text-xl
            font-semibold
            mb-4
          "
        >
          {item.title}
        </h3>

        <p
          className="
            text-gray-400
            text-sm
            leading-relaxed
          "
        >
          {item.desc}
        </p>

      </div>
    ))}

  </div>

</div>

{/* TECHNOLOGY STACK */}
<div className="mt-32">

  <div className="text-center">

  </div>

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

</div>

        {/* PROCESS */}
        <div className="mt-32">

          <div className="max-w-2xl">

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
              HOW WE WORK
            </p>

            <h2
              className="
                text-3xl
                md:text-4xl
                font-semibold
                leading-tight
              "
            >
              Strategic Systems.
              <span className="text-blue-500">
                {" "}Built Step By Step.
              </span>
            </h2>

          </div>

          <div
            className="
              grid
              md:grid-cols-4
              gap-10
              mt-16
            "
          >

            {[
              {
                number: "01",
                title: "Discover",
                desc:
                  "Understanding your operations, goals and challenges.",
              },

              {
                number: "02",
                title: "Design",
                desc:
                  "Planning systems, workflows and user experiences.",
              },

              {
                number: "03",
                title: "Build",
                desc:
                  "Engineering scalable digital and infrastructure solutions.",
              },

              {
                number: "04",
                title: "Support",
                desc:
                  "Maintaining, optimizing and scaling your systems.",
              },
            ].map((item, index) => (
              <div key={index}>

                <p
                  className="
                    text-blue-500
                    text-sm
                    font-semibold
                    mb-4
                  "
                >
                  {item.number}
                </p>

                <h3
                  className="
                    text-lg
                    font-semibold
                    mb-3
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-sm
                    text-gray-400
                    leading-relaxed
                  "
                >
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* SHOWCASE */}
        <div
          className="
            grid
            lg:grid-cols-[0.9fr_1.1fr]
            gap-16
            items-center
            mt-32
          "
        >

          {/* LEFT */}
          <div>

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
              BUILT FOR MODERN OPERATIONS
            </p>

            <h2
              className="
                text-3xl
                md:text-5xl
                font-bold
                leading-[1.08]
              "
            >
              Technology That
              <span className="text-blue-500">
                {" "}Looks Premium
              </span>
              {" "}And Performs Reliably
            </h2>

            <p
              className="
                mt-7
                text-gray-400
                leading-relaxed
                text-sm
                md:text-base
                max-w-xl
              "
            >
              Whether you're operating a clinic,
              restaurant, retail store or corporate office,
              NOVA delivers systems designed to improve
              operations, security and digital presence.
            </p>

            <div className="space-y-5 mt-10">

              {[
                "Scalable modern platforms",
                "Reliable infrastructure solutions",
                "Premium customer experiences",
                "Long-term technical support",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >

                  <div className="text-blue-400">
                    <Check size={18} />
                  </div>

                  <p className="text-gray-300 text-sm">
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">

            {/* GLOW */}
            <div
              className="
                absolute
                w-[500px]
                h-[500px]
                rounded-full
                bg-blue-500/10
                blur-3xl
              "
            />

            <div
              className="
                relative
                w-full
                max-w-[700px]
                h-[520px]
              "
            >

              {/* IMAGE 1 */}
              <img
                src="https://res.cloudinary.com/diszilwhc/image/upload/v1778424694/web1_iq30vk.jpg"
                alt="Project"
                className="
                  absolute
                  top-0
                  left-0
                  w-[68%]
                  rounded-[28px]
                  border border-white/10
                  shadow-2xl
                  rotate-[-8deg]
                "
              />

              {/* IMAGE 2 */}
              <img
                src="https://res.cloudinary.com/diszilwhc/image/upload/v1778424694/web2_by84l5.jpg"
                alt="Project"
                className="
                  absolute
                  top-20
                  right-0
                  w-[64%]
                  rounded-[28px]
                  border border-white/10
                  shadow-2xl
                  rotate-[7deg]
                "
              />

              {/* IMAGE 3 */}
              <img
                src="https://res.cloudinary.com/diszilwhc/image/upload/v1778424694/web3_qljmjj.jpg"
                alt="Project"
                className="
                  absolute
                  bottom-0
                  left-[18%]
                  w-[60%]
                  rounded-[28px]
                  border border-white/10
                  shadow-2xl
                "
              />

            </div>

          </div>

        </div>

        {/* CTA */}
        <div
          className="
            mt-36
            text-center
          "
        >

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
            READY TO MODERNIZE?
          </p>

          <h2
            className="
              text-3xl
              md:text-5xl
              font-bold
              leading-tight
              max-w-4xl
              mx-auto
            "
          >
            Your Industry Is Evolving.
            <span className="text-blue-500">
              {" "}Your Systems Should Too.
            </span>
          </h2>

          <button
            className="
              mt-10
              inline-flex
              items-center
              gap-3
              px-7 py-4
              rounded-2xl
              bg-blue-600
              hover:bg-blue-500
              transition
              text-sm
              font-medium
              shadow-[0_0_35px_rgba(59,130,246,0.35)]
            "
          >
            Book Consultation
            <ArrowRight size={18} />
          </button>

        </div>

      </div>

      <Footer />
    </section>
  );
}