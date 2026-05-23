// src/pages/Templates.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import API from "../api/axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Search,
  ArrowRight,
  Sparkles,
  Star,
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

    const [currency, setCurrency] =
    useState("USD");

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

   const USD_TO_UGX = 3800;



const formatPrice = (price) => {
  if (price === null || price === undefined) return "N/A";

  if (typeof price === "string") {
    if (price.toLowerCase() === "custom") return "Custom";
  }

  const numeric =
    typeof price === "number"
      ? price
      : parseFloat(String(price).replace(/[^0-9.]/g, ""));

  if (isNaN(numeric)) return price;

  if (currency === "USD") {
    return `$${numeric.toFixed(2)}`;
  }

  const ugx = numeric * USD_TO_UGX;
  return `UGX ${ugx.toLocaleString()}`;
};

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
          relative
          overflow-hidden
        "
      >

        {/* AMBIENT GLOW */}
        <div
          className="
            absolute
            top-[-280px]
            left-1/2
            -translate-x-1/2
            w-[850px]
            h-[850px]
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
    relative
    mb-14
  "
>

  {/* ====================================
      FLOATING BACKGROUND PREVIEWS
  ==================================== */}

  <div
    className="
      absolute
      inset-0
      overflow-hidden
      pointer-events-none
      z-0
    "
  >

    {/* LEFT UI */}
    <img
      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop"
      alt=""
      className="
        absolute
        top-[-40px]
        left-[-220px]
        w-[460px]
        rounded-[34px]
        rotate-[-18deg]
        opacity-[0.07]
        border border-white/10
        shadow-[0_30px_80px_rgba(0,0,0,0.45)]
        select-none
      "
    />

    {/* RIGHT UI */}
    <img
      src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1400&auto=format&fit=crop"
      alt=""
      className="
        absolute
        top-[-60px]
        right-[-220px]
        w-[460px]
        rounded-[34px]
        rotate-[18deg]
        opacity-[0.06]
        border border-white/10
        shadow-[0_30px_80px_rgba(0,0,0,0.45)]
        select-none
      "
    />

    {/* BOTTOM CENTER UI */}
    <img
      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop"
      alt=""
      className="
        absolute
        bottom-[-260px]
        left-1/2
        -translate-x-1/2
        w-[620px]
        rounded-[42px]
        opacity-[0.05]
        border border-white/10
        shadow-[0_30px_80px_rgba(0,0,0,0.45)]
        select-none
      "
    />

    {/* FADE OVERLAY */}
    <div
      className="
        absolute
        inset-0
        bg-gradient-to-b
        from-transparent
        via-[#050816]/25
        to-[#050816]
      "
    />

  </div>

  {/* ====================================
      HERO CONTENT
  ==================================== */}

  <div
    className="
      relative
      z-10
      flex
      flex-col
      lg:flex-row
      lg:items-end
      lg:justify-between
      gap-10
    "
  >

    {/* LEFT */}
    <div className="max-w-2xl">

      <div
        className="
          inline-flex
          items-center
          gap-2
          text-blue-400
          text-[11px]
          uppercase
          tracking-[0.25em]
          mb-5
        "
      >
        <Sparkles size={13} />
        Premium Templates
      </div>

      <h1
        className="
          text-[34px]
          md:text-[46px]
          leading-[1]
          tracking-[-0.05em]
          font-semibold
        "
      >
        Modern Business
        <br />

        Systems &
        Templates
      </h1>

      <p
        className="
          mt-5
          text-[14px]
          text-gray-400
          leading-relaxed
          max-w-xl
        "
      >
        High-end deployment-ready digital
        systems crafted for modern brands,
        startups and enterprise operations.
      </p>

    </div>

    {/* SEARCH */}
    <div
      className="
        w-full
        lg:w-[340px]
      "
    >

      <div className="relative">

        <Search
          size={16}
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
            h-12
            pl-11
            pr-4
            rounded-2xl
            bg-white/[0.03]
            border border-white/10
            backdrop-blur-xl
            focus:outline-none
            focus:border-blue-500/30
            text-sm
          "
        />

      </div>

    </div>

  </div>

</div>


          {/* FILTERS */}
          <div
            className="
              flex
              flex-wrap
              gap-3
              mb-12
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
                    px-4 py-2
                    rounded-full
                    text-[12px]
                    transition-all
                    border

                    ${
                      activeCategory === item
                        ? `
                          border-blue-500/30
                          bg-blue-500/10
                          text-white
                        `
                        : `
                          border-white/10
                          text-gray-400
                          hover:border-blue-500/20
                          hover:text-white
                        `
                    }
                  `}
                >
                  {item}
                </button>
              )
            )}

          </div>

          {/* CURRENCY TOGGLE */}
<div className="flex justify-center mb-8">
  <div className="flex items-center gap-2 p-1 bg-white/5 border border-white/10 rounded-xl">

    <button
      onClick={() => setCurrency("USD")}
      className={`px-4 py-2 text-sm rounded-lg transition ${
        currency === "USD"
          ? "bg-blue-600 text-white"
          : "text-gray-400 hover:text-white"
      }`}
    >
      USD
    </button>

    <button
      onClick={() => setCurrency("UGX")}
      className={`px-4 py-2 text-sm rounded-lg transition ${
        currency === "UGX"
          ? "bg-blue-600 text-white"
          : "text-gray-400 hover:text-white"
      }`}
    >
      UGX
    </button>

  </div>
</div>

          

          {/* GRID */}

{/* GRID */}
{loading ? (

  <div className="text-gray-400 py-20">
    Loading templates...
  </div>

) : (

  <div
    className="
      grid
      sm:grid-cols-2
      xl:grid-cols-4
      gap-4
    "
  >

    {filteredTemplates.map(
      (item) => (

        <div
          key={item._id}

          className="
            group
            rounded-[22px]
            overflow-hidden
            border border-white/8
            bg-white/[0.025]
            backdrop-blur-xl
            transition-all duration-300
            hover:border-blue-500/20
            hover:bg-white/[0.035]
          "
        >

          {/* IMAGE */}
          <div className="relative overflow-hidden">

            <img
              src={item.thumbnail}
              alt={item.title}
              className="
                w-full
                h-[170px]
                object-cover
                transition-transform duration-700
                group-hover:scale-[1.03]
              "
            />

            {/* OVERLAY */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#050816]
                via-transparent
                to-transparent
              "
            />

            {/* TOP */}
            <div
              className="
                absolute
                top-3
                left-3
                right-3
                flex
                items-center
                justify-between
              "
            >

              <div
                className="
                  px-2.5 py-1
                  rounded-full
                  bg-black/35
                  backdrop-blur-md
                  text-[9px]
                  border border-white/10
                  tracking-wide
                "
              >
                {item.category}
              </div>

              {item.featured && (

                <div
                  className="
                    flex
                    items-center
                    gap-1
                    px-2.5 py-1
                    rounded-full
                    bg-blue-600
                    text-[9px]
                  "
                >
                  <Star size={9} />
                  Featured
                </div>
              )}

            </div>

            {/* PRICE */}
            <div
              className="
                absolute
                bottom-3
                left-3
              "
            >

              <div
                className="
                  px-3 py-1.5
                  rounded-xl
                  bg-black/35
                  backdrop-blur-md
                  border border-white/10
                "
              >

                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.18em]
                    text-gray-400
                    mb-[2px]
                  "
                >
                  Starting
                </p>

                <h3
                  className="
                    text-[15px]
                    font-semibold
                    text-white
                  "
                >
                  {formatPrice(item.price)}
                </h3>

              </div>

            </div>

          </div>

          {/* CONTENT */}
          <div className="p-4">

            <div className="mb-4">

              <h2
                className="
                  text-[15px]
                  font-medium
                  tracking-[-0.03em]
                  line-clamp-1
                "
              >
                {item.title}
              </h2>

              <p
                className="
                  mt-2
                  text-[12px]
                  text-gray-400
                  leading-relaxed
                  line-clamp-2
                "
              >
                {item.shortDescription}
              </p>

            </div>

            {/* TECH */}
            <div
              className="
                flex
                flex-wrap
                gap-1.5
                mb-4
              "
            >

              {item.technologies
                ?.slice(0, 3)
                .map((tech, index) => (

                  <span
                    key={index}
                    className="
                      text-[10px]
                      text-gray-500
                    "
                  >
                    {tech}
                    {
                      index !==
                      item.technologies
                        .slice(0, 3)
                        .length - 1
                        && " •"
                    }
                  </span>
                ))}

            </div>

            {/* ACTIONS */}
            <div
              className="
                flex
                items-center
                justify-between
              "
            >

              <a
                href={item.demoUrl}
                target="_blank"
                rel="noreferrer"

                className="
                  text-[12px]
                  text-gray-300
                  hover:text-white
                  transition
                "
              >
                Live Demo
              </a>

              <Link
                to={`/templates/${item.slug}`}

                className="
                  inline-flex
                  items-center
                  gap-1.5
                  text-[12px]
                  text-blue-400
                  hover:text-blue-300
                  transition
                "
              >
                Details
                <ArrowRight size={12} />
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

     
    </>
  );
}