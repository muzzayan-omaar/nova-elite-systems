import { useEffect, useState } from "react";
import {
  X,
  ArrowRight,
  Globe,
  Briefcase,
  Phone,
  ChevronRight,
  DollarSign,
} from "lucide-react";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi, I’m NOVA. What are you looking to build?",
    },
  ]);

  const [stage, setStage] = useState("home"); 
  const [selectedService, setSelectedService] = useState(null);

  // =========================
  // SERVICE KNOWLEDGE (from Pricing.jsx)
  // =========================

  const serviceInfo = {
    "Web Development": {
      intro:
        "We build modern, responsive business websites with SEO, dashboards, and conversion-focused design.",
      packages: [
        {
          label: "Essential - AED 2,500",
          desc: "Startup website with modern UI, SEO, and fast deployment.",
        },
        {
          label: "Business Elite - AED 6,500",
          desc: "Advanced platform with backend, admin dashboard & APIs.",
        },
        {
          label: "Enterprise - Custom",
          desc: "Full scalable system with SaaS-level architecture.",
        },
      ],
    },

    "CCTV Systems": {
      intro:
        "We design intelligent surveillance systems with remote monitoring and secure storage.",
      packages: [
        {
          label: "Office Security - AED 3,500",
          desc: "HD cameras, mobile access, installation included.",
        },
        {
          label: "Enterprise Security - Custom",
          desc: "AI monitoring, multi-site support, 24/7 systems.",
        },
      ],
    },

    "Mobile Apps": {
      intro:
        "We build Android & iOS apps with authentication, dashboards, and cloud sync.",
      packages: [
        {
          label: "Starter App - AED 5,000",
          desc: "Basic mobile app with UI and backend setup.",
        },
        {
          label: "Business App - AED 12,000",
          desc: "Advanced app with realtime features and analytics.",
        },
      ],
    },
  };

  // =========================
  // MAIN SERVICE OPTIONS
  // =========================

  const services = [
    "Web Development",
    "Mobile Apps",
    "SaaS Platforms",
    "CCTV Systems",
    "Networking",
    "Access Control",
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setStage("service");

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: service,
      },
      {
        type: "bot",
        text: serviceInfo[service]?.intro || "Let me guide you through this service.",
      },
    ]);
  };

  const handlePackageClick = (pkg) => {
    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: pkg.label,
      },
      {
        type: "bot",
        text: pkg.desc,
      },
    ]);
  };

  // =========================
  // UI
  // =========================

  return (
    <>
      {/* FLOAT BUTTON */}
      <div className="fixed left-6 bottom-6 z-[999]">

        <button
          onClick={() => setOpen(!open)}
          className="
            w-14 h-14 rounded-2xl
            bg-[#081120]
            border border-blue-500/20
            shadow-[0_0_35px_rgba(59,130,246,0.25)]
            flex items-center justify-center
          "
        >
          {open ? <X size={22} /> : "🤖"}
        </button>
      </div>

      {/* CHAT PANEL */}
      <div
        className={`
          fixed left-6 bottom-28 z-[999]
          w-[340px]
          transition-all duration-300
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >

        <div className="rounded-2xl border border-white/10 bg-[#081120]/95 backdrop-blur-2xl overflow-hidden">

          {/* HEADER */}
          <div className="p-4 border-b border-white/10">
            <h3 className="text-white font-semibold">NOVA AI Assistant</h3>
            <p className="text-xs text-gray-400">
              Guided service selection system
            </p>
          </div>

          {/* CHAT */}
          <div className="p-4 space-y-3 max-h-[320px] overflow-y-auto">

            {messages.map((m, i) => (
              <div
                key={i}
                className={`text-sm ${
                  m.type === "user"
                    ? "text-right text-blue-400"
                    : "text-gray-200"
                }`}
              >
                {m.text}
              </div>
            ))}

            {/* HOME STATE */}
            {stage === "home" && (
              <div className="grid grid-cols-2 gap-2 mt-4">

                {services.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => handleServiceClick(s)}
                    className="
                      p-3 rounded-xl
                      bg-white/[0.04]
                      border border-white/10
                      hover:border-blue-500/30
                      text-sm text-white
                    "
                  >
                    {s}
                  </button>
                ))}

              </div>
            )}

            {/* SERVICE STATE */}
            {stage === "service" && selectedService && (
              <div className="mt-4 space-y-2">

                {serviceInfo[selectedService]?.packages.map((pkg, i) => (
                  <button
                    key={i}
                    onClick={() => handlePackageClick(pkg)}
                    className="
                      w-full text-left
                      p-3 rounded-xl
                      bg-white/[0.03]
                      border border-white/10
                      hover:border-blue-500/30
                      text-sm
                    "
                  >
                    <div className="font-medium text-white">
                      {pkg.label}
                    </div>
                    <div className="text-xs text-gray-400">
                      {pkg.desc}
                    </div>
                  </button>
                ))}

              </div>
            )}

          </div>

          {/* FOOTER */}
          <div className="p-3 border-t border-white/10 flex justify-between">

            <button className="text-xs text-gray-400">
              Reset
            </button>

            <button className="flex items-center gap-2 bg-blue-600 px-3 py-2 rounded-lg text-sm">
              <Phone size={14} />
              Contact
            </button>

          </div>

        </div>
      </div>
    </>
  );
}