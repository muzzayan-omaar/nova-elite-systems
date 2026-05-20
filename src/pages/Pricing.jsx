import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

import {
  Check,
  Sparkles,
  Shield,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ServerCog,
  Network,
  LockKeyhole,
} from "lucide-react";

export default function Pricing() {

  const [activeFilter, setActiveFilter] =
    useState("Web Development");

  const [expandedCard, setExpandedCard] =
    useState(null);

  const [currency, setCurrency] =
    useState("USD");

  const filters = [
    "Web Development",
    "Mobile Apps",
    "SaaS Platforms",
    "CCTV Systems",
    "Networking",
    "Access Control",
  ];

  /* =========================
     STANDARD PRICING SERVICES
  ========================== */

  const pricingData = {

    "Web Development": [
      {
        title: "Essential",
        subtitle:
          "Perfect for startups & growing brands",

        price: "$272.25",

        popular: false,

        features: [
          "Modern responsive website",
          "Premium UI/UX design",
          "Mobile optimization",
          "SEO-ready structure",
          "Fast deployment",
          "Contact forms",
          "Analytics integration",
        ],
      },

      {
        title: "Business Elite",

        subtitle:
          "Built for serious businesses ready to scale",

        price: "$680.63",

        popular: true,

        features: [
          "Advanced business platform",
          "Admin dashboard",
          "Backend integration",
          "Premium animations",
          "API systems",
          "SEO optimization",
          "Conversion-focused architecture",
          "Priority support",
        ],
      },

      {
        title: "Enterprise",

        subtitle:
          "Complete digital infrastructure",

        price: "Custom",

        popular: false,

        features: [
          "Enterprise-grade architecture",
          "Custom SaaS systems",
          "Dedicated consultation",
          "Scalable infrastructure",
          "Advanced integrations",
          "Long-term partnership",
        ],
      },
    ],

    "Mobile Apps": [
      {
        title: "Starter App",

        subtitle:
          "Launch your mobile presence",

        price: "$217.80",

        popular: false,

        features: [
          "Android/iOS app",
          "Modern UI",
          "Push notifications",
          "Basic backend",
          "App publishing support",
        ],
      },

      {
        title: "Business App",

        subtitle:
          "Powerful scalable mobile apps",

        price: "$888.99",

        popular: true,

        features: [
          "Custom backend",
          "Authentication",
          "Admin dashboard",
          "Realtime features",
          "Cloud sync",
          "Analytics",
          "Priority support",
        ],
      },
    ],

    "CCTV Systems": [
      {
        title: "Office Security",

        subtitle:
          "Reliable monitoring solutions",

        price: "$277.80",

        popular: false,

        features: [
          "4 HD CCTV cameras",
          "Remote monitoring",
          "Installation included",
          "Mobile viewing",
          "Storage setup",
        ],
      },

      {
        title: "Enterprise Security",

        subtitle:
          "Advanced surveillance infrastructure",

        price: "Custom",

        popular: true,

        features: [
          "AI monitoring",
          "24/7 surveillance",
          "Access integration",
          "Multi-site support",
          "Network setup",
          "Maintenance",
        ],
      },
    ],
  };

  /* =========================
     ENTERPRISE CONSULTATIONS
  ========================== */

  const consultationData = {

    "SaaS Platforms": {
      icon: <ServerCog size={26} />,

      title:
        "Custom SaaS Platforms",

      description:
        "Enterprise-grade SaaS systems engineered for automation, scalability and operational efficiency.",

      features: [
        "ERP Systems",
        "CRM Platforms",
        "Inventory Systems",
        "Booking Platforms",
        "HR Management Systems",
        "Client Portals",
        "Cloud Infrastructure",
        "Advanced API Integrations",
      ],
    },

    "Networking": {
      icon: <Network size={26} />,

      title:
        "Professional Networking Solutions",

      description:
        "Reliable and scalable networking infrastructure for offices, apartments, schools and enterprise facilities.",

      features: [
        "Structured Cabling",
        "WiFi Deployment",
        "Router Configuration",
        "Switch Management",
        "Rack Installation",
        "Network Security",
        "Multi-floor Coverage",
        "Enterprise Maintenance",
      ],
    },

    "Access Control": {
      icon: <LockKeyhole size={26} />,

      title:
        "Smart Access Control Systems",

      description:
        "Modern security systems designed to control access, attendance and facility protection.",

      features: [
        "Biometric Systems",
        "RFID Access",
        "Attendance Systems",
        "Smart Locks",
        "Gate Automation",
        "Multi-door Management",
        "Remote Access Control",
        "Security Integration",
      ],
    },
  };

  /* =========================
     PRICE FORMATTER
  ========================== */

  const USD_TO_UGX = 3800;

  const formatPrice = (price) => {

    if (
      !price ||
      price.toLowerCase() === "custom"
    ) {
      return "Custom";
    }

    const numeric = parseFloat(
      price
        .replace("$", "")
        .replace(",", "")
    );

    if (isNaN(numeric)) {
      return price;
    }

    if (currency === "USD") {
      return `$${numeric.toFixed(2)}`;
    }

    const ugx = numeric * USD_TO_UGX;

    return `UGX ${ugx.toLocaleString()}`;
  };

  /* =========================
     HELPERS
  ========================== */

  const isConsultation =
    [
      "SaaS Platforms",
      "Networking",
      "Access Control",
    ].includes(activeFilter);

  const plans =
    pricingData[activeFilter] || [];

  return (
    <>
      <Navbar />

      <section
        className="
          min-h-screen
          bg-[#050816]
          text-white
          overflow-hidden
          pt-32
          pb-24
          px-5 md:px-8
        "
      >

        <div className="max-w-7xl mx-auto">

          {/* HERO */}

          <div
            className="
              text-center
              max-w-3xl
              mx-auto
              mb-12
            "
          >

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4 py-2
                rounded-full
                border border-blue-500/20
                bg-blue-500/10
                text-blue-400
                text-sm
                mb-5
              "
            >
              <Sparkles size={15} />
              Premium Solutions
            </div>

            <h1
              className="
                text-4xl md:text-5xl
                font-bold
                leading-tight
              "
            >
              Transparent Pricing.
              <br />

              <span className="text-blue-500">
                Premium Execution.
              </span>
            </h1>

            <p
              className="
                mt-5
                text-gray-400
                text-sm md:text-base
                leading-relaxed
              "
            >
              Premium digital systems built
              for ambitious businesses.
            </p>
          </div>

          {/* FILTERS */}

          <div
            className="
              flex flex-wrap
              justify-center
              gap-3
              mb-10
            "
          >
            {filters.map((item, index) => (

              <button
                key={index}

                onClick={() =>
                  setActiveFilter(item)
                }

                className={`
                  px-5 py-2.5
                  rounded-full
                  text-sm
                  transition-all duration-300
                  border

                  ${
                    activeFilter === item
                      ? `
                        border-blue-500/40
                        bg-blue-500/15
                        text-white
                      `
                      : `
                        border-white/10
                        bg-white/[0.03]
                        text-gray-300
                        hover:border-blue-500/30
                      `
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>

          {/* CURRENCY TOGGLE */}

          {!isConsultation && (

            <div className="flex justify-center mb-8">

              <div
                className="
                  flex items-center
                  gap-2
                  p-1
                  bg-white/5
                  border border-white/10
                  rounded-xl
                "
              >

                <button
                  onClick={() =>
                    setCurrency("USD")
                  }

                  className={`
                    px-4 py-2
                    text-sm
                    rounded-lg
                    transition

                    ${
                      currency === "USD"
                        ? "bg-blue-600 text-white"
                        : "text-gray-400 hover:text-white"
                    }
                  `}
                >
                  USD
                </button>

                <button
                  onClick={() =>
                    setCurrency("UGX")
                  }

                  className={`
                    px-4 py-2
                    text-sm
                    rounded-lg
                    transition

                    ${
                      currency === "UGX"
                        ? "bg-blue-600 text-white"
                        : "text-gray-400 hover:text-white"
                    }
                  `}
                >
                  UGX
                </button>

              </div>

            </div>
          )}

          {/* =========================
              CONSULTATION SERVICES
          ========================== */}

          {isConsultation && (

            <div
              className="
                max-w-5xl
                mx-auto
                rounded-[32px]
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-2xl
                overflow-hidden
                mb-20
              "
            >

              <div className="p-8 md:p-12">

                <div
                  className="
                    w-14 h-14
                    rounded-2xl
                    bg-blue-500/10
                    border border-blue-500/20
                    text-blue-400
                    flex items-center
                    justify-center
                    mb-6
                  "
                >
                  {
                    consultationData[
                      activeFilter
                    ].icon
                  }
                </div>

                <h2
                  className="
                    text-3xl
                    md:text-4xl
                    font-bold
                    mb-5
                  "
                >
                  {
                    consultationData[
                      activeFilter
                    ].title
                  }
                </h2>

                <p
                  className="
                    text-gray-400
                    leading-relaxed
                    max-w-3xl
                    mb-10
                  "
                >
                  {
                    consultationData[
                      activeFilter
                    ].description
                  }
                </p>

                <div
                  className="
                    grid
                    md:grid-cols-2
                    gap-4
                    mb-10
                  "
                >

                  {
                    consultationData[
                      activeFilter
                    ].features.map(
                      (feature, index) => (

                        <div
                          key={index}

                          className="
                            flex items-center
                            gap-3
                            p-4
                            rounded-2xl
                            border border-white/10
                            bg-white/[0.02]
                          "
                        >

                          <div
                            className="
                              w-5 h-5
                              rounded-full
                              bg-blue-500/15
                              flex items-center
                              justify-center
                              shrink-0
                            "
                          >
                            <Check
                              size={12}
                              className="text-blue-400"
                            />
                          </div>

                          <span className="text-sm text-gray-300">
                            {feature}
                          </span>

                        </div>
                      )
                    )
                  }

                </div>

                <div className="flex flex-wrap gap-4">

                  <Link
                    to="/contact"

                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-6 py-3
                      rounded-xl
                      bg-blue-600
                      hover:bg-blue-500
                      transition
                      text-sm
                      font-medium
                    "
                  >
                    Request Consultation
                    <ArrowRight size={16} />
                  </Link>

                  <Link
                    to="/pricing"

                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-6 py-3
                      rounded-xl
                      border border-white/10
                      hover:border-blue-500/30
                      hover:bg-white/[0.03]
                      transition
                      text-sm
                    "
                  >
                    Discuss Requirements
                  </Link>

                </div>

              </div>

            </div>
          )}

          {/* =========================
              STANDARD PRICING CARDS
          ========================== */}

          {!isConsultation && (

            <div
              className="
                grid lg:grid-cols-3
                gap-6
                items-start
                mb-16
              "
            >

              {plans.map((plan, index) => {

                const expanded =
                  expandedCard === index;

                const visibleFeatures =
                  expanded
                    ? plan.features
                    : plan.features.slice(0, 4);

                return (

                  <div
                    key={index}

                    className={`
                      relative
                      rounded-[28px]
                      border
                      overflow-hidden
                      backdrop-blur-2xl
                      transition-all duration-500

                      ${
                        plan.popular
                          ? `
                            border-blue-500/40
                            bg-blue-500/[0.08]
                            shadow-[0_0_50px_rgba(59,130,246,0.16)]
                          `
                          : `
                            border-white/10
                            bg-white/[0.03]
                          `
                      }
                    `}
                  >

                    {plan.popular && (

                      <div
                        className="
                          absolute
                          top-4 right-4
                          px-3 py-1
                          rounded-full
                          bg-blue-600
                          text-[10px]
                          font-semibold
                        "
                      >
                        POPULAR
                      </div>
                    )}

                    <div className="p-6">

                      <div className="mb-6">

                        <h3
                          className="
                            text-xl
                            font-bold
                            mb-2
                          "
                        >
                          {plan.title}
                        </h3>

                        <p
                          className="
                            text-gray-400
                            text-sm
                          "
                        >
                          {plan.subtitle}
                        </p>

                      </div>

                      <div className="mb-6">

                        <h2
                          className="
                            text-3xl
                            font-bold
                          "
                        >
                          {formatPrice(plan.price)}
                        </h2>

                      </div>

                      <div className="space-y-3 mb-5">

                        {visibleFeatures.map(
                          (feature, idx) => (

                            <div
                              key={idx}

                              className="
                                flex items-start
                                gap-3
                              "
                            >

                              <div
                                className="
                                  w-5 h-5
                                  rounded-full
                                  bg-blue-500/15
                                  flex items-center
                                  justify-center
                                  shrink-0 mt-0.5
                                "
                              >
                                <Check
                                  size={12}
                                  className="text-blue-400"
                                />
                              </div>

                              <span
                                className="
                                  text-gray-300
                                  text-sm
                                "
                              >
                                {feature}
                              </span>

                            </div>
                          )
                        )}

                      </div>

                      {plan.features.length > 4 && (

                        <button
                          onClick={() =>
                            setExpandedCard(
                              expanded
                                ? null
                                : index
                            )
                          }

                          className="
                            flex items-center
                            gap-2
                            text-blue-400
                            text-sm
                            mb-6
                          "
                        >

                          {
                            expanded
                              ? "Show Less"
                              : "Show More"
                          }

                          {
                            expanded
                              ? <ChevronUp size={15} />
                              : <ChevronDown size={15} />
                          }

                        </button>
                      )}

<Link
  to="/start-project"
  state={{
    service: activeFilter,
    packageData: plan,
  }}
  className={`
    w-full
    py-3
    rounded-2xl
    text-sm
    font-medium
    transition-all duration-300
    flex items-center
    justify-center
    gap-2

    ${
      plan.popular
        ? `
          bg-blue-600
          hover:bg-blue-500
        `
        : `
          bg-white/[0.05]
          border border-white/10
          hover:border-blue-500/40
        `
    }
  `}
>
  Get Started
  <ArrowRight size={15} />
</Link>

                    </div>

                  </div>
                );
              })}

            </div>
          )}

          <FAQ />
          <Footer />

        </div>

      </section>
    </>
  );
}