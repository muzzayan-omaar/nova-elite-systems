import {
  ShieldCheck,
  Globe,
  Cpu,
  Network,
  Camera,
  ArrowRight,
  Check,
  Award,
  Users,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

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

        {/* SECONDARY GLOW */}
        <div
          className="
            absolute
            bottom-[-300px]
            right-[-200px]
            w-[800px]
            h-[800px]
            rounded-full
            bg-indigo-500/10
            blur-[160px]
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
        {/* HERO - Enhanced */}
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
                text-5xl
                md:text-6xl
                leading-[1.05]
                font-bold
                max-w-[38rem]
              "
            >
              Crafting the Future of
              <span className="text-blue-500"> Digital Excellence</span>
              {" "}and Secure Infrastructure
            </h1>

            <p
              className="
                mt-8
                text-gray-400
                leading-relaxed
                max-w-2xl
                text-[15px]
              "
            >
              NOVA Elite Systems partners with ambitious businesses to build 
              premium digital platforms, robust infrastructure, and intelligent 
              security ecosystems that drive growth and inspire confidence.
            </p>

            <div className="flex flex-wrap gap-10 mt-12">
              {[
                { value: "24hrs", label: "Rapid Launch" },
                { value: "100+", label: "Projects Delivered" },
                { value: "Elite", label: "Enterprise Standards" },
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="text-3xl font-semibold text-white">
                    {item.value}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - Enhanced Visuals */}
          <div className="relative flex justify-center">
            <div
              className="
                absolute
                w-[460px]
                h-[460px]
                rounded-full
                bg-gradient-to-br from-blue-500/20 to-indigo-500/10
                blur-3xl
                -translate-y-8
              "
            />

            <div
              className="
                relative
                w-full
                max-w-[520px]
                h-[520px]
                rounded-[42px]
                overflow-hidden
                border border-white/10
                bg-white/[0.025]
                shadow-2xl
              "
            >
              <img
                src="https://res.cloudinary.com/diszilwhc/image/upload/v1778424694/web1_iq30vk.jpg"
                alt="NOVA Project"
                className="
                  absolute
                  top-12
                  -left-8
                  w-[76%]
                  rounded-3xl
                  border border-white/10
                  shadow-2xl
                  rotate-[-8deg]
                  hover:rotate-[-4deg]
                  transition-transform duration-700
                "
              />
              <img
                src="https://res.cloudinary.com/diszilwhc/image/upload/v1778424694/web2_by84l5.jpg"
                alt="NOVA Project"
                className="
                  absolute
                  bottom-10
                  right-[-12px]
                  w-[70%]
                  rounded-3xl
                  border border-white/10
                  shadow-2xl
                  rotate-[9deg]
                  hover:rotate-[5deg]
                  transition-transform duration-700
                "
              />
            </div>
          </div>
        </div>

        {/* FOUNDER SECTION - Grand & High-Tier */}
        <div className="mt-32 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-6">
                <Award className="text-amber-400" size={18} />
                <p className="uppercase tracking-[0.3em] text-xs text-amber-400 font-semibold">
                  LEADERSHIP
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Visionary Leadership Behind{" "}
                <span className="text-blue-500">NOVA Elite Systems</span>
              </h2>
              <p className="mt-4 text-gray-400 max-w-lg mx-auto">
                Driven by a passion for transformative technology and uncompromising security.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center bg-white/[0.015] border border-white/10 rounded-3xl p-8 md:p-16">
              {/* Founder Image - Left */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-3xl -rotate-2 scale-[1.02]" />
                
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/diszilwhc/image/upload/v1780856455/file_00000000112071f4a20aeca0def956b3_efoayr.png" 
                    alt="Founder - NOVA Elite Systems"
                    className="w-full aspect-[4/3.1] object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Image Overlay Accent */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-8 left-8">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      <span className="text-emerald-400 font-medium tracking-widest">FOUNDER &amp; CEO</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Bio - Right */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-semibold mb-2">Raymond K. Ssekate</h3>
                  <p className="text-blue-400 font-medium">Founder &amp; Chief Visionary</p>
                </div>

                <div className="text-gray-300 leading-relaxed text-[15.2px] space-y-6">
                  <p>
                    With over a decade of hands-on experience in technology infrastructure and digital transformation across East Africa, 
                    Raymond founded NOVA Elite Systems with a bold mission: to elevate African businesses through world-class digital 
                    and security solutions.
                  </p>
                  
                  <p>
                    His philosophy blends cutting-edge engineering with deep business insight — creating systems that don't just function, 
                    but become strategic assets that fuel growth, protect what matters, and set new industry standards.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <blockquote className="text-lg italic text-gray-200 border-l-4 border-blue-500 pl-6">
                    “Technology should not only impress — it must deliver measurable impact, reliability, and peace of mind. 
                    At NOVA, we build the backbone of tomorrow’s successful enterprises.”
                  </blockquote>
                  <p className="mt-4 text-sm text-gray-400">— Raymond K. Ssekate</p>
                </div>

                {/* Founder Highlights */}
                <div className="grid grid-cols-2 gap-6 pt-4">
                  {[
                    { icon: <Users size={22} />, label: "10+ Years", desc: "Industry Experience" },
                    { icon: <ShieldCheck size={22} />, label: "50+", desc: "Enterprise Projects" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="text-blue-400 mt-0.5">{item.icon}</div>
                      <div>
                        <div className="font-semibold">{item.label}</div>
                        <div className="text-gray-500 text-sm">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OUR JOURNEY - Slightly Refined */}
        <div className="mt-32 relative">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="uppercase tracking-[0.3em] text-[11px] text-blue-400 font-semibold mb-6">
              OUR JOURNEY
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              From Vision to{" "}
              <span className="text-blue-500">Industry Force</span>
            </h2>
          </div>

          <div className="mt-20 max-w-4xl mx-auto px-6 space-y-14">
            {[
              {
                year: "2023",
                title: "Foundation Stage",
                desc: "Began with CCTV installations and foundational web solutions for local enterprises in Kampala.",
              },
              {
                year: "2024",
                title: "Growth & Expansion",
                desc: "Formalized as a company and broadened into full networking, enterprise web platforms, and integrated security systems.",
              },
              {
                year: "2025+",
                title: "Scaling Excellence",
                desc: "Evolved into a premium digital & infrastructure agency trusted by forward-thinking organizations across Uganda.",
              },
            ].map((item, i) => (
              <div key={i} className="grid md:grid-cols-[110px_1fr] gap-8 items-start">
                <div className="text-blue-400 font-semibold tracking-widest text-sm pt-1">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VALUES - Unchanged but kept for completeness */}
        <div className="mt-32">
          <div className="max-w-2xl">
            <p className="uppercase tracking-[0.28em] text-[11px] text-blue-400 font-semibold mb-4">
              WHAT WE STAND FOR
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Technology Designed{" "}
              <span className="text-blue-500">For Real Business Impact</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
            {[
              {
                icon: <Globe size={24} />,
                title: "Modern Experiences",
                desc: "Premium websites and platforms focused on usability and conversions.",
              },
              {
                icon: <Cpu size={24} />,
                title: "Scalable Systems",
                desc: "Solutions engineered to grow alongside your business operations.",
              },
              {
                icon: <Network size={24} />,
                title: "Reliable Infrastructure",
                desc: "Stable networking and enterprise-grade connectivity systems.",
              },
              {
                icon: <Camera size={24} />,
                title: "Smart Security",
                desc: "Advanced CCTV and access control for modern environments.",
              },
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="text-blue-400 mb-6 transition group-hover:scale-110">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CLIENT TRUST SECTION - Kept with minor polish */}
        <div className="mt-32 relative">
          <div className="max-w-4xl mx-auto text-center px-6">
            <p className="uppercase tracking-[0.3em] text-[11px] text-blue-400 font-semibold mb-5">
              TRUSTED BY REAL BUSINESSES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Built With Businesses That{" "}
              <span className="text-blue-500">Rely On Us Daily</span>
            </h2>
          </div>

          <div className="mt-20 max-w-5xl mx-auto px-6">
            <div className="space-y-10">
              {[
                { name: "YAWEY GENERAL HARDWARE", location: "Uganda", type: "CCTV & Support", note: "Comprehensive security for retail & storage." },
                { name: "MBS GENERAL HARDWARE", location: "Nsangi, Uganda", type: "CCTV Installations", note: "Reliable monitoring systems for operations." },
                { name: "GERTMIL UGANDA", location: "Uganda", type: "Equipment Partner", note: "Key technical equipment supplier." },
                { name: "CHART PETROL STATION", location: "Kitemu, Uganda", type: "CCTV & Safety", note: "Fuel station security solutions." },
                { name: "NSANGI PARENTS SCHOOL", location: "Uganda", type: "Educational Security", note: "Protecting learning environments." },
                { name: "EYENET UGANDA LIMITED", location: "Uganda", type: "Web Development", note: "Modern digital presence for security leaders." },
              ].map((c, i) => (
                <div
                  key={i}
                  className="group flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-8 last:border-none"
                >
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors">
                      {c.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {c.type} • {c.location}
                    </p>
                  </div>
                  <p className="text-gray-400 md:text-right max-w-md">{c.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WHY NOVA */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mt-32">
          <div>
            <p className="uppercase tracking-[0.28em] text-[11px] text-blue-400 font-semibold mb-4">
              WHY BUSINESSES CHOOSE NOVA
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight max-w-xl">
              More Than Just Technology — We Build Enduring Systems
            </h2>
          </div>

          <div className="space-y-8">
            {[
              "Premium, conversion-focused digital experiences",
              "Scalable architecture designed for real business growth",
              "Lightning-fast support and transparent communication",
              "Enterprise-grade reliability across every solution",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-5">
                <Check className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <p className="uppercase tracking-[0.28em] text-[11px] text-blue-400 font-semibold mb-5">
            READY TO ELEVATE YOUR BUSINESS?
          </p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            Let’s Build Something{" "}
            <span className="text-blue-500">Extraordinary</span> Together
          </h2>

          <Link
            to="/pricing"
            className="
              mt-12
              inline-flex
              items-center
              gap-4
              px-10 py-5
              rounded-3xl
              bg-gradient-to-r from-blue-600 to-indigo-600
              hover:brightness-110
              transition-all
              text-base
              font-semibold
              shadow-[0_0_50px_rgba(59,130,246,0.5)]
            "
          >
            Start Your Project Now
            <ArrowRight size={22} />
          </Link>
        </div>
      </div>

      <Footer />
    </section>
  );
}