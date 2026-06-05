import { Zap, Shield, Rocket, LineChart, Code2, Sparkles } from "lucide-react";

const points = [
  {
    icon: <Zap />,
    title: "Fast Execution",
    desc: "We don’t drag projects for months. We build and launch quickly without sacrificing quality.",
  },
  {
    icon: <Shield />,
    title: "Business-First Thinking",
    desc: "Every design decision is made to increase leads, sales, or customer trust — not just aesthetics.",
  },
  {
    icon: <Rocket />,
    title: "Built to Scale",
    desc: "Your website is structured so it can grow with your business, not break when you expand.",
  },
  {
    icon: <LineChart />,
    title: "Conversion Focused",
    desc: "We design user journeys that turn visitors into paying customers.",
  },
  {
    icon: <Code2 />,
    title: "Clean Engineering",
    desc: "No bloated templates. Just modern, maintainable, high-performance code.",
  },
  {
    icon: <Sparkles />,
    title: "Premium Feel",
    desc: "We create a high-end digital presence that makes your business look established instantly.",
  },
];

export default function ServiceWhyNova() {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold mb-4">
          Why Businesses Choose NOVA
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We don’t just build websites. We build digital systems that bring customers.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {points.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-gray-900/40 border border-gray-800 hover:border-blue-500 transition"
          >
            <div className="text-blue-400 mb-3">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}