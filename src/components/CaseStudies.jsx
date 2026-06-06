import { useEffect, useState } from "react";
import axios from "../api/axios";
import { ArrowRight, X, TrendingUp } from "lucide-react";

export default function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [selectedCase, setSelectedCase] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const truncate = (str, max = 135) => {
    if (!str) return "";
    return str.length > max ? str.substring(0, max) + "..." : str;
  };

  const openModal = (item) => {
    setSelectedCase(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Small delay to let animation finish before clearing
    setTimeout(() => setSelectedCase(null), 300);
  };

  return (
    <section className="relative py-20 md:py-28 px-5 text-white overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-[#050816]">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a2333_1px,transparent_1px),linear-gradient(to_bottom,#1a2333_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
        
        {/* Gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-32 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* HEADER - More premium */}
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
          {caseStudies.map((item) => (
            <div
              key={item._id}
              onClick={() => openModal(item)}
              className="
                group relative
                h-full min-h-[520px]
                rounded-3xl
                overflow-hidden
                border border-white/10
                bg-white/[0.015]
                backdrop-blur-2xl
                hover:border-cyan-400/40
                hover:shadow-2xl hover:shadow-cyan-500/10
                transition-all duration-500 cursor-pointer
                flex flex-col
              "
            >
              {/* IMAGE SECTION - Better visual hierarchy */}
              <div className="relative h-60 overflow-hidden bg-zinc-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />
                
                {/* Enhanced overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90" />
                
                {/* Category badge */}
                <div className="absolute top-6 left-6">
                  <div className="px-4 py-1.5 text-xs font-medium tracking-widest uppercase bg-black/70 backdrop-blur-md border border-white/20 rounded-2xl text-cyan-400">
                    {item.category}
                  </div>
                </div>

                {/* Hover shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              {/* CONTENT */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold leading-tight tracking-tight mb-4 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-[15px] leading-relaxed flex-1">
                  {truncate(item.description)}
                </p>

                {/* Result Section */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-cyan-400 tracking-tighter">
                        {item.result}
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-widest">Performance Growth</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(item);
                  }}
                  className="
                    mt-8 w-full
                    group/btn
                    inline-flex items-center justify-center gap-2
                    px-8 py-4
                    rounded-2xl
                    bg-gradient-to-r from-cyan-400 to-cyan-500
                    text-black font-semibold text-sm
                    hover:brightness-110 active:scale-[0.985]
                    transition-all duration-300
                    shadow-lg shadow-cyan-500/30
                  "
                >
                  Explore Full Case
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <div 
            className="bg-[#0a0f1c] border border-white/10 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-80 md:h-96 overflow-hidden">
              <img
                src={selectedCase.image}
                alt={selectedCase.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/70 to-transparent" />
              
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur flex items-center justify-center border border-white/20 transition-all hover:scale-105"
              >
                <X size={22} />
              </button>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-block px-5 py-2 text-xs tracking-[2px] bg-cyan-400/10 border border-cyan-400/30 rounded-2xl text-cyan-400 mb-4">
                  {selectedCase.category}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-none tracking-tighter">
                  {selectedCase.title}
                </h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-auto p-8 md:p-12 space-y-10">
              <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-[17px]">
                {selectedCase.description}
              </div>

              <div className="bg-zinc-950/70 border border-white/5 rounded-3xl p-8">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="text-7xl font-bold text-cyan-400 tracking-tighter tabular-nums">
                      {selectedCase.result}
                    </div>
                  </div>
                  <div>
                    <div className="uppercase text-xs tracking-[3px] text-gray-500 mb-1">MEASURABLE IMPACT</div>
                    <div className="text-2xl font-medium">Performance Growth</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-white/10 p-6 flex justify-end">
              <button
                onClick={closeModal}
                className="px-10 py-4 rounded-2xl border border-white/20 hover:bg-white/5 text-sm font-medium transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}