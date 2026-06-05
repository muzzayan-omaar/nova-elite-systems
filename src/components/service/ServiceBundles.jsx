// src/components/services/ServiceBundles.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Check,
  Globe,
  Smartphone,
  LayoutDashboard,
  Server,
  Shield,
  Database,
  Zap,
  ArrowRight,
} from "lucide-react";

export default function ServiceBundles({
  title = "Choose Your Package",
  subtitle = "Flexible solutions designed around your goals.",
  items = [],
}) {
  const [expandedCard, setExpandedCard] = useState(null);

  const getFeatureIcon = (feature) => {
    const f = feature.toLowerCase();

    if (
      f.includes("seo") ||
      f.includes("website") ||
      f.includes("ui")
    )
      return <Globe size={14} />;

    if (
      f.includes("backend") ||
      f.includes("api")
    )
      return <Server size={14} />;

    if (
      f.includes("mobile") ||
      f.includes("android") ||
      f.includes("ios")
    )
      return <Smartphone size={14} />;

    if (
      f.includes("dashboard") ||
      f.includes("admin")
    )
      return <LayoutDashboard size={14} />;

    if (
      f.includes("security") ||
      f.includes("auth")
    )
      return <Shield size={14} />;

    if (
      f.includes("database") ||
      f.includes("cloud")
    )
      return <Database size={14} />;

    if (
      f.includes("speed") ||
      f.includes("performance") ||
      f.includes("fast")
    )
      return <Zap size={14} />;

    return <Check size={14} />;
  };

  return (
    <section className="py-28 bg-[#05080F]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            {title}
          </h2>

          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Packages */}
        <div className="grid lg:grid-cols-3 gap-6">
          {items.map((plan, index) => {
            const expanded =
              expandedCard === index;

            const visibleFeatures =
              expanded
                ? plan.features
                : plan.features.slice(0, 4);

            return (
              <div
                key={index}
                className={`
                  relative group overflow-hidden
                  border backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-1

                  ${
                    plan.popular
                      ? `
                      bg-gradient-to-b
                      from-cyan-500/[0.08]
                      to-white/[0.02]
                      border-cyan-500/40
                      shadow-[0_0_60px_rgba(34,211,238,0.15)]
                    `
                      : `
                      bg-white/[0.02]
                      border-white/10
                    `
                  }
                `}
              >
                {/* Ribbon */}
                {plan.popular && (
                  <div className="absolute top-5 right-[-42px] rotate-45 bg-cyan-500 text-black text-[10px] px-12 py-1 font-semibold tracking-wide">
                    MOST POPULAR
                  </div>
                )}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-cyan-500/10 to-transparent" />

                <div className="relative z-10 p-7 flex flex-col h-full">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white">
                      {plan.title}
                    </h3>

                    <p className="text-sm text-slate-400 mt-2">
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-white">
                      {plan.price}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {visibleFeatures.map(
                      (feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3"
                        >
                          <div className="mt-0.5 w-6 h-6 rounded-md bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                            {getFeatureIcon(feature)}
                          </div>

                          <span className="text-sm text-slate-300">
                            {feature}
                          </span>
                        </div>
                      )
                    )}
                  </div>

                  {/* Expand */}
                  {plan.features.length > 4 && (
                    <button
                      onClick={() =>
                        setExpandedCard(
                          expanded ? null : index
                        )
                      }
                      className="text-sm text-cyan-400 hover:text-cyan-300 mb-8 text-left"
                    >
                      {expanded
                        ? "Show Less"
                        : `+${
                            plan.features.length - 4
                          } More Features`}
                    </button>
                  )}

                  {/* CTA */}
                 <Link
  to="/start-project"
  state={{
    service: plan.title,
    packageData: plan,
  }}
  className={`
    mt-auto
    h-12
    flex
    items-center
    justify-center
    gap-2
    font-medium
    transition
    w-full

    ${
      plan.popular
        ? `
          bg-cyan-500
          text-black
          hover:bg-cyan-400
        `
        : `
          border border-white/10
          hover:border-cyan-500/30
          text-white
        `
    }
  `}
>
  Get Started
  <ArrowRight size={16} />
</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}