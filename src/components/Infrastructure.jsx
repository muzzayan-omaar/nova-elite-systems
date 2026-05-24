// src/components/Infrastructure.jsx

import {
  Server,
  ShieldCheck,
  Cloud,
  Database,
  ArrowUpRight,
} from "lucide-react";

export default function Infrastructure() {
  const items = [
    {
      title: "Cloud Infrastructure",
      desc: "Scalable cloud systems designed for global uptime, redundancy and performance.",
      icon: <Cloud size={18} />,
    },
    {
      title: "Enterprise Security",
      desc: "Multi-layer protection with encrypted access, monitoring and threat prevention.",
      icon: <ShieldCheck size={18} />,
    },
    {
      title: "Modern Databases",
      desc: "Optimized data systems built for speed, scaling and structured intelligence.",
      icon: <Database size={18} />,
    },
    {
      title: "Server Architecture",
      desc: "High-performance backend infrastructure engineered for reliability and scale.",
      icon: <Server size={18} />,
    },
  ];

  return (
    <section className="py-32 px-5 md:px-10 overflow-hidden bg-[#050816]">
      <div className="max-w-7xl mx-auto">

        {/* OUTER FRAME */}
        <div className="relative rounded-[48px] border border-white/10 bg-white/[0.02] backdrop-blur-2xl overflow-hidden">

          {/* AMBIENT LAYERS */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-500/10 blur-[140px]" />
          <div className="absolute -bottom-40 -left-40 w-[420px] h-[420px] bg-cyan-500/10 blur-[140px]" />

          <div className="relative z-10 grid lg:grid-cols-[1.1fr_1fr]">

            {/* LEFT PANEL */}
            <div className="p-10 md:p-16 flex flex-col justify-between min-h-[650px]">

              <div>
                <p className="text-[11px] tracking-[0.35em] uppercase text-blue-400/90">
                  Infrastructure Layer
                </p>

                <h2 className="mt-6 text-[44px] md:text-[58px] leading-[0.95] tracking-[-0.06em] font-semibold text-white">
                  Engineered for
                  <br />
                  Secure & Scalable
                  <br />
                  Systems
                </h2>

                <p className="mt-8 text-[14px] text-gray-400 leading-relaxed max-w-lg">
                  We build production-grade infrastructure with cloud-first architecture,
                  hardened security layers, and optimized backend systems designed to scale
                  from startup to enterprise.
                </p>
              </div>

              {/* METRICS */}
              <div className="mt-16 flex gap-12">
                <div>
                  <div className="text-[38px] font-semibold text-white tracking-[-0.04em]">
                    99.9%
                  </div>
                  <div className="text-[11px] text-gray-500 tracking-wide mt-1">
                    Uptime Reliability
                  </div>
                </div>

                <div>
                  <div className="text-[38px] font-semibold text-white tracking-[-0.04em]">
                    24/7
                  </div>
                  <div className="text-[11px] text-gray-500 tracking-wide mt-1">
                    Active Monitoring
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL (STACKED SYSTEM CARDS) */}
            <div className="p-6 md:p-10 border-t lg:border-t-0 lg:border-l border-white/10 relative">

              {/* vertical connector line (premium feel) */}
              <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/20 via-white/5 to-transparent" />

              <div className="space-y-5">

                {items.map((item, index) => (
                  <div
                    key={index}
                    className="
                      group relative
                      rounded-[26px]
                      p-6
                      bg-white/[0.02]
                      border border-white/10
                      overflow-hidden
                      transition-all duration-500
                      hover:translate-x-1
                      hover:border-blue-500/20
                      hover:bg-white/[0.04]
                    "
                  >
                    {/* hover glow sweep */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/10 via-transparent to-transparent" />

                    <div className="relative flex gap-4">

                      {/* ICON */}
                      <div className="w-11 h-11 rounded-xl border border-white/10 bg-black/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition">
                        {item.icon}
                      </div>

                      {/* TEXT */}
                      <div className="flex-1">

                        <div className="flex items-center justify-between">
                          <h3 className="text-white text-[16px] font-medium tracking-[-0.02em]">
                            {item.title}
                          </h3>

                          <ArrowUpRight
                            size={16}
                            className="text-gray-500 group-hover:text-blue-400 transition"
                          />
                        </div>

                        <p className="mt-2 text-[13px] text-gray-400 leading-relaxed max-w-md">
                          {item.desc}
                        </p>

                      </div>

                    </div>
                  </div>
                ))}

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}