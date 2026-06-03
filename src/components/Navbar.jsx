import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom"; // Added for active state

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

  const location = useLocation(); // Added for active link detection

  const closeTimeout = useRef(null);
  const intentRef = useRef(null);

  const quickCategories = TEMPLATE_CATEGORIES.slice(0, 3);
  const othersRoute = "/templates"; // fallback page

  // Active link logic
  const isActive = (path) => {
    if (path === "/templates") {
      return location.pathname === "/templates";
    }
    if (path === "/pricing") {
      return location.pathname === "/pricing";
    }
    return location.pathname === path;
  };

  const isExploreActive = () => {
    return ["/blog", "/industries", "/about"].some(path => 
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

  const isSupportActive = () => {
    return ["/technical-support", "/book-consultation"].some(path => 
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

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
<a href="/" className="flex items-center gap-2 shrink-0 group">

  <img
    src="https://res.cloudinary.com/diszilwhc/image/upload/v1778360837/20260510_010555_jissyl.png"
    alt="NOVA Elite Systems"
    className="h-7 md:h-10 object-contain"
  />

  {/* BRAND TEXT */}
  <div className="flex flex-col leading-none">
    <span className="text-white font-semibold tracking-[0.18em] text-sm md:text-base">
      NOVA
    </span>

    <span className="text-[9px] md:text-[10px] text-gray-400 tracking-[0.25em] uppercase">
      Elite Systems
    </span>
  </div>

</a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-1">

            {/* SOLUTIONS */}
            <div
              className="relative"
              onMouseEnter={() => safeOpen("solutions")}
              onMouseLeave={safeClose}
            >
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/[0.04] transition text-sm relative group">
                Solutions
                <ChevronDown size={16} />
                {/* Active indicator for Solutions (if any solution page is active) */}
                {(location.pathname.startsWith("/services/")) && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6] shadow-blue-500"
                  />
                )}
              </button>

{activeDropdown === "solutions" && (
  <div
    className="
      absolute top-[120%] left-0
      w-[500px]
      rounded-[26px]
      border border-white/[0.08]
      bg-[#0A1324]/80
      backdrop-blur-2xl
      p-4
      shadow-[0_30px_80px_rgba(0,0,0,0.55)]
      overflow-hidden
    "
    onMouseEnter={() => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    }}
    onMouseLeave={safeClose}
  >
    <div className="grid grid-cols-2 gap-5">

      {/* DIGITAL */}
      <div>
        <p className="text-[10px] tracking-[0.35em] text-blue-400 font-semibold mb-3">
          DIGITAL
        </p>

        <div className="space-y-2">
          {digitalSolutions.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="
                group relative flex items-start gap-3
                p-3 rounded-2xl
                border border-white/[0.04]
                bg-white/[0.02]
                hover:bg-blue-500/[0.06]
                hover:border-blue-500/20
                transition-all duration-300
              "
            >
              <div className="text-blue-400 mt-0.5">
                {item.icon}
              </div>

              <div>
                <h3 className="text-sm font-medium text-white group-hover:text-blue-300 transition">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5 leading-snug">
                  {item.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* INFRASTRUCTURE */}
      <div>
        <p className="text-[10px] tracking-[0.35em] text-blue-400 font-semibold mb-3">
          INFRASTRUCTURE
        </p>

        <div className="space-y-2">
          {infraSolutions.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="
                group relative flex items-start gap-3
                p-3 rounded-2xl
                border border-white/[0.04]
                bg-white/[0.02]
                hover:bg-blue-500/[0.06]
                hover:border-blue-500/20
                transition-all duration-300
              "
            >
              <div className="text-blue-400 mt-0.5">
                {item.icon}
              </div>

              <div>
                <h3 className="text-sm font-medium text-white group-hover:text-blue-300 transition">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5 leading-snug">
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

            <a 
              href="/pricing" 
              className={`px-4 py-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/[0.04] transition text-sm relative group ${isActive("/pricing") ? "text-white" : ""}`}
            >
              Pricing
              {isActive("/pricing") && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6] shadow-blue-500"
                />
              )}
            </a>

            <a 
              href="/templates" 
              className={`px-4 py-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/[0.04] transition text-sm relative group ${isActive("/templates") ? "text-white" : ""}`}
            >
              Templates
              {isActive("/templates") && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6] shadow-blue-500"
                />
              )}
            </a>

            <SimpleDropdown
              title="Explore"
              items={explore}
              id="explore"
              activeDropdown={activeDropdown}
              setActiveDropdown={safeOpen}
              safeClose={safeClose}
              isActive={isExploreActive()}
            />

            <SimpleDropdown
              title="Support"
              items={support}
              id="support"
              activeDropdown={activeDropdown}
              setActiveDropdown={safeOpen}
              safeClose={safeClose}
              isActive={isSupportActive()}
            />

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2">

            {/* ✅ INTENT CTA (FIXED) */}
            <div className="flex items-center gap-2">

              {/* WEBSITE CTA */}
              <div
                className="relative hidden md:flex"
                onClick={(e) => e.stopPropagation()}
              >

<motion.button
  onClick={() => setIntentOpen((prev) => !prev)}
  animate={{
    borderRadius: intentOpen ? "9999px" : "16px",
    width: intentOpen ? 52 : 180, // ✅ FIX: no auto
  }}
  transition={{ duration: 0.25, ease: "easeInOut" }}
  className="
    relative overflow-hidden
    flex items-center justify-center
    h-[44px]
    bg-black/70 backdrop-blur-xl
    border border-blue-500/30
    text-white
    shadow-[0_0_25px_-5px] shadow-blue-500
    hover:border-blue-400 hover:shadow-[0_0_45px_-5px] hover:shadow-indigo-500
  "
>
  {/* shimmer */}
  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100" />

  {/* CONTENT (no layout shift) */}
  <span className="relative flex items-center justify-center z-10">
    <AnimatePresence mode="wait">
      {!intentOpen ? (
        <motion.span
          key="text"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15 }}
          className="flex items-center gap-2 whitespace-nowrap"
        >
          Pick Your Website
          <span className="text-blue-400">✦</span>
        </motion.span>
      ) : (
        <motion.span
          key="icon"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.15 }}
        >
          <X size={22} strokeWidth={3} />
        </motion.span>
      )}
    </AnimatePresence>
  </span>
</motion.button>

{/* ANIMATED PANEL */}
<AnimatePresence>
  {intentOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="
        absolute
        top-[125%]
        right-0
        w-[380px]
        rounded-[22px]
        border border-white/[0.08]
        bg-[#0A1324]/92
        backdrop-blur-2xl
        overflow-hidden
        shadow-[0_30px_70px_rgba(0,0,0,0.5)]
        z-[999]
      "
    >
      {/* HEADER */}
      <div className="px-5 pt-5 pb-4 border-b border-white/[0.06]">
        <p className="text-[9px] tracking-[0.4em] uppercase text-blue-400 font-semibold">
          QUICK START
        </p>
        <h3 className="text-white text-lg font-semibold mt-1">
          Choose a Solution
        </h3>
      </div>

      {/* GRID (now LIST STYLE) */}
      <div className="p-3 space-y-2">

        {quickCategories.map((cat, i) => (
          <motion.button
            key={i}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setIntentOpen(false);
              window.location.href = `/templates?category=${encodeURIComponent(cat)}`;
            }}
            className="
              w-full flex items-center justify-between
              px-4 py-3
              rounded-xl
              border border-white/[0.06]
              bg-white/[0.02]
              hover:bg-blue-500/[0.06]
              hover:border-blue-500/20
              transition-all duration-200
              group
            "
          >
            <div className="text-left">
              <div className="text-sm font-medium text-white group-hover:text-blue-300">
                {cat}
              </div>
              <div className="text-xs text-gray-400 mt-0.5">
                Templates & solutions
              </div>
            </div>

            <div className="text-gray-500 group-hover:text-blue-400 transition">
              →
            </div>
          </motion.button>
        ))}

        {/* DIVIDER */}
        <div className="h-[1px] bg-white/[0.05] my-2" />

        {/* OTHERS */}
        <motion.button
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            setIntentOpen(false);
            window.location.href = othersRoute;
          }}
          className="
            w-full flex items-center justify-between
            px-4 py-3
            rounded-xl
            border border-white/[0.06]
            bg-white/[0.02]
            hover:bg-blue-500/[0.06]
            hover:border-blue-500/20
            transition-all duration-200
            group
          "
        >
          <div className="text-left">
            <div className="text-sm font-medium text-white group-hover:text-blue-300">
              View All Templates
            </div>
            <div className="text-xs text-gray-400 mt-0.5">
              Browse complete collection
            </div>
          </div>

          <div className="text-gray-500 group-hover:text-blue-400 transition">
            →
          </div>
        </motion.button>

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

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-3 rounded-2xl border border-white/10 bg-[#081120]/95 backdrop-blur-xl p-4"
            >
              <div className="flex flex-col gap-2 text-sm text-white">

                {/* SOLUTIONS (mobile dropdown) */}
                <button
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === "solutions" ? null : "solutions"
                    )
                  }
                  className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  Solutions
                  <ChevronDown
                    size={16}
                    className={`transition ${
                      mobileDropdown === "solutions" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileDropdown === "solutions" && (
                  <div className="pl-3 pb-2 space-y-3">

                    <p className="text-[10px] text-blue-400 tracking-widest mt-2">
                      DIGITAL
                    </p>

                    {digitalSolutions.map((item, i) => (
                      <a
                        key={i}
                        href={item.link}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-start gap-2 text-gray-300 hover:text-white"
                      >
                        {item.icon}
                        <div>
                          <p className="text-sm">{item.title}</p>
                          <p className="text-xs text-gray-500">{item.desc}</p>
                        </div>
                      </a>
                    ))}

                    <p className="text-[10px] text-blue-400 tracking-widest mt-3">
                      INFRASTRUCTURE
                    </p>

                    {infraSolutions.map((item, i) => (
                      <a
                        key={i}
                        href={item.link}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-start gap-2 text-gray-300 hover:text-white"
                      >
                        {item.icon}
                        <div>
                          <p className="text-sm">{item.title}</p>
                          <p className="text-xs text-gray-500">{item.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                )}

                {/* SIMPLE LINKS */}
                <a
                  href="/pricing"
                  onClick={() => setMenuOpen(false)}
                  className={`py-2 px-3 rounded-lg hover:bg-white/5 ${isActive("/pricing") ? "text-blue-400" : ""}`}
                >
                  Pricing
                </a>

                <a
                  href="/templates"
                  onClick={() => setMenuOpen(false)}
                  className={`py-2 px-3 rounded-lg hover:bg-white/5 ${isActive("/templates") ? "text-blue-400" : ""}`}
                >
                  Templates
                </a>

                {/* EXPLORE */}
                <button
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === "explore" ? null : "explore"
                    )
                  }
                  className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  Explore
                  <ChevronDown
                    size={16}
                    className={`transition ${
                      mobileDropdown === "explore" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileDropdown === "explore" && (
                  <div className="pl-3 space-y-2">
                    {explore.map((item, i) => (
                      <a
                        key={i}
                        href={item.link}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-start gap-2 text-gray-300 hover:text-white"
                      >
                        {item.icon}
                        <div>
                          <p className="text-sm">{item.title}</p>
                          <p className="text-xs text-gray-500">{item.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                )}

                {/* SUPPORT */}
                <button
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === "support" ? null : "support"
                    )
                  }
                  className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  Support
                  <ChevronDown
                    size={16}
                    className={`transition ${
                      mobileDropdown === "support" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileDropdown === "support" && (
                  <div className="pl-3 space-y-2">
                    {support.map((item, i) => (
                      <a
                        key={i}
                        href={item.link}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-start gap-2 text-gray-300 hover:text-white"
                      >
                        {item.icon}
                        <div>
                          <p className="text-sm">{item.title}</p>
                          <p className="text-xs text-gray-500">{item.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
  isActive = false, // Added prop
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

      <button className={`flex items-center gap-2 px-4 py-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/[0.04] transition text-sm relative group ${isActive ? "text-white" : ""}`}>
        {title}
        <ChevronDown size={16} />
        {isActive && (
          <motion.div
            layoutId="activeDot"
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6] shadow-blue-500"
          />
        )}
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