import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Check,
  Sparkles,
  Shield,
  Globe,
  Smartphone,
  Camera,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function Pricing() {
  const [activeFilter, setActiveFilter] =
    useState("Web Development");

  const [expandedCard, setExpandedCard] =
    useState(null);

  const filters = [
    "Web Development",
    "Mobile Apps",
    "SaaS Platforms",
    "CCTV Systems",
    "Networking",
    "Access Control",
  ];

  const pricingData = {
    "Web Development": [
      {
        title: "Essential",
        subtitle:
          "Perfect for startups & growing brands",
        price: "AED 2,500",
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
        price: "AED 6,500",
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
        subtitle: "Launch your mobile presence",
        price: "AED 5,000",
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
        subtitle: "Powerful scalable mobile apps",
        price: "AED 12,000",
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
        price: "AED 3,500",
        popular: false,
        features: [
          "HD CCTV cameras",
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

  const plans =
    pricingData[activeFilter] ||
    pricingData["Web Development"];

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
              Premium digital systems built for
              ambitious businesses.
            </p>
          </div>

          {/* FILTERS */}
          <div
            className="
              flex flex-wrap
              justify-center
              gap-3
              mb-14
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

          {/* CARDS */}
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
                        {plan.price}
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
                        {expanded
                          ? "Show Less"
                          : "Show More"}

                        {expanded ? (
                          <ChevronUp size={15} />
                        ) : (
                          <ChevronDown size={15} />
                        )}
                      </button>
                    )}

                    <button
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
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* VISUAL */}
          <div
            className="
              relative
              rounded-[32px]
              overflow-hidden
              border border-white/10
              bg-[#091120]
              mb-20
            "
          >

            <div
              className="
                absolute inset-0
                bg-gradient-to-r
                from-[#050816]/95
                via-[#050816]/70
                to-transparent
                z-10
              "
            />

            <img
              src="https://res.cloudinary.com/diszilwhc/image/upload/v1777984942/globe1_g9sjcl.jpg"
              alt="NOVA"
              className="
                w-full
                h-[300px]
                object-cover
                scale-110
              "
            />

            <div
              className="
                absolute inset-0
                z-20
                flex items-center
                px-8 md:px-14
              "
            >
              <div className="max-w-xl">

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-4 py-2
                    rounded-full
                    bg-blue-500/10
                    border border-blue-500/20
                    text-blue-400
                    text-sm
                    mb-5
                  "
                >
                  <Shield size={15} />
                  Trusted Technology Partner
                </div>

                <h2
                  className="
                    text-3xl md:text-4xl
                    font-bold
                    leading-tight
                    mb-5
                  "
                >
                  Technology That Makes
                  <span className="text-blue-500">
                    {" "}
                    Businesses Stand Out.
                  </span>
                </h2>

                <p
                  className="
                    text-gray-300
                    text-sm md:text-base
                    leading-relaxed
                  "
                >
                  We create modern premium systems
                  engineered to increase trust,
                  growth and business credibility.
                </p>
              </div>
            </div>
          </div>

{/* PROJECT SHOWCASE */}
<section className="relative mt-24">

  <div
    className="
      relative
      overflow-hidden
      rounded-[34px]
      border border-white/10
      bg-[#09101d]
      min-h-[520px]
      flex items-center
    "
  >

    {/* STACKED WEBSITES */}
    <div
      className="
        absolute
        right-[-80px]
        top-1/2
        -translate-y-1/2
        w-[75%]
        h-full
        pointer-events-none
      "
    >

      {/* IMAGE 1 */}
      <img
        src="https://res.cloudinary.com/diszilwhc/image/upload/v1778424694/web1_iq30vk.jpg"
        alt=""
        className="
          absolute
          top-[60px]
          right-[220px]
          w-[420px]
          rounded-[24px]
          border border-white/10
          shadow-[0_25px_80px_rgba(0,0,0,0.45)]
          rotate-[-10deg]
          hover:rotate-[-6deg]
          transition-all duration-500
        "
      />

      {/* IMAGE 2 */}
      <img
        src="https://res.cloudinary.com/diszilwhc/image/upload/v1778424694/web2_by84l5.jpg"
        alt=""
        className="
          absolute
          top-[140px]
          right-[60px]
          w-[460px]
          rounded-[24px]
          border border-white/10
          shadow-[0_25px_80px_rgba(0,0,0,0.5)]
          rotate-[8deg]
          z-10
          hover:rotate-[4deg]
          transition-all duration-500
        "
      />

      {/* IMAGE 3 */}
      <img
        src="https://res.cloudinary.com/diszilwhc/image/upload/v1778424694/web3_qljmjj.jpg"
        alt=""
        className="
          absolute
          bottom-[40px]
          right-[260px]
          w-[390px]
          rounded-[24px]
          border border-white/10
          shadow-[0_25px_80px_rgba(0,0,0,0.45)]
          rotate-[12deg]
          hover:rotate-[6deg]
          transition-all duration-500
        "
      />
    </div>

    {/* LEFT OVERLAY */}
    <div
      className="
        absolute
        inset-0
        bg-gradient-to-r
        from-[#08101c]
        via-[#08101cf2]
        via-[#08101cd8]
        to-transparent
        z-10
      "
    />

    {/* CONTENT */}
    <div
      className="
        relative
        z-20
        max-w-xl
        px-8
        md:px-16
        py-16
      "
    >

      <p
        className="
          text-blue-400
          uppercase
          tracking-[0.28em]
          text-xs
          font-semibold
          mb-5
        "
      >
        REAL CLIENT WORK
      </p>

      <h2
        className="
          text-4xl
          md:text-5xl
          font-bold
          leading-tight
        "
      >
        Real Projects.
        <br />
        <span className="text-blue-500">
          Yours Is Next.
        </span>
      </h2>

      <p
        className="
          mt-6
          text-gray-400
          leading-relaxed
          text-sm
          md:text-base
          max-w-md
        "
      >
        From premium business websites to scalable
        platforms and enterprise systems — NOVA builds
        digital experiences designed to elevate brands,
        increase trust and drive real business growth.
      </p>

      <div className="flex gap-4 mt-8">

        <button
          className="
            bg-blue-600
            hover:bg-blue-500
            px-6 py-3
            rounded-xl
            text-sm
            font-medium
            transition
            shadow-[0_0_30px_rgba(59,130,246,0.25)]
          "
        >
          Start Your Project
        </button>

        <button
          className="
            border border-white/10
            hover:border-blue-500/30
            hover:bg-white/[0.03]
            px-6 py-3
            rounded-xl
            text-sm
            transition
          "
        >
          View Portfolio
        </button>

      </div>
    </div>
  </div>
</section>

        </div>
      </section>

      <Footer />
    </>
  );
}