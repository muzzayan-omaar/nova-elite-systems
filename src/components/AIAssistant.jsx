import { useEffect, useState } from "react";
import {
  X,
  ArrowRight,
  Phone,
} from "lucide-react";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);

  const [state, setState] = useState({
    step: "home",
    service: null,
  });

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi, I’m NOVA. Choose a service to get started.",
    },
  ]);

  const services = [
    {
      name: "Web Development",
      intro:
        "We build high-performance business websites, SaaS platforms, and scalable digital systems for growth-focused companies.",
    },
    {
      name: "Mobile Apps",
      intro:
        "We design and develop Android & iOS applications with modern UI, backend systems, and real-time features.",
    },
    {
      name: "CCTV Systems",
      intro:
        "We install intelligent surveillance systems including HD cameras, AI monitoring, and remote access security solutions.",
    },
    {
      name: "Networking & Access",
      intro:
        "We deliver enterprise networking, structured cabling, and access control systems for secure infrastructure.",
    },
  ];

  const serviceData = {
    "CCTV Systems": {
      packages: [
        {
          name: "Office Security",
          price: "AED 3,500",
          features: [
            "HD CCTV cameras",
            "Remote monitoring",
            "Mobile viewing",
            "Storage setup",
          ],
        },
        {
          name: "Enterprise Security",
          price: "Custom",
          features: [
            "AI monitoring",
            "24/7 surveillance",
            "Multi-site support",
            "Access integration",
          ],
        },
      ],
    },

    "Web Development": {
      packages: [
        {
          name: "Essential",
          price: "AED 2,500",
          features: [
            "Responsive website",
            "SEO optimized",
            "Contact forms",
            "Fast deployment",
          ],
        },
        {
          name: "Business Elite",
          price: "AED 6,500",
          features: [
            "Admin dashboard",
            "Backend integration",
            "API systems",
            "Premium UI",
          ],
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: [
            "Full SaaS systems",
            "Scalable architecture",
            "Advanced integrations",
          ],
        },
      ],
    },

    "Mobile Apps": {
      packages: [
        {
          name: "Starter App",
          price: "AED 5,000",
          features: [
            "Android/iOS app",
            "Modern UI",
            "Basic backend",
          ],
        },
        {
          name: "Business App",
          price: "AED 12,000",
          features: [
            "Custom backend",
            "Realtime features",
            "Admin dashboard",
          ],
        },
      ],
    },
  };

  const handleServiceClick = (service) => {
    setState({
      step: "service",
      service: service.name,
    });

    setMessages((prev) => [
      ...prev,
      { type: "user", text: service.name },
      {
        type: "bot",
        text: service.intro,
      },
      {
        type: "bot",
        type: "buttons",
        buttons: [
          "View Packages",
          "Budget Planner",
          "How It Works",
          "Get Quote",
        ],
      },
    ]);
  };

  const handleAction = (action) => {
    const service = state.service;
    const data = serviceData[service];

    if (action === "View Packages") {
      setMessages((prev) => [
        ...prev,
        { type: "user", text: action },
        {
          type: "bot",
          text: `${service} Packages:`,
        },
        {
          type: "bot",
          packages: data.packages,
        },
      ]);
    }

    if (action === "Budget Planner") {
      setMessages((prev) => [
        ...prev,
        { type: "user", text: action },
        {
          type: "bot",
          text:
            "Tell me your budget and I will match the best plan for you.",
        },
      ]);
    }

    if (action === "How It Works") {
      setMessages((prev) => [
        ...prev,
        { type: "user", text: action },
        {
          type: "bot",
          text:
            "We start with consultation → design → development → deployment → support.",
        },
      ]);
    }

    if (action === "Get Quote") {
      setMessages((prev) => [
        ...prev,
        { type: "user", text: action },
        {
          type: "bot",
          text:
            "Send us your requirements and we’ll respond with a tailored quotation.",
        },
      ]);
    }
  };

  return (
    <>
      {/* FLOATING SERVICE BUTTONS (HOME STATE) */}
      {state.step === "home" && (
        <div className="fixed left-6 bottom-6 z-[999] flex flex-col gap-3">
          {services.map((s, i) => (
            <button
              key={i}
              onClick={() => handleServiceClick(s)}
              className="px-4 py-3 rounded-xl bg-[#081120] border border-white/10 text-white text-sm hover:border-blue-500/40 transition"
            >
              {s.name}
            </button>
          ))}
        </div>
      )}

      {/* CHAT PANEL */}
      <div className="fixed left-6 bottom-28 z-[999] w-[340px]">
        <div className="rounded-2xl bg-[#081120]/95 border border-white/10 backdrop-blur-xl p-4 text-white">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">NOVA AI</h3>
            <button onClick={() => setOpen(!open)}>
              <X size={18} />
            </button>
          </div>

          {/* MESSAGES */}
          <div className="space-y-3 max-h-[300px] overflow-y-auto">

            {messages.map((msg, i) => (
              <div key={i}>

                {msg.type === "bot" && (
                  <div className="text-sm text-gray-300 bg-white/5 p-2 rounded-xl">
                    {msg.text}
                  </div>
                )}

                {msg.type === "buttons" && (
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {msg.buttons.map((b, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAction(b)}
                        className="text-xs bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/20 rounded-lg p-2"
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                )}

                {msg.packages && (
                  <div className="space-y-2">
                    {msg.packages.map((p, i) => (
                      <div
                        key={i}
                        className="bg-white/5 p-2 rounded-lg"
                      >
                        <div className="font-semibold text-sm">
                          {p.name} — {p.price}
                        </div>
                        <ul className="text-xs text-gray-400 list-disc ml-4">
                          {p.features.map((f, idx) => (
                            <li key={idx}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            ))}
          </div>

          {/* FOOTER */}
          <div className="mt-3 flex justify-end">
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