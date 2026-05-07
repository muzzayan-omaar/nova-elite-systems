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
      icon: <Code2 size={24} />,
      title: "Web\nDevelopment",
      desc: "Fast, responsive and modern websites that represent your brand perfectly.",
    },
    {
      category: "digital",
      icon: <Smartphone size={24} />,
      title: "App\nDevelopment",
      desc: "Custom mobile applications that streamline operations and improve efficiency.",
    },
    {
      category: "digital",
      icon: <Cloud size={24} />,
      title: "SaaS\nApplications",
      desc: "Smart cloud platforms with automation for modern businesses.",
    },

    {
      category: "infra",
      icon: <Camera size={24} />,
      title: "CCTV\nSystems",
      desc: "High-quality surveillance systems for real-time monitoring and security.",
    },
    {
      category: "infra",
      icon: <Fingerprint size={24} />,
      title: "Access\nControl",
      desc: "Advanced access solutions to secure your people and premises.",
    },
    {
      category: "infra",
      icon: <Network size={24} />,
      title: "Networking\nSolutions",
      desc: "Reliable networking systems that keep your business connected.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-6 text-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Services
          </h2>

          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Complete technology solutions to power and protect your business.
          </p>
        </div>

        {/* CATEGORY LABELS */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-0 mb-5 md:mb-6">

          <div className="flex items-center gap-3">
            <p
              className="
                text-blue-500
                text-[10px] md:text-sm
                tracking-[0.18em]
                font-semibold
                whitespace-nowrap
              "
            >
              DIGITAL SOLUTIONS
            </p>

            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          <div className="flex items-center gap-3 md:pl-6">
            <p
              className="
                text-blue-500
                text-[10px] md:text-sm
                tracking-[0.18em]
                font-semibold
                whitespace-nowrap
              "
            >
              INFRASTRUCTURE & SECURITY
            </p>

            <div className="h-px flex-1 bg-white/10"></div>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-5">

          {services.map((service, index) => (
            <div
              key={index}
              className={`
                relative
                rounded-xl md:rounded-2xl
                p-4 md:p-6
                min-h-[220px] md:min-h-[280px]
                bg-[#0B1220]
                border border-white/5
                hover:border-blue-500/30
                transition-all duration-300
                hover:shadow-[0_0_25px_rgba(59,130,246,0.12)]

                ${index === 0
                  ? "bg-gradient-to-b from-blue-600/20 to-[#0B1220]"
                  : ""
                }
              `}
            >

              {/* ICON BOX */}
              <div
                className="
                  w-11 h-11 md:w-14 md:h-14
                  rounded-lg md:rounded-xl
                  bg-blue-500/10
                  border border-blue-500/20
                  flex items-center justify-center
                  text-blue-500
                  mb-4 md:mb-6
                "
              >
                {service.icon}
              </div>

              {/* TITLE */}
              <h3
                className="
                  text-lg md:text-2xl
                  font-semibold
                  leading-tight
                  whitespace-pre-line
                "
              >
                {service.title}
              </h3>

              {/* DESC */}
              <p
                className="
                  text-gray-400
                  text-[13px] md:text-sm
                  leading-relaxed
                  mt-3 md:mt-4
                "
              >
                {service.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}