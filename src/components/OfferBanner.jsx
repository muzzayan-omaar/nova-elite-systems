import { useEffect, useState } from "react";
import axios from "../api/axios";
import { Sparkles, X } from "lucide-react";

export default function OfferBanner() {
  const [offer, setOffer] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get("/offers").then((res) => {
      if (res.data.length > 0) {
        setOffer(res.data[0]);
      }
    });
  }, []);

  if (!offer) return null;

  return (
    <>
      {/* FLOATING PILL */}
      <div className="fixed bottom-5 md:bottom-6 right-5 md:right-6 z-40 animate-fadeIn">

        <button
          onClick={() => setOpen(true)}
          className="
            group flex items-center gap-3
            px-5 py-3
            rounded-full
            bg-white/[0.04]
            border border-white/10
            backdrop-blur-xl
            hover:border-blue-500/30
            transition
            shadow-[0_0_30px_rgba(59,130,246,0.12)]
          "
        >

          {/* ICON */}
          <div className="w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
            <Sparkles size={16} />
          </div>

          {/* TEXT */}
          <div className="text-left leading-tight">
            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400">
              Limited Offer
            </p>

            <p className="text-sm font-semibold text-white truncate max-w-[160px]">
              {offer.title}
            </p>

            <p className="text-xs text-blue-400">
              {offer.discount}% OFF
            </p>
          </div>

        </button>
      </div>

      {/* MODAL OVERLAY */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* BACKDROP */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* MODAL */}
          <div className="relative w-[90%] max-w-md rounded-2xl bg-[#0b1020] border border-white/10 p-6 shadow-2xl">

            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={18} />
            </button>

            {/* ICON */}
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-5">
              <Sparkles size={20} />
            </div>

            {/* TITLE */}
            <h2 className="text-xl font-semibold text-white">
              {offer.title}
            </h2>

            <p className="text-blue-400 mt-2 font-medium">
              Save {offer.discount}% instantly
            </p>

            {/* DESCRIPTION PLACEHOLDER (optional future backend field) */}
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              Limited time promotional offer available for selected services. Contact us now to activate your discount.
            </p>

            {/* CTA */}
            <button className="mt-6 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition text-sm font-medium">
              Claim Offer
            </button>

          </div>
        </div>
      )}
    </>
  );
}