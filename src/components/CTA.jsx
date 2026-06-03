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


<a
  href="https://wa.me/971582469913"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group relative
    inline-flex items-center justify-center
    gap-3

    min-w-[210px]
    px-8 py-4

    rounded-2xl

    bg-black/40 backdrop-blur-xl
    border border-green-500/20

    text-white font-semibold text-lg

    shadow-[0_0_25px_rgba(34,197,94,0.15)]
    hover:shadow-[0_0_45px_rgba(34,197,94,0.25)]

    hover:border-green-400/40
    hover:scale-[1.03]
    active:scale-[0.98]

    transition-all duration-300
    overflow-hidden
  "
>
  {/* shimmer sweep */}
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />

  {/* ICON */}
  <FaWhatsapp
    className="
      text-green-400
      group-hover:scale-110
      transition-transform duration-300
    "
    size={20}
  />

  {/* TEXT */}
  <span className="relative z-10">
    WhatsApp Us
  </span>
</a>
          </div>
        </div>
      </div>
    </section>
  );
}