// src/components/services/ServiceDeliverables.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Target,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
} from "lucide-react";

const defaultIcons = [
  Target,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
];

export default function ServiceDeliverables({
  badge = "WHAT WE DELIVER",
  title = "Solutions Built Around Your Goals",
  subtitle = "Every project follows a structured process designed to deliver measurable results and long-term business value.",
  items = [],
}) {
  const processedItems = items.map((item, index) => {
    if (typeof item === "string") {
      return {
        title: item,
        description:
          "Professional implementation with attention to detail and long-term value.",
        icon: defaultIcons[index] || TrendingUp,
      };
    }

    return {
      ...item,
      icon: item.icon || defaultIcons[index] || TrendingUp,
    };
  });

  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative py-28 overflow-hidden bg-[#05080F]">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/5"
          >
            <span className="text-cyan-400 text-xs md:text-sm font-semibold tracking-[3px] uppercase">
              {badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-slate-400 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative max-w-6xl mx-auto mb-20">
          {/* Line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-white/10" />

          {/* Active Line */}
          <motion.div
            animate={{
              width: `${
                processedItems.length > 1
                  ? (activeStep / (processedItems.length - 1)) * 100
                  : 0
              }%`,
            }}
            transition={{ duration: 0.4 }}
            className="absolute top-8 left-0 h-px bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400"
          />

          <div className="grid grid-cols-5 gap-4">
            {processedItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <button
                  key={index}
                  onMouseEnter={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                  className="relative flex flex-col items-center text-center group"
                >
                  <motion.div
                    animate={{
                      scale: activeStep === index ? 1.1 : 1,
                    }}
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300
                    ${
                      activeStep === index
                        ? "bg-cyan-500/15 border border-cyan-400/40 text-cyan-400"
                        : "bg-[#0B1220] border border-white/10 text-slate-500"
                    }`}
                  >
                    <Icon size={24} />
                  </motion.div>

                  <span
                    className={`mt-5 font-medium transition-colors duration-300 ${
                      activeStep === index
                        ? "text-white"
                        : "text-slate-500"
                    }`}
                  >
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6 mb-16">
          {processedItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-full flex items-center gap-4 pb-4 border-b transition-all
                ${
                  activeStep === index
                    ? "border-cyan-400/30"
                    : "border-white/10"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center
                  ${
                    activeStep === index
                      ? "bg-cyan-500/15 text-cyan-400"
                      : "bg-white/5 text-slate-500"
                  }`}
                >
                  <Icon size={20} />
                </div>

                <span
                  className={`font-medium ${
                    activeStep === index
                      ? "text-white"
                      : "text-slate-400"
                  }`}
                >
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Content */}
        {processedItems[activeStep] && (
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-cyan-400 text-sm tracking-[4px] uppercase mb-4">
              Step {String(activeStep + 1).padStart(2, "0")}
            </div>

            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {processedItems[activeStep].title}
            </h3>

            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              {processedItems[activeStep].description}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}