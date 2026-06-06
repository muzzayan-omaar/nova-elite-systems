import {
  Code2,
  Smartphone,
  Cloud,
  Camera,
  Fingerprint,
  Network,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      category: "digital",
      icon: <Code2 size={28} />,
      title: "Web\nDevelopment",
      desc: "Fast, responsive and modern websites that represent your brand perfectly.",
    },
    {
      category: "digital",
      icon: <Smartphone size={28} />,
      title: "App\nDevelopment",
      desc: "Custom mobile applications that streamline operations and improve efficiency.",
    },
    {
      category: "digital",
      icon: <Cloud size={28} />,
      title: "SaaS\nApplications",
      desc: "Smart cloud platforms with automation for modern businesses.",
    },
    {
      category: "infra",
      icon: <Camera size={28} />,
      title: "CCTV\nSystems",
      desc: "High-quality surveillance systems for real-time monitoring and security.",
    },
    {
      category: "infra",
      icon: <Fingerprint size={28} />,
      title: "Access\nControl",
      desc: "Advanced access solutions to secure your people and premises.",
    },
    {
      category: "infra",
      icon: <Network size={28} />,
      title: "Networking\nSolutions",
      desc: "Reliable networking systems that keep your business connected.",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 px-5 text-white">
      {/* Smooth Background Transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#0A0F1C] to-[#0A0F1C]" />

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-xs uppercase tracking-[2px] text-cyan-400 font-medium">Capabilities</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-br from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Complete technology solutions to power and protect your business.
          </p>
        </div>

        {/* CATEGORY LABELS */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-0 mb-8">
          <div className="flex items-center gap-3">
            <p className="text-cyan-400 text-sm tracking-[0.125em] font-semibold uppercase">DIGITAL SOLUTIONS</p>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="flex items-center gap-3 md:pl-8">
            <p className="text-cyan-400 text-sm tracking-[0.125em] font-semibold uppercase">INFRASTRUCTURE &amp; SECURITY</p>
            <div className="h-px flex-1 bg-white/10" />
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                group relative
                rounded-3xl
                p-6 md:p-7
                min-h-[260px] md:min-h-[300px]
                bg-[#111827]
                border border-white/10
                hover:border-cyan-500/40
                hover:-translate-y-2
                transition-all duration-500
                flex flex-col
                ${index === 0 ? "ring-1 ring-cyan-500/30" : ""}
              `}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold leading-tight tracking-tight whitespace-pre-line mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-[14.5px] leading-relaxed mt-auto">
                {service.desc}
              </p>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}