// src/components/services/ServiceFAQ.jsx

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ServiceFAQ({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know before getting started.",
  items = [],
}) {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative py-28 bg-[#05080F] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/5 mb-6">
            <span className="text-cyan-400 text-xs md:text-sm font-semibold tracking-[3px] uppercase">
              FAQ
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            {title}
          </h2>

          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {items.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={index}
                className="border-b border-white/10 pb-5"
              >
                <button
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between gap-6 py-4 text-left"
                >
                  <h3 className="text-lg md:text-xl font-medium text-white">
                    {item.q}
                  </h3>

                  <ChevronDown
                    size={22}
                    className={`text-cyan-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`
                    overflow-hidden transition-all duration-300
                    ${
                      isOpen
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <p className="pb-4 pr-10 text-slate-400 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Hint */}
        <div className="mt-14 text-center">
          <p className="text-slate-500 text-sm">
            Still have questions? Contact us and we'll be happy to help.
          </p>
        </div>
      </div>
    </section>
  );
}