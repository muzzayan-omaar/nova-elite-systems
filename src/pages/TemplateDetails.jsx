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
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-10"
      >
        <ArrowLeft size={16} />
        Back to Templates
      </Link>

      {/* HERO */}
      <div className="grid lg:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div className="rounded-3xl overflow-hidden border border-white/10">
          <img
            src={template.thumbnail}
            alt={template.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* INFO */}
        <div>

          <div className="flex items-center gap-3 mb-4">
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

          <h1 className="text-3xl md:text-5xl font-semibold tracking-[-0.04em]">
            {template.title}
          </h1>

          <p className="mt-5 text-gray-400 leading-relaxed">
            {template.shortDescription}
          </p>

          {/* PRICE */}
          <div className="mt-8">
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              Starting Price
            </p>
            <h2 className="text-2xl font-bold mt-1">
              {template.price}
            </h2>
          </div>

          {/* ACTIONS */}
          <div className="mt-8 flex gap-3">
            <a
              href={template.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-white text-black hover:bg-blue-500 hover:text-white transition flex items-center gap-2"
            >
              Live Demo
              <ExternalLink size={14} />
            </a>

            <a
              href={`https://wa.me/0000000000?text=I want this template: ${template.title}`}
              target="_blank"
              className="px-5 py-3 rounded-xl border border-white/10 hover:border-blue-500/30 transition"
            >
              Request Setup
            </a>
          </div>

          {/* TECH */}
          <div className="mt-10">
            <p className="text-sm text-gray-400 mb-3">Tech Stack</p>

            <div className="flex flex-wrap gap-2">
              {template.technologies?.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* FEATURES */}
          <div className="mt-10">
            <p className="text-sm text-gray-400 mb-3">Features</p>

            <div className="flex flex-wrap gap-2">
              {template.features?.map((feature, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}