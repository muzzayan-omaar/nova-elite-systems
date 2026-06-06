import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import { ArrowRight, TrendingUp, Calendar, CheckCircle } from "lucide-react";

export default function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);

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
                className="h-[480px] rounded-3xl overflow-hidden bg-white/[0.015] border border-white/10 backdrop-blur-2xl animate-pulse"
              >
                <div className="h-80 bg-zinc-900" />
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-white/10 rounded w-3/4" />
                  <div className="h-4 bg-white/10 rounded w-1/2" />
                </div>
              </div>
            ))
          ) : (
            caseStudies.map((item) => (
              <div
                key={item._id}
                className="
                  group relative h-full min-h-[480px]
                  rounded-3xl overflow-hidden
                  border border-white/10 bg-white/[0.015]
                  backdrop-blur-2xl hover:border-cyan-400/40
                  hover:shadow-2xl hover:shadow-cyan-500/10
                  transition-all duration-500 flex flex-col
                "
              >
                {/* IMAGE AREA - Full Image Without Cropping */}
                <div className="relative h-80 bg-zinc-950 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Bottom gradient blur for smooth transition */}
                  <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050816] via-[#050816]/90 to-transparent" />

                  {/* Category Tag - Smaller */}
                  <div className="absolute top-5 left-5 z-10">
                    <div className="px-3 py-1 text-[10px] font-medium tracking-widest uppercase bg-black/70 backdrop-blur-md border border-white/20 rounded-xl text-cyan-400">
                      {item.category}
                    </div>
                  </div>

                  {/* Hover "Visit" Link - Only on Image Hover */}
                  <Link
                    to={`/case-studies/${item._id}`}
                    className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/60"
                  >
                    <div className="flex items-center gap-2 text-white text-lg font-medium tracking-wide hover:text-cyan-400 transition-colors">
                      Visit
                      <ArrowRight size={20} />
                    </div>
                  </Link>
                </div>

                {/* CONTENT AREA */}
                <div className="flex-1 p-6 flex flex-col">
                  {/* Title */}
                  <h3 className="text-2xl font-semibold leading-tight tracking-tight mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Bottom Meta Bar */}
                  <div className="mt-auto pt-3 border-t border-white/10 flex items-center justify-between text-sm">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={17} />
                      <span>{item.date || "2025"}</span>
                    </div>

                    {/* Status */}
                    <div className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle size={17} />
                      <span>Completed</span>
                    </div>

                    {/* Outcome */}
                    <div className="flex items-center gap-2 text-cyan-400">
                      <TrendingUp size={17} />
                      <span className="font-semibold tracking-tighter text-lg">{item.result}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        {/*  
        {!loading && (
          <div className="mt-24">
            <p className="text-center text-sm uppercase tracking-[3px] text-gray-500 mb-8">Trusted by industry leaders</p>
            
            <div className="overflow-hidden relative">
              <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
                <img
                  src="https://res.cloudinary.com/your-cloud-name/image/upload/v1/logos/client1.png"
                  alt="Client 1"
                  className="h-9 md:h-11 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
                <img
                  src="https://res.cloudinary.com/your-cloud-name/image/upload/v1/logos/client2.png"
                  alt="Client 2"
                  className="h-9 md:h-11 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
                <img
                  src="https://res.cloudinary.com/your-cloud-name/image/upload/v1/logos/client3.png"
                  alt="Client 3"
                  className="h-9 md:h-11 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
                <img
                  src="https://res.cloudinary.com/your-cloud-name/image/upload/v1/logos/client4.png"
                  alt="Client 4"
                  className="h-9 md:h-11 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
                <img
                  src="https://res.cloudinary.com/your-cloud-name/image/upload/v1/logos/client5.png"
                  alt="Client 5"
                  className="h-9 md:h-11 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
                <img
                  src="https://res.cloudinary.com/your-cloud-name/image/upload/v1/logos/client6.png"
                  alt="Client 6"
                  className="h-9 md:h-11 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />

                <img
                  src="https://res.cloudinary.com/your-cloud-name/image/upload/v1/logos/client1.png"
                  alt="Client 1"
                  className="h-9 md:h-11 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
                <img
                  src="https://res.cloudinary.com/your-cloud-name/image/upload/v1/logos/client2.png"
                  alt="Client 2"
                  className="h-9 md:h-11 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
                <img
                  src="https://res.cloudinary.com/your-cloud-name/image/upload/v1/logos/client3.png"
                  alt="Client 3"
                  className="h-9 md:h-11 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
                <img
                  src="https://res.cloudinary.com/your-cloud-name/image/upload/v1/logos/client4.png"
                  alt="Client 4"
                  className="h-9 md:h-11 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
                <img
                  src="https://res.cloudinary.com/your-cloud-name/image/upload/v1/logos/client5.png"
                  alt="Client 5"
                  className="h-9 md:h-11 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
                <img
                  src="https://res.cloudinary.com/your-cloud-name/image/upload/v1/logos/client6.png"
                  alt="Client 6"
                  className="h-9 md:h-11 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        )}
        */}
      </div>
    </section>
  );
}