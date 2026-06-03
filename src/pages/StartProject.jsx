import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import API from "../api/axios";
import { toast } from "sonner";
import Navbar from "../components/Navbar";

import {
  ArrowRight,
  Check,
  Shield,
  Briefcase,
  Wallet,
  Sparkles,
  User,
  Building2,
  FileText,
  Calendar,
  Phone,
  Globe,
  AlertCircle,
  Loader2,
} from "lucide-react";

export default function StartProject() {
  const location = useLocation();
  const { service = "Custom Project", packageData = {} } = location.state || {};

  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalState, setModalState] = useState("loading"); // "loading" | "success"
  const [startMethod, setStartMethod] = useState("consultation");

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    whatsapp: "",
    country: "",
    businessType: "",
    timeline: "",
    budget: "",
    description: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const totalSteps = 4;

  const validateField = (name, value) => {
    switch (name) {
      case "fullName": return !value?.trim() ? "Full name is required" : value.trim().length < 3 ? "Name is too short" : "";
      case "email": return !value ? "Email is required" : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Invalid email address" : "";
      case "whatsapp": return !value ? "WhatsApp number is required" : !/^\+?[\d\s\-\(\)]{8,}$/.test(value) ? "Invalid phone number" : "";
      case "country": return !value?.trim() ? "Country is required" : "";
      case "businessType": return !value ? "Please select business type" : "";
      case "timeline": return !value || value === "Expected Timeline" ? "Please select timeline" : "";
      case "budget": return !value || value === "Budget Range" ? "Please select budget" : "";
      case "description": 
        return !value?.trim() ? "Project description is required" : 
               value.trim().length < 30 ? "Please provide more details (min 30 characters)" : "";
      default: return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    const error = validateField(name, value);
    setFormErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateCurrentStep = () => {
    const stepFields = {
      1: ["fullName", "email", "whatsapp", "country"],
      2: ["companyName", "businessType"],
      3: ["timeline", "budget", "description"],
    }[currentStep] || [];

    const errors = {};
    stepFields.forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) errors[field] = error;
    });

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      setCurrentStep(prev => prev + 1);
    } else {
      toast.error("Please fix the errors before continuing");
    }
  };

  const handlePrev = () => setCurrentStep(prev => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateCurrentStep()) return;

    setShowModal(true);
    setModalState("loading");
    setLoading(true);

    try {
      const payload = {
        ...formData,
        service,
        packageName: packageData?.title,
        packagePrice: packageData?.price,
        startMethod,
      };

      await API.post("/inquiries", payload);

      // Simulate slight delay for better UX
      setTimeout(() => {
        setModalState("success");
        setLoading(false);
        
        // Reset form
        setFormData({
          fullName: "", companyName: "", email: "", whatsapp: "", country: "",
          businessType: "", timeline: "", budget: "", description: ""
        });
        setCurrentStep(1);
      }, 1600);
    } catch (error) {
      setShowModal(false);
      toast.error("Failed to submit. Please try again.");
      setLoading(false);
    }
  };

  const steps = [
    { id: 1, title: "Contact", icon: User },
    { id: 2, title: "Business", icon: Building2 },
    { id: 3, title: "Project", icon: FileText },
    { id: 4, title: "Start", icon: Calendar },
  ];

  const renderField = (name, label, placeholder, type = "text", icon = null, isSelect = false, options = []) => {
    const error = formErrors[name];
    const value = formData[name];
    const isValid = value && !error;

    const baseClasses = `w-full h-11 px-5 bg-white/[0.045] border rounded-2xl text-white placeholder:text-gray-500 focus:outline-none transition-all duration-200 text-sm ${error ? 'border-red-500 focus:border-red-500' : isValid ? 'border-emerald-500/70' : 'border-white/10 focus:border-blue-500'}`;

    return (
      <div>
        <label className="block text-xs font-medium text-gray-400 mb-1.5">
          {label} <span className="text-red-400">*</span>
        </label>
        <div className="relative group">
          {icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">{icon}</div>}
          
          {isSelect ? (
            <select
              name={name}
              value={value}
              onChange={handleChange}
              className={`${baseClasses} ${icon ? 'pl-11' : 'pl-5'}`}
            >
              {options.map((opt, i) => (
                <option key={i} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          ) : (
            <input
              type={type}
              name={name}
              value={value}
              onChange={handleChange}
              placeholder={placeholder}
              className={`${baseClasses} ${icon ? 'pl-11' : 'pl-5'}`}
            />
          )}

          {isValid && <Check className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400" size={18} />}
          {error && <AlertCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-red-400" size={18} />}
        </div>
        {error && <p className="text-red-400 text-xs mt-1.5">{error}</p>}
      </div>
    );
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#050816] text-white relative overflow-hidden pt-20 pb-8 px-4">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Compact Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs mb-3">
              <Briefcase size={14} /> Project Onboarding
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Start Your Project</h1>
            <p className="text-gray-400 mt-2 max-w-md mx-auto">Tell us about your vision. We'll make it real.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* Package Summary - Moved to top on mobile, sidebar on desktop */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="sticky top-24 rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-xl overflow-hidden h-fit">
                <div className="p-6 border-b border-white/10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] mb-3">
                    <Sparkles size={12} /> PROJECT SUMMARY
                  </div>
                  <h2 className="text-xl font-bold leading-tight">{service}</h2>
                  <p className="text-sm text-gray-400 mt-1">{packageData?.subtitle}</p>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">SELECTED PACKAGE</p>
                    <h3 className="text-2xl font-bold">{packageData?.title}</h3>
                    <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-sm">
                      <Wallet size={16} className="text-blue-400" />
                      {packageData?.price}
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    {packageData?.features?.slice(0, 6).map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-500/15 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={11} className="text-blue-400" />
                        </div>
                        <span className="text-gray-300 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-xs">
                    <div className="flex gap-3">
                      <Shield size={18} className="text-blue-400 shrink-0 mt-0.5" />
                      <p className="text-gray-400">Projects usually start with planning or deposit before full development.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Area */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-xl overflow-hidden">
                {/* Compact Stepper */}
                <div className="px-6 py-5 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    {steps.map((step, idx) => {
                      const Icon = step.icon;
                      const isActive = currentStep === step.id;
                      const isComplete = currentStep > step.id;

                      return (
                        <div key={step.id} className="flex flex-col items-center flex-1 relative">
                          <div className={`w-9 h-9 rounded-2xl flex items-center justify-center border transition-all ${isComplete ? "bg-emerald-500 border-emerald-500" : isActive ? "bg-blue-600 border-blue-500 ring-4 ring-blue-500/30" : "bg-white/10 border-white/20"}`}>
                            {isComplete ? <Check size={18} /> : <Icon size={18} />}
                          </div>
                          <span className={`text-[10px] mt-2 font-medium tracking-wider ${isActive ? "text-white" : "text-gray-500"}`}>{step.title}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold flex items-center gap-2"><User size={20} /> Contact</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {renderField("fullName", "Full Name", "John Doe", "text", <User size={17} />)}
                          {renderField("email", "Email Address", "you@company.com", "email")}
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          {renderField("whatsapp", "WhatsApp Number", "+971 50 123 4567", "tel", <Phone size={17} />)}
                          {renderField("country", "Country", "United Arab Emirates", "text", <Globe size={17} />)}
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold flex items-center gap-2"><Building2 size={20} /> Business</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {renderField("companyName", "Company Name", "Acme Corporation")}
                          {renderField("businessType", "Business Type", "", "text", null, true, [
                            { value: "", label: "Select Type" },
                            { value: "E-commerce", label: "E-commerce" },
                            { value: "SaaS", label: "SaaS / Software" },
                            { value: "Agency", label: "Agency" },
                            { value: "Retail", label: "Retail" },
                            { value: "Service", label: "Service Provider" },
                            { value: "Startup", label: "Startup" },
                            { value: "Other", label: "Other" },
                          ])}
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold flex items-center gap-2"><FileText size={20} /> Project</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {renderField("timeline", "Timeline", "", "text", null, true, [
                            { value: "", label: "Expected Timeline" },
                            { value: "ASAP", label: "ASAP" },
                            { value: "1-2 Weeks", label: "1–2 Weeks" },
                            { value: "1 Month", label: "1 Month" },
                            { value: "2-3 Months", label: "2–3 Months" },
                            { value: "Flexible", label: "Flexible" },
                          ])}
                          {renderField("budget", "Budget Range", "", "text", null, true, [
                            { value: "", label: "Budget Range" },
                            { value: "Under $500", label: "Under $500" },
                            { value: "$500-$1500", label: "$500 – $1,500" },
                            { value: "$1500-$5000", label: "$1,500 – $5,000" },
                            { value: "$5000-$15000", label: "$5,000 – $15,000" },
                            { value: "$15000+", label: "$15,000+" },
                          ])}
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-gray-400 mb-1.5">Project Description <span className="text-red-400">*</span></label>
                          <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Describe your goals, features, target audience..."
                            className={`w-full px-5 py-3.5 bg-white/[0.045] border rounded-3xl text-white placeholder:text-gray-500 focus:outline-none text-sm resize-y min-h-[110px] ${formErrors.description ? 'border-red-500' : formData.description && !formErrors.description ? 'border-emerald-500/70' : 'border-white/10 focus:border-blue-500'}`}
                          />
                          {formErrors.description && <p className="text-red-400 text-xs mt-1.5">{formErrors.description}</p>}
                        </div>
                      </div>
                    )}

                    {currentStep === 4 && (
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold flex items-center gap-2"><Calendar size={20} /> How to Begin</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                          {[
                            { value: "consultation", title: "Consultation", desc: "Strategy session before development", price: "From $49" },
                            { value: "deposit", title: "With Deposit", desc: "Secure slot & start immediately", price: "Fast Track" },
                            { value: "template", title: "Template", desc: "Quick launch with customization", price: "Ready to Go" },
                          ].map((opt) => (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => setStartMethod(opt.value)}
                              className={`p-5 rounded-3xl border text-left transition-all hover:scale-[1.02] active:scale-[0.98] ${startMethod === opt.value ? 'border-blue-500 bg-blue-500/10' : 'border-white/10 bg-white/[0.02]'}`}
                            >
                              <h4 className="font-semibold">{opt.title}</h4>
                              <p className="text-xs text-gray-400 mt-1 leading-tight">{opt.desc}</p>
                              <div className="mt-4 text-blue-400 text-xs font-medium">{opt.price}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex gap-3 pt-4">
                      {currentStep > 1 && (
                        <button type="button" onClick={handlePrev} className="flex-1 h-11 rounded-2xl border border-white/10 hover:bg-white/5 font-medium text-sm transition-all">Back</button>
                      )}
                      {currentStep < totalSteps ? (
                        <button type="button" onClick={handleNext} className="flex-1 h-11 bg-blue-600 hover:bg-blue-500 rounded-2xl font-medium text-sm transition-all flex items-center justify-center gap-2">Continue <ArrowRight size={16} /></button>
                      ) : (
                        <button type="submit" disabled={loading} className="flex-1 h-11 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-2xl font-medium text-sm transition-all flex items-center justify-center gap-2 disabled:opacity-70">Submit Project</button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Elevated Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/90 backdrop-blur-2xl px-4">
          <div className="w-full max-w-md relative">
            {/* Outer Glow Container */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-transparent blur-3xl rounded-[40px] -z-10" />

            <div className="relative rounded-3xl border border-white/10 bg-[#0a1320] overflow-hidden shadow-2xl">
              {/* Top Accent Glow */}
              <div className="h-1.5 bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500" />

              {modalState === "loading" ? (
                <div className="px-10 py-12 text-center">
                  <div className="relative mx-auto mb-8 w-20 h-20">
                    <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full" />
                    <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Briefcase size={28} className="text-blue-400" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-3 tracking-tight">Submitting Your Project</h3>
                  <p className="text-gray-400 text-[15px] max-w-[260px] mx-auto">
                    Please wait while we securely process your request...
                  </p>

                  <div className="mt-8 h-1 w-16 bg-white/10 rounded-full mx-auto overflow-hidden">
                    <div className="h-full w-1/3 bg-blue-500 rounded-full animate-[loading_1.5s_infinite]" />
                  </div>
                </div>
              ) : (
                <div className="px-10 py-12 text-center relative">
                  {/* Success Glow */}
                  <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-emerald-500/10 to-transparent pointer-events-none" />

                  <div className="relative mx-auto mb-8">
                    <div className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto animate-[pulse_2s_ease-in-out_infinite]">
                      <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500 flex items-center justify-center">
                        <Check size={48} className="text-emerald-400" strokeWidth={3} />
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold mb-2 tracking-tighter">Project Request Sent!</h2>
                  <p className="text-gray-400 text-[15px] leading-relaxed max-w-[280px] mx-auto">
                    Thank you! Our team has received your details and will contact you shortly via email or WhatsApp.
                  </p>

                  <div className="my-8 border-t border-white/10" />

                  <Link
                    to="/"
                    className="block w-full h-12 rounded-2xl bg-white text-black font-semibold text-sm hover:bg-white/90 active:scale-[0.985] transition-all flex items-center justify-center gap-2 group"
                  >
                    Return to Homepage
                    <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <p className="text-[11px] text-gray-500 mt-6">
                    You can also close this window
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}