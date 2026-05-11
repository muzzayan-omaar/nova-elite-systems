import { useState } from "react";
import {
  Search,
  ArrowRight,
  Clock3,
  Calendar,
  TrendingUp,
  Shield,
  Globe,
  Smartphone,
  Server,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] =
    useState("All");

  const filters = [
    "All",
    "Web Platforms",
    "Mobile Apps",
    "SaaS Systems",
    "CCTV & Security",
    "Networking",
  ];

  const studies = [
    {
      title:
        "Luxury Real Estate Platform Transformation",
      category: "Web Platforms",
      image:
        "https://res.cloudinary.com/diszilwhc/image/upload/v1778424694/web1_iq30vk.jpg",
      excerpt:
        "Modern premium platform engineered for high-converting property experiences.",
      readTime: "5 min",
      date: "May 2026",
    },

    {
      title:
        "Smart Restaurant Ordering Infrastructure",
      category: "Mobile Apps",
      image:
        "https://res.cloudinary.com/diszilwhc/image/upload/v1778424694/web2_by84l5.jpg",
      excerpt:
        "Custom mobile-first ordering ecosystem with integrated operations.",
      readTime: "4 min",
      date: "April 2026",
    },

    {
      title:
        "Corporate SaaS Dashboard Deployment",
      category: "SaaS Systems",
      image:
        "https://res.cloudinary.com/diszilwhc/image/upload/v1778424694/web3_qljmjj.jpg",
      excerpt:
        "Enterprise workflow automation with scalable infrastructure systems.",
      readTime: "7 min",
      date: "March 2026",
    },
  ];

  const filteredStudies =
    activeFilter === "All"
      ? studies
      : studies.filter(
          (item) =>
            item.category === activeFilter
        );

  return (
    <section
      className="
        min-h-screen
        bg-[#050816]
        text-white
        overflow-hidden
      "
    >
      <Navbar />

      {/* BACKGROUND */}
      <div
        className="
          fixed
          top-[-200px]
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
          relative z-10
          max-w-7xl
          mx-auto
          px-6
          pt-36
          pb-24
        "
      >

        {/* HERO */}
        <div
          className="
            grid
            lg:grid-cols-2
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
              REAL CLIENT WORK
            </p>

            <h1
              className="
                text-4xl
                md:text-6xl
                font-bold
                leading-[1.05]
                max-w-2xl
              "
            >
              Case Studies &
              <span className="text-blue-500">
                {" "}Insights
              </span>
            </h1>

            <p
              className="
                mt-7
                text-gray-400
                text-sm
                md:text-base
                leading-relaxed
                max-w-xl
              "
            >
              Explore real projects, deployment
              workflows and scalable systems
              engineered by NOVA Elite Systems.
            </p>

            {/* STATS */}
            <div
              className="
                flex flex-wrap
                gap-10
                mt-10
              "
            >

              {[
                {
                  value: "40+",
                  label: "Deployments",
                },

                {
                  value: "12",
                  label: "Industries",
                },

                {
                  value: "99.9%",
                  label: "Uptime",
                },
              ].map((item, index) => (
                <div key={index}>

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-white
                    "
                  >
                    {item.value}
                  </h3>

                  <p
                    className="
                      text-sm
                      text-gray-500
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
          <div
            className="
              relative
              h-[430px]
              flex items-center justify-center
            "
          >

            <img
              src="https://res.cloudinary.com/diszilwhc/image/upload/v1778424694/web1_iq30vk.jpg"
              alt=""
              className="
                absolute
                top-0
                left-10
                w-[75%]
                rounded-[26px]
                border border-white/10
                shadow-2xl
                rotate-[-7deg]
              "
            />

            <img
              src="https://res.cloudinary.com/diszilwhc/image/upload/v1778424694/web2_by84l5.jpg"
              alt=""
              className="
                absolute
                top-12
                right-0
                w-[72%]
                rounded-[26px]
                border border-white/10
                shadow-2xl
                rotate-[6deg]
              "
            />

            <img
              src="https://res.cloudinary.com/diszilwhc/image/upload/v1778424694/web3_qljmjj.jpg"
              alt=""
              className="
                absolute
                bottom-0
                left-24
                w-[68%]
                rounded-[26px]
                border border-white/10
                shadow-2xl
              "
            />

          </div>

        </div>

        {/* FILTER STRIP */}
        <div
          className="
            mt-24
            rounded-[28px]
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-2xl
            p-5
            flex
            flex-col
            lg:flex-row
            gap-5
            lg:items-center
            lg:justify-between
          "
        >

          {/* FILTERS */}
          <div
            className="
              flex
              flex-wrap
              gap-3
            "
          >

            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() =>
                  setActiveFilter(filter)
                }
                className={`
                  px-5 py-2.5
                  rounded-2xl
                  text-sm
                  transition-all duration-300
                  ${
                    activeFilter === filter
                      ? "bg-blue-600 text-white shadow-[0_0_30px_rgba(59,130,246,0.35)]"
                      : "bg-white/[0.03] border border-white/10 text-gray-400 hover:text-white"
                  }
                `}
              >
                {filter}
              </button>
            ))}

          </div>

          {/* SEARCH */}
          <div
            className="
              flex items-center
              gap-3
              px-5 py-3
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              w-full lg:w-[320px]
            "
          >
            <Search
              size={18}
              className="text-gray-500"
            />

            <input
              type="text"
              placeholder="Search case studies..."
              className="
                bg-transparent
                outline-none
                text-sm
                w-full
                placeholder:text-gray-500
              "
            />
          </div>

        </div>

        {/* FEATURED */}
        <div
          className="
            mt-24
            relative
            overflow-hidden
            rounded-[36px]
            h-[520px]
          "
        >

          <img
            src="https://res.cloudinary.com/diszilwhc/image/upload/v1778424694/web1_iq30vk.jpg"
            alt=""
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
            "
          />

          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-[#050816]
              via-[#050816]/85
              to-transparent
            "
          />

          <div
            className="
              relative z-10
              h-full
              flex items-center
              px-10 md:px-16
            "
          >

            <div className="max-w-xl">

              <span
                className="
                  inline-flex
                  px-4 py-2
                  rounded-full
                  bg-blue-500/15
                  text-blue-400
                  text-xs
                  font-medium
                  mb-6
                "
              >
                FEATURED DEPLOYMENT
              </span>

              <h2
                className="
                  text-3xl
                  md:text-5xl
                  font-bold
                  leading-tight
                "
              >
                Enterprise Digital
                Infrastructure
              </h2>

              <p
                className="
                  mt-6
                  text-gray-300
                  leading-relaxed
                  text-sm md:text-base
                "
              >
                Full-scale deployment involving
                modern UI systems, automation,
                cloud infrastructure and
                optimized performance architecture.
              </p>

              <div
                className="
                  flex flex-wrap
                  gap-5
                  mt-8
                "
              >

                {[
                  "+220% Engagement",
                  "24hr Deployment",
                  "Cloud Infrastructure",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                      text-sm
                      text-white
                    "
                  >
                    {item}
                  </div>
                ))}

              </div>

              <button
                className="
                  mt-10
                  px-6 py-3.5
                  rounded-2xl
                  bg-blue-600
                  hover:bg-blue-500
                  transition
                  flex items-center gap-3
                  text-sm
                  font-medium
                "
              >
                Read Case Study
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

        </div>

        {/* GRID */}
        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
            mt-24
          "
        >

          {filteredStudies.map((item, index) => (
            <div
              key={index}
              className="
                group
              "
            >

              <div
                className="
                  overflow-hidden
                  rounded-[28px]
                  relative
                "
              >

                <img
                  src={item.image}
                  alt=""
                  className="
                    w-full
                    h-[260px]
                    object-cover
                    transition-all duration-500
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                  "
                >

                  <span
                    className="
                      text-[11px]
                      uppercase
                      tracking-[0.2em]
                      text-blue-400
                    "
                  >
                    {item.category}
                  </span>

                </div>

              </div>

              <div className="mt-6">

                <h3
                  className="
                    text-xl
                    font-semibold
                    leading-snug
                    group-hover:text-blue-400
                    transition
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-gray-400
                    text-sm
                    leading-relaxed
                  "
                >
                  {item.excerpt}
                </p>

                <div
                  className="
                    flex items-center
                    gap-5
                    mt-5
                    text-xs
                    text-gray-500
                  "
                >

                  <div className="flex items-center gap-2">
                    <Clock3 size={14} />
                    {item.readTime}
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    {item.date}
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* RESULTS */}
        <div
          className="
            grid
            md:grid-cols-4
            gap-10
            mt-32
            text-center
          "
        >

          {[
            {
              icon: <TrendingUp />,
              value: "45+",
              label: "Deployments",
            },

            {
              icon: <Shield />,
              value: "99.9%",
              label: "Uptime",
            },

            {
              icon: <Globe />,
              value: "12",
              label: "Industries",
            },

            {
              icon: <Server />,
              value: "24/7",
              label: "Monitoring",
            },
          ].map((item, index) => (
            <div key={index}>

              <div
                className="
                  text-blue-400
                  flex justify-center
                  mb-5
                "
              >
                {item.icon}
              </div>

              <h3
                className="
                  text-3xl
                  font-bold
                "
              >
                {item.value}
              </h3>

              <p
                className="
                  mt-2
                  text-gray-500
                  text-sm
                "
              >
                {item.label}
              </p>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div
          className="
            relative
            mt-32
            text-center
            overflow-hidden
            rounded-[36px]
            border border-white/10
            bg-white/[0.03]
            py-20
            px-8
          "
        >

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)]
            "
          />

          <div className="relative z-10">

            <h2
              className="
                text-3xl
                md:text-5xl
                font-bold
                leading-tight
              "
            >
              Your Business Could Be
              <br />

              <span className="text-blue-500">
                The Next NOVA Success Story
              </span>
            </h2>

            <p
              className="
                mt-6
                text-gray-400
                max-w-2xl
                mx-auto
                leading-relaxed
              "
            >
              From digital platforms to
              infrastructure systems, NOVA builds
              scalable solutions engineered for
              real-world growth.
            </p>

            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-4
                mt-10
              "
            >

              <button
                className="
                  px-6 py-3.5
                  rounded-2xl
                  bg-blue-600
                  hover:bg-blue-500
                  transition
                  text-sm
                  font-medium
                "
              >
                Start Your Project
              </button>

              <button
                className="
                  px-6 py-3.5
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  hover:border-blue-500/20
                  transition
                  text-sm
                  font-medium
                "
              >
                Book Consultation
              </button>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </section>
  );
}