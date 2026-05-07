import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-3 md:top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl">

      <div
        className="
          relative
          rounded-xl
          bg-white/5
          backdrop-blur-lg
          border border-white/10
          shadow-lg
        "
      >

        {/* TOP BAR */}
        <div
          className="
            flex items-center justify-between
            px-4 md:px-6
            py-3
          "
        >

          {/* LOGO */}
          <div className="flex items-center shrink-0">
            <a href="/" className="flex items-center">
              <img
                src="https://res.cloudinary.com/diszilwhc/image/upload/v1777939226/IMG_20260422_200643_073_fdpjkb.webp"
                alt="NOVA Elite Systems"
                className="
                  h-7 md:h-10
                  object-contain
                  drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]
                "
              />
            </a>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex gap-6 text-gray-300 text-sm">
            <a href="#" className="hover:text-white transition">
              Home
            </a>

            <a href="#" className="hover:text-white transition">
              Services
            </a>

            <a href="#" className="hover:text-white transition">
              Our Work
            </a>

            <a href="#" className="hover:text-white transition">
              About
            </a>

            <a href="/contact" className="hover:text-white transition">
              Contact
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2">

            {/* DESKTOP CTA */}
            <button
              className="
                hidden md:flex
                bg-blue-600 hover:bg-blue-700
                px-5 py-2
                rounded-lg
                text-white text-sm
                shadow-md
                transition
              "
            >
              Get a Quote →
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                md:hidden
                w-10 h-10
                rounded-lg
                border border-white/10
                bg-white/[0.04]
                flex items-center justify-center
                text-white
              "
            >
              {menuOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all duration-300
            ${menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >

          <div
            className="
              px-4 pb-4
              border-t border-white/10
              flex flex-col gap-2
            "
          >

            {[
              "Home",
              "Services",
              "Our Work",
              "About",
              "Contact",
            ].map((item, index) => (
              <a
                key={index}
                href={item === "Contact" ? "/contact" : "#"}
                className="
                  text-gray-300
                  hover:text-white
                  transition
                  py-3 px-2
                  rounded-lg
                  hover:bg-white/[0.04]
                  text-sm
                "
              >
                {item}
              </a>
            ))}

            {/* MOBILE CTA */}
            <button
              className="
                mt-2
                bg-blue-600 hover:bg-blue-700
                py-3
                rounded-lg
                text-white text-sm
                shadow-md
                transition
              "
            >
              Get a Quote →
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}