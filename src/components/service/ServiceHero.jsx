// src/components/services/ServiceHero.jsx
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Check, ArrowRight, Sparkles, Star, MessageCircle } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function ServiceHero({
  badge,
  hook,
  title,
  description,
  mockups = [],
  trustItems = [],
  stats = [],
  serviceMode = "default",
    primaryCTA,
  secondaryCTA,
  primaryLink,
  secondaryLink,
  onPrimaryClick,
  onSecondaryClick,
}) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  // Mouse tracking for subtle tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left - rect.width / 2) / 40;
        const y = (e.clientY - rect.top - rect.height / 2) / 45;
        mouseX.set(x);
        mouseY.set(y);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Auto-rotate
  useEffect(() => {
    if (mockups.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mockups.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [mockups]);

  const modeColors = {
    default: { from: "cyan-500", to: "blue-600" },
    enterprise: { from: "indigo-600", to: "violet-600" },
    creative: { from: "fuchsia-500", to: "pink-600" },
  };
  const colors = modeColors[serviceMode] || modeColors.default;

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden flex items-center pt-20 pb-16 bg-[#05080F]"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute top-20 left-10 w-[680px] h-[680px] bg-cyan-400/10 rounded-full blur-[130px]" />
        <motion.div className="absolute bottom-32 right-12 w-[560px] h-[560px] bg-violet-400/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:85px_85px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-20 items-center">

          {/* LEFT - Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-3xl px-6 py-2 text-sm backdrop-blur-md">
              <Star className="text-amber-400" size={18} /> Trusted by industry leaders
            </motion.div>

            {badge && (
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 px-6 py-3 rounded-3xl border border-cyan-400/30 bg-cyan-500/10 backdrop-blur-xl">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 uppercase tracking-[3px] text-sm font-semibold">{badge}</span>
              </motion.div>
            )}

            {hook && <motion.p className="text-2xl font-light text-cyan-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{hook}</motion.p>}

            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-[4.4rem] leading-[1.05] tracking-tighter font-bold text-white">
              {title}
            </motion.h1>

            <motion.p className="text-xl text-gray-300 max-w-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              {description}
            </motion.p>

            {/* Floating KPI Cards */}
            {stats.length > 0 && (
              <div className="flex flex-wrap gap-6 pt-4">
                {stats.map((stat, i) => (
                  <motion.div key={i} whileHover={{ y: -8 }} className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl px-7 py-5 flex items-center gap-5 hover:border-cyan-400/30 transition-all">
                    <div className="text-cyan-400">{stat.icon}</div>
                    <div>
                      <div className="text-4xl font-semibold text-white">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

{/* CTAs */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.45 }}
  className="flex flex-col sm:flex-row gap-4 pt-6"
>

  {/* Primary CTA (modern gradient button) */}
<Link
  to={primaryLink}
  className="
    group relative overflow-hidden
    flex items-center justify-center gap-3
    px-10 py-5
    rounded-3xl
    bg-cyan-500
    text-black
    font-semibold text-lg
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
  "
>
  <span
    className="
      absolute inset-0
      -translate-x-full
      bg-gradient-to-r from-transparent via-white/30 to-transparent
      group-hover:translate-x-full
      transition-transform duration-1000
    "
  />

  <span className="relative">{primaryCTA}</span>

  <ArrowRight
    size={22}
    className="relative transition-transform duration-300 group-hover:translate-x-1"
  />
</Link>

  {/* Secondary CTA (glass button like WhatsApp style) */}
<a
  href={secondaryLink}
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    flex items-center justify-center gap-3
    px-10 py-5
    rounded-3xl
    border border-white/10
    bg-white/[0.03]
    backdrop-blur-xl
    text-white
    font-medium text-lg
    transition-all duration-300
    hover:-translate-y-1
    hover:border-cyan-500/30
    hover:bg-white/[0.05]
  "
>
  <MessageCircle
    size={20}
    className="
      text-[#25D366]
      transition-transform duration-300
      group-hover:scale-110
    "
  />

  <span>{secondaryCTA}</span>
</a>

</motion.div>

            {trustItems.length > 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-400">
                {trustItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="text-emerald-400" size={18} /> {item}
                  </div>
                ))}
              </motion.div>
            )}
          </div>

{/* RIGHT - Premium Floating Mockup Showcase */}
<motion.div
  style={{ y: cardY }}
  className="lg:col-span-5 relative flex justify-center items-center"
>
  <div className="relative w-full max-w-[600px] h-[560px] flex items-center justify-center">

    {/* Ambient Glow */}
    <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />
    <div className="absolute w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-[120px]" />

    <motion.div
      style={{
        rotateX: springY,
        rotateY: springX,
      }}
      className="relative w-full h-full"
    >

      {/* MAIN MOCKUP */}
      {mockups.length > 0 && (
        <motion.div
          key={activeIndex}
          initial={{
            opacity: 0,
            y: 260,
            rotate: -10,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            y: [0, -12, 0],
            rotate: 0,
            scale: 1,
          }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            rotate: { duration: 0.8 },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            z-30
            w-[92%]
          "
        >
          <img
            src={mockups[activeIndex]}
            alt="Project Showcase"
            className="
              w-full
              h-auto
              object-contain
              select-none
              pointer-events-none
              drop-shadow-[0_40px_100px_rgba(0,0,0,0.75)]
            "
          />
        </motion.div>
      )}

      {/* LEFT SUPPORTING MOCKUP */}
      {mockups.length > 1 && (
        <motion.div
          initial={{
            opacity: 0,
            x: -200,
            y: 100,
            rotate: -18,
          }}
          animate={{
            opacity: 0.55,
            x: 0,
            y: [0, 10, 0],
            rotate: -12,
          }}
          transition={{
            duration: 1,
            y: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
            absolute
            left-[-5%]
            top-[18%]
            w-[55%]
            z-10
          "
        >
          <img
            src={
              mockups[
                (activeIndex + 1) % mockups.length
              ]
            }
            alt="Supporting Mockup"
            className="
              w-full
              object-contain
              opacity-70
              blur-[1px]
              drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]
            "
          />
        </motion.div>
      )}

      {/* RIGHT SUPPORTING MOCKUP */}
      {mockups.length > 2 && (
        <motion.div
          initial={{
            opacity: 0,
            x: 200,
            y: 100,
            rotate: 18,
          }}
          animate={{
            opacity: 0.55,
            x: 0,
            y: [0, -10, 0],
            rotate: 12,
          }}
          transition={{
            duration: 1,
            delay: 0.15,
            y: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
            absolute
            right-[-5%]
            bottom-[15%]
            w-[55%]
            z-10
          "
        >
          <img
            src={
              mockups[
                (activeIndex + 2) % mockups.length
              ]
            }
            alt="Supporting Mockup"
            className="
              w-full
              object-contain
              opacity-70
              blur-[1px]
              drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]
            "
          />
        </motion.div>
      )}

      {/* Floating Badge */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-6
          right-2
          z-40
          px-5
          py-4
          rounded-2xl
          border
          border-white/10
          bg-[#0A1220]/80
          backdrop-blur-xl
          shadow-2xl
        "
      >
        <div className="text-xs uppercase tracking-[2px] text-cyan-400 mb-1">
          NOVA
        </div>

        <div className="text-white font-semibold">
          Custom Built
        </div>

        <div className="text-gray-400 text-sm">
          Scalable Solutions
        </div>
      </motion.div>

    </motion.div>
  </div>
</motion.div>
        </div>
      </div>
    </section>
  );
}