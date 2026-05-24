// src/components/WhatsAppButton.jsx

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const phoneNumber = "971582469913"; // your number

  const message =
    "Hi, I'm interested in getting a website built by NOVA Elite Systems.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      {/* LABEL */}
      <div
        className={`
          hidden md:block
          transition-all duration-300
          text-sm text-white
          bg-black/40 backdrop-blur-xl
          border border-white/10
          px-4 py-2 rounded-full
          ${hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"}
        `}
      >
        Chat on WhatsApp
      </div>

      {/* BUTTON */}
      <div
        className="
          relative
          w-14 h-14
          rounded-full
          bg-[#25D366]
          flex items-center justify-center
          shadow-[0_0_30px_rgba(37,211,102,0.35)]
          hover:scale-110
          transition-transform duration-300
        "
      >
        {/* pulse */}
        <span className="absolute inset-0 rounded-full bg-white/20 animate-ping" />

        <FaWhatsapp size={26} className="text-white relative z-10" />
      </div>
    </a>
  );
}