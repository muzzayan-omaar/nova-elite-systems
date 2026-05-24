// src/components/Industries.jsx

import {
  Building2,
  GraduationCap,
  ShoppingBag,
  Briefcase,
  Hospital,
  HardHat,
  UtensilsCrossed,
  ShieldCheck,
} from "lucide-react";

export default function Industries() {
  const industries = [
    {
      title: "Corporate",
      icon: <Briefcase size={18} />,
      description: "Enterprise systems, branding and digital infrastructure.",
    },
    {
      title: "Construction",
      icon: <HardHat size={18} />,
      description: "Modern systems for contractors and engineering firms.",
    },
    {
      title: "Medical",
      icon: <Hospital size={18} />,
      description: "Secure healthcare platforms and appointment systems.",
    },
    {
      title: "Restaurants",
      icon: <UtensilsCrossed size={18} />,
      description: "Ordering systems and digital dining experiences.",
    },
    {
      title: "Education",
      icon: <GraduationCap size={18} />,
      description: "Learning platforms and student management systems.",
    },
    {
      title: "Real Estate",
      icon: <Building2 size={18} />,
      description: "Property listing and showcase platforms.",
    },
    {
      title: "Retail",
      icon: <ShoppingBag size={18} />,
      description: "Ecommerce systems and inventory platforms.",
    },
    {
      title: "Security",
      icon: <ShieldCheck size={18} />,
      description: "Surveillance and monitoring infrastructure.",
    },
  ];

  return (
    <section className="relative py-32 px-5 md:px-10 overflow-hidden bg-[#050816]">

      {/* soft ambient background (less aggressive) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.35em] text-blue-400/80">
              Industries
            </p>

            <h2 className="mt-6 text-[38px] md:text-[52px] leading-[0.95] tracking-[-0.05em] font-semibold text-white">
              Built for Modern
              <br />
              Digital Operations
            </h2>
          </div>

          <p className="max-w-md text-sm text-gray-400 leading-relaxed">
            We design systems that adapt across industries — from corporate
            infrastructure to retail platforms — all built with scalability
            and performance in mind.
          </p>

        </div>

        {/* SOFT FLOW LAYOUT (NOT BOX GRID) */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-14">

          {industries.map((item, index) => (
            <div
              key={index}
              className="
                group relative
                pl-5
              "
            >

              {/* vertical accent line (feels like a system map) */}
              <div className="absolute left-0 top-1 w-[1px] h-full bg-white/5 group-hover:bg-blue-500/20 transition" />

              {/* DOT NODE */}
              <div className="absolute left-[-4px] top-1 w-2 h-2 rounded-full bg-white/20 group-hover:bg-blue-400 transition" />

              {/* CONTENT (NO BOX) */}
              <div className="ml-4">

                {/* ICON ROW */}
                <div className="flex items-center gap-3 mb-3">

                  <div className="text-blue-400 group-hover:scale-110 transition">
                    {item.icon}
                  </div>

                  <h3 className="text-[16px] font-medium text-white tracking-[-0.02em]">
                    {item.title}
                  </h3>

                </div>

                <p className="text-[13px] text-gray-400 leading-relaxed max-w-[260px]">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}