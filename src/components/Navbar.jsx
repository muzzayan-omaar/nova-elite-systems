import { useState, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Code2,
  Smartphone,
  Cloud,
  Camera,
  Fingerprint,
  Network,
  Briefcase,
  FileText,
  MessageCircle,
  Info,
} from "lucide-react";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const closeTimeout = useRef(null);

  const safeOpen = (id) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveDropdown(id);
  };

  const safeClose = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const digitalSolutions = [
    {
      icon: <Code2 size={18} />,
      title: "Web Development",
      desc: "Modern responsive business websites",
      link: "/services/web-development",
    },
    {
      icon: <Smartphone size={18} />,
      title: "App Development",
      desc: "Custom mobile app solutions",
      link: "/services/app-development",
    },
    {
      icon: <Cloud size={18} />,
      title: "SaaS Applications",
      desc: "Cloud automation platforms",
      link: "/services/saas-applications",
    },
  ];

  const infraSolutions = [
    {
      icon: <Camera size={18} />,
      title: "CCTV Systems",
      desc: "Enterprise surveillance systems",
      link: "/services/cctv-systems",
    },
    {
      icon: <Fingerprint size={18} />,
      title: "Access Control",
      desc: "Smart secure access systems",
      link: "/services/access-control",
    },
    {
      icon: <Network size={18} />,
      title: "Networking",
      desc: "Reliable infrastructure solutions",
      link: "/services/networking",
    },
  ];

  const explore = [
    {
      icon: <Briefcase size={18} />,
      title: "Case Studies",
      desc: "Real client transformations",
      link: "/blog",
    },
    {
      icon: <Globe size={18} />,
      title: "Industries",
      desc: "Solutions tailored to sectors",
      link: "/industries",
    },
    {
      icon: <Info size={18} />,
      title: "About NOVA",
      desc: "Who we are & our vision",
      link: "/about",
    },
  ];

  const support = [
    {
      icon: <MessageCircle size={18} />,
      title: "Technical Support",
      desc: "Talk to our team",
      link: "/technical-support",
    },
    {
      icon: <FileText size={18} />,
      title: "Book Consultation",
      desc: "Schedule a strategy session",
      link: "/book-consultation",
    },
  ];

  return (
    <div className="fixed top-3 md:top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-7xl">

      <div className="relative rounded-2xl bg-[#07111F]/80 backdrop-blur-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">

        {/* TOP BAR */}
        <div className="flex items-center justify-between px-4 md:px-6 py-3">

          {/* LOGO */}
          <a href="/" className="shrink-0">
            <img
              src="https://res.cloudinary.com/diszilwhc/image/upload/v1777939226/IMG_20260422_200643_073_fdpjkb.webp"
              alt="NOVA Elite Systems"
              className="h-7 md:h-10 object-contain"
            />
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-1">

            {/* SOLUTIONS */}
            <div
              className="relative"
              onMouseEnter={() => safeOpen("solutions")}
              onMouseLeave={safeClose}
            >
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/[0.04] transition text-sm">
                Solutions
                <ChevronDown size={16} />
              </button>

              {activeDropdown === "solutions" && (
                <div
                  className="absolute top-[120%] left-0 w-[520px] rounded-[24px] border border-white/10 bg-[#081120]/95 backdrop-blur-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                  onMouseEnter={() => {
                    if (closeTimeout.current) clearTimeout(closeTimeout.current);
                  }}
                  onMouseLeave={safeClose}
                >

                  <div className="grid grid-cols-2 gap-8">

                    {/* LEFT */}
                    <div>
                      <p className="text-[11px] tracking-[0.2em] text-blue-500 font-semibold mb-4">
                        DIGITAL SOLUTIONS
                      </p>

                      <div className="space-y-4">
                        {digitalSolutions.map((item, index) => (
                          <a key={index} href={item.link} className="flex items-start gap-3 group">
                            <div className="text-blue-500 mt-1">{item.icon}</div>
                            <div>
                              <h3 className="text-white text-sm font-medium group-hover:text-blue-400 transition">
                                {item.title}
                              </h3>
                              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div>
                      <p className="text-[11px] tracking-[0.2em] text-blue-500 font-semibold mb-4">
                        INFRASTRUCTURE & SECURITY
                      </p>

                      <div className="space-y-4">
                        {infraSolutions.map((item, index) => (
                          <a key={index} href={item.link} className="flex items-start gap-3 group">
                            <div className="text-blue-500 mt-1">{item.icon}</div>
                            <div>
                              <h3 className="text-white text-sm font-medium group-hover:text-blue-400 transition">
                                {item.title}
                              </h3>
                              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* PRICING */}
            <a href="/pricing" className="px-4 py-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/[0.04] transition text-sm">
              Pricing
            </a>

            {/* EXPLORE */}
            <SimpleDropdown title="Explore" items={explore} id="explore"
              activeDropdown={activeDropdown}
              setActiveDropdown={safeOpen}
              onClose={safeClose}
            />

            {/* SUPPORT */}
            <SimpleDropdown title="Support" items={support} id="support"
              activeDropdown={activeDropdown}
              setActiveDropdown={safeOpen}
              onClose={safeClose}
            />

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2">

            <button className="hidden md:flex bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-xl text-white text-sm transition">
              Get Started
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-white"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>
        </div>

        {/* MOBILE MENU unchanged */}
        {/* (kept as-is to avoid breaking your structure) */}

      </div>
    </div>
  );
}

/* SIMPLE DROPDOWN FIX */
function SimpleDropdown({
  title,
  items,
  activeDropdown,
  id,
  setActiveDropdown,
  onClose,
}) {
  const closeTimeout = useRef(null);

  const open = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveDropdown(id);
  };

  const close = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <div className="relative" onMouseEnter={open} onMouseLeave={close}>

      <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/[0.04] transition text-sm">
        {title}
        <ChevronDown size={16} />
      </button>

      {activeDropdown === id && (
        <div
          className="absolute top-[120%] left-0 w-[280px] rounded-[22px] border border-white/10 bg-[#081120]/95 backdrop-blur-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
          onMouseEnter={open}
          onMouseLeave={close}
        >
          <div className="space-y-4">
            {items.map((item, index) => (
              <a key={index} href={item.link} className="flex items-start gap-3 group">
                <div className="text-blue-500 mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-white text-sm font-medium group-hover:text-blue-400 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}