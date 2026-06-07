import {
  LifeBuoy,
  Upload,
  MonitorSmartphone,
  Zap,
  Clock3,
  Wifi,
  PhoneCall,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Shield,
  Users,
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TechnicalSupport() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    serviceType: "Web Development",
    priority: "Medium",
    issue: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

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
      case "issue":
        if (!value.trim()) error = "Please describe the issue";
        else if (value.trim().length < 20) error = "Please provide more details (min 20 characters)";
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Live validation for better UX
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const isFieldValid = (field) => {
    return touched[field] && !errors[field] && form[field].trim() !== "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation
    const newErrors = {};
    Object.keys(form).forEach((key) => {
      if (["fullName", "email", "phone", "issue"].includes(key)) {
        const error = validateField(key, form[key]);
        if (error) newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      issue: true,
    });

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setLoading(true);

    // TODO: Replace with your actual backend call if needed
    setTimeout(() => {
      toast.success("Support ticket submitted successfully! We'll contact you shortly.");
      setLoading(false);

      // Keep your original navigation logic
      navigate("/project-booking", {
        state: {
          // service, packageData, formData, startMethod - add if needed
          formData: form,
        },
      });
    }, 800);
  };

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen bg-[#050816] text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-blue-500/10 blur-[160px]" />
          <div className="absolute bottom-[-250px] right-[-150px] w-[800px] h-[800px] rounded-full bg-indigo-500/10 blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24">
          {/* HERO */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.28em] text-[11px] text-blue-400 font-semibold mb-5">
                24/7 TECHNICAL SUPPORT
              </p>
              <h1 className="text-5xl md:text-6xl font-bold leading-[1.05]">
                Expert Help When <span className="text-blue-500">You Need It Most</span>
              </h1>
              <p className="mt-6 text-gray-400 text-[15px] leading-relaxed max-w-lg">
                Fast, reliable technical support for web platforms, mobile apps, networking infrastructure, 
                CCTV systems, and enterprise security solutions.
              </p>

              <div className="flex items-center gap-8 mt-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <Shield size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Response Time</p>
                    <p className="font-semibold">Under 30 mins</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <Users size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Expert Engineers</p>
                    <p className="font-semibold">Available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 md:pl-8">
              {[
                { icon: <Zap size={22} />, title: "Rapid Resolution", desc: "Critical issues resolved fast" },
                { icon: <Wifi size={22} />, title: "Remote Diagnostics", desc: "Networking & CCTV support" },
                { icon: <Clock3 size={22} />, title: "Transparent Updates", desc: "Clear communication throughout" },
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="mt-1 text-blue-400">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SUPPORT FORM - Enhanced */}
          <div className="mt-20 bg-white/[0.02] border border-white/10 rounded-3xl p-10 md:p-16">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <LifeBuoy size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-semibold">Submit a Support Ticket</h2>
                <p className="text-gray-400 mt-2">Our team typically responds within 30 minutes during business hours.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
                {/* Full Name */}
                <div className="space-y-2 relative">
                  <label className="text-sm text-gray-400">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
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

                {/* Company */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full bg-transparent border-b border-white/10 focus:border-blue-500 outline-none py-3 text-sm placeholder:text-gray-600 transition"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2 relative">
                  <label className="text-sm text-gray-400">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
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

                {/* Service Type */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Service Type</label>
                  <select
                    name="serviceType"
                    value={form.serviceType}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/10 focus:border-blue-500 outline-none py-3 text-sm text-gray-300 transition"
                  >
                    <option className="bg-[#07111F]">Web Development</option>
                    <option className="bg-[#07111F]">App Development</option>
                    <option className="bg-[#07111F]">CCTV Systems</option>
                    <option className="bg-[#07111F]">Networking</option>
                  </select>
                </div>

                {/* Priority */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Priority Level</label>
                  <select
                    name="priority"
                    value={form.priority}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/10 focus:border-blue-500 outline-none py-3 text-sm text-gray-300 transition"
                  >
                    <option className="bg-[#07111F]">Low</option>
                    <option className="bg-[#07111F]">Medium</option>
                    <option className="bg-[#07111F]">Urgent</option>
                  </select>
                </div>
              </div>

              {/* Issue Description */}
              <div className="space-y-2 relative">
                <label className="text-sm text-gray-400">Describe the Issue *</label>
                <textarea
                  rows="6"
                  name="issue"
                  value={form.issue}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Please provide as much detail as possible..."
                  className="w-full bg-transparent border-b border-white/10 focus:border-blue-500 outline-none py-4 text-sm resize-none placeholder:text-gray-600 transition"
                />
                {touched.issue && (
                  <div className="absolute right-4 top-10">
                    {isFieldValid("issue") ? (
                      <CheckCircle size={18} className="text-emerald-400" />
                    ) : errors.issue ? (
                      <AlertCircle size={18} className="text-red-400" />
                    ) : null}
                  </div>
                )}
                {errors.issue && <p className="text-red-400 text-xs mt-1">{errors.issue}</p>}
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-medium shadow-[0_0_40px_rgba(59,130,246,0.3)] disabled:opacity-70"
                >
                  <Upload size={20} />
                  {loading ? "Submitting Ticket..." : "Submit Support Ticket"}
                </button>

                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <PhoneCall size={18} className="text-blue-400" />
                  Need immediate help? Call our emergency line
                </div>
              </div>
            </form>
          </div>

          {/* SUPPORT PROCESS */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <p className="uppercase text-blue-400 text-xs tracking-[0.3em] font-semibold mb-3">HOW IT WORKS</p>
              <h2 className="text-4xl font-bold">Simple &amp; Efficient Support Process</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Submit Ticket", desc: "Fill the form with issue details" },
                { step: "02", title: "Assessment", desc: "Our engineers review your case" },
                { step: "03", title: "Remote Resolution", desc: "Quick fix via remote access" },
                { step: "04", title: "Follow-up", desc: "Confirmation & documentation" },
              ].map((item) => (
                <div key={item.step} className="bg-white/[0.02] border border-white/10 rounded-2xl p-8">
                  <div className="text-blue-400 text-4xl font-bold mb-6 opacity-30">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* QUICK HELP */}
          <div className="mt-24 grid md:grid-cols-4 gap-8 text-center">
            {[
              "Emergency On-Site Support",
              "WhatsApp Live Assistance",
              "Remote Desktop Access",
              "Priority Escalation",
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <MonitorSmartphone size={26} className="text-blue-400" />
                </div>
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}