import { useState } from "react";
import axios from "../api/axios";
import { toast } from "sonner";
import {
  CalendarDays,
  Briefcase,
  Globe,
  Shield,
  ArrowRight,
  Clock3,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Users,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BookConsultation() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    serviceInterest: "Website Development",
    preferredDate: "",
    projectDetails: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "fullName":
        if (!value.trim()) error = "Full name is required";
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(value)) error = "Please enter a valid email";
        break;
      case "phone":
        if (!value.trim()) error = "Phone number is required";
        break;
      case "projectDetails":
        if (!value.trim()) error = "Please share some project details";
        else if (value.trim().length < 30) error = "Please provide more details (min 30 characters)";
        break;
      default:
        break;
    }
    return error;
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const isFieldValid = (field) => {
    return touched[field] && !errors[field] && formData[field].trim() !== "";
  };

  const submitConsultation = async () => {
    // Final validation
    const newErrors = {};
    const requiredFields = ["fullName", "email", "phone", "projectDetails"];

    requiredFields.forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    setTouched(
      requiredFields.reduce((acc, field) => ({ ...acc, [field]: true }), {})
    );

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix the highlighted errors");
      return;
    }

    setLoading(true);

    try {
      await axios.post("/consultations", formData);
      toast.success("Consultation request submitted successfully!");

      // Reset form
      setFormData({
        fullName: "",
        businessName: "",
        email: "",
        phone: "",
        serviceInterest: "Website Development",
        preferredDate: "",
        projectDetails: "",
      });
      setErrors({});
      setTouched({});
    } catch (err) {
      console.error(err);
      toast.error("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen bg-[#050816] text-white overflow-hidden">
        {/* Background Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full bg-blue-500/10 blur-[170px]" />
          <div className="absolute bottom-[-300px] right-[-200px] w-[850px] h-[850px] rounded-full bg-indigo-500/10 blur-[160px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24">
          {/* HERO */}
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="uppercase tracking-[0.28em] text-[11px] text-blue-400 font-semibold mb-5">
                STRATEGY CONSULTATION
              </p>
              <h1 className="text-5xl md:text-6xl font-bold leading-[1.05]">
                Let’s Build Your <span className="text-blue-500">Future Roadmap</span>
              </h1>
              <p className="mt-6 text-gray-400 text-[15px] leading-relaxed max-w-lg">
                Get expert guidance on digital transformation, infrastructure strategy, 
                and scalable solutions tailored to your business goals.
              </p>

              <div className="flex flex-wrap gap-6 mt-10">
                <div className="flex items-center gap-3 text-sm">
                  <Clock3 size={18} className="text-blue-400" />
                  <span>30–60 minute session</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Sparkles size={18} className="text-blue-400" />
                  <span>Actionable insights</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Users size={18} className="text-blue-400" />
                  <span>Senior engineers & strategists</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative flex justify-center md:justify-end">
              <div className="absolute w-[380px] h-[380px] rounded-full bg-gradient-to-br from-blue-500/15 to-transparent blur-3xl" />

              <div className="relative w-full max-w-[520px] space-y-6">
                {[
                  {
                    icon: <Globe size={22} />,
                    title: "Digital Strategy",
                    desc: "Websites, SaaS & Mobile Platforms",
                  },
                  {
                    icon: <Shield size={22} />,
                    title: "Infrastructure Planning",
                    desc: "CCTV, Networking & Security Systems",
                  },
                  {
                    icon: <Briefcase size={22} />,
                    title: "Business Growth",
                    desc: "Automation & Scaling Roadmaps",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-white/[0.03] border border-white/10 rounded-2xl p-6 group hover:border-blue-500/30 transition"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                    <ArrowRight className="text-blue-400 opacity-40 group-hover:opacity-100 transition" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CONSULTATION FORM */}
          <div className="mt-20 bg-white/[0.02] border border-white/10 rounded-3xl p-10 md:p-16">
            <div className="flex items-center gap-5 mb-12">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <CalendarDays size={34} />
              </div>
              <div>
                <h2 className="text-3xl font-semibold">Schedule Your Strategy Session</h2>
                <p className="text-gray-400 mt-2">
                  Our team will get back to you within 24 hours to confirm the best time.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
              {/* Full Name */}
              <div className="space-y-2 relative">
                <label className="text-sm text-gray-400">Full Name *</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  onBlur={() => handleBlur("fullName")}
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-white/10 focus:border-blue-500 outline-none py-3 text-sm placeholder:text-gray-600 transition"
                />
                {touched.fullName && (
                  <div className="absolute right-0 top-9">
                    {isFieldValid("fullName") ? (
                      <CheckCircle size={18} className="text-emerald-400" />
                    ) : errors.fullName ? (
                      <AlertCircle size={18} className="text-red-400" />
                    ) : null}
                  </div>
                )}
                {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
              </div>

              {/* Business Name */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Business Name</label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => updateField("businessName", e.target.value)}
                  placeholder="Your Company"
                  className="w-full bg-transparent border-b border-white/10 focus:border-blue-500 outline-none py-3 text-sm placeholder:text-gray-600 transition"
                />
              </div>

              {/* Email */}
              <div className="space-y-2 relative">
                <label className="text-sm text-gray-400">Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  placeholder="you@company.com"
                  className="w-full bg-transparent border-b border-white/10 focus:border-blue-500 outline-none py-3 text-sm placeholder:text-gray-600 transition"
                />
                {touched.email && (
                  <div className="absolute right-0 top-9">
                    {isFieldValid("email") ? (
                      <CheckCircle size={18} className="text-emerald-400" />
                    ) : errors.email ? (
                      <AlertCircle size={18} className="text-red-400" />
                    ) : null}
                  </div>
                )}
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-2 relative">
                <label className="text-sm text-gray-400">Phone Number *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  onBlur={() => handleBlur("phone")}
                  placeholder="+256 ..."
                  className="w-full bg-transparent border-b border-white/10 focus:border-blue-500 outline-none py-3 text-sm placeholder:text-gray-600 transition"
                />
                {touched.phone && (
                  <div className="absolute right-0 top-9">
                    {isFieldValid("phone") ? (
                      <CheckCircle size={18} className="text-emerald-400" />
                    ) : errors.phone ? (
                      <AlertCircle size={18} className="text-red-400" />
                    ) : null}
                  </div>
                )}
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* Service Interest */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Service Interest</label>
                <select
                  value={formData.serviceInterest}
                  onChange={(e) => updateField("serviceInterest", e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 focus:border-blue-500 outline-none py-3 text-sm text-gray-300 transition"
                >
                  <option className="bg-[#07111F]">Website Development</option>
                  <option className="bg-[#07111F]">App Development</option>
                  <option className="bg-[#07111F]">CCTV Systems</option>
                  <option className="bg-[#07111F]">Networking</option>
                </select>
              </div>

              {/* Preferred Date */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Preferred Date</label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => updateField("preferredDate", e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 focus:border-blue-500 outline-none py-3 text-sm text-gray-300 transition"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="mt-10 space-y-2 relative">
              <label className="text-sm text-gray-400">Project Details / Goals *</label>
              <textarea
                rows="6"
                value={formData.projectDetails}
                onChange={(e) => updateField("projectDetails", e.target.value)}
                onBlur={() => handleBlur("projectDetails")}
                placeholder="Describe your project, current challenges, and what success looks like..."
                className="w-full bg-transparent border-b border-white/10 focus:border-blue-500 outline-none py-4 text-sm resize-none placeholder:text-gray-600 transition"
              />
              {touched.projectDetails && (
                <div className="absolute right-4 top-10">
                  {isFieldValid("projectDetails") ? (
                    <CheckCircle size={18} className="text-emerald-400" />
                  ) : errors.projectDetails ? (
                    <AlertCircle size={18} className="text-red-400" />
                  ) : null}
                </div>
              )}
              {errors.projectDetails && (
                <p className="text-red-400 text-xs mt-1">{errors.projectDetails}</p>
              )}
            </div>

            <button
              onClick={submitConsultation}
              disabled={loading}
              className="mt-10 flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-medium shadow-[0_0_40px_rgba(59,130,246,0.35)] disabled:opacity-70"
            >
              <CalendarDays size={20} />
              {loading ? "Scheduling..." : "Confirm Consultation Request"}
            </button>
          </div>

          {/* WHAT TO EXPECT */}
          <div className="mt-24 text-center">
            <p className="uppercase text-blue-400 text-xs tracking-[0.3em] font-semibold mb-4">
              YOUR CONSULTATION
            </p>
            <h2 className="text-4xl font-bold mb-12">What to Expect</h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Deep Discovery",
                  desc: "We analyze your current systems and business objectives",
                },
                {
                  title: "Strategic Recommendations",
                  desc: "Clear roadmap with prioritized solutions and timelines",
                },
                {
                  title: "Next Steps & Pricing",
                  desc: "Transparent proposal tailored to your needs",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/10 rounded-3xl p-10">
                  <div className="text-blue-400 text-5xl font-bold mb-6 opacity-20">0{i + 1}</div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}