// src/pages/Templates.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import API from "../api/axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Search,
  ArrowRight,
  Globe,
  Smartphone,
  ShieldCheck,
  ShoppingBag,
  LayoutTemplate,
  Star,
  Sparkles,
} from "lucide-react";

export default function Templates() {

  const [templates, setTemplates] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [activeCategory, setActiveCategory] =
    useState("All");

  const categories = [
    "All",
    "Corporate",
    "Restaurant",
    "Real Estate",
    "Construction",
    "Medical",
    "Ecommerce",
    "Education",
    "Portfolio",
  ];

  useEffect(() => {

    fetchTemplates();

  }, []);

  const fetchTemplates = async () => {

    try {

      const res =
        await API.get("/templates");

      setTemplates(res.data);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);
    }
  };

  const filteredTemplates =
    templates.filter((item) => {

      const matchesSearch =
        item.title
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        activeCategory === "All"
          ? true
          : item.category === activeCategory;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  return (
    <>
      <Navbar />

      <section
        className="
          min-h-screen
          bg-[#050816]
          text-white
          pt-28
          pb-24
          px-5 md:px-8
          overflow-hidden
          relative
        "
      >

        {/* GLOW */}
        <div
          className="
            absolute
            top-[-300px]
            left-1/2
            -translate-x-1/2
            w-[900px]
            h-[900px]
            rounded-full
            bg-blue-500/10
            blur-[140px]
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
              text-center
              max-w-4xl
              mx-auto
              mb-16
            "
          >

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4 py-2
                rounded-full
                border border-blue-500/20
                bg-blue-500/10
                text-blue-400
                text-sm
                mb-6
              "
            >
              <Sparkles size={15} />
              Premium Ready-Made Systems
            </div>

            <h1
              className="
                text-5xl
                md:text-6xl
                font-bold
                tracking-[-0.04em]
                leading-tight
              "
            >
              Professional
              <span className="text-blue-500">
                {" "}
                Website Templates
              </span>
            </h1>

            <p
              className="
                mt-6
                text-gray-400
                max-w-2xl
                mx-auto
                leading-relaxed
              "
            >
              Premium deployment-ready systems
              designed for modern businesses,
              startups and enterprise operations.
            </p>

          </div>

          {/* SEARCH + FILTERS */}
          <div
            className="
              flex
              flex-col
              gap-5
              mb-14
            "
          >

            {/* SEARCH */}
            <div
              className="
                relative
                max-w-xl
                mx-auto
                w-full
              "
            >

              <Search
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-500
                "
              />

              <input
                type="text"
                placeholder="Search templates..."
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                className="
                  w-full
                  h-14
                  pl-12
                  pr-5
                  rounded-2xl
                  bg-white/[0.04]
                  border border-white/10
                  focus:outline-none
                  focus:border-blue-500/40
                  text-sm
                "
              />

            </div>

            {/* FILTERS */}
            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-3
              "
            >

              {categories.map(
                (item, index) => (

                  <button
                    key={index}

                    onClick={() =>
                      setActiveCategory(item)
                    }

                    className={`
                      px-5 py-2.5
                      rounded-full
                      text-sm
                      transition-all
                      border

                      ${
                        activeCategory === item
                          ? `
                            border-blue-500/40
                            bg-blue-500/15
                            text-white
                          `
                          : `
                            border-white/10
                            bg-white/[0.03]
                            text-gray-400
                            hover:border-blue-500/30
                          `
                      }
                    `}
                  >
                    {item}
                  </button>
                )
              )}

            </div>

          </div>

          {/* FEATURED STRIP */}
          <div
            className="
              grid
              md:grid-cols-4
              gap-4
              mb-16
            "
          >

            {[
              {
                icon:
                  <Globe size={18} />,
                title:
                  "Deployment Ready",
              },

              {
                icon:
                  <ShieldCheck size={18} />,
                title:
                  "Enterprise Quality",
              },

              {
                icon:
                  <Smartphone size={18} />,
                title:
                  "Responsive Systems",
              },

              {
                icon:
                  <ShoppingBag size={18} />,
                title:
                  "Business Optimized",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  px-5 py-4
                  flex items-center
                  gap-3
                "
              >

                <div
                  className="
                    w-10 h-10
                    rounded-xl
                    bg-blue-500/10
                    border border-blue-500/20
                    flex items-center
                    justify-center
                    text-blue-400
                  "
                >
                  {item.icon}
                </div>

                <p
                  className="
                    text-sm
                    text-gray-300
                  "
                >
                  {item.title}
                </p>

              </div>
            ))}

          </div>

          {/* GRID */}
          {loading ? (

            <div className="text-center py-20 text-gray-400">
              Loading templates...
            </div>

          ) : (

            <div
              className="
                grid
                md:grid-cols-2
                xl:grid-cols-3
                gap-7
              "
            >

              {filteredTemplates.map(
                (item) => (

                  <div
                    key={item._id}

                    className="
                      group
                      rounded-[32px]
                      overflow-hidden
                      border border-white/10
                      bg-white/[0.03]
                      backdrop-blur-xl
                      transition-all duration-500
                      hover:border-blue-500/30
                      hover:-translate-y-1
                    "
                  >

                    {/* IMAGE */}
                    <div className="relative">

                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="
                          w-full
                          h-[260px]
                          object-cover
                        "
                      />

                      {/* BADGES */}
                      <div
                        className="
                          absolute
                          top-4
                          left-4
                          flex
                          gap-2
                        "
                      >

                        <div
                          className="
                            px-3 py-1
                            rounded-full
                            bg-black/60
                            backdrop-blur-md
                            text-[11px]
                            border border-white/10
                          "
                        >
                          {item.category}
                        </div>

                        {item.featured && (

                          <div
                            className="
                              px-3 py-1
                              rounded-full
                              bg-blue-600
                              text-[11px]
                              flex items-center gap-1
                            "
                          >
                            <Star size={10} />
                            Featured
                          </div>
                        )}

                      </div>

                    </div>

                    {/* CONTENT */}
                    <div className="p-6">

                      <div
                        className="
                          flex
                          items-start
                          justify-between
                          gap-4
                          mb-4
                        "
                      >

                        <div>

                          <h2
                            className="
                              text-2xl
                              font-bold
                              tracking-[-0.02em]
                            "
                          >
                            {item.title}
                          </h2>

                          <p
                            className="
                              mt-2
                              text-sm
                              text-gray-400
                              leading-relaxed
                            "
                          >
                            {item.description}
                          </p>

                        </div>

                      </div>

                      {/* TECH STACK */}
                      <div
                        className="
                          flex
                          flex-wrap
                          gap-2
                          mb-6
                        "
                      >

                        {item.technologies
                          ?.slice(0, 4)
                          .map((tech, index) => (

                            <div
                              key={index}
                              className="
                                px-3 py-1
                                rounded-full
                                bg-white/[0.04]
                                border border-white/10
                                text-[11px]
                                text-gray-300
                              "
                            >
                              {tech}
                            </div>
                          ))}

                      </div>

                      {/* PRICING */}
                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          mb-6
                        "
                      >

                        <div>

                          <p
                            className="
                              text-[11px]
                              uppercase
                              tracking-[0.2em]
                              text-gray-500
                              mb-1
                            "
                          >
                            Starting From
                          </p>

                          <h3
                            className="
                              text-2xl
                              font-bold
                              text-blue-400
                            "
                          >
                            ${item.price}
                          </h3>

                        </div>

                        <div
                          className="
                            w-12 h-12
                            rounded-2xl
                            bg-blue-500/10
                            border border-blue-500/20
                            flex items-center
                            justify-center
                            text-blue-400
                          "
                        >
                          <LayoutTemplate size={20} />
                        </div>

                      </div>

                      {/* ACTIONS */}
                      <div className="flex gap-3">

                        <a
                          href={item.demoUrl}
                          target="_blank"
                          rel="noreferrer"

                          className="
                            flex-1
                            h-12
                            rounded-2xl
                            border border-white/10
                            bg-white/[0.03]
                            hover:border-blue-500/30
                            transition-all
                            flex
                            items-center
                            justify-center
                            text-sm
                          "
                        >
                          Live Demo
                        </a>

                        <Link
                          to={`/templates/${item.slug}`}

                          className="
                            flex-1
                            h-12
                            rounded-2xl
                            bg-blue-600
                            hover:bg-blue-500
                            transition-all
                            flex
                            items-center
                            justify-center
                            gap-2
                            text-sm
                            font-medium
                          "
                        >
                          View Details
                          <ArrowRight size={15} />
                        </Link>

                      </div>

                    </div>

                  </div>
                )
              )}

            </div>
          )}

        </div>

      </section>

      <Footer />
    </>
  );
}