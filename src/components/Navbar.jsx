import { useState } from "react";
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
  CircleHelp,
  MessageCircle,
  Info,
} from "lucide-react";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const digitalSolutions = [
    {
      icon: <Code2 size={18} />,
      title: "Web Development",
      desc: "Modern responsive business websites",
    },
    {
      icon: <Smartphone size={18} />,
      title: "App Development",
      desc: "Custom mobile app solutions",
    },
    {
      icon: <Cloud size={18} />,
      title: "SaaS Applications",
      desc: "Cloud automation platforms",
    },
  ];

  const infraSolutions = [
    {
      icon: <Camera size={18} />,
      title: "CCTV Systems",
      desc: "Enterprise surveillance systems",
    },
    {
      icon: <Fingerprint size={18} />,
      title: "Access Control",
      desc: "Smart secure access systems",
    },
    {
      icon: <Network size={18} />,
      title: "Networking",
      desc: "Reliable infrastructure solutions",
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

      <div
        className="
          relative
          rounded-2xl
          bg-[#07111F]/80
          backdrop-blur-2xl
          border border-white/10
          shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        "
      >

        {/* TOP BAR */}
        <div
          className="
            flex items-center justify-between
            px-4 md:px-6
            py-3
          "
        >

          {/* LOGO */}
          <a href="/" className="shrink-0">
            <img
              src="https://res.cloudinary.com/diszilwhc/image/upload/v1777939226/IMG_20260422_200643_073_fdpjkb.webp"
              alt="NOVA Elite Systems"
              className="
                h-7 md:h-10
                object-contain
                drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]
              "
            />
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-1">

            {/* SOLUTIONS */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="
                  flex items-center gap-2
                  px-4 py-2
                  rounded-xl
                  text-gray-300
                  hover:text-white
                  hover:bg-white/[0.04]
                  transition
                  text-sm
                "
              >
                Solutions
                <ChevronDown size={16} />
              </button>

              {activeDropdown === "solutions" && (
                <div
                  className="
                    absolute
                    top-[120%]
                    left-0
                    w-[520px]
                    rounded-[24px]
                    border border-white/10
                    bg-[#081120]/95
                    backdrop-blur-2xl
                    p-5
                    shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                  "
                >

                  <div className="grid grid-cols-2 gap-8">

                    {/* LEFT */}
                    <div>
                      <p
                        className="
                          text-[11px]
                          tracking-[0.2em]
                          text-blue-500
                          font-semibold
                          mb-4
                        "
                      >
                        DIGITAL SOLUTIONS
                      </p>

                      <div className="space-y-4">
                        {digitalSolutions.map((item, index) => (
                          <a
                            key={index}
                            href="#"
                            className="
                              flex items-start gap-3
                              group
                            "
                          >

                            <div
                              className="
                                text-blue-500
                                mt-1
                              "
                            >
                              {item.icon}
                            </div>

                            <div>
                              <h3
                                className="
                                  text-white
                                  text-sm
                                  font-medium
                                  group-hover:text-blue-400
                                  transition
                                "
                              >
                                {item.title}
                              </h3>

                              <p
                                className="
                                  text-xs
                                  text-gray-400
                                  mt-1
                                  leading-relaxed
                                "
                              >
                                {item.desc}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div>
                      <p
                        className="
                          text-[11px]
                          tracking-[0.2em]
                          text-blue-500
                          font-semibold
                          mb-4
                        "
                      >
                        INFRASTRUCTURE & SECURITY
                      </p>

                      <div className="space-y-4">
                        {infraSolutions.map((item, index) => (
                          <a
                            key={index}
                            href="#"
                            className="
                              flex items-start gap-3
                              group
                            "
                          >

                            <div
                              className="
                                text-blue-500
                                mt-1
                              "
                            >
                              {item.icon}
                            </div>

                            <div>
                              <h3
                                className="
                                  text-white
                                  text-sm
                                  font-medium
                                  group-hover:text-blue-400
                                  transition
                                "
                              >
                                {item.title}
                              </h3>

                              <p
                                className="
                                  text-xs
                                  text-gray-400
                                  mt-1
                                  leading-relaxed
                                "
                              >
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
            <a
              href="/pricing"
              className="
                px-4 py-2
                rounded-xl
                text-gray-300
                hover:text-white
                hover:bg-white/[0.04]
                transition
                text-sm
              "
            >
              Pricing
            </a>

            {/* EXPLORE */}
            <SimpleDropdown
              title="Explore"
              items={explore}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              id="explore"
            />

            {/* SUPPORT */}
            <SimpleDropdown
              title="Support"
              items={support}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              id="support"
            />

          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2">

            {/* LANGUAGE 
<div className="relative group hidden md:block">
  <button
    className="
      flex items-center gap-2
      px-3 py-2
      rounded-xl
      border border-white/10
      bg-white/[0.03]
      text-sm text-gray-300
      hover:border-blue-500/30
      transition
    "
  >
    <Globe size={16} />
    {language.toUpperCase()}
  </button>

  <div
    className="
      absolute
      top-[120%]
      right-0
      w-32
      rounded-2xl
      border border-white/10
      bg-[#081120]/95
      backdrop-blur-2xl
      overflow-hidden
      opacity-0 invisible
      group-hover:opacity-100
      group-hover:visible
      transition-all duration-200
    "
  >
    <button
      onClick={() => setLanguage("en")}
      className="
        w-full text-left
        px-4 py-3
        text-sm text-gray-300
        hover:bg-white/[0.04]
        hover:text-white
        transition
      "
    >
      🇺🇸 English
    </button>

    <button
      onClick={() => setLanguage("ar")}
      className="
        w-full text-left
        px-4 py-3
        text-sm text-gray-300
        hover:bg-white/[0.04]
        hover:text-white
        transition
      "
    >
      🇦🇪 العربية
    </button>
  </div>
</div>*/}

            {/* CTA */}
            <button
              className="
                hidden md:flex
                bg-blue-600 hover:bg-blue-700
                px-5 py-2.5
                rounded-xl
                text-white text-sm
                shadow-[0_0_20px_rgba(59,130,246,0.25)]
                transition
              "
            >
              Get Started
            </button>

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

        {/* MOBILE MENU */}
{/* MOBILE MENU */}
<div
  className={`
    md:hidden
    overflow-hidden
    transition-all duration-300
    ${menuOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"}
  `}
>

  <div className="px-4 pb-5 border-t border-white/10">

    {/* SOLUTIONS */}
    <div className="border-b border-white/5">

      <button
        onClick={() =>
          setMobileDropdown(
            mobileDropdown === "solutions"
              ? null
              : "solutions"
          )
        }
        className="
          w-full
          flex items-center justify-between
          py-4
          text-left
          text-gray-300
        "
      >
        Solutions

        <ChevronDown
          size={16}
          className={`transition ${
            mobileDropdown === "solutions"
              ? "rotate-180"
              : ""
          }`}
        />
      </button>

      {mobileDropdown === "solutions" && (
        <div className="pb-4 space-y-5">

          {/* DIGITAL */}
          <div>
            <p className="text-[11px] tracking-[0.2em] text-blue-500 font-semibold mb-3">
              DIGITAL SOLUTIONS
            </p>

            <div className="space-y-4">
              {digitalSolutions.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-start gap-3"
                >
                  <div className="text-blue-500 mt-1">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-white text-sm font-medium">
                      {item.title}
                    </h3>

                    <p className="text-xs text-gray-400 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* INFRA */}
          <div>
            <p className="text-[11px] tracking-[0.2em] text-blue-500 font-semibold mb-3">
              INFRASTRUCTURE & SECURITY
            </p>

            <div className="space-y-4">
              {infraSolutions.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-start gap-3"
                >
                  <div className="text-blue-500 mt-1">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-white text-sm font-medium">
                      {item.title}
                    </h3>

                    <p className="text-xs text-gray-400 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>

    {/* PRICING */}
    <a
      href="/pricing"
      className="
        block
        py-4
        text-gray-300
        border-b border-white/5
      "
    >
      Pricing
    </a>

    {/* EXPLORE */}
    <div className="border-b border-white/5">

      <button
        onClick={() =>
          setMobileDropdown(
            mobileDropdown === "explore"
              ? null
              : "explore"
          )
        }
        className="
          w-full
          flex items-center justify-between
          py-4
          text-left
          text-gray-300
        "
      >
        Explore

        <ChevronDown
          size={16}
          className={`transition ${
            mobileDropdown === "explore"
              ? "rotate-180"
              : ""
          }`}
        />
      </button>

      {mobileDropdown === "explore" && (
        <div className="pb-4 space-y-4">

          {explore.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex items-start gap-3"
            >
              <div className="text-blue-500 mt-1">
                {item.icon}
              </div>

              <div>
                <h3 className="text-white text-sm font-medium">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-400 mt-1">
                  {item.desc}
                </p>
              </div>
            </a>
          ))}

        </div>
      )}
    </div>

    {/* SUPPORT */}
    <div>

      <button
        onClick={() =>
          setMobileDropdown(
            mobileDropdown === "support"
              ? null
              : "support"
          )
        }
        className="
          w-full
          flex items-center justify-between
          py-4
          text-left
          text-gray-300
        "
      >
        Support

        <ChevronDown
          size={16}
          className={`transition ${
            mobileDropdown === "support"
              ? "rotate-180"
              : ""
          }`}
        />
      </button>

      {mobileDropdown === "support" && (
        <div className="pb-4 space-y-4">

          {support.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex items-start gap-3"
            >
              <div className="text-blue-500 mt-1">
                {item.icon}
              </div>

              <div>
                <h3 className="text-white text-sm font-medium">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-400 mt-1">
                  {item.desc}
                </p>
              </div>
            </a>
          ))}

        </div>
      )}
    </div>

    {/* CTA */}
    <button
      className="
        w-full
        mt-5
        bg-blue-600 hover:bg-blue-700
        py-3.5
        rounded-xl
        text-white text-sm
        transition
      "
    >
      Get Started
    </button>

  </div>

</div>

      </div>
    </div>
  );
}

function SimpleDropdown({
  title,
  items,
  activeDropdown,
  setActiveDropdown,
  id,
}) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setActiveDropdown(id)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button
        className="
          flex items-center gap-2
          px-4 py-2
          rounded-xl
          text-gray-300
          hover:text-white
          hover:bg-white/[0.04]
          transition
          text-sm
        "
      >
        {title}
        <ChevronDown size={16} />
      </button>

      {activeDropdown === id && (
        <div
          className="
            absolute
            top-[120%]
            left-0
            w-[280px]
            rounded-[22px]
            border border-white/10
            bg-[#081120]/95
            backdrop-blur-2xl
            p-5
            shadow-[0_20px_60px_rgba(0,0,0,0.45)]
          "
        >

          <div className="space-y-4">

            {items.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="
                  flex items-start gap-3
                  group
                "
              >

                <div className="text-blue-500 mt-1">
                  {item.icon}
                </div>

                <div>
                  <h3
                    className="
                      text-white
                      text-sm
                      font-medium
                      group-hover:text-blue-400
                      transition
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-xs
                      text-gray-400
                      mt-1
                      leading-relaxed
                    "
                  >
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