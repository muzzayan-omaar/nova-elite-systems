
import { useState } from "react";
import {
  MessageCircle,
  X,
  ArrowRight,
  Globe,
  Briefcase,
  Phone,
  Shield,
} from "lucide-react";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi, I’m NOVA. How can I help you today?",
    },
  ]);

  const quickReplies = [
    {
      label: "Get Started",
      response:
        "We help businesses with web platforms, apps, SaaS systems, networking, CCTV and access control solutions.",
    },
    {
      label: "View Services",
      response:
        "Our core services include Web Development, Mobile Apps, SaaS Platforms, CCTV Systems, Access Control and Networking Solutions.",
    },
    {
      label: "Get a Quote",
      response:
        "You can request a quotation through our contact section or WhatsApp for a faster response.",
    },
    {
      label: "Case Studies",
      response:
        "Explore our case studies to see how NOVA Elite Systems delivers real business results.",
    },
  ];

  const handleReply = (item) => {
    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: item.label,
      },
      {
        type: "bot",
        text: item.response,
      },
    ]);
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      <div className="fixed left-6 bottom-6 z-[999]">
        <button
          onClick={() => setOpen(!open)}
          className="
            relative
            w-13 h-13
           rounded-xl
            bg-blue-600
            hover:bg-blue-500
            transition-all duration-300
            shadow-[0_0_35px_rgba(59,130,246,0.45)]
            flex items-center justify-center
            group
          "
        >

          {/* PULSE */}
          <div
            className="
              absolute inset-0
              rounded-2xl
              border border-blue-400/40
              animate-ping
            "
          />

          {open ? (
            <X size={28} className="relative z-10 text-white" />
          ) : (
            <MessageCircle
              size={22}
              className="relative z-10 text-white"
            />
          )}
        </button>
      </div>

      {/* CHAT PANEL */}
      <div
        className={`
          fixed
          left-6 bottom-28
          z-[999]
          w-[320px]
          max-w-[calc(100vw-3rem)]
          transition-all duration-300
          ${open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-6 pointer-events-none"
          }
        `}
      >

        <div
          className="
            overflow-hidden
            rounded-[22px]
            border border-white/10
            bg-[#081120]/95
            backdrop-blur-2xl
            shadow-[0_0_60px_rgba(0,0,0,0.45)]
            relative
          "
        >

          {/* GLOW */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">

            <div
              className="
                absolute
                left-[-80px]
                top-[-80px]
                w-[240px]
                h-[240px]
                rounded-full
                bg-blue-500/10
                blur-3xl
              "
            />

            <div
              className="
                absolute
                right-[-80px]
                bottom-[-80px]
                w-[240px]
                h-[240px]
                rounded-full
                bg-blue-500/10
                blur-3xl
              "
            />
          </div>

          {/* HEADER */}
          <div
            className="
              relative z-10
              px-4 py-4
              border-b border-white/10
              flex items-center gap-4
            "
          >

            <div
              className="
                w-10 h-10
                rounded-2xl
                bg-blue-600
                flex items-center justify-center
                shadow-[0_0_25px_rgba(59,130,246,0.4)]
              "
            >
              <Shield size={18} className="text-white" />
            </div>

            <div>
              <h3 className="font-semibold text-white text-base">
                NOVA Assistant
              </h3>

              <p className="text-xs text-gray-400">
                Instant guidance & quick actions
              </p>
            </div>
          </div>

          {/* CHAT BODY */}
          <div
            className="
              relative z-10
              p-4
              space-y-3
              max-h-[320px]
              overflow-y-auto
            "
          >

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.type === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`
                    max-w-[85%]
                    px-3 py-2.5
                    rounded-xl
                    text-[13px] leading-relaxed
                    ${msg.type === "bot"
                      ? "bg-white/[0.05] border border-white/10 text-gray-200"
                      : "bg-blue-600 text-white"
                    }
                  `}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* QUICK ACTIONS */}
            <div className="pt-2">
              <p className="text-xs text-gray-500 mb-3 uppercase tracking-[0.2em]">
                Quick Actions
              </p>

              <div className="grid grid-cols-2 gap-3">

                {quickReplies.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleReply(item)}
                    className="
                      text-left
                      p-3
                      rounded-xl
                      bg-white/[0.04]
                      border border-white/10
                      hover:border-blue-500/40
                      hover:bg-blue-500/10
                      transition-all duration-300
                      group
                    "
                  >

                    <div className="flex items-center justify-between">
                      <span className="text-[13px] font-medium text-white">
                        {item.label}
                      </span>

                      <ArrowRight
                        size={16}
                        className="
                          text-blue-400
                          group-hover:translate-x-1
                          transition
                        "
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div
            className="
              relative z-10
              border-t border-white/10
              px-4 py-3
              flex items-center justify-between
            "
          >

            <div className="flex gap-3">

              <button
                className="
                  w-9 h-9
                  rounded-xl
                  bg-white/[0.04]
                  border border-white/10
                  hover:border-blue-500/40
                  transition
                  flex items-center justify-center
                "
              >
                <Globe size={16} className="text-gray-300" />
              </button>

              <button
                className="
                  w-10 h-10
                  rounded-xl
                  bg-white/[0.04]
                  border border-white/10
                  hover:border-blue-500/40
                  transition
                  flex items-center justify-center
                "
              >
                <Briefcase size={18} className="text-gray-300" />
              </button>
            </div>

            <button
              className="
                px-4 py-2
                rounded-xl
                bg-blue-600
                hover:bg-blue-500
                transition
                flex items-center gap-2
                text-sm font-medium
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
