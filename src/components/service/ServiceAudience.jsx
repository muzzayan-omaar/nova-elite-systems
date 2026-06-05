// src/components/services/ServiceAudience.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Store,
  ShoppingBag,
  Briefcase,
  Building2,
  GraduationCap,
  UtensilsCrossed,
  Stethoscope,
  HardHat,
  TrendingUp,
} from "lucide-react";

const fallbackIcons = [
  Rocket,
  Store,
  ShoppingBag,
  Briefcase,
  Building2,
  GraduationCap,
  UtensilsCrossed,
  Stethoscope,
  HardHat,
  TrendingUp,
];

export default function ServiceAudience({
  title = "Who Is This For?",
  subtitle = "Whether you're launching, growing, or scaling, we help businesses leverage technology to achieve measurable results.",
  items = [],
}) {
  const processedItems = items.map((item, index) => {
    if (typeof item === "string") {
      return {
        title: item,
        description:
          "Perfect solution designed to help you reach your goals effectively.",
        icon: fallbackIcons[index % fallbackIcons.length],
      };
    }

    return {
      ...item,
      icon: item.icon || fallbackIcons[index % fallbackIcons.length],
    };
  });

  return (
    <section className="relative py-32 overflow-hidden bg-[#05080F]">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/5"
          >
            <span className="text-cyan-400 text-xs md:text-sm font-semibold tracking-[3px] uppercase">
              Perfect Fit
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-white"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-slate-400 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Audience Rows */}
        <div className="relative">
          {processedItems.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  className={`relative flex ${
                    isEven ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className="w-full lg:w-[65%] relative">
                    {/* Giant Number */}
                    <span className="absolute -top-10 left-0 text-[6rem] md:text-[10rem] font-black text-white/[0.03] leading-none select-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div
                      className={`relative z-10 ${
                        isEven ? "text-left" : "text-right"
                      }`}
                    >
                      {/* Icon */}
                      <div
                        className={`flex mb-8 ${
                          isEven ? "justify-start" : "justify-end"
                        }`}
                      >
                        <div className="w-16 h-16 rounded-full border border-cyan-400/20 bg-cyan-500/5 flex items-center justify-center">
                          <Icon
                            size={28}
                            className="text-cyan-400"
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Diagonal Divider */}
                {index !== processedItems.length - 1 && (
                  <div
                    className={`flex my-20 ${
                      isEven ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`
                        relative
                        w-56
                        md:w-96
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-cyan-400/40
                        to-transparent
                        ${isEven ? "rotate-[8deg]" : "-rotate-[8deg]"}
                      `}
                    >
                      <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}