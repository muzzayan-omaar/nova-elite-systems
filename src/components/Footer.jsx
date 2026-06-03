import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="px-6 pb-10 text-white">
      <div
        className="
          max-w-7xl mx-auto
          rounded-[28px]
          border border-white/10
          bg-[#081120]
          overflow-hidden
          relative
        "
      >

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          <div
            className="
              absolute
              left-[-120px]
              top-[-120px]
              w-[350px]
              h-[350px]
              rounded-full
              bg-blue-500/10
              blur-3xl
            "
          />

          <div
            className="
              absolute
              right-[-100px]
              bottom-[-120px]
              w-[350px]
              h-[350px]
              rounded-full
              bg-blue-500/10
              blur-3xl
            "
          />
        </div>

        <div className="relative z-10 px-8 md:px-14 py-14">

          {/* TOP */}
          <div
            className="
              grid
              md:grid-cols-4
              gap-12
              pb-12
              border-b border-white/10
            "
          >

            {/* BRAND */}
            <div>
              <img
                src="https://res.cloudinary.com/diszilwhc/image/upload/v1777939226/IMG_20260422_200643_073_fdpjkb.webp"
                alt="NOVA Elite Systems"
                className="h-10 mb-5"
              />

              <p className="text-gray-400 leading-relaxed text-sm">
                Smart digital platforms and secure infrastructure
                systems built for modern businesses across Africa and beyond.
              </p>

{/* SOCIALS */}
{/* SOCIALS */}
<div className="flex gap-4 mt-6">

  {/* Instagram */}
  <a
    href="https://www.instagram.com/ssekateraymond/"
    className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] hover:border-pink-500/40 hover:bg-pink-500/10 transition flex items-center justify-center text-gray-300"
  >
    <FaInstagram size={18} />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/ssekateraymond/"
    className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] hover:border-blue-500/40 hover:bg-blue-500/10 transition flex items-center justify-center text-gray-300"
  >
    <FaLinkedinIn size={18} />
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/ssekateraymond/"
    className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] hover:border-blue-400/40 hover:bg-blue-400/10 transition flex items-center justify-center text-gray-300"
  >
    <FaFacebookF size={18} />
  </a>

  {/* Website */}
  <a
    href="https://www.novaelitesystems.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] hover:border-green-500/40 hover:bg-green-500/10 transition flex items-center justify-center text-gray-300"
  >
    <FaGlobe size={18} />
  </a>

</div>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="font-semibold text-lg mb-5">
                Services
              </h3>
<ul className="space-y-3 text-gray-400 text-sm">
  <li>
    <Link to="/services/web-development" className="hover:text-white transition">
      Web Development
    </Link>
  </li>

  <li>
    <Link to="/services/app-development" className="hover:text-white transition">
      App Development
    </Link>
  </li>

  <li>
    <Link to="/services/saas-applications" className="hover:text-white transition">
      SaaS Applications
    </Link>
  </li>

  <li>
    <Link to="/services/access-control" className="hover:text-white transition">
      Access Control Systems
    </Link>
  </li>

  <li>
    <Link to="/services/cctv-systems" className="hover:text-white transition">
      CCTV Systems
    </Link>
  </li>

  <li>
    <Link to="/services/networking" className="hover:text-white transition">
      Networking Solutions
    </Link>
  </li>
</ul>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="font-semibold text-lg mb-5">
                Company
              </h3>

              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <Link to="/about" className="hover:text-white transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/case-studies" className="hover:text-white transition">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-white transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/technical-support" className="hover:text-white transition">
                    Technical Support
                  </Link>
                </li>
                <li>
                  <Link to="/book-consultation" className="hover:text-white transition">
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="font-semibold text-lg mb-5">
                Contact
              </h3>

              <div className="space-y-4 text-sm text-gray-400">

                <div className="flex gap-3 items-start">
                  <FiMapPin
                    size={18}
                    className="text-blue-500 mt-0.5"
                  />

                  <p>Kampala, Uganda</p>
                </div>

                                <div className="flex gap-3 items-start">
                  <FiMapPin
                    size={18}
                    className="text-blue-500 mt-0.5"
                  />

                  <p>Abu Dhabi, United Arab Emirates</p>
                </div>

                <div className="flex gap-3 items-center">
                  <FiPhone
                    size={18}
                    className="text-blue-500"
                  />

                  <p>+971 52 494 7730</p>
                </div>

                <div className="flex gap-3 items-center">
                  <FiMail
                    size={18}
                    className="text-blue-500"
                  />

                  <p>support@novaelitesystems.com</p>
                </div>

              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div
            className="
              pt-6
              flex flex-col md:flex-row
              items-center justify-between
              gap-4
            "
          >

            <p className="text-gray-500 text-sm">
              © 2026 NOVA Elite Systems. All rights reserved.
            </p>

<div className="flex gap-6 text-sm text-gray-500">
  
  <Link
    to="/privacy-policy"
    className="hover:text-white transition"
  >
    Privacy Policy
  </Link>

  <Link
    to="/terms-of-service"
    className="hover:text-white transition"
  >
    Terms of Service
  </Link>

  <Link
    to="/refund-policy"
    className="hover:text-white transition"
  >
    Refund Policy
  </Link> 

</div>
          </div>
        </div>
      </div>
    </footer>
  );
}