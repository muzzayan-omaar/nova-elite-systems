export default function Hero() {
  const [hovered, setHovered] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen bg-[#05070F] text-white overflow-hidden">

      {/* BACKGROUND IMAGE (FULL SECTION COVER) */}
      <img
        src="https://res.cloudinary.com/diszilwhc/image/upload/v1777984942/globe1_g9sjcl.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-75"
      />

      {/* OVERLAYS (EXTEND FULL HEIGHT) */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#05070F] via-[#05070F]/90 to-transparent" />

      {/* GLOW */}
      <div className="absolute left-[-120px] top-1/2 w-[420px] h-[420px] bg-blue-500/10 blur-[120px] rounded-full" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* HERO TOP CONTENT */}
        <div className="min-h-screen flex items-center">
          <div className="max-w-2xl pl-2 md:pl-8 lg:pl-14">

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-blue-400">
                NOVA ELITE SYSTEMS
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05]">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                <TypingTitles />
              </span>
            </h1>

            {/* DESC */}
            <p className="mt-5 text-gray-300 max-w-lg">
              {t.heroDesc}
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              {/* KEEP YOUR BUTTONS EXACTLY SAME */}
            </div>

          </div>
        </div>

        {/* ========================= */}
        {/* TECH STACK (NOW FLOWING BELOW HERO) */}
        {/* ========================= */}

        <div className="pb-24">

          <div className="text-center">

            <h2 className="text-xl font-semibold text-white">
              Modern Web & Cloud Technology Stack
            </h2>

            <p className="mt-5 text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
              NOVA leverages trusted platforms, cloud infrastructure and enterprise-grade technologies used globally.
            </p>

          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 mt-16">

            {[
              { name: "React", logo: "https://cdn.simpleicons.org/react" },
              { name: "Tailwind", logo: "https://cdn.simpleicons.org/tailwindcss" },
              { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs" },
              { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb" },
              { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/ffffff" },
              { name: "Render", logo: "https://cdn.simpleicons.org/render" },
              { name: "Cloudinary", logo: "https://cdn.simpleicons.org/cloudinary" },
              { name: "Hikvision", logo: "https://res.cloudinary.com/diszilwhc/image/upload/v1778460523/hikvision-seeklogo_ctapx5.png" },
              { name: "AWS", logo: "https://img.icons8.com/color/48/amazon-web-services.png" },
              { name: "Google Cloud", logo: "https://cdn.simpleicons.org/googlecloud" },
            ].map((tech, index) => (
              <div
                key={index}
                className="group flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition"
              >
                <div className="w-14 h-14 flex items-center justify-center">
                  <img
                    src={tech.logo}
                    className="max-w-full max-h-full object-contain grayscale brightness-200 group-hover:grayscale-0"
                  />
                </div>

                <p className="text-xs text-gray-500 group-hover:text-gray-300">
                  {tech.name}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}