import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../api/axios";
import { ArrowLeft, ExternalLink, Star } from "lucide-react";

export default function TemplateDetails() {
  const { slug } = useParams();
  const [template, setTemplate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        const res = await API.get(`/templates/slug/${slug}`);
        setTemplate(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTemplate();
  }, [slug]);

  if (loading) {
    return (
      <div className="text-gray-400 p-10">
        Loading template...
      </div>
    );
  }

  if (!template) {
    return (
      <div className="p-10 text-gray-400">
        Template not found
      </div>
    );
  }

return (
  <section className="min-h-screen bg-[#050816] text-white px-6 md:px-10 py-24">

    {/* BACK */}
    <Link
      to="/templates"
      className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-10 transition"
    >
      <ArrowLeft size={16} />
      Back to Templates
    </Link>

    <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">

      {/* LEFT: IMAGE + GALLERY FEEL */}
      <div className="lg:col-span-2 space-y-6">

        {/* MAIN IMAGE */}
        <div className="relative rounded-[28px] overflow-hidden border border-white/10">
          <img
            src={template.thumbnail}
            alt={template.title}
            className="w-full h-[480px] object-cover hover:scale-[1.02] transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/60 to-transparent" />
        </div>

        {/* DESCRIPTION BLOCK */}
        <div className="p-6 rounded-[24px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">
          <h2 className="text-lg font-semibold mb-3">
            Overview
          </h2>

          <p className="text-gray-400 leading-relaxed">
            {template.shortDescription}
          </p>
        </div>

        {/* FEATURES */}
        <div className="p-6 rounded-[24px] border border-white/10 bg-white/[0.02]">
          <h2 className="text-lg font-semibold mb-4">
            Features
          </h2>

          <div className="flex flex-wrap gap-2">
            {template.features?.map((f, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* TECH */}
        <div className="p-6 rounded-[24px] border border-white/10 bg-white/[0.02]">
          <h2 className="text-lg font-semibold mb-4">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-2">
            {template.technologies?.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full border border-white/10 text-gray-400"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* RIGHT: STICKY INFO CARD */}
      <div className="lg:col-span-1">

        <div className="sticky top-24 space-y-6">

          {/* INFO CARD */}
          <div className="p-6 rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-[0.2em] text-blue-400">
                {template.category}
              </span>

              {template.featured && (
                <span className="flex items-center gap-1 text-xs bg-blue-600 px-3 py-1 rounded-full">
                  <Star size={12} />
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-2xl md:text-3xl font-semibold tracking-[-0.04em]">
              {template.title}
            </h1>

            <p className="mt-4 text-sm text-gray-400">
              {template.shortDescription}
            </p>

            {/* PRICE */}
            <div className="mt-6">
              <p className="text-xs text-gray-500 uppercase tracking-widest">
                Starting Price
              </p>
              <h2 className="text-3xl font-bold mt-1 text-white">
                {template.price}
              </h2>
            </div>

            {/* CTA */}
            <div className="mt-6 space-y-3">

              <a
                href={template.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-white text-black hover:bg-blue-500 hover:text-white transition"
              >
                Live Demo
                <ExternalLink size={14} />
              </a>

              <a
                href={`https://wa.me/0000000000?text=I want this template: ${template.title}`}
                target="_blank"
                className="w-full flex justify-center px-5 py-3 rounded-xl border border-white/10 hover:border-blue-500/30 transition text-sm"
              >
                Request Setup
              </a>

            </div>

          </div>

          {/* SMALL META BOX */}
          <div className="p-5 rounded-[24px] border border-white/10 bg-white/[0.02] text-sm text-gray-400">
            <p className="mb-2">
              💡 Deployment-ready system
            </p>
            <p>
              Includes full source + setup support option
            </p>
          </div>

        </div>

      </div>

    </div>
  </section>
);
}