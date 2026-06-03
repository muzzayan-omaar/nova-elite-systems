import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
} from "lucide-react";

/* =========================
   SERVICE KNOWLEDGE BASE
========================= */

const serviceData = {
  "Web Development": {
    intro:
      "We build premium, high-performance websites with modern UI/UX, SEO optimization, and scalable backend systems designed for serious businesses.",
    packages: [
      {
        name: "Essential",
        price: "AED 2,500",
        benefits: ["Responsive modern website", "SEO-ready structure", "Mobile optimization"],
      },
      {
        name: "Business Elite",
        price: "AED 6,500",
        benefits: ["Admin dashboard", "Backend integration", "Advanced animations", "API systems"],
      },
    ],
  },

  "CCTV Systems": {
    intro:
      "We design advanced CCTV systems with remote monitoring and smart security infrastructure.",
    packages: [
      {
        name: "Office Security",
        price: "AED 3,500",
        benefits: ["HD cameras", "Remote monitoring", "Mobile access"],
      },
    ],
  },
};

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState("home");
  const [activeService, setActiveService] = useState(null);

  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi, I’m NOVA. Select a service to explore." },
  ]);

  const mainServices = Object.keys(serviceData);

  const resetToHome = () => {
    setStage("home");
    setActiveService(null);
    setMessages([{ type: "bot", text: "Choose a service to begin 👇" }]);
  };

  const handleServiceClick = (service) => {
    const data = serviceData[service];

    setActiveService(service);
    setStage("service");

    setMessages((prev) => [
      ...prev,
      { type: "user", text: service },
      { type: "bot", text: data.intro },
    ]);
  };

  const showPackages = () => {
    const data = serviceData[activeService];

    setStage("packages");

    setMessages((prev) => [
      ...prev,
      { type: "bot", text: `${activeService} Packages:` },
      ...data.packages.map((p) => ({
        type: "bot",
        text: `• ${p.name} - ${p.price}\n${p.benefits.join(", ")}`,
      })),
    ]);
  };

  const renderButtons = () => {
    if (stage === "home") return mainServices;
    if (stage === "service") return ["View Packages", "Back"];
    if (stage === "packages") return ["Back to Services"];
    return [];
  };

  const handleButtonClick = (btn) => {
    if (btn === "Back") return resetToHome();
    if (btn === "View Packages") return showPackages();
    if (btn === "Back to Services") return resetToHome();
    handleServiceClick(btn);
  };

  return (
    <>
      {/* FLOAT BUTTON */}
      <div className="fixed left-6 bottom-6 z-[999]">
        <motion.button
          onClick={() => setOpen((p) => !p)}
          className="
            relative w-14 h-14
            rounded-2xl
            bg-black/40 backdrop-blur-xl
            border border-blue-500/20
            shadow-[0_0_35px_rgba(59,130,246,0.25)]
            flex items-center justify-center
            overflow-hidden
          "
          whileTap={{ scale: 0.92 }}
        >
          {/* glow pulse */}
          <span className="absolute inset-0 rounded-2xl bg-blue-500/10 animate-ping" />

          {/* ICON MORPH */}
          <AnimatePresence mode="wait" initial={false}>
            {!open ? (
              <motion.img
                key="bot"
                src="https://res.cloudinary.com/diszilwhc/image/upload/v1778360837/20260510_010555_jissyl.png"
                className="w-10 h-10 object-contain"
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: 20 }}
                transition={{ duration: 0.2 }}
              />
            ) : (
              <motion.div
                key="close"
                initial={{ opacity: 0, scale: 0.4, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.4, rotate: 90 }}
                transition={{ duration: 0.2 }}
                className="text-white"
              >
                <X size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* CHAT PANEL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed left-6 bottom-28 z-[999] w-[360px]"
          >
            <div className="
              rounded-2xl
              bg-[#0B1424]/80
              backdrop-blur-2xl
              border border-white/10
              shadow-[0_30px_80px_rgba(0,0,0,0.5)]
              p-4
              text-white
            ">

              {/* MESSAGES */}
              <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`
                      text-sm leading-relaxed px-3 py-2 rounded-xl
                      ${m.type === "user"
                        ? "ml-auto bg-blue-500/20 text-blue-200 w-fit"
                        : "bg-white/5 text-gray-300 w-fit"
                      }
                    `}
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
                      rounded-xl
                      bg-white/5
                      border border-white/10
                      hover:bg-blue-500/20
                      hover:border-blue-400/30
                      transition
                    "
                  >
                    {btn}
                  </button>
                ))}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}