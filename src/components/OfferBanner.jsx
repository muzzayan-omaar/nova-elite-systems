import { useEffect, useState } from "react";
import axios from "../api/axios";
import { Sparkles } from "lucide-react";

export default function OfferBanner() {
  const [offer, setOffer] = useState(null);

  useEffect(() => {
    axios.get("/offers").then((res) => {
      if (res.data.length > 0) {
        setOffer(res.data[0]);
      }
    });
  }, []);

  if (!offer) return null;

return (
  <div className="fixed bottom-5 md:bottom-6 right-5 md:right-6 z-40 animate-fadeIn">

    <div
      className="
        group
        relative
        flex items-center gap-4
        px-5 py-4
        rounded-2xl
        border border-white/10
        bg-gradient-to-r from-white/5 via-white/[0.03] to-white/5
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(59,130,246,0.12)]
        hover:border-blue-500/30
        transition-all duration-300
        w-[320px] md:w-[360px]
        overflow-hidden
      "
    >

      {/* GLOW LINE EFFECT */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute -top-10 left-0 w-full h-20 bg-blue-500/10 blur-2xl" />
      </div>

      {/* ICON */}
      <div
        className="
          w-11 h-11
          rounded-xl
          bg-blue-500/10
          flex items-center justify-center
          text-blue-400
          shrink-0
        "
      >
        <Sparkles size={18} />
      </div>

      {/* TEXT */}
      <div className="flex-1 leading-tight">

        <p className="text-[11px] text-gray-400 tracking-[0.2em] uppercase">
          Limited Time Offer
        </p>

        <h3 className="text-white font-semibold text-sm mt-1 line-clamp-1">
          {offer.title}
        </h3>

        <p className="text-blue-400 text-xs mt-1 font-medium">
          Save {offer.discount}% instantly
        </p>

      </div>

      {/* CTA DOT */}
      <div className="flex flex-col items-end gap-1">
        <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
        <span className="text-[10px] text-gray-500">Live</span>
      </div>

    </div>
  </div>
);
}