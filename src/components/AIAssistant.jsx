import { useEffect, useState } from "react";
import {
  X,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi, I’m NOVA. Tell me what you want to build.",
    },
  ]);

  const [context, setContext] = useState({
    service: null,
    step: "home",
  });

  // =========================
  // KNOWLEDGE BASE (from Pricing.jsx)
  // =========================

  const knowledge = {
    web: {
      title: "Web Development",
      intro:
        "We build high-performance business websites, dashboards, and scalable web systems.",
      budgets: [
        {
          range: "AED 2,500",
          desc: "Starter website with modern UI, SEO, mobile optimization.",
        },
        {
          range: "AED 6,500",
          desc: "Advanced system with backend, admin dashboard, APIs.",
        },
        {
          range: "Custom",
          desc: "Enterprise-grade SaaS architecture & scalable platforms.",
        },
      ],
    },

    cctv: {
      title: "CCTV Systems",
      intro:
        "We design smart surveillance systems with remote access and secure monitoring.",
      budgets: [
        {
          range: "AED 3,500",
          desc: "Office security setup with HD cameras & mobile viewing.",
        },
        {
          range: "Enterprise",
          desc: "AI monitoring, multi-site security, 24/7 surveillance.",
        },
      ],
    },

    app: {
      title: "Mobile Apps",
      intro:
        "We build Android & iOS apps with authentication, dashboards, and cloud sync.",
      budgets: [
        {
          range: "AED 5,000",
          desc: "Starter mobile app with UI and basic backend.",
        },
        {
          range: "AED 12,000",
          desc: "Advanced scalable app with realtime features.",
        },
      ],
    },
  };

  // =========================
  // INTENT DETECTION
  // =========================

  const detectIntent = (text) => {
    const t = text.toLowerCase();

    if (t.includes("cctv") || t.includes("camera") || t.includes("security")) return "cctv";
    if (t.includes("website") || t.includes("web") || t.includes("site")) return "web";
    if (t.includes("app") || t.includes("mobile")) return "app";

    return null;
  };

  // =========================
  // MAIN MESSAGE HANDLER
  // =========================

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input;
    setInput("");

    const intent = detectIntent(userText);

    setMessages((prev) => [
      ...prev,
      { type: "user", text: userText },
    ]);

    // CASE 1: NEW SERVICE DETECTED
    if (intent && knowledge[intent]) {
      const service = knowledge[intent];

      setContext({
        service: intent,
        step: "service",
      });

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: `${service.title}: ${service.intro}`,
          },
        ]);
      }, 400);

      return;
    }

    // CASE 2: FOLLOW UP (NO INTENT)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text:
            "I can help you with Web Development, Mobile Apps, SaaS, CCTV and Security systems. What are you interested in?",
        },
      ]);
    }, 400);
  };

  // =========================
  // UI
  // =========================

  const service = context.service ? knowledge[context.service] : null;

  return (
    <>
      {/* FLOAT BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed left-6 bottom-6 z-[999]
          w-14 h-14 rounded-2xl
          bg-[#081120]
          border border-blue-500/20
          flex items-center justify-center
          shadow-[0_0_35px_rgba(59,130,246,0.25)]
        "
      >
        {open ? <X size={22} /> : <Sparkles size={18} />}
      </button>

      {/* CHAT PANEL */}
      <div
        className={`
          fixed left-6 bottom-28 z-[999]
          w-[360px]
          transition-all duration-300
          ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 pointer-events-none"
          }
        `}
      >

        <div className="rounded-2xl bg-[#081120]/95 border border-white/10 backdrop-blur-2xl overflow-hidden">

          {/* HEADER */}
          <div className="p-4 border-b border-white/10">
            <h3 className="text-white font-semibold">
              NOVA AI Assistant
            </h3>
            <p className="text-xs text-gray-400">
              Describe what you want — I’ll guide you
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

            {/* CONTEXTUAL OPTIONS */}
            {service && context.step === "service" && (
              <div className="mt-4 space-y-2">

                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  Recommended Packages
                </p>

                {service.budgets.map((b, i) => (
                  <button
                    key={i}
                    onClick={() =>
                      setMessages((prev) => [
                        ...prev,
                        {
                          type: "bot",
                          text: `${b.range}: ${b.desc}`,
                        },
                      ])
                    }
                    className="
                      w-full text-left
                      p-3 rounded-xl
                      bg-white/[0.03]
                      border border-white/10
                      hover:border-blue-500/30
                      text-sm
                    "
                  >
                    <div className="text-white font-medium">
                      {b.range}
                    </div>
                    <div className="text-xs text-gray-400">
                      {b.desc}
                    </div>
                  </button>
                ))}

              </div>
            )}

          </div>

          {/* INPUT */}
          <div className="p-3 border-t border-white/10 flex gap-2">

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe your project..."
              className="
                flex-1
                px-3 py-2
                rounded-xl
                bg-white/[0.03]
                border border-white/10
                text-white text-sm
                outline-none
              "
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />

            <button
              onClick={handleSend}
              className="
                px-3 py-2
                rounded-xl
                bg-blue-600
                hover:bg-blue-500
                transition
              "
            >
              <Send size={16} />
            </button>

          </div>

          {/* FOOTER */}
          <div className="p-3 flex justify-between border-t border-white/10">

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