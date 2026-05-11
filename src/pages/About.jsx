import {
  ShieldCheck,
  Globe,
  Cpu,
  Network,
  Camera,
  ArrowRight,
  Check,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <section
      className="
        relative
        bg-[#050816]
        text-white
        overflow-hidden
      "
    >
      <Navbar />

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* MAIN GLOW */}
        <div
          className="
            absolute
            top-[-180px]
            left-1/2
            -translate-x-1/2
            w-[950px]
            h-[950px]
            rounded-full
            bg-blue-500/10
            blur-[170px]
          "
        />

        {/* LOGO PATTERN */}
        <div
          className="
            absolute
            right-[-120px]
            top-[180px]
            opacity-[0.04]
            rotate-12
          "
        >
          <img
            src="https://res.cloudinary.com/diszilwhc/image/upload/v1777939226/IMG_20260422_200643_073_fdpjkb.webp"
            alt="NOVA"
            className="w-[520px]"
          />
        </div>

        {/* GRID */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
            bg-[size:90px_90px]
            opacity-20
          "
        />

      </div>

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          pt-32
          pb-24
        "
      >

        {/* HERO */}
        <div
          className="
            grid
            lg:grid-cols-[1.1fr_0.9fr]
            gap-14
            items-center
          "
        >

          {/* LEFT */}
          <div>

            <p
              className="
                uppercase
                tracking-[0.28em]
                text-[11px]
                text-blue-400
                font-semibold
                mb-5
              "
            >
              ABOUT NOVA ELITE SYSTEMS
            </p>

            <h1
              className="
                text-4xl
                md:text-5xl
                leading-[1.05]
                font-bold
                max-w-3xl
              "
            >
              Building Modern
              <span className="text-blue-500">
                {" "}Digital & Infrastructure
              </span>
              {" "}Solutions For Businesses
            </h1>

            <p
              className="
                mt-6
                text-gray-400
                leading-relaxed
                max-w-2xl
                text-sm
                md:text-[15px]
              "
            >
              NOVA Elite Systems helps businesses launch,
              modernize and scale through premium web platforms,
              mobile applications, SaaS systems, networking
              infrastructure, CCTV and access control solutions.
            </p>

            <p
              className="
                mt-5
                text-gray-500
                leading-relaxed
                max-w-2xl
                text-sm
              "
            >
              We combine strategy, engineering and modern design
              to deliver systems that not only look premium —
              but also perform reliably in real business environments.
            </p>

            {/* STATS */}
            <div
              className="
                flex
                flex-wrap
                gap-10
                mt-10
              "
            >

              {[
                {
                  value: "24hrs",
                  label: "Rapid Launch Options",
                },

                {
                  value: "Modern",
                  label: "Premium User Experiences",
                },

                {
                  value: "Scalable",
                  label: "Business Focused Systems",
                },
              ].map((item, index) => (
                <div key={index}>

                  <h3
                    className="
                      text-2xl
                      font-semibold
                      text-white
                    "
                  >
                    {item.value}
                  </h3>

                  <p
                    className="
                      text-gray-500
                      text-sm
                      mt-1
                    "
                  >
                    {item.label}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">

            {/* CIRCLE */}
            <div
              className="
                absolute
                w-[420px]
                h-[420px]
                rounded-full
                bg-blue-500/10
                blur-3xl
              "
            />

            <div
              className="
                relative
                w-full
                max-w-[500px]
                h-[500px]
                rounded-[38px]
                overflow-hidden
                border border-white/10
                bg-white/[0.03]
              "
            >

              <img
                src="https://res.cloudinary.com/diszilwhc/image/upload/v1778424694/web1_iq30vk.jpg"
                alt="NOVA Project"
                className="
                  absolute
                  top-10
                  left-[-40px]
                  w-[78%]
                  rounded-[26px]
                  border border-white/10
                  shadow-2xl
                  rotate-[-7deg]
                "
              />

              <img
                src="https://res.cloudinary.com/diszilwhc/image/upload/v1778424694/web2_by84l5.jpg"
                alt="NOVA Project"
                className="
                  absolute
                  bottom-8
                  right-[-20px]
                  w-[72%]
                  rounded-[26px]
                  border border-white/10
                  shadow-2xl
                  rotate-[8deg]
                "
              />

            </div>

          </div>

        </div>

        {/* VALUES */}
        <div className="mt-28">

          <div className="max-w-2xl">

            <p
              className="
                uppercase
                tracking-[0.28em]
                text-[11px]
                text-blue-400
                font-semibold
                mb-4
              "
            >
              WHAT WE STAND FOR
            </p>

            <h2
              className="
                text-3xl
                md:text-4xl
                font-semibold
                leading-tight
              "
            >
              Technology Designed
              <span className="text-blue-500">
                {" "}For Real Business Impact
              </span>
            </h2>

          </div>

          <div
            className="
              grid
              md:grid-cols-2
              lg:grid-cols-4
              gap-10
              mt-14
            "
          >

            {[
              {
                icon: <Globe size={22} />,
                title: "Modern Experiences",
                desc:
                  "Premium websites and platforms focused on usability and conversions.",
              },

              {
                icon: <Cpu size={22} />,
                title: "Scalable Systems",
                desc:
                  "Solutions engineered to grow alongside your business operations.",
              },

              {
                icon: <Network size={22} />,
                title: "Reliable Infrastructure",
                desc:
                  "Stable networking and enterprise-grade connectivity systems.",
              },

              {
                icon: <Camera size={22} />,
                title: "Smart Security",
                desc:
                  "Advanced CCTV and access control for modern environments.",
              },
            ].map((item, index) => (
              <div key={index}>

                <div
                  className="
                    text-blue-400
                    mb-5
                  "
                >
                  {item.icon}
                </div>

                <h3
                  className="
                    text-lg
                    font-semibold
                    mb-3
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-gray-400
                    text-sm
                    leading-relaxed
                  "
                >
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* WHY NOVA */}
        <div
          className="
            grid
            lg:grid-cols-2
            gap-20
            items-center
            mt-32
          "
        >

          {/* LEFT */}
          <div>

            <p
              className="
                uppercase
                tracking-[0.28em]
                text-[11px]
                text-blue-400
                font-semibold
                mb-4
              "
            >
              WHY BUSINESSES CHOOSE NOVA
            </p>

            <h2
              className="
                text-3xl
                md:text-4xl
                font-semibold
                leading-tight
                max-w-xl
              "
            >
              More Than Just Design —
              We Build Systems That Work
            </h2>

          </div>

          {/* RIGHT */}
          <div className="space-y-7">

            {[
              "Premium modern interfaces built for trust.",
              "Business-focused systems with scalable architecture.",
              "Fast communication and responsive support.",
              "Reliable deployment across digital and infrastructure solutions.",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  items-start
                  gap-4
                "
              >

                <div
                  className="
                    mt-1
                    text-blue-400
                  "
                >
                  <Check size={18} />
                </div>

                <p
                  className="
                    text-gray-300
                    text-sm
                    leading-relaxed
                  "
                >
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* CTA */}
        <div
          className="
            mt-32
            text-center
          "
        >

          <p
            className="
              uppercase
              tracking-[0.28em]
              text-[11px]
              text-blue-400
              font-semibold
              mb-5
            "
          >
            LET’S BUILD SOMETHING POWERFUL
          </p>

          <h2
            className="
              text-3xl
              md:text-5xl
              font-bold
              leading-tight
              max-w-4xl
              mx-auto
            "
          >
            Your Business Deserves
            <span className="text-blue-500">
              {" "}Modern Systems
            </span>
            {" "}That Actually Stand Out
          </h2>

          <button
            className="
              mt-10
              inline-flex
              items-center
              gap-3
              px-7 py-4
              rounded-2xl
              bg-blue-600
              hover:bg-blue-500
              transition
              text-sm
              font-medium
              shadow-[0_0_35px_rgba(59,130,246,0.35)]
            "
          >
            Start Your Project
            <ArrowRight size={18} />
          </button>

        </div>

      </div>

      <Footer />
    </section>
  );
}