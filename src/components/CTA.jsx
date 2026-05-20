import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="px-6 pb-24 text-white">
      <div
        className="
          relative overflow-hidden
          max-w-7xl mx-auto
          rounded-[28px]
          border border-white/10
          bg-[#081120]
          px-8 md:px-14
          py-10 md:py-12
        "
      >

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          {/* LEFT WAVE */}
          <div
            className="
              absolute
              left-[-120px]
              bottom-[-120px]
              w-[500px]
              h-[500px]
              rounded-full
              border border-blue-500/20
              blur-[2px]
            "
          />

          <div
            className="
              absolute
              left-[-80px]
              bottom-[-140px]
              w-[500px]
              h-[500px]
              rounded-full
              border border-blue-500/10
            "
          />

          {/* RIGHT WAVE */}
          <div
            className="
              absolute
              right-[-150px]
              top-[-140px]
              w-[500px]
              h-[500px]
              rounded-full
              border border-blue-500/20
              blur-[2px]
            "
          />

          <div
            className="
              absolute
              right-[-100px]
              top-[-120px]
              w-[500px]
              h-[500px]
              rounded-full
              border border-blue-500/10
            "
          />

          {/* CENTER GLOW */}
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_60%)]
            "
          />
        </div>

        {/* CONTENT */}
        <div
          className="
            relative z-10
            flex flex-col lg:flex-row
            items-center justify-between
            gap-8
          "
        >

          {/* LEFT TEXT */}
          <div className="max-w-2xl">

            <h2
              className="
              text-3xl md:text-4xl lg:text-5xl
                font-black
                leading-[1.05]
                tracking-[-0.03em]
              "
            >
              Ready to{" "}
              <span className="text-blue-500">
                Build
              </span>{" "}
              or{" "}
              <span className="text-blue-500">
                Upgrade
              </span>{" "}
              Your Systems?
            </h2>

            <p
              className="
               mt-4
text-gray-400
text-base
                leading-relaxed
                max-w-xl
              "
            >
              Let’s create powerful digital platforms and
              secure infrastructure solutions that move
              your business forward.
            </p>
          </div>

          {/* BUTTONS */}
          <div
            className="
              flex flex-col sm:flex-row
              gap-5
              w-full lg:w-auto
            "
          >

            {/* PRIMARY BUTTON */}
<Link
  to="/book-consultation"
  className="
    group
    relative overflow-hidden
    min-w-[210px]
    px-8 py-4
    rounded-xl
    bg-blue-600
    hover:bg-blue-500
    transition-all duration-300
    font-semibold
    text-base
    shadow-[0_0_35px_rgba(59,130,246,0.35)]
    inline-flex items-center justify-center
  "
>
  {/* BUTTON GLOW */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-r
      from-white/10
      to-transparent
      opacity-40
    "
  />

  <span className="relative z-10 flex items-center justify-center gap-3">
    Get a Quote
    <ArrowRight
      size={20}
      className="group-hover:translate-x-1 transition"
    />
  </span>
</Link>

            {/* SECONDARY BUTTON */}
    <a
  href="https://wa.me/971582469913"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    min-w-[210px]
    px-8 py-4
    rounded-xl
    border border-white/10
    bg-white/[0.02]
    hover:border-green-500/40
    hover:bg-white/[0.04]
    transition-all duration-300
    font-semibold
    text-lg
    backdrop-blur-xl
    inline-flex items-center justify-center
  "
>
  <span className="flex items-center justify-center gap-3">
    <FaWhatsapp className="text-green-500" size={18} />
    WhatsApp Us
  </span>
</a>
          </div>
        </div>
      </div>
    </section>
  );
}