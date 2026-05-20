import { useEffect, useState } from "react";
import {
  X,
  ArrowRight,
  Phone,
  Briefcase,
  Globe,
} from "lucide-react";

/* =========================
   SERVICE KNOWLEDGE BASE
   (FROM YOUR PRICING.JSX)
========================= */

const serviceData = {
  "Web Development": {
    intro:
      "We build premium, high-performance websites with modern UI/UX, SEO optimization, and scalable backend systems designed for serious businesses.",
    packages: [
      {
        name: "Essential",
        price: "AED 2,500",
        benefits: [
          "Responsive modern website",
          "SEO-ready structure",
          "Mobile optimization",
        ],
      },
      {
        name: "Business Elite",
        price: "AED 6,500",
        benefits: [
          "Admin dashboard",
          "Backend integration",
          "Advanced animations",
          "API systems",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom",
        benefits: [
          "Full SaaS architecture",
          "Scalable infrastructure",
          "Dedicated consultation",
        ],
      },
    ],
  },

  "CCTV Systems": {
    intro:
      "We design and install advanced CCTV surveillance systems with remote monitoring, AI detection, and full security infrastructure for homes and businesses.",
    packages: [
      {
        name: "Office Security",
        price: "AED 3,500",
        benefits: [
          "HD cameras",
          "Remote monitoring",
          "Mobile access",
        ],
      },
      {
        name: "Enterprise Security",
        price: "Custom",
        benefits: [
          "AI monitoring",
          "24/7 surveillance",
          "Multi-site support",
        ],
      },
    ],
  },

  "Mobile Apps": {
    intro:
      "We develop scalable mobile applications for Android & iOS with authentication, dashboards, cloud sync, and modern UI systems.",
    packages: [
      {
        name: "Starter App",
        price: "AED 5,000",
        benefits: ["Basic app", "Push notifications", "UI design"],
      },
      {
        name: "Business App",
        price: "AED 12,000",
        benefits: [
          "Backend system",
          "Auth system",
          "Admin dashboard",
        ],
      },
    ],
  },

  "Networking": {
    intro:
      "We provide enterprise networking solutions including structured cabling, secure systems, and infrastructure design for companies.",
    packages: [
      {
        name: "Basic Setup",
        price: "AED 2,000+",
        benefits: ["LAN setup", "WiFi configuration"],
      },
      {
        name: "Enterprise Network",
        price: "Custom",
        benefits: [
          "Full infrastructure",
          "Secure routing",
          "Scalable systems",
        ],
      },
    ],
  },
};

/* =========================
   AI ASSISTANT
========================= */

export default function AIAssistant() {
  const [open, setOpen] = useState(false);

  const [stage, setStage] = useState("home");
  const [activeService, setActiveService] = useState(null);

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi, I’m NOVA. Select a service to explore.",
    },
  ]);

  /* =========================
     MAIN SERVICE BUTTONS
  ========================= */

  const mainServices = Object.keys(serviceData);

  const resetToHome = () => {
    setStage("home");
    setActiveService(null);
    setMessages([
      {
        type: "bot",
        text: "Choose a service to begin 👇",
      },
    ]);
  };

  /* =========================
     HANDLE SERVICE CLICK
  ========================= */

  const handleServiceClick = (service) => {
    const data = serviceData[service];

    setActiveService(service);
    setStage("service");

    setMessages((prev) => [
      ...prev,
      { type: "user", text: service },
      {
        type: "bot",
        text: data.intro,
      },
    ]);
  };

  /* =========================
     HANDLE PACKAGE VIEW
  ========================= */

  const showPackages = () => {
    const data = serviceData[activeService];

    setStage("packages");

    setMessages((prev) => [
      ...prev,
      {
        type: "bot",
        text: `${activeService} Packages:`,
      },
      ...data.packages.map((p) => ({
        type: "bot",
        text: `• ${p.name} - ${p.price}\n${p.benefits.join(", ")}`,
      })),
    ]);
  };

  /* =========================
     RENDER QUICK BUTTONS
  ========================= */

  const renderButtons = () => {
    if (stage === "home") {
      return mainServices;
    }

    if (stage === "service") {
      return ["View Packages", "Back"];
    }

    if (stage === "packages") {
      return ["Back to Services"];
    }

    return [];
  };

  const handleButtonClick = (btn) => {
    if (btn === "Back") return resetToHome();

    if (btn === "View Packages") return showPackages();

    if (btn === "Back to Services") return resetToHome();

    handleServiceClick(btn);
  };

  /* =========================
     UI
  ========================= */

  return (
    <>
      {/* FLOAT BUTTON */}
      <div className="fixed left-6 bottom-6 z-[999]">
        <button
          onClick={() => setOpen(!open)}
          className="
            w-14 h-14
            rounded-2xl
            bg-[#081120]
            border border-blue-500/20
            shadow-[0_0_35px_rgba(59,130,246,0.25)]
            flex items-center justify-center
          "
        >
          {open ? (
            <X className="text-white" />
          ) : (
            <span className="text-blue-400 font-bold">AI</span>
          )}
        </button>
      </div>

      {/* CHAT PANEL */}
      {open && (
        <div className="fixed left-6 bottom-28 z-[999] w-[340px]">
          <div className="rounded-2xl bg-[#081120] border border-white/10 p-4 text-white">

            {/* MESSAGES */}
            <div className="space-y-3 max-h-[300px] overflow-y-auto">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`text-sm ${
                    m.type === "user"
                      ? "text-right text-blue-400"
                      : "text-gray-300"
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              {renderButtons().map((btn, i) => (
                <button
                  key={i}
                  onClick={() => handleButtonClick(btn)}
                  className="
                    text-xs
                    px-3 py-2
                    rounded-lg
                    bg-white/5
                    hover:bg-blue-500/20
                    border border-white/10
                  "
                >
                  {btn}
                </button>
              ))}
            </div>

            {/* CONTACT CTA */}
            <button className="mt-4 w-full bg-blue-600 hover:bg-blue-500 py-2 rounded-xl text-sm flex items-center justify-center gap-2">
              <Phone size={14} />
              Contact Us
            </button>
          </div>
        </div>
      )}
    </>
  );
}