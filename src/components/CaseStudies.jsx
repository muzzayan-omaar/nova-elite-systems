import { useEffect, useState } from "react";
import axios from "../api/axios";

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
    <section className="py-16 md:py-24 px-5 md:px-6 text-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Case Studies
          </h2>

          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Real solutions. Real results.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">

          {caseStudies.map((item) => (
            <div
              key={item._id}
              className="
                group
                bg-[#0B1220]
                border border-white/5
                rounded-xl md:rounded-2xl
                overflow-hidden
                flex flex-col md:flex-row
                md:min-h-[260px]
                hover:border-blue-500/30
                hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]
                transition-all duration-300
              "
            >

              {/* IMAGE */}
              <div
                className="
                  w-full md:w-[45%]
                  h-[220px] md:h-auto
                  overflow-hidden
                "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-105
                    transition duration-500
                  "
                />
              </div>

              {/* CONTENT */}
              <div
                className="
                  flex-1
                  p-5 md:p-6
                  flex flex-col justify-between
                "
              >

                <div>

                  {/* CATEGORY */}
                  <p
                    className="
                      text-blue-500
                      text-[10px] md:text-xs
                      tracking-[0.18em]
                      font-semibold
                      uppercase
                      mb-3 md:mb-4
                    "
                  >
                    {item.category}
                  </p>

                  {/* TITLE */}
                  <h3
                    className="
                      text-xl md:text-2xl
                      font-semibold
                      leading-tight
                      mb-3 md:mb-4
                    "
                  >
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p
                    className="
                      text-gray-400
                      text-[13px] md:text-sm
                      leading-relaxed
                    "
                  >
                    {item.description}
                  </p>

                </div>

                {/* RESULT BOX */}
                <div
                  className="
                    mt-6 md:mt-8
                    inline-flex
                    items-center
                    gap-3 md:gap-4
                    px-4 md:px-5
                    py-3 md:py-4
                    rounded-xl
                    bg-blue-500/10
                    border border-blue-500/20
                    backdrop-blur-xl
                    w-fit
                  "
                >

                  {/* BIG RESULT */}
                  <span
                    className="
                      text-blue-500
                      text-2xl md:text-3xl
                      font-bold
                      leading-none
                    "
                  >
                    {item.result}
                  </span>

                  {/* LABEL */}
                  <div className="flex flex-col">

                    <span
                      className="
                        text-white
                        text-xs md:text-sm
                        font-medium
                      "
                    >
                      Performance Growth
                    </span>

                    <span
                      className="
                        text-gray-400
                        text-[11px] md:text-xs
                      "
                    >
                      measurable client results
                    </span>

                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}