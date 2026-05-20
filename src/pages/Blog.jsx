import { useEffect, useState } from "react";
import axios from "../api/axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Search, ArrowRight, TrendingUp } from "lucide-react";

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
      setCaseStudies(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredStudies = caseStudies.filter((item) =>
    item.title?.toLowerCase().includes(search.toLowerCase())
  );

  const featured = filteredStudies[0];
  const rest = filteredStudies.slice(1);

  return (
    <section className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <Navbar />

      {/* HERO */}
<div className="relative pt-40 pb-24 px-6 overflow-hidden">

  {/* GLOW BASE */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-blue-500/10 blur-[180px]" />
  <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[140px]" />

  {/* BACKGROUND IMAGE LAYER (NEW LIFESTYLE FEEL) */}
  <div className="absolute inset-0 opacity-20">
    <img
      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
      alt="background"
      className="w-full h-full object-cover scale-110 blur-sm"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#050816]/70 to-[#050816]" />
  </div>

  {/* FLOATING GLASS SHAPES (MAKES IT LIVING / MODERN) */}
  <div className="absolute top-32 left-10 w-64 h-40 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl rotate-[-6deg]" />
  <div className="absolute bottom-20 right-16 w-72 h-44 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl rotate-[8deg]" />
  <div className="absolute top-20 right-1/3 w-40 h-40 bg-blue-500/10 rounded-2xl blur-2xl" />

  {/* GRID NOISE LAYER */}
  <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-[size:28px_28px]" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto">

    <div className="max-w-3xl">
      <p className="uppercase tracking-[0.35em] text-xs text-blue-400 font-semibold mb-6">
        Case Studies
      </p>

      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Real Projects, <br />
        <span className="text-blue-500">Real Results.</span>
      </h1>

      <p className="mt-6 text-gray-400 max-w-2xl">
        Explore how NOVA Elite Systems transforms brands, businesses, and infrastructures through premium digital and security solutions.
      </p>
    </div>

    {/* SEARCH */}
    <div className="mt-12 max-w-xl relative">
      <Search
        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
        size={18}
      />

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search case studies..."
        className="w-full h-[58px] pl-14 pr-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl outline-none text-sm focus:border-blue-500/50 transition"
      />
    </div>

    {/* UI FILTER CHIPS */}
    <div className="mt-8 flex gap-3 flex-wrap">
      {["All", "Web", "CCTV", "Networking", "Security"].map((c) => (
        <div
          key={c}
          className="px-4 py-2 rounded-full text-xs border border-white/10 bg-white/[0.03] text-gray-300 hover:border-blue-500/40 hover:text-blue-400 cursor-pointer transition"
        >
          {c}
        </div>
      ))}
    </div>

  </div>
</div>

      {/* CONTENT */}
      <div className="px-6 pb-28">
        <div className="max-w-7xl mx-auto">

          {/* FEATURED */}
          {featured && (
            <div className="mb-12">
              <p className="text-xs text-gray-500 mb-4 tracking-[0.2em] uppercase">
                Featured Case Study
              </p>

              <div className="group grid md:grid-cols-2 gap-6 rounded-[32px] border border-white/10 bg-white/[0.03] overflow-hidden hover:border-blue-500/30 transition">
                <div className="h-[320px] md:h-full overflow-hidden">
                  <img
                    src={featured.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <span className="text-xs text-blue-400 tracking-[0.2em] uppercase">
                    {featured.category}
                  </span>

                  <h2 className="text-3xl font-bold mt-3 group-hover:text-blue-400 transition">
                    {featured.title}
                  </h2>

                  <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                    {featured.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="text-blue-400" size={18} />
                      <p className="text-blue-400 font-bold">
                        {featured.result}
                      </p>
                    </div>

                    <button className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-blue-500 hover:border-blue-500 flex items-center justify-center transition">
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* GRID HEADER */}
          <div className="flex items-end justify-between mb-8">
            <h3 className="text-lg text-white/80 font-semibold">
              More Case Studies
            </h3>
            <p className="text-xs text-gray-500">
              {filteredStudies.length} results
            </p>
          </div>

          {/* GRID */}
          {rest.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              No case studies found.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
              {rest.map((item) => (
                <div
                  key={item._id}
                  className="group rounded-[28px] border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-blue-500/30 overflow-hidden transition"
                >
                  <div className="h-[220px] overflow-hidden relative">
                    <img
                      src={item.image}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />

                    <div className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-black/40 border border-white/10 text-blue-400">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold group-hover:text-blue-400 transition">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm mt-3 line-clamp-3">
                      {item.description}
                    </p>

                    <div className="mt-6 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <TrendingUp size={16} className="text-blue-400" />
                        <span className="text-blue-400 font-semibold text-sm">
                          {item.result}
                        </span>
                      </div>

                      <button className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-blue-500 hover:border-blue-500 flex items-center justify-center transition">
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      <Footer />
    </section>
  );
}