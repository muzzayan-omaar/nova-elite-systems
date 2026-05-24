// src/components/Testimonials.jsx

import { useEffect, useState } from "react";
import { Quote, Sparkles } from "lucide-react";

export default function Testimonials() {
  const clients = [
    {
      name: "Richard Kazibwe",
      role: "CEO",
      company: "Eyenet Uganda Limited",
      location: "Kampala, Uganda",
      quote:
        "Delivered a robust and scalable system that transformed our digital operations and improved efficiency across departments.",
    },
    {
      name: "CHART",
      role: "Operations Team",
      company: "Petro Station",
      location: "Wakiso, Uganda",
      quote:
        "The system streamlined our workflows and gave us better control over daily operational processes.",
    },
    {
      name: "Bader",
      role: "CEO",
      company: "WHY Cafe LLC",
      location: "Al Qana, Abu Dhabi",
      quote:
        "A premium execution with strong design thinking and reliable technical delivery throughout the project.",
    },
    {
      name: "MBS General Hardware",
      role: "Management",
      company: "",
      location: "Nsangi, Uganda",
      quote:
        "Modernized our outdated processes into a structured and efficient digital system.",
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % clients.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const current = clients[active];

  return (
    <section className="py-36 px-5 md:px-10 bg-[#050816] relative overflow-hidden">

      {/* ambient glow */}
      <div className="absolute top-[-260px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-500/5 blur-[180px]" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20">

          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-blue-400 mb-6 justify-center">
            <Sparkles size={12} />
            Client Feedback
          </div>

          <h2 className="text-[44px] md:text-[60px] leading-[0.95] tracking-[-0.06em] font-semibold text-white">
            Trusted in
            production environments
          </h2>

        </div>

        {/* SPOTLIGHT STAGE */}
        <div className="relative min-h-[320px] flex flex-col items-center justify-center text-center">

          {/* quote icon */}
          <Quote className="text-blue-400 opacity-50 mb-6" size={28} />

          {/* quote */}
          <p
            key={active}
            className="text-[22px] md:text-[26px] text-gray-200 leading-relaxed max-w-3xl transition-all duration-700"
          >
            {current.quote}
          </p>

          {/* client info */}
          <div className="mt-10 transition-all duration-700">

            <div className="text-white font-medium text-lg">
              {current.name}
            </div>

            <div className="text-sm text-gray-500 mt-1">
              {current.role} • {current.company}
            </div>

            <div className="text-xs text-gray-600 mt-1">
              {current.location}
            </div>

          </div>

        </div>

        {/* DOT NAVIGATION (subtle, not boxed) */}
        <div className="mt-14 flex justify-center gap-2">

          {clients.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${i === active ? "bg-blue-500 w-6" : "bg-white/20"}
              `}
            />
          ))}

        </div>

        {/* FOOT NOTE */}
        <div className="mt-20 text-center text-sm text-gray-500">
          Rotating client experiences from live production deployments
        </div>

      </div>
    </section>
  );
}