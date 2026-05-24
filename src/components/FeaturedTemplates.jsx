// src/components/FeaturedTemplates.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axios";
import { ArrowRight, Sparkles, Star } from "lucide-react";

export default function FeaturedTemplates() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    try {
      const res = await API.get("/templates");

      const published = res.data.filter(
        (item) => item.status === "published"
      );

      const sorted = published.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      });

      setTemplates(sorted.slice(0, 3));
    } catch (error) {
      console.log(error);
    }
  };

  if (templates.length < 1) return null;

  return (
    <section className="py-36 px-5 md:px-10 relative overflow-hidden bg-[#050816]">

      {/* ambient glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/5 blur-[160px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">

          <div className="max-w-2xl">

            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-blue-400 mb-6">
              <Sparkles size={12} />
              Ready Systems
            </div>

            <h2 className="text-[42px] md:text-[62px] leading-[0.92] tracking-[-0.06em] font-semibold text-white">
              Premium systems
              <br />
              built for deployment
            </h2>

            <p className="mt-6 text-sm text-gray-400 leading-relaxed max-w-xl">
              Production-ready digital systems crafted for modern businesses,
              startups and enterprise-grade operations.
            </p>

          </div>

          <Link
            to="/templates"
            className="
              hidden md:flex items-center gap-3
              h-12 px-6 rounded-full
              bg-white/[0.03]
              border border-white/10
              text-sm text-white
              hover:bg-blue-500/5 hover:border-blue-500/20
              transition
            "
          >
            Explore Templates
            <ArrowRight size={15} />
          </Link>

        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-6">

          {/* MAIN FEATURE */}
          {templates[0] && (
            <div className="group relative overflow-hidden rounded-[42px] h-[600px]">

              <img
                src={templates[0].thumbnail}
                className="
                  absolute inset-0 w-full h-full object-cover
                  group-hover:scale-105 transition duration-700
                "
              />

              {/* softer gradient (less harsh than before) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />

              {/* subtle light bloom */}
              <div className="absolute -bottom-32 -right-32 w-[380px] h-[380px] bg-blue-500/20 blur-[120px]" />

              <div className="absolute inset-0 p-10 flex flex-col justify-between">

                {/* TOP TAGS */}
                <div className="flex items-start justify-between">

                  <div className="px-4 py-2 rounded-full bg-black/30 backdrop-blur-xl text-[10px] tracking-[0.25em] uppercase text-gray-200">
                    {templates[0].category}
                  </div>

                  {templates[0].featured && (
                    <div className="px-4 py-2 rounded-full bg-blue-600 text-[11px] flex items-center gap-2">
                      <Star size={11} />
                      Featured
                    </div>
                  )}

                </div>

                {/* CONTENT */}
                <div className="max-w-xl">

                  <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400 mb-4">
                    Deployment Ready
                  </p>

                  <h3 className="text-[48px] md:text-[64px] leading-[0.9] font-semibold tracking-[-0.06em] text-white">
                    {templates[0].title}
                  </h3>

                  <p className="mt-6 text-sm text-gray-300 max-w-md leading-relaxed">
                    {templates[0].shortDescription}
                  </p>

                  <div className="mt-10 flex items-center justify-between">

                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500">
                        Starting
                      </p>
                      <h4 className="text-2xl font-semibold text-white">
                        {templates[0].price}
                      </h4>
                    </div>

                    <Link
                      to={`/templates/${templates[0].slug}`}
                      className="
                        h-12 px-6 rounded-full
                        bg-white text-black
                        hover:bg-blue-500 hover:text-white
                        transition flex items-center gap-2
                      "
                    >
                      View System
                      <ArrowRight size={14} />
                    </Link>

                  </div>

                </div>

              </div>
            </div>
          )}

          {/* SIDE STACK (cleaner, less boxed) */}
          <div className="space-y-6">

            {templates.slice(1).map((item) => (
              <div
                key={item._id}
                className="
                  group relative overflow-hidden
                  rounded-[30px] h-[290px]
                "
              >

                <img
                  src={item.thumbnail}
                  className="
                    absolute inset-0 w-full h-full object-cover
                    group-hover:scale-105 transition duration-700
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent" />

                <div className="absolute inset-0 p-6 flex flex-col justify-between">

                  <div className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-xl text-[10px] uppercase tracking-[0.2em] w-fit text-gray-200">
                    {item.category}
                  </div>

                  <div>

                    <h3 className="text-[22px] font-semibold text-white tracking-[-0.03em]">
                      {item.title}
                    </h3>

                    <div className="mt-5 flex items-center justify-between">

                      <span className="text-gray-300 text-sm">
                        {item.price}
                      </span>

                      <Link
                        to={`/templates/${item.slug}`}
                        className="text-blue-400 text-sm flex items-center gap-2"
                      >
                        View <ArrowRight size={14} />
                      </Link>

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}