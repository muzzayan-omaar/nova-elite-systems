import { useEffect, useState } from "react";
import {
  X,
  ArrowRight,
  Globe,
  Briefcase,
  Phone,
} from "lucide-react";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi, I’m NOVA. How can I help you today?",
    },
  ]);

  const quickReplies = [
    {
      label: "Build Website",
      response:
        "I can help you build a business website tailored to your industry. Want me to show you website templates?",
      route: "/templates/web",
      keywords: ["website", "web", "business site"],
    },
    {
      label: "E-commerce Store",
      response:
        "I can help you build an online store with payments and product management. Want to view ecommerce templates?",
      route: "/templates/ecommerce",
      keywords: ["shop", "store", "ecommerce"],
    },
    {
      label: "CCTV Setup",
      response:
        "We design CCTV systems for businesses and properties. Want to view security solutions?",
      route: "/templates/security",
      keywords: ["cctv", "security", "camera"],
    },
    {
      label: "Talk to Human",
      response:
        "You can contact our team directly or continue with the assistant.",
      route: "/contact",
      keywords: ["human", "support", "help"],
    },
  ];

  const prompts = [
    "Need a website fast?",
    "Need CCTV solutions?",
    "Stuck? I can help 👋",
    "Need help choosing?",
    "Get started here",
  ];

  const [currentPrompt, setCurrentPrompt] = useState(prompts[0]);

  useEffect(() => {
    let promptIndex = 0;

    const interval = setInterval(() => {
      if (!open) {
        promptIndex = (promptIndex + 1) % prompts.length;

        setCurrentPrompt(prompts[promptIndex]);
        setShowBubble(true);

        setTimeout(() => setShowBubble(false), 3500);
      }
    }, 9000);

    return () => clearInterval(interval);
  }, [open]);

  // MAIN LOGIC (NO AUTO REDIRECT)
  const handleReply = (item) => {
    setMessages((prev) => [
      ...prev,
      { type: "user", text: item.label },
      {
        type: "bot",
        text: item.response,
        action: {
          label: "Continue →",
          route: item.route,
        },
      },
    ]);
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      <div className="fixed left-6 bottom-6 z-[999]">

        {/* BUBBLE */}
        <div
          className={`
            absolute left-[78px] bottom-3
            transition-all duration-500
            ${
              showBubble && !open
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-3 pointer-events-none"
            }
          `}
        >
          <div className="relative px-4 py-2.5 rounded-2xl bg-white text-[#07111F] text-sm font-medium shadow-[0_10px_40px_rgba(0,0,0,0.28)]">
            {currentPrompt}
            <div className="absolute left-[-6px] bottom-4 w-3 h-3 rotate-45 bg-white" />
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={() => {
            setOpen(!open);
            setShowBubble(false);
          }}
          className="
            relative w-14 h-14 rounded-2xl
            bg-[#081120]
            border border-blue-500/20
            hover:border-blue-400/40
            transition-all duration-300
            shadow-[0_0_35px_rgba(59,130,246,0.25)]
            flex items-center justify-center
          "
        >
          <div className="absolute inset-0 rounded-2xl border border-blue-400/30 animate-ping" />

          {open ? (
            <X size={24} className="relative z-10 text-white" />
          ) : (
            <img
              src="https://res.cloudinary.com/diszilwhc/image/upload/v1778360837/20260510_010555_jissyl.png"
              alt="AI"
              className="relative z-10 w-8 h-8 object-contain"
            />
          )}
        </button>
      </div>

      {/* CHAT PANEL */}
      <div
        className={`
          fixed left-6 bottom-28 z-[999]
          w-[320px] max-w-[calc(100vw-3rem)]
          transition-all duration-300
          ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 pointer-events-none"
          }
        `}
      >
        <div className="rounded-[22px] border border-white/10 bg-[#081120]/95 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.45)] overflow-hidden">

          {/* HEADER */}
          <div className="px-4 py-4 border-b border-white/10 flex items-center gap-3">
            <img
              src="https://res.cloudinary.com/diszilwhc/image/upload/v1778360837/20260510_010555_jissyl.png"
              className="w-8 h-8"
            />
            <div>
              <h3 className="text-white font-semibold">NOVA Assistant</h3>
              <p className="text-xs text-gray-400">AI Business Guide</p>
            </div>
          </div>

          {/* MESSAGES */}
          <div className="p-4 space-y-3 max-h-[320px] overflow-y-auto">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2.5 rounded-xl text-[13px] max-w-[85%] ${
                    msg.type === "bot"
                      ? "bg-white/[0.05] border border-white/10 text-gray-200"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {msg.text}

                  {/* ACTION BUTTON */}
                  {msg.type === "bot" && msg.action && (
                    <button
                      onClick={() =>
                        (window.location.href = msg.action.route)
                      }
                      className="
                        mt-2 w-full
                        px-3 py-2
                        rounded-lg
                        bg-blue-600 hover:bg-blue-500
                        text-white text-xs
                        font-medium
                        transition
                      "
                    >
                      {msg.action.label}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* QUICK ACTIONS */}
          <div className="p-4 border-t border-white/10">
            <div className="grid grid-cols-2 gap-2">
              {quickReplies.map((item, i) => (
                <button
                  key={i}
                  onClick={() => handleReply(item)}
                  className="
                    p-3 rounded-xl
                    bg-white/[0.04]
                    border border-white/10
                    hover:border-blue-500/40
                    hover:bg-blue-500/10
                    transition
                    text-left
                  "
                >
                  <div className="text-sm text-white font-medium">
                    {item.label}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* FOOTER */}
          <div className="px-4 py-3 border-t border-white/10 flex justify-between">
            <button className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
              <Globe size={16} className="text-gray-300" />
            </button>

            <button
              onClick={() => (window.location.href = "/contact")}
              className="
                px-4 py-2 rounded-xl
                bg-blue-600 hover:bg-blue-500
                text-white text-sm font-medium
                flex items-center gap-2
              "
            >
              <Phone size={16} />
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
}