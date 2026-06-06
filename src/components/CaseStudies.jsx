import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import { ArrowRight, TrendingUp, Calendar, CheckCircle } from "lucide-react";

export default function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedIds, setExpandedIds] = useState(new Set());

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/case-studies");
      setCaseStudies(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const toggleExpand = (id) => {
    setExpandedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  const truncate = (str, max = 110) => {
    if (!str) return "";
    return str.length > max ? str.substring(0, max) + "..." : str;
  };

  // Client Logos
  const clientLogos = [
    { name: "Client A", src: "/logos/client1.png" },
    { name: "Client B", src: "/logos/client2.png" },
    { name: "Client C", src: "/logos/client3.png" },
    { name: "Client D", src: "/logos/client4.png" },
    { name: "Client E", src: "/logos/client5.png" },
    { name: "Client F", src: "/logos/client6.png" },
  ];

  return (
    <section className="relative py-20 md:py-28 px-5 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050816]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a2333_1px,transparent_1px),linear-gradient(to_bottom,#1a2333_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-32 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs uppercase tracking-[2px] text-emerald-400 font-medium">Proven Results</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-br from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
            Case Studies
          </h2>
          <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
            Real projects. Real impact. See how we transform businesses with precision execution.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-[560px] rounded-3xl overflow-hidden bg-white/[0.015] border border-white/10 backdrop-blur-2xl animate-pulse"
              >
                <div className="h-60 bg-zinc-900" />
                <div className="p-8 space-y-6">
                  <div className="h-4 w-24 bg-white/10 rounded" />
                  <div className="h-8 bg-white/10 rounded w-4/5" />
                  <div className="space-y-3">
                    <div className="h-4 bg-white/10 rounded" />
                    <div className="h-4 bg-white/10 rounded" />
                    <div className="h-4 bg-white/10 rounded w-3/4" />
                  </div>
                  <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-2xl" />
                    <div className="space-y-2 flex-1">
                      <div className="h-9 w-24 bg-white/10 rounded" />
                      <div className="h-3 w-32 bg-white/10 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            caseStudies.map((item) => {
              const isExpanded = expandedIds.has(item._id);
              const displayDesc = isExpanded 
                ? item.description 
                : truncate(item.description);

              return (
                <div
                  key={item._id}
                  className="
                    group relative h-full min-h-[560px]
                    rounded-3xl overflow-hidden
                    border border-white/10 bg-white/[0.015]
                    backdrop-blur-2xl hover:border-cyan-400/40
                    hover:shadow-2xl hover:shadow-cyan-500/10
                    transition-all duration-500 flex flex-col
                  "
                >
                  {/* IMAGE + HOVER LINK */}
                  <div className="relative h-60 overflow-hidden bg-zinc-950">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/90" />

                    {/* Category */}
                    <div className="absolute top-6 left-6">
                      <div className="px-4 py-1.5 text-xs font-medium tracking-widest uppercase bg-black/70 backdrop-blur-md border border-white/20 rounded-2xl text-cyan-400">
                        {item.category}
                      </div>
                    </div>

                    {/* Hover Link Overlay */}
                    <Link
                      to={`/case-studies/${item._id}`}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/60 backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-3 px-6 py-3.5 bg-white text-black rounded-2xl font-semibold text-sm hover:bg-cyan-400 hover:text-black transition-all active:scale-95">
                        Visit Full Case
                        <ArrowRight size={18} />
                      </div>
                    </Link>
                  </div>

                  {/* CONTENT */}
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-semibold leading-tight tracking-tight mb-4 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>

                    {/* Expandable Description */}
                    <div className="flex-1 text-gray-400 text-[15px] leading-relaxed">
                      {displayDesc}
                      {!isExpanded && item.description?.length > 110 && (
                        <button
                          onClick={(e) => { e.stopPropagation(); toggleExpand(item._id); }}
                          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium mt-1 inline-flex items-center gap-1"
                        >
                          See more <ArrowRight size={14} />
                        </button>
                      )}
                    </div>

                    {/* Result - Clinical Style */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <div className="flex items-center gap-5">
                        <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-5xl font-bold text-cyan-400 tracking-tighter tabular-nums">
                            {item.result}
                          </div>
                          <div className="text-xs text-gray-400 uppercase tracking-widest mt-0.5">
                            Performance Growth
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Date & Completion */}
                    <div className="mt-6 flex items-center justify-between text-xs text-gray-500 border-t border-white/10 pt-5">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{item.date || "2025"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-emerald-400" />
                        <span>Completed</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* CLIENT LOGO CAROUSEL */}
        {!loading && (
          <div className="mt-24">
            <p className="text-center text-sm uppercase tracking-[3px] text-gray-500 mb-8">Trusted by industry leaders</p>
            <div className="overflow-hidden relative">
              <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
                {[...clientLogos, ...clientLogos].map((logo, idx) => (
                  <img
                    key={idx}
                    src={logo.src}
                    alt={logo.name}
                    className="h-9 md:h-11 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}