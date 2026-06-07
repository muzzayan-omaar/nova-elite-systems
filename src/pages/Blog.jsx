import { useEffect, useState, useMemo } from "react";
import axios from "../api/axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Search, ArrowRight, TrendingUp, Clock, Calendar } from "lucide-react";

export default function Blog() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      const res = await axios.get("/case-studies");
      setCaseStudies(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const categories = useMemo(() => {
    const cats = new Set(caseStudies.map(item => item.category).filter(Boolean));
    return ["All", ...Array.from(cats)];
  }, [caseStudies]);

  const filteredStudies = useMemo(() => {
    return caseStudies.filter((item) => {
      const matchesSearch = item.title?.toLowerCase().includes(search.toLowerCase()) ||
                           item.description?.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeFilter === "All" || item.category === activeFilter;
      return matchesSearch && matchesCategory;
    });
  }, [caseStudies, search, activeFilter]);

  const featured = filteredStudies[0];
  const rest = filteredStudies.slice(1);

  return (
    <section className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <Navbar />

      {/* HERO */}
      <div className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.8px,transparent_1px)] bg-[length:40px_40px] opacity-5" />
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-blue-600/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[900px] h-[900px] bg-purple-600/10 blur-[160px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-blue-400 mb-6">
              <TrendingUp size={16} /> CASE STUDIES
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
              Real projects.<br />
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Real results.
              </span>
            </h1>

            <p className="mt-6 text-xl text-gray-400 max-w-xl">
              Discover how we deliver transformative digital solutions for forward-thinking organizations.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="mt-16 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search case studies, clients, or technologies..."
                className="w-full h-16 pl-16 pr-6 bg-white/[0.06] border border-white/10 rounded-3xl text-lg placeholder:text-gray-500 focus:border-blue-500/50 focus:bg-white/[0.08] transition-all"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeFilter === category
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white/[0.05] border border-white/10 hover:border-blue-500/30 text-gray-300 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="px-6 pb-28">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-32">
              <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-4" />
              <p className="text-gray-400">Loading case studies...</p>
            </div>
          ) : (
            <>
              {/* FEATURED */}
              {featured && (
                <div className="mb-20">
                  <p className="uppercase text-xs tracking-[0.125em] text-blue-400 mb-4 font-medium">Featured Project</p>
                  
                  <div className="group grid lg:grid-cols-5 gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] backdrop-blur-xl overflow-hidden hover:border-blue-500/30 transition-all duration-500">
                    <div className="lg:col-span-3 h-[420px] overflow-hidden relative">
                      <img
                        src={featured.image}
                        alt={featured.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                    </div>

                    <div className="lg:col-span-2 p-10 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 text-sm text-blue-400">
                        <span className="px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                          {featured.category}
                        </span>
                        {featured.readTime && (
                          <span className="flex items-center gap-1.5">
                            <Clock size={16} /> {featured.readTime}
                          </span>
                        )}
                      </div>

                      <h2 className="text-3xl font-bold mt-6 leading-tight group-hover:text-blue-400 transition-colors">
                        {featured.title}
                      </h2>

                      <p className="text-gray-400 mt-5 text-[15.5px] leading-relaxed">
                        {featured.description}
                      </p>

                      <div className="mt-8 flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-500">RESULT</p>
                          <p className="text-2xl font-bold text-emerald-400">{featured.result}</p>
                        </div>

                        <button className="flex items-center gap-3 group/btn text-blue-400 hover:text-blue-300 transition">
                          Read Full Story
                          <div className="w-9 h-9 rounded-2xl border border-blue-500/30 flex items-center justify-center group-hover/btn:bg-blue-500 group-hover/btn:text-white transition">
                            <ArrowRight size={18} />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SUB GRID */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-semibold">More Success Stories</h3>
                <p className="text-sm text-gray-500">
                  {filteredStudies.length} {filteredStudies.length === 1 ? "project" : "projects"}
                </p>
              </div>

              {rest.length === 0 ? (
                <div className="text-center py-24 text-gray-400">
                  No case studies match your current filters.
                </div>
              ) : (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {rest.map((item) => (
                    <div
                      key={item._id}
                      className="group rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] to-transparent" />
                        
                        <div className="absolute top-4 left-4 px-4 py-1 text-xs font-medium bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-blue-400">
                          {item.category}
                        </div>
                      </div>

                      <div className="p-7">
                        <h4 className="font-semibold text-xl leading-tight group-hover:text-blue-400 transition-colors line-clamp-2">
                          {item.title}
                        </h4>

                        <p className="text-gray-400 text-sm mt-4 line-clamp-3">
                          {item.description}
                        </p>

                        <div className="mt-7 flex items-center justify-between pt-6 border-t border-white/10">
                          <div className="flex items-center gap-2 text-emerald-400">
                            <TrendingUp size={18} />
                            <span className="font-semibold">{item.result}</span>
                          </div>

                          <button className="text-blue-400 hover:text-white flex items-center gap-2 text-sm font-medium transition">
                            Read case <ArrowRight size={17} className="group-hover:translate-x-0.5 transition" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
    </section>
  );
}