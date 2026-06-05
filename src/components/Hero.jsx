import { useLanguage } from "../context/LanguageContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

const MotionLink = motion(Link);




export default function Hero() {
    const [hovered, setHovered] = useState(false);
  const { t } = useLanguage();

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#05070F]
        text-white
      "
    >

      {/* BACKGROUND IMAGE */}
      <img
        src="https://res.cloudinary.com/diszilwhc/image/upload/v1777984942/globe1_g9sjcl.jpg"
        alt="hero"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          scale-110 md:scale-100
          opacity-75
        "
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* LEFT FADE */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-[#05070F]
          via-[#05070F]/90
          via-[#05070F]/70
          to-transparent
        "
      />

      {/* GLOW */}
      <div
        className="
          absolute
          left-[-120px]
          top-1/2
          -translate-y-1/2
          w-[420px]
          h-[420px]
          bg-blue-500/10
          blur-[120px]
          rounded-full
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative z-10
          max-w-7xl
          mx-auto
          min-h-screen
          flex items-center
          px-6 md:px-10
        "
      >

        <div className="max-w-2xl pl-2 md:pl-8 lg:pl-14">

{/* TOP BADGE */}
<div
  className="
    inline-flex items-center gap-2
    px-3 py-1.5
    rounded-full
    border border-blue-500/20
    bg-blue-500/10
    backdrop-blur-xl
    mb-6
  "
>
  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />

  <span
    className="
      text-[10px]
      uppercase
      tracking-[0.22em]
      text-blue-400
      font-medium
    "
  >
    NOVA ELITE SYSTEMS
  </span>

  {/* Divider */}
  <span className="w-[1px] h-3 bg-white/10 mx-1" />

  {/* Reassurance */}
  <span
    className="
      text-[10px]
      uppercase
      tracking-[0.18em]
      text-gray-300
      font-medium
    "
  >
    Built 150+ Digital Systems & Platforms
  </span>
</div>

          {/* TITLE */}
          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-semibold
              leading-[1.05]
              tracking-[-0.04em]
              min-h-[100px] md:min-h-[130px]
            "
          >
                      <span
              className="
                bg-gradient-to-r
                from-blue-400
                to-cyan-300
                bg-clip-text
                text-transparent
              "
            >
              <TypingTitles />
            </span>


  
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-5
              text-sm
              sm:text-base
              leading-relaxed
              text-gray-300
              max-w-lg
            "
          >
            {t.heroDesc}
          </p>

          {/* BUTTONS */}
          <div
            className="
              flex flex-col sm:flex-row
              gap-3
              mt-8
            "
          >

<Link
  to="/pricing"
  className="
    relative
    inline-flex items-center justify-center
    px-7 py-3.5
    rounded-2xl
    text-sm font-medium text-white

    bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500
    shadow-[0_12px_45px_rgba(59,130,246,0.35)]

    transition-all duration-300
    hover:shadow-[0_18px_70px_rgba(59,130,246,0.55)]
    hover:scale-[1.04]
    active:scale-[0.98]

    overflow-hidden
  "
>
  {/* glow sweep */}
  <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition" />

  <span className="relative flex items-center gap-2">
    Get Started <span className="text-blue-100">→</span>
  </span>
</Link>

 <MotionLink
      to="/technical-support"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{
        borderRadius: hovered ? "9999px" : "16px",
        width: hovered ? 52 : 190,
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

        hover:border-blue-400
        hover:shadow-[0_0_45px_-5px] hover:shadow-indigo-500
      "
    >
      {/* shimmer */}
      <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* content */}
      <span className="relative flex items-center justify-center z-10">
        <AnimatePresence mode="wait">
          {!hovered ? (
            <motion.span
              key="text"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-2 whitespace-nowrap text-sm font-medium"
            >
              Technical Support
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
              <MessageCircle size={20} />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </MotionLink>

          </div>

        </div>
      </div>
      {/* TECHNOLOGY STACK */}
<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-24">

  <div className="text-center mt-24">

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
      { name: "AWS", logo: "https://img.icons8.com/color/48/amazon-web-services.png" },
      { name: "Google Cloud", logo: "https://cdn.simpleicons.org/googlecloud" },
      {
        name: "Hikvision",
        logo: "https://res.cloudinary.com/diszilwhc/image/upload/v1778460523/hikvision-seeklogo_ctapx5.png",
      },
    ].map((tech, index) => (
      <div
        key={index}
        className="group flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-all"
      >
        <div className="w-14 h-14 flex items-center justify-center">
          <img
            src={tech.logo}
            alt={tech.name}
            className="max-w-full max-h-full object-contain grayscale brightness-200 group-hover:grayscale-0 transition-all"
          />
        </div>

        <p className="text-xs text-gray-500 group-hover:text-gray-300">
          {tech.name}
        </p>
      </div>
    ))}
  </div>
</div>
{/* BOTTOM FADE INTO NEXT SECTION */}
<div
  className="
    absolute bottom-0 left-0 w-full h-64
    bg-gradient-to-b
    from-transparent
    via-[#05070F]/40
    to-[#050816]
    pointer-events-none
  "
/>
    </section>
  );
}
/* ========================= */
/* TYPING COMPONENT */
/* ========================= */

function TypingTitles() {
  const titles = [
    "Get Your Website Now!",
    "Need CCTV Systems?",
    "Launch In 24 Hours.",
    "Upgrade Your Business Today.",
    "Build Smarter Infrastructure.",
    "Secure Your Company.",
    "With NOVA, It’s Possible.",
  ];

  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[currentTitle];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(
          current.slice(0, displayedText.length + 1)
        );

        if (displayedText === current) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1600);
        }
      } else {
        setDisplayedText(
          current.slice(0, displayedText.length - 1)
        );

        if (displayedText === "") {
          setIsDeleting(false);

          setCurrentTitle(
            (prev) => (prev + 1) % titles.length
          );
        }
      }
    }, isDeleting ? 40 : 70);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitle]);

  return (
    <span>
      {displayedText}

      <span className="animate-pulse text-blue-400">
        |
      </span>
    </span>
  );
}