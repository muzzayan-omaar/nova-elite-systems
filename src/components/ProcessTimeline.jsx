// src/components/ProcessTimeline.jsx

import { motion } from "framer-motion";

export default function ProcessTimeline() {
  const steps = [
    {
      title: "Discovery",
      desc: "Understanding your business, goals, and technical requirements.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Strategy",
      desc: "Mapping architecture, user flow, and scalable system design.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Design",
      desc: "Crafting modern UI/UX systems focused on clarity and conversion.",
      img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Development",
      desc: "Building fast, scalable, production-ready digital systems.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Launch",
      desc: "Deployment, optimization, and long-term system support.",
      img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  return (
    <section className="py-36 px-6 bg-[#050816] overflow-hidden relative">

      {/* ambient glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/5 blur-[160px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="mb-24 max-w-2xl">
          <p className="text-blue-400 text-[11px] tracking-[0.4em] uppercase mb-6">
            Workflow System
          </p>

          <h2 className="text-[44px] md:text-[64px] leading-[0.92] tracking-[-0.06em] font-semibold text-white">
            From concept
            <br />
            to deployment
          </h2>

          <p className="mt-7 text-gray-400 text-sm leading-relaxed">
            A structured engineering pipeline designed to transform ideas into scalable production systems.
          </p>
        </div>

        {/* FLOW */}
        <div className="relative">

          {/* center spine */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10" />

          <div className="space-y-28">

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`
                  relative flex items-start gap-10 md:gap-16
                  ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                `}
              >

                {/* NODE */}
                <div className="relative z-10 flex items-center justify-center">

                  <div className="w-12 h-12 rounded-full bg-[#0B0F1A] border border-white/10 flex items-center justify-center text-blue-400 font-medium">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="absolute w-16 h-16 rounded-full bg-blue-500/10 blur-2xl" />

                </div>

                {/* CONTENT BLOCK */}
                <div className="w-full max-w-md">

                  {/* TEXT */}
                  <div className="mb-6">
                    <h3 className="text-white text-[20px] font-medium tracking-[-0.03em]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-[13px] text-gray-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* IMAGE (BELOW CONTENT, NOT BACKGROUND) */}
                  <div className="relative overflow-hidden rounded-2xl group">

                    <img
                      src={step.img}
                      alt={step.title}
                      className="
                        w-full h-[180px]
                        object-cover
                        rounded-2xl
                        opacity-80
                        group-hover:opacity-100
                        transition duration-700
                        scale-[1.02]
                        group-hover:scale-[1.05]
                      "
                    />

                    {/* bottom fade (your requested effect) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />

                  </div>

                </div>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}