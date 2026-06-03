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

{/* AIRBNB STYLE GRID */}
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

  {templates.map((item, index) => (
    <Link
      key={item._id}
      to={`/templates/${item.slug}`}
      className={`
        group relative
        rounded-2xl overflow-hidden
        border border-white/10
        bg-[#0A0F1C]
        hover:border-white/20
        transition
        ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
      `}
    >

      {/* IMAGE */}
      <div className={`
        relative overflow-hidden
        ${index === 0 ? "h-[320px] lg:h-[420px]" : "h-[220px]"}
      `}>
        <img
          src={item.thumbnail}
          className="
            w-full h-full object-cover
            group-hover:scale-105 transition duration-700
          "
        />

        {/* soft overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* BADGES (subtle Airbnb style) */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-xl text-[10px] text-gray-200 uppercase tracking-[0.2em]">
            {item.category}
          </span>

          {item.featured && (
            <span className="px-3 py-1 rounded-full bg-blue-500/80 text-[10px] text-white uppercase tracking-[0.2em]">
              Featured
            </span>
          )}
        </div>

        {/* PRICE (airbnb-style floating corner) */}
        <div className="absolute bottom-3 right-3">
          <span className="px-3 py-1 rounded-lg bg-black/50 backdrop-blur-xl text-white text-sm font-medium">
            From ${item.price}
          </span>
        </div>
      </div>

      {/* CONTENT (BELOW IMAGE like Airbnb) */}
      <div className="p-4">

        <h3 className="text-white text-lg font-semibold group-hover:text-blue-400 transition">
          {item.title}
        </h3>

        <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">
          {item.shortDescription}
        </p>

        {/* META ROW */}
        <div className="mt-3 flex items-center justify-between">

          <span className="text-[11px] text-gray-500 uppercase tracking-[0.2em]">
            Deployment Ready
          </span>

          <span className="text-blue-400 text-sm flex items-center gap-1">
            View →
          </span>

        </div>

      </div>

    </Link>
  ))}

</div>

      </div>
    </section>
  );
}