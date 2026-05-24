import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
import { TEMPLATE_CATEGORIES } from "../data/templateCategories";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [intentOpen, setIntentOpen] = useState(false);

  const closeTimeout = useRef(null);
  const intentRef = useRef(null);

  const quickCategories = TEMPLATE_CATEGORIES.slice(0, 3);
const othersRoute = "/templates"; // fallback page
  

  const safeOpen = (id) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveDropdown(id);
  };

  const safeClose = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // ✅ FIXED OUTSIDE CLICK HANDLER (NO WINDOW LISTENERS)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (intentRef.current && !intentRef.current.contains(e.target)) {
        setIntentOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

            <a href="/pricing" className="px-4 py-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/[0.04] transition text-sm">
              Pricing
            </a>

            <a href="/templates" className="px-4 py-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/[0.04] transition text-sm">
              Templates
            </a>

            <SimpleDropdown
              title="Explore"
              items={explore}
              id="explore"
              activeDropdown={activeDropdown}
              setActiveDropdown={safeOpen}
              safeClose={safeClose}
            />

            <SimpleDropdown
              title="Support"
              items={support}
              id="support"
              activeDropdown={activeDropdown}
              setActiveDropdown={safeOpen}
              safeClose={safeClose}
            />

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2">

            {/* ✅ INTENT CTA (FIXED) */}
            {/* RIGHT */}
<div className="flex items-center gap-2">

  {/* WEBSITE CTA */}
  <div
    className="relative hidden md:flex"
    onClick={(e) => e.stopPropagation()}
  >

    <button
      onClick={() => setIntentOpen((prev) => !prev)}
      className="
        relative
        overflow-hidden
        bg-blue-600 hover:bg-blue-700
        px-5 py-2.5
        rounded-xl
        text-white text-sm font-medium
        shadow-[0_0_25px_rgba(59,130,246,0.35)]
        transition-all duration-300
      "
    >

      {/* GLOW */}
      <span
        className="
          absolute inset-0
          bg-gradient-to-r
          from-blue-400/0
          via-white/10
          to-blue-400/0
          translate-x-[-100%]
          hover:translate-x-[100%]
          transition-transform duration-1000
        "
      />

      <span className="relative z-10">
        Get Your Website
      </span>

    </button>

    {/* ANIMATED PANEL */}
{/* ANIMATED PANEL */}
<AnimatePresence>

  {intentOpen && (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -10,
        scale: 0.97,
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className="
        absolute
        top-[125%]
        right-0
        w-[430px]
        rounded-[28px]
        border border-white/[0.05]
        bg-[#0B1423]/55
        backdrop-blur-xl
        overflow-hidden
        shadow-[0_20px_60px_rgba(0,0,0,0.28)]
        z-[999]
      "
    >

      {/* HEADER */}
      <div
        className="
          px-5
          pt-5
          pb-4
          border-b border-white/[0.03]
        "
      >

        <p
          className="
            text-[10px]
            tracking-[0.28em]
            uppercase
            text-blue-400
            font-semibold
          "
        >
          QUICK START
        </p>

        <h3
          className="
            text-white
            text-lg
            font-semibold
            mt-2
          "
        >
          Choose Your Solution
        </h3>

      </div>

      {/* GRID */}
<div className="grid grid-cols-2 gap-3 p-4">

  {quickCategories.map((cat, i) => (
    <button
      key={i}
      onClick={() => {
        setIntentOpen(false);
        window.location.href = `/templates?category=${encodeURIComponent(cat)}`;
      }}
      className="
        group relative overflow-hidden
        rounded-2xl border border-white/[0.04]
        bg-white/[0.015]
        hover:bg-blue-500/[0.04]
        hover:border-blue-500/10
        p-4 text-left
        transition-all duration-300
      "
    >
      <div className="text-sm font-medium text-white group-hover:text-blue-400">
        {cat}
      </div>

      <div className="text-xs text-gray-400 mt-1">
        Explore {cat} templates
      </div>
    </button>
  ))}

  {/* OTHERS BUTTON */}
  <button
    onClick={() => {
      setIntentOpen(false);
      window.location.href = othersRoute;
    }}
    className="
      group relative overflow-hidden
      rounded-2xl border border-white/[0.04]
      bg-white/[0.015]
      hover:bg-blue-500/[0.04]
      hover:border-blue-500/10
      p-4 text-left
      transition-all duration-300
    "
  >
    <div className="text-sm font-medium text-white group-hover:text-blue-400">
      Others
    </div>

    <div className="text-xs text-gray-400 mt-1">
      View all templates
    </div>
  </button>

</div>

    </motion.div>
  )}

</AnimatePresence>

  </div>

  {/* MOBILE BUTTON */}
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="
      md:hidden
      w-10 h-10
      rounded-xl
      border border-white/10
      bg-white/[0.04]
      flex items-center justify-center
      text-white
    "
  >
    {menuOpen ? (
      <X size={20} />
    ) : (
      <Menu size={20} />
    )}
  </button>

</div>



          </div>
        </div>

      </div>
    </div>
  );
}

/* DROPDOWN */
function SimpleDropdown({
  title,
  items,
  activeDropdown,
  id,
  setActiveDropdown,
  safeClose,
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