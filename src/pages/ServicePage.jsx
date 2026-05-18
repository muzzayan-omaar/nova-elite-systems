import {
  Code2,
  Smartphone,
  Cloud,
  Camera,
  Fingerprint,
  Network,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ServicePage() {

  const { slug } = useParams();

  const services = {

    "web-development": {
      icon: <Code2 size={26} />,
      title: "Web Development",
      subtitle:
        "Modern websites engineered for growth, performance and conversion.",

      features: [
        "Business Websites",
        "Ecommerce Platforms",
        "Admin Dashboards",
        "Booking Systems",
        "SEO Optimization",
        "API Integrations",
      ],

      process: [
        "Discovery & Planning",
        "UI/UX Design",
        "Development",
        "Testing & Optimization",
        "Deployment",
      ],
    },

    "app-development": {
      icon: <Smartphone size={26} />,
      title: "App Development",
      subtitle:
        "Custom mobile applications built for Android, iOS and enterprise use.",

      features: [
        "Android Apps",
        "iOS Applications",
        "Cross Platform Apps",
        "Realtime Systems",
        "Push Notifications",
        "API Connectivity",
      ],

      process: [
        "Project Analysis",
        "Architecture Planning",
        "UI/UX Design",
        "App Development",
        "Publishing & Support",
      ],
    },

    "saas-applications": {
      icon: <Cloud size={26} />,
      title: "SaaS Applications",
      subtitle:
        "Scalable cloud platforms and automation systems for businesses.",

      features: [
        "Cloud Platforms",
        "CRM Systems",
        "Automation Dashboards",
        "Subscription Systems",
        "Secure APIs",
        "Analytics Integration",
      ],

      process: [
        "Requirement Gathering",
        "System Architecture",
        "Backend Development",
        "Frontend Development",
        "Deployment & Scaling",
      ],
    },

    "cctv-systems": {
      icon: <Camera size={26} />,
      title: "CCTV Systems",
      subtitle:
        "Enterprise surveillance systems designed for security and monitoring.",

      features: [
        "IP Cameras",
        "Remote Monitoring",
        "NVR/DVR Setup",
        "Video Analytics",
        "Night Vision Systems",
        "Commercial Installations",
      ],

      process: [
        "Site Assessment",
        "System Planning",
        "Installation",
        "Configuration",
        "Maintenance & Support",
      ],
    },

    "access-control": {
      icon: <Fingerprint size={26} />,
      title: "Access Control",
      subtitle:
        "Smart access management systems for businesses and facilities.",

      features: [
        "Biometric Systems",
        "RFID Access",
        "Door Controllers",
        "Attendance Systems",
        "Smart Locks",
        "Centralized Monitoring",
      ],

      process: [
        "Security Assessment",
        "System Design",
        "Hardware Installation",
        "Configuration",
        "Testing & Deployment",
      ],
    },

    "networking": {
      icon: <Network size={26} />,
      title: "Networking",
      subtitle:
        "Reliable enterprise network infrastructure and connectivity solutions.",

      features: [
        "Structured Cabling",
        "Enterprise WiFi",
        "Router Configuration",
        "Switch Management",
        "VPN Solutions",
        "Network Security",
      ],

      process: [
        "Infrastructure Audit",
        "Network Design",
        "Installation",
        "Configuration",
        "Optimization & Monitoring",
      ],
    },
  };

  const service = services[slug];

  if (!service) {
    return (
      <div className="bg-[#050816] min-h-screen text-white flex items-center justify-center">
        Service not found
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <section
        className="
          relative
          min-h-screen
          bg-[#050816]
          text-white
          pt-28
          pb-24
          px-6
          overflow-hidden
        "
      >

        {/* BACKGROUND GLOW */}

        <div
          className="
            absolute
            top-[-250px]
            left-1/2
            -translate-x-1/2
            w-[1000px]
            h-[1000px]
            rounded-full
            bg-blue-500/10
            blur-[180px]
            pointer-events-none
          "
        />

        <div
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
          "
        >

          {/* HERO */}

          <div
            className="
              grid
              md:grid-cols-2
              gap-14
              items-center
              min-h-[450px]
            "
          >

            {/* LEFT */}

            <div>

              <div
                className="
                  w-16 h-16
                  rounded-3xl
                  bg-blue-500/10
                  border border-blue-500/20
                  flex items-center justify-center
                  text-blue-400
                  mb-6
                "
              >
                {service.icon}
              </div>

              <p
                className="
                  uppercase
                  tracking-[0.28em]
                  text-[11px]
                  text-blue-400
                  mb-5
                  font-semibold
                "
              >
                NOVA ELITE SYSTEMS
              </p>

              <h1
                className="
                  text-4xl
                  md:text-6xl
                  font-bold
                  leading-[1]
                  max-w-[650px]
                "
              >
                {service.title}
              </h1>

              <p
                className="
                  mt-6
                  text-gray-400
                  leading-relaxed
                  max-w-xl
                  text-sm
                  md:text-[15px]
                "
              >
                {service.subtitle}
              </p>

              <div className="flex gap-4 mt-8">

                <a
                  href="/book-consultation"
                  className="
                    px-6 py-3.5
                    rounded-2xl
                    bg-blue-600
                    hover:bg-blue-500
                    transition
                    text-sm
                    font-medium
                    flex items-center gap-3
                  "
                >
                  Book Consultation
                  <ArrowRight size={18} />
                </a>

              </div>

            </div>

            {/* RIGHT */}

            <div
              className="
                rounded-[32px]
                border border-white/10
                bg-white/[0.03]
                p-8
              "
            >

              <p
                className="
                  text-sm
                  text-blue-400
                  mb-6
                  tracking-[0.2em]
                "
              >
                INCLUDED SERVICES
              </p>

              <div className="grid gap-5">

                {service.features.map(
                  (item, index) => (

                    <div
                      key={index}
                      className="
                        flex items-center gap-4
                      "
                    >

                      <div
                        className="
                          w-10 h-10
                          rounded-2xl
                          bg-blue-500/10
                          border border-blue-500/20
                          flex items-center justify-center
                          text-blue-400
                          shrink-0
                        "
                      >
                        <Check size={18} />
                      </div>

                      <p className="text-gray-300 text-sm">
                        {item}
                      </p>

                    </div>
                  )
                )}

              </div>

            </div>

          </div>

          {/* PROCESS */}

          <div className="mt-20">

            <div className="mb-10">

              <p
                className="
                  uppercase
                  tracking-[0.25em]
                  text-[11px]
                  text-blue-400
                  mb-3
                "
              >
                OUR PROCESS
              </p>

              <h2
                className="
                  text-3xl
                  font-bold
                "
              >
                How We Deliver
              </h2>

            </div>

            <div
              className="
                grid
                md:grid-cols-5
                gap-6
              "
            >

              {service.process.map(
                (step, index) => (

                  <div
                    key={index}
                    className="
                      rounded-3xl
                      border border-white/10
                      bg-white/[0.03]
                      p-6
                    "
                  >

                    <div
                      className="
                        w-12 h-12
                        rounded-2xl
                        bg-blue-500/10
                        border border-blue-500/20
                        flex items-center justify-center
                        text-blue-400
                        mb-5
                        font-bold
                      "
                    >
                      0{index + 1}
                    </div>

                    <p
                      className="
                        text-sm
                        text-gray-300
                        leading-relaxed
                      "
                    >
                      {step}
                    </p>

                  </div>
                )
              )}

            </div>

          </div>

          {/* CTA */}

          <div
            className="
              mt-24
              rounded-[40px]
              border border-white/10
              bg-gradient-to-r
              from-blue-600/20
              to-blue-500/5
              p-10
              md:p-14
            "
          >

            <div
              className="
                flex
                flex-col
                md:flex-row
                items-start
                md:items-center
                justify-between
                gap-8
              "
            >

              <div>

                <div
                  className="
                    flex items-center gap-3
                    text-blue-400
                    mb-4
                  "
                >
                  <Sparkles size={18} />

                  <span
                    className="
                      uppercase
                      tracking-[0.25em]
                      text-[11px]
                    "
                  >
                    START YOUR PROJECT
                  </span>
                </div>

                <h2
                  className="
                    text-3xl
                    md:text-4xl
                    font-bold
                    max-w-[700px]
                    leading-tight
                  "
                >
                  Ready to build your next solution with NOVA Elite Systems?
                </h2>

              </div>

              <a
                href="/book-consultation"
                className="
                  px-7 py-4
                  rounded-2xl
                  bg-blue-600
                  hover:bg-blue-500
                  transition
                  text-sm
                  font-medium
                  flex items-center gap-3
                  shrink-0
                "
              >
                Schedule Consultation
                <ArrowRight size={18} />
              </a>

            </div>

          </div>

        </div>

        <br />
        <br />

        <Footer />

      </section>
    </>
  );
}