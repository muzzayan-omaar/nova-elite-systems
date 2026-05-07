import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ArrowRight,
  Shield,
  Globe,
  Server,
  Camera,
  Fingerprint,
} from "lucide-react";

export default function Contact() {
  const contactCards = [
    {
      icon: <Phone size={22} />,
      title: "Call Us",
      value: "+971 XX XXX XXXX",
    },
    {
      icon: <Mail size={22} />,
      title: "Email",
      value: "hello@novaelitesystems.com",
    },
    {
      icon: <MapPin size={22} />,
      title: "Location",
      value: "Abu Dhabi, UAE",
    },
    {
      icon: <Clock3 size={22} />,
      title: "Business Hours",
      value: "Mon - Sat • 9AM - 7PM",
    },
  ];

  const services = [
    "Web Development",
    "App Development",
    "SaaS Applications",
    "CCTV Systems",
    "Access Control",
    "Networking Solutions",
  ];

  const coverage = [
    "Abu Dhabi",
    "Dubai",
    "Sharjah",
    "Al Ain",
  ];

  return (
    <div className="bg-[#05070F] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative pt-36 pb-20 px-5 md:px-6">

        {/* GLOWS */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div
            className="
              absolute
              top-[-150px]
              left-[-120px]
              w-[380px]
              h-[380px]
              rounded-full
              bg-blue-500/10
              blur-3xl
            "
          />

          <div
            className="
              absolute
              bottom-[-180px]
              right-[-100px]
              w-[380px]
              h-[380px]
              rounded-full
              bg-blue-500/10
              blur-3xl
            "
          />
        </div>

        <div
          className="
            relative z-10
            max-w-7xl mx-auto
            grid md:grid-cols-2
            gap-16
            items-center
          "
        >

          {/* LEFT */}
          <div>

            <p
              className="
                text-blue-500
                tracking-[0.25em]
                text-xs
                font-semibold
                uppercase
                mb-5
              "
            >
              Contact NOVA
            </p>

            <h1
              className="
                text-4xl md:text-6xl
                font-bold
                leading-tight
              "
            >
              Let’s Build
              <br />
              Smarter Systems
            </h1>

            <p
              className="
                mt-6
                text-gray-400
                leading-relaxed
                max-w-xl
              "
            >
              From modern digital platforms to enterprise-grade
              infrastructure and security systems, NOVA Elite
              Systems helps businesses operate smarter, faster
              and more securely.
            </p>

            {/* MINI STATS */}
            <div className="flex flex-wrap gap-4 mt-8">

              {[
                "Fast Response",
                "Business-Focused",
                "Scalable Systems",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    px-4 py-2
                    rounded-xl
                    bg-white/[0.04]
                    border border-white/10
                    text-sm text-gray-300
                  "
                >
                  {item}
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT */}
          <div className="grid sm:grid-cols-2 gap-4">

            {contactCards.map((item, index) => (
              <div
                key={index}
                className="
                  rounded-2xl
                  border border-white/10
                  bg-[#0B1220]
                  p-6
                  hover:border-blue-500/30
                  transition-all duration-300
                  hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]
                "
              >

                <div
                  className="
                    w-12 h-12
                    rounded-xl
                    bg-blue-500/10
                    border border-blue-500/20
                    flex items-center justify-center
                    text-blue-500
                    mb-5
                  "
                >
                  {item.icon}
                </div>

                <p className="text-gray-400 text-sm mb-2">
                  {item.title}
                </p>

                <h3 className="font-semibold leading-relaxed">
                  {item.value}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="px-5 md:px-6 pb-24">
        <div
          className="
            max-w-7xl mx-auto
            grid lg:grid-cols-[1fr_420px]
            gap-8
          "
        >

          {/* FORM */}
          <div
            className="
              rounded-[28px]
              border border-white/10
              bg-[#081120]
              p-6 md:p-10
            "
          >

            <div className="mb-10">
              <h2 className="text-3xl font-bold">
                Start Your Project
              </h2>

              <p className="text-gray-400 mt-3">
                Tell us about your business and the type of
                solution you need.
              </p>
            </div>

            <form className="space-y-5">

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="
                    h-14
                    px-5
                    rounded-xl
                    bg-white/[0.04]
                    border border-white/10
                    outline-none
                    focus:border-blue-500/40
                  "
                />

                <input
                  type="text"
                  placeholder="Company Name"
                  className="
                    h-14
                    px-5
                    rounded-xl
                    bg-white/[0.04]
                    border border-white/10
                    outline-none
                    focus:border-blue-500/40
                  "
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="
                  w-full h-14
                  px-5
                  rounded-xl
                  bg-white/[0.04]
                  border border-white/10
                  outline-none
                  focus:border-blue-500/40
                "
              />

              {/* SERVICES */}
              <div>
                <p className="text-sm text-gray-400 mb-4">
                  Service Needed
                </p>

                <div className="flex flex-wrap gap-3">

                  {services.map((service, index) => (
                    <button
                      type="button"
                      key={index}
                      className="
                        px-4 py-2.5
                        rounded-xl
                        border border-white/10
                        bg-white/[0.03]
                        hover:border-blue-500/40
                        hover:bg-blue-500/10
                        transition
                        text-sm
                      "
                    >
                      {service}
                    </button>
                  ))}

                </div>
              </div>

              <textarea
                rows="6"
                placeholder="Tell us about your project..."
                className="
                  w-full
                  p-5
                  rounded-xl
                  bg-white/[0.04]
                  border border-white/10
                  outline-none
                  resize-none
                  focus:border-blue-500/40
                "
              />

              <button
                className="
                  bg-blue-600 hover:bg-blue-700
                  px-7 py-4
                  rounded-xl
                  transition
                  flex items-center gap-3
                  font-medium
                "
              >
                Book Consultation
                <ArrowRight size={18} />
              </button>

            </form>
          </div>

          {/* SIDE PANEL */}
          <div className="space-y-6">

            {/* COVERAGE */}
            <div
              className="
                rounded-[28px]
                border border-white/10
                bg-[#081120]
                p-6
              "
            >

              <div className="flex items-center gap-3 mb-6">

                <div
                  className="
                    w-12 h-12
                    rounded-xl
                    bg-blue-500/10
                    border border-blue-500/20
                    flex items-center justify-center
                    text-blue-500
                  "
                >
                  <Globe size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">
                    UAE Coverage
                  </h3>

                  <p className="text-sm text-gray-400">
                    Areas we operate in
                  </p>
                </div>
              </div>

              <div className="space-y-4">

                {coverage.map((city, index) => (
                  <div
                    key={index}
                    className="
                      flex items-center justify-between
                      px-4 py-4
                      rounded-xl
                      bg-white/[0.03]
                      border border-white/10
                    "
                  >

                    <div className="flex items-center gap-3">

                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />

                      <span>{city}</span>
                    </div>

                    <span className="text-xs text-gray-400">
                      Active
                    </span>
                  </div>
                ))}

              </div>
            </div>

            {/* TRUST */}
            <div
              className="
                rounded-[28px]
                border border-white/10
                bg-[#081120]
                p-6
              "
            >

              <h3 className="text-xl font-semibold mb-6">
                Why Businesses Choose NOVA
              </h3>

              <div className="space-y-4">

                {[
                  {
                    icon: <Shield size={18} />,
                    text: "Secure infrastructure solutions",
                  },
                  {
                    icon: <Server size={18} />,
                    text: "Scalable modern systems",
                  },
                  {
                    icon: <Camera size={18} />,
                    text: "Enterprise-grade surveillance",
                  },
                  {
                    icon: <Fingerprint size={18} />,
                    text: "Advanced access control",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                      flex items-center gap-4
                      px-4 py-4
                      rounded-xl
                      bg-white/[0.03]
                      border border-white/10
                    "
                  >

                    <div className="text-blue-500">
                      {item.icon}
                    </div>

                    <p className="text-sm text-gray-300">
                      {item.text}
                    </p>
                  </div>
                ))}

              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}