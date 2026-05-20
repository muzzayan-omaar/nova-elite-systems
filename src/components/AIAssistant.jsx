import { useState } from "react";
import { X, Phone, ArrowRight } from "lucide-react";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);

  const [state, setState] = useState({
    mode: "home",
    service: null,
  });

  const services = [
    {
      name: "Web Development",
      intro:
        "We build modern websites, SaaS platforms, and scalable digital systems designed for business growth.",
      packages: [
        {
          name: "Essential",
          price: "AED 2,500",
          features: [
            "Responsive website",
            "SEO optimized",
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
          ],
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: [
            "Full SaaS system",
            "Scalable architecture",
            "Advanced integrations",
          ],
        },
      ],
    },

    {
      name: "Mobile Apps",
      intro:
        "We design and develop Android & iOS apps with modern UI and powerful backend systems.",
      packages: [
        {
          name: "Starter App",
          price: "AED 5,000",
          features: ["Android/iOS app", "Modern UI", "Basic backend"],
        },
        {
          name: "Business App",
          price: "AED 12,000",
          features: ["Realtime features", "Admin dashboard", "Cloud sync"],
        },
      ],
    },

    {
      name: "CCTV Systems",
      intro:
        "We install intelligent CCTV systems with remote monitoring, AI detection, and enterprise security.",
      packages: [
        {
          name: "Office Security",
          price: "AED 3,500",
          features: ["HD cameras", "Remote access", "Mobile viewing"],
        },
        {
          name: "Enterprise Security",
          price: "Custom",
          features: [
            "AI monitoring",
            "24/7 surveillance",
            "Multi-site support",
          ],
        },
      ],
    },

    {
      name: "Networking & Access",
      intro:
        "We provide enterprise networking, structured cabling, and access control systems for secure infrastructure.",
      packages: [],
    },
  ];

  const selectedService = services.find(
    (s) => s.name === state.service
  );

  function selectService(service) {
    setState({
      mode: "service",
      service: service.name,
    });
  }

  function go(mode) {
    setState((prev) => ({
      ...prev,
      mode,
    }));
  }

  return (
    <>
      {/* FLOATING SERVICE BUTTONS (HOME) */}
      {state.mode === "home" && (
        <div className="fixed left-6 bottom-6 z-[999] flex flex-col gap-3">
          {services.map((s, i) => (
            <button
              key={i}
              onClick={() => selectService(s)}
              className="px-4 py-3 rounded-xl bg-[#081120] border border-white/10 text-white text-sm hover:border-blue-500/40 transition"
            >
              {s.name}
            </button>
          ))}
        </div>
      )}

      {/* CHAT WINDOW */}
      <div className="fixed left-6 bottom-28 z-[999] w-[340px]">
        <div className="rounded-2xl bg-[#081120]/95 border border-white/10 backdrop-blur-xl p-4 text-white">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">NOVA AI</h3>
            <button onClick={() => setOpen(!open)}>
              <X size={18} />
            </button>
          </div>

          {/* HOME VIEW */}
          {state.mode === "service" && (
            <div className="space-y-3">

              {/* INTRO */}
              <div className="text-sm text-gray-300 bg-white/5 p-3 rounded-xl">
                {selectedService?.intro}
              </div>

              {/* ACTION BUTTONS */}
              <div className="grid grid-cols-2 gap-2">

                <button
                  onClick={() => go("packages")}
                  className="bg-blue-600/20 border border-blue-500/20 rounded-lg p-2 text-xs"
                >
                  View Packages
                </button>

                <button
                  onClick={() => go("budget")}
                  className="bg-blue-600/20 border border-blue-500/20 rounded-lg p-2 text-xs"
                >
                  Budget Guide
                </button>

                <button
                  onClick={() => go("info")}
                  className="bg-blue-600/20 border border-blue-500/20 rounded-lg p-2 text-xs"
                >
                  How It Works
                </button>

                <button
                  className="bg-blue-600/20 border border-blue-500/20 rounded-lg p-2 text-xs"
                >
                  Contact Us
                </button>

              </div>
            </div>
          )}

          {/* PACKAGES VIEW */}
          {state.mode === "packages" && (
            <div className="space-y-2">

              {selectedService?.packages?.map((p, i) => (
                <div
                  key={i}
                  className="bg-white/5 p-3 rounded-lg"
                >
                  <div className="font-semibold text-sm">
                    {p.name} — {p.price}
                  </div>

                  <ul className="text-xs text-gray-400 ml-4 list-disc">
                    {p.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <button
                onClick={() => go("service")}
                className="text-xs text-blue-400 mt-2"
              >
                ← Back
              </button>
            </div>
          )}

          {/* INFO VIEW */}
          {state.mode === "info" && (
            <div className="text-sm text-gray-300 space-y-2">
              <p>
                We start with consultation → planning →
                design → development → deployment →
                support.
              </p>

              <button
                onClick={() => go("service")}
                className="text-xs text-blue-400"
              >
                ← Back
              </button>
            </div>
          )}

          {/* BUDGET VIEW */}
          {state.mode === "budget" && (
            <div className="text-sm text-gray-300 space-y-2">
              <p>
                Tell us your budget and we will match the
                best package for you.
              </p>

              <div className="text-xs text-gray-400">
                Example:
                <br /> AED 2500 → Starter Web
                <br /> AED 6500 → Business Elite
              </div>

              <button
                onClick={() => go("service")}
                className="text-xs text-blue-400"
              >
                ← Back
              </button>
            </div>
          )}

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