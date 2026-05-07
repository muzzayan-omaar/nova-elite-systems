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
    <div
      className="
        fixed
        bottom-5 md:bottom-6
        right-5 md:right-6
        z-40
        animate-fadeIn
      "
    >
      <div
        className="
          flex items-center gap-3 md:gap-4
          px-3 md:px-5
          py-3 md:py-4
          rounded-xl md:rounded-2xl
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          shadow-[0_0_30px_rgba(59,130,246,0.15)]
          hover:border-blue-500/30
          transition-all duration-300
          max-w-[260px] md:max-w-none
        "
      >

        {/* ICON */}
        <div
          className="
            w-10 h-10 md:w-12 md:h-12
            rounded-lg md:rounded-xl
            bg-blue-500/10
            flex items-center justify-center
            text-blue-500
            shrink-0
          "
        >
          <Sparkles size={18} className="md:w-[22px] md:h-[22px]" />
        </div>

        {/* TEXT */}
        <div className="leading-tight">

          <p className="text-[11px] md:text-sm text-gray-400">
            Limited Offer
          </p>

          <h3
            className="
              text-white
              font-semibold
              text-sm md:text-base
              line-clamp-1
            "
          >
            {offer.title}
          </h3>

          <p className="text-blue-500 text-xs md:text-sm mt-1">
            {offer.discount}% OFF
          </p>
        </div>

      </div>
    </div>
  );
}