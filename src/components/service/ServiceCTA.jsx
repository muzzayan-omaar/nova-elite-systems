import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function ServiceCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-[#0B1220] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Build Something That Actually Grows Your Business?
        </h2>

        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Stop losing customers to outdated websites. Let’s build a modern system
          that brings leads, trust, and sales.
        </p>

<div className="flex flex-col sm:flex-row gap-4 justify-center">
  
  {/* Primary CTA */}
  <Link
    to="/start-project"
    className="
      group relative overflow-hidden
      flex items-center justify-center gap-2
      px-8 py-4
      rounded-2xl
      bg-cyan-500
      text-black
      font-semibold
      transition-all duration-300
      hover:-translate-y-1
      hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
    "
  >
    {/* Shine */}
    <span
      className="
        absolute inset-0
        -translate-x-full
        bg-gradient-to-r
        from-transparent
        via-white/30
        to-transparent
        group-hover:translate-x-full
        transition-transform
        duration-1000
      "
    />

    <span className="relative">
      Start Your Project
    </span>

    <ArrowRight
      size={18}
      className="
        relative
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
    />
  </Link>

  {/* Secondary CTA */}
<Link
  to="https://wa.me/972582469913/?text=Hi%20Nova%20Elite%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20schedule%20a%20call%3F"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    flex items-center justify-center gap-3
    px-8 py-4
    rounded-2xl
    border border-white/10
    bg-white/[0.03]
    backdrop-blur-xl
    text-white
    font-medium
    transition-all duration-300
    hover:-translate-y-1
    hover:border-cyan-500/30
    hover:bg-white/[0.05]
  "
>
  <MessageCircle
    size={18}
    className="
      text-[#25D366]
      transition-all
      duration-300
      group-hover:scale-110
    "
  />

  <span>Get Free Consultation</span>
</Link>
</div>

        <p className="text-gray-500 text-sm mt-6">
          Response time: usually within a few hours
        </p>
      </div>
    </section>
  );
}