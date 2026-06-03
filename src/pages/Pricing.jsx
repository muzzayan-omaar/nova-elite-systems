import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

import {
  Check,
  Code2,
  Smartphone,
  Award,
  CreditCard,
  Clock,
  LayoutDashboard,
  Server,
  Zap,
  Globe,
  Database,
  Cpu,
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

  const getFeatureIcon = (feature) => {
  const f = feature.toLowerCase();

  if (f.includes("seo") || f.includes("website") || f.includes("ui"))
    return <Globe size={14} />;

  if (f.includes("backend") || f.includes("api"))
    return <Server size={14} />;

  if (f.includes("mobile") || f.includes("android") || f.includes("ios"))
    return <Smartphone size={14} />;

  if (f.includes("dashboard") || f.includes("admin"))
    return <LayoutDashboard size={14} />;

  if (f.includes("security") || f.includes("auth"))
    return <Shield size={14} />;

  if (f.includes("database") || f.includes("cloud"))
    return <Database size={14} />;

  if (f.includes("performance") || f.includes("fast"))
    return <Zap size={14} />;

  return <Check size={14} />;
};

const getOriginalPrice = (price) => {
  if (!price || price === "Custom") return null;

  const numeric = parseFloat(price.replace("$", ""));
  return numeric * 1.35; // market baseline
};

const getSavings = (price) => {
  const original = getOriginalPrice(price);
  if (!original) return null;

  const current = parseFloat(price.replace("$", ""));
  return original - current;
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


    // Add this with your other helper functions
  const getComparisonData = () => {
    if (activeFilter === "Web Development") {
      return [
        { feature: "Responsive Website", essential: true, elite: true, enterprise: true },
        { feature: "Admin Dashboard", essential: false, elite: true, enterprise: true },
        { feature: "Backend Integration", essential: false, elite: true, enterprise: true },
        { feature: "API Systems", essential: false, elite: true, enterprise: true },
        { feature: "Priority Support", essential: false, elite: true, enterprise: true },
        { feature: "Custom Scalability", essential: false, elite: false, enterprise: true },
      ];
    }
    if (activeFilter === "Mobile Apps") {
      return [
        { feature: "Push Notifications", essential: true, elite: true, enterprise: true },
        { feature: "Realtime Features", essential: false, elite: true, enterprise: true },
        { feature: "Admin Dashboard", essential: false, elite: true, enterprise: true },
        { feature: "Cloud Sync", essential: false, elite: true, enterprise: true },
      ];
    }
    if (activeFilter === "CCTV Systems") {
      return [
        { feature: "HD Cameras", essential: true, elite: true, enterprise: true },
        { feature: "Remote Monitoring", essential: true, elite: true, enterprise: true },
        { feature: "AI Detection", essential: false, elite: true, enterprise: true },
        { feature: "Multi-Site Support", essential: false, elite: false, enterprise: true },
      ];
    }
    return [];
  };

  const comparisonData = getComparisonData();

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
    relative group overflow-hidden
    border backdrop-blur-xl
    transition-all duration-300

    hover:-translate-y-1 hover:scale-[1.01]

    ${
      plan.popular
        ? "bg-gradient-to-b from-blue-500/[0.10] to-white/[0.02] border-blue-500/40 shadow-[0_0_60px_rgba(59,130,246,0.18)]"
        : "bg-white/[0.02] border-white/10"
    }
  `}
>
  {/* 🔥 RIBBON (Popular) */}
  {plan.popular && (
    <div className="absolute top-5 right-[-40px] rotate-45 bg-blue-600 text-white text-[10px] px-12 py-1 font-semibold tracking-wide shadow-lg">
      MOST POPULAR
    </div>
  )}

  {/* subtle animated glow */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-500/10 to-transparent" />

  <div className="p-6 relative z-10 flex flex-col h-full">

    {/* HEADER */}
    <div className="mb-5">
      <h3 className="text-lg font-semibold text-white">
        {plan.title}
      </h3>

      <p className="text-xs text-gray-400 mt-1">
        {plan.subtitle}
      </p>
    </div>

    {/* PRICE BLOCK (with strike + savings logic) */}
    <div className="mb-6">
      <div className="flex items-end gap-3">

        {/* main price */}
     <div className="text-3xl font-bold text-white">
      {formatPrice(plan.price)}
    </div>

    {getOriginalPrice(plan.price) && (
      <div className="text-sm text-gray-500 line-through">
        ${getOriginalPrice(plan.price).toFixed(0)}
      </div>
    )}

        {plan.price !== "Custom" && (
  <div className="mb-5 inline-flex items-center gap-2 px-3 py-1 rounded-md border border-green-500/30 bg-green-500/10 text-green-400 text-[11px]">
    
    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />

    Save ${Math.round(getSavings(plan.price))}

  </div>
)}
      </div>


    </div>

    <div className="space-y-3 mb-6">
  {visibleFeatures.map((feature, idx) => (
    <div key={idx} className="flex items-start gap-3">

      <div className="mt-0.5 w-6 h-6 rounded-md bg-blue-500/10 flex items-center justify-center text-blue-400">
        {getFeatureIcon(feature)}
      </div>

      <span className="text-sm text-gray-300 leading-snug">
        {feature}
      </span>

    </div>
  ))}
</div>

    {/* EXPAND */}
    {plan.features.length > 4 && (
      <button
        onClick={() =>
          setExpandedCard(expanded ? null : index)
        }
        className="text-xs text-blue-400 mb-6 hover:text-blue-300 transition"
      >
        {expanded ? "Collapse details" : "Expand capabilities"}
      </button>
    )}

    {/* CTA */}
    <div className="mt-auto">
      <Link
        to="/start-project"
        state={{
          service: activeFilter,
          packageData: plan,
        }}
        className={`
          relative overflow-hidden
          flex items-center justify-center gap-2
          w-full h-[46px]
          text-sm font-medium
          transition-all duration-300

          ${
            plan.popular
              ? "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_35px_rgba(59,130,246,0.25)]"
              : "bg-white/[0.03] border border-white/10 text-white hover:border-blue-500/30"
          }
        `}
      >
        <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />

        <span className="relative flex items-center gap-2">
          Deploy System <ArrowRight size={14} />
        </span>
      </Link>
    </div>

  </div>
</div>
                );
              })}

            </div>
          )}

                    {/* PACKAGE COMPARISON TABLE */}
          {!isConsultation && comparisonData.length > 0 && (
            <div className="mb-20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3">Package Comparison</h2>
                <p className="text-gray-400">Clear breakdown of what each plan includes</p>
              </div>

              <div className="bg-white/[0.025] border border-white/10 rounded-3xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-6 px-8 font-medium text-gray-400">Feature</th>
                      <th className="text-center py-6 px-6">Essential</th>
                      <th className="text-center py-6 px-6 text-blue-400 font-semibold">Business Elite</th>
                      <th className="text-center py-6 px-6">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {comparisonData.map((row, i) => (
                      <tr key={i} className="hover:bg-white/[0.02]">
                        <td className="py-5 px-8 text-sm">{row.feature}</td>
                        <td className="text-center">{row.essential ? <Check className="text-emerald-400 mx-auto" size={24} /> : "—"}</td>
                        <td className="text-center">{row.elite ? <Check className="text-emerald-400 mx-auto" size={24} /> : "—"}</td>
                        <td className="text-center">{row.enterprise ? <Check className="text-emerald-400 mx-auto" size={24} /> : "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

                    {/* ASSURANCE & TRUST SECTION */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Your Peace of Mind Guaranteed</h2>
              <p className="text-gray-400">We stand behind our work with full transparency and security.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Money Back */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 hover:border-emerald-500/30 transition">
                <Shield size={32} className="text-emerald-400 mb-6" />
                <h3 className="text-xl font-semibold mb-3">30-Day Money Back Guarantee</h3>
                <p className="text-gray-400 text-sm">Not satisfied during the planning and initial phase? Get a full refund. No hassle.</p>
                <div className="flex items-center gap-2 text-xs text-emerald-400 mt-6">
                  <Clock size={16} /> Valid for 30 days
                </div>
              </div>

              {/* Secure Payments */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 hover:border-blue-500/30 transition">
                <CreditCard size={32} className="text-blue-400 mb-6" />
                <h3 className="text-xl font-semibold mb-3">Secure & Trusted Payments</h3>
                <p className="text-gray-400 text-sm">All payments are processed securely through Stripe — the global standard in payment protection.</p>
                <div className="mt-6 text-xs bg-white/5 px-4 py-2 rounded-2xl inline-flex items-center gap-2">
                  <span>🔒</span> PCI DSS Compliant • SSL Encrypted
                </div>
              </div>

              {/* Certified Safety */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 hover:border-violet-500/30 transition">
                <Award size={32} className="text-violet-400 mb-6" />
                <h3 className="text-xl font-semibold mb-3">Certified & Insured</h3>
                <p className="text-gray-400 text-sm">Our processes follow international standards. Your data and project are fully protected.</p>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link 
                to="/start-project" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl text-sm font-medium transition"
              >
                Start Your Project with Confidence <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <FAQ />
          <Footer />

        </div>

      </section>
    </>
  );
}