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
        relative
        flex items-center gap-4
        px-5 py-3
        rounded-full
        bg-white/[0.04]
        backdrop-blur-xl
        border border-white/10
        hover:border-blue-500/30
        transition-all duration-300
        shadow-[0_0_30px_rgba(59,130,246,0.12)]
        overflow-hidden
        max-w-[340px]
      "
    >

      {/* SOFT GLOW UNDERLAY */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-500/10 blur-2xl rounded-full" />
      </div>

      {/* ICON */}
      <div
        className="
          w-9 h-9
          rounded-full
          bg-blue-500/10
          flex items-center justify-center
          text-blue-400
          shrink-0
        "
      >
        <Sparkles size={16} />
      </div>

      {/* TEXT */}
      <div className="flex-1 leading-tight min-w-0">

        <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400">
          Limited Offer
        </p>

        <h3 className="text-white text-sm font-semibold truncate">
          {offer.title}
        </h3>

        <p className="text-blue-400 text-xs mt-0.5">
          {offer.discount}% OFF
        </p>

      </div>

      {/* RIGHT DOT */}
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(34,197,94,0.8)]" />
      </div>

    </div>
  </div>
);
}