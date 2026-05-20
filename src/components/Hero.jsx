import { useLanguage } from "../context/LanguageContext";
import { useEffect, useState } from "react";

export default function Hero() {
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
{/* BACKGROUND VIDEO */}
{/* BACKGROUND VIDEO */}
<video
  autoPlay
  muted
  loop
  playsInline
  className="
    absolute inset-0
    w-full h-full
    object-cover
    scale-110 md:scale-100
    opacity-45
  "
>
  <source
    src="https://cdn.coverr.co/videos/coverr-working-on-a-laptop-5176/1080p.mp4"
    type="video/mp4"
  />
</video>

{/* DARK OVERLAY */}
<div
  className="
    absolute inset-0
    bg-[#02050D]/65
  "
/>

{/* LEFT CINEMATIC FADE */}
<div
  className="
    absolute inset-0
    bg-gradient-to-r
    from-[#05070F]
    via-[#05070F]/92
    via-[#05070F]/72
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
              inline-flex
              items-center gap-2
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
              UAE DIGITAL & INFRASTRUCTURE SOLUTIONS
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

            <button
              className="
                bg-blue-600 hover:bg-blue-700
                px-6 py-3
                rounded-xl
                text-sm
                font-medium
                shadow-[0_0_30px_rgba(59,130,246,0.28)]
                transition-all duration-300
              "
            >
              Get Started →
            </button>

            <button
              className="
                border border-white/10
                bg-white/[0.03]
                hover:bg-white/[0.06]
                backdrop-blur-xl
                px-6 py-3
                rounded-xl
                text-sm
                font-medium
                transition-all duration-300
              "
            >
              View Our Work
            </button>

          </div>

        </div>
      </div>
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