import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import { ArrowRight } from "lucide-react";

export default function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      const res = await axios.get("/case-studies");
      setCaseStudies(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="py-20 md:py-28 px-5 text-white bg-[#050816]">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold">
            Case Studies
          </h2>
          <p className="text-gray-400 mt-3">
            Real solutions. Real measurable impact.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {caseStudies.map((item) => (
            <div
              key={item._id}
              className="
                group relative
                rounded-3xl
                overflow-hidden
                border border-white/10
                bg-white/[0.02]
                backdrop-blur-xl
                hover:-translate-y-1
                hover:border-cyan-500/30
                transition-all duration-300
              "
            >

              {/* IMAGE SECTION (NO CROPPING) */}
              <div className="relative h-52 flex items-center justify-center bg-black/40 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    max-h-full
                    max-w-full
                    object-contain
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />

                {/* fade into content */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#050816] to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col gap-4">

                {/* CATEGORY */}
                <p className="text-cyan-400 text-xs tracking-[0.2em] uppercase">
                  {item.category}
                </p>

                {/* TITLE */}
                <h3 className="text-xl font-semibold leading-tight">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* RESULT */}
                <div className="flex items-center justify-between mt-2">

                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-cyan-400">
                      {item.result}
                    </span>
                    <span className="text-xs text-gray-400">
                      Performance Growth
                    </span>
                  </div>

                </div>

                {/* CTA */}
                <Link
                  to={`/case-studies/${item._id}`}
                  className="
                    mt-4
                    group/btn
                    inline-flex items-center justify-center gap-2
                    px-5 py-3
                    rounded-2xl
                    bg-cyan-500
                    text-black
                    text-sm font-semibold
                    hover:-translate-y-1
                    hover:shadow-[0_0_35px_rgba(34,211,238,0.3)]
                    transition-all duration-300
                  "
                >
                  View Case Study
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition"
                  />
                </Link>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}