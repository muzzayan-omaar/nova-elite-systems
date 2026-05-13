import { useEffect, useState } from "react";
import axios from "../api/axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Search,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export default function Blog() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      const res = await axios.get("/case-studies");

      console.log(res.data);

      setCaseStudies(
        Array.isArray(res.data)
          ? res.data
          : []
      );

    } catch (err) {
      console.log(err);
    }
  };

  // FILTER
  const filteredStudies = caseStudies.filter((item) =>
    item.title
      ?.toLowerCase()
      .includes(search.toLowerCase())
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

      {/* HERO */}
      <div
        className="
          relative
          pt-40
          pb-20
          px-6
        "
      >

        {/* BG GLOW */}
        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[900px]
            h-[900px]
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

          <div className="max-w-3xl">

            <p
              className="
                uppercase
                tracking-[0.3em]
                text-xs
                text-blue-400
                font-semibold
                mb-5
              "
            >
              CASE STUDIES
            </p>

            <h1
              className="
                text-4xl
                md:text-6xl
                font-bold
                leading-[1]
              "
            >
              Real Projects.
              <br />

              <span className="text-blue-500">
                Real Results.
              </span>
            </h1>

            <p
              className="
                mt-7
                text-gray-400
                max-w-2xl
                leading-relaxed
                text-sm
                md:text-base
              "
            >
              Explore how NOVA Elite Systems
              transforms brands, businesses
              and infrastructures through
              premium digital and security
              solutions.
            </p>

          </div>

          {/* SEARCH */}
          <div
            className="
              mt-12
              max-w-xl
              relative
            "
          >

            <Search
              size={18}
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-gray-500
              "
            />

            <input
              type="text"
              placeholder="Search case studies..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
                w-full
                h-[58px]
                pl-14
                pr-5
                rounded-2xl
                bg-white/[0.03]
                border border-white/10
                backdrop-blur-xl
                outline-none
                text-sm
                focus:border-blue-500/40
                transition
              "
            />
          </div>

        </div>
      </div>

      {/* CONTENT */}
      <div className="px-6 pb-24">

        <div
          className="
            max-w-7xl
            mx-auto
          "
        >

          {/* GRID */}
          <div
            className="
              grid
              md:grid-cols-2
              xl:grid-cols-3
              gap-6
            "
          >

            {filteredStudies.map((item) => (
              <div
                key={item._id}
                className="
                  group
                  overflow-hidden
                  rounded-[28px]
                  border border-white/10
                  bg-white/[0.03]
                  hover:border-blue-500/30
                  transition-all duration-500
                "
              >

                {/* IMAGE */}
                <div
                  className="
                    relative
                    h-[240px]
                    overflow-hidden
                  "
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-105
                      transition duration-700
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

                  {/* CATEGORY */}
                  <div
                    className="
                      absolute
                      top-5
                      left-5
                      px-4 py-2
                      rounded-full
                      bg-black/40
                      backdrop-blur-xl
                      border border-white/10
                      text-[11px]
                      tracking-[0.2em]
                      uppercase
                      text-blue-400
                    "
                  >
                    {item.category}
                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <h2
                    className="
                      text-2xl
                      font-semibold
                      leading-tight
                    "
                  >
                    {item.title}
                  </h2>

                  <p
                    className="
                      mt-4
                      text-sm
                      text-gray-400
                      leading-relaxed
                    "
                  >
                    {item.description}
                  </p>

                  {/* RESULT */}
                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <div className="flex items-center gap-3">

                      <div
                        className="
                          w-11 h-11
                          rounded-2xl
                          bg-blue-500/10
                          flex items-center justify-center
                          text-blue-400
                        "
                      >
                        <TrendingUp size={18} />
                      </div>

                      <div>
                        <p
                          className="
                            text-2xl
                            font-bold
                            text-blue-400
                            leading-none
                          "
                        >
                          {item.result}
                        </p>

                        <p
                          className="
                            text-xs
                            text-gray-500
                            mt-1
                          "
                        >
                          measurable growth
                        </p>
                      </div>

                    </div>

                    <button
                      className="
                        w-11 h-11
                        rounded-2xl
                        border border-white/10
                        bg-white/[0.03]
                        hover:bg-blue-500
                        hover:border-blue-500
                        transition-all duration-300
                        flex items-center justify-center
                      "
                    >
                      <ArrowRight size={18} />
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

      <Footer />

    </section>
  );
}