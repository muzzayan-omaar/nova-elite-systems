import {
  useLocation,
  Link,
} from "react-router-dom";

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
} from "lucide-react";

export default function StartProject() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [showSuccess, setShowSuccess] =
  useState(false);

 const {
  service = "Custom Project",
  packageData = {},
} = location.state || {};

  const [startMethod, setStartMethod] =
    useState("consultation");

  const [formData, setFormData] =
    useState({
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    const payload = {
      fullName: formData.fullName,
      companyName: formData.companyName,
      email: formData.email,
      whatsapp: formData.whatsapp,
      country: formData.country,
      businessType: formData.businessType,
      timeline: formData.timeline,
      budget: formData.budget,
      description: formData.description,

      service,
      packageName: packageData?.title,
      packagePrice: packageData?.price,
      startMethod,
    };

    await API.post("/inquiries", payload);

toast.success(
  "Project inquiry submitted 🚀"
);

setLoading(false);

setShowSuccess(true);

setFormData({
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

  } catch (error) {
    console.error(error);

    setLoading(false);

    toast.error("Failed to submit request. Try again.");
  }
};

  return (
    <>
      <Navbar />

      <section
        className="
          min-h-screen
          bg-[#050816]
          text-white
          relative
          overflow-hidden
          pt-24
          pb-8
          px-4
        "
      >
        {/* GLOW */}
        <div
          className="
            absolute
            top-[-250px]
            left-1/2
            -translate-x-1/2
            w-[750px]
            h-[750px]
            bg-blue-500/10
            blur-[140px]
            rounded-full
            pointer-events-none
          "
        />

        <div
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
            h-[calc(100vh-120px)]
            grid
            lg:grid-cols-[300px_1fr]
            gap-4
          "
        >
          {/* LEFT PANEL */}
          <div
            className="
              hidden lg:flex
              flex-col
              rounded-[24px]
              border border-white/10
              bg-white/[0.025]
              backdrop-blur-xl
              overflow-hidden
            "
          >
            {/* HEADER */}
            <div className="p-5 border-b border-white/10">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-3 py-1.5
                  rounded-full
                  bg-blue-500/10
                  border border-blue-500/20
                  text-blue-400
                  text-[11px]
                  mb-4
                "
              >
                <Sparkles size={13} />
                Project Summary
              </div>

              <h2 className="text-xl font-bold leading-tight">
                {service || "Custom Project"}
              </h2>

              <p className="text-[13px] text-gray-400 mt-2 leading-relaxed">
                {packageData?.subtitle}
              </p>
            </div>

            {/* CONTENT */}
            <div
              className="
                flex-1
                overflow-y-auto
                p-5
              "
            >
              <div className="mb-6">
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-gray-500
                    mb-2
                  "
                >
                  Selected Package
                </p>

                <h3 className="text-2xl font-bold">
                  {packageData?.title}
                </h3>

                <div
                  className="
                    mt-4
                    inline-flex
                    items-center
                    gap-2
                    px-3 py-2
                    rounded-xl
                    bg-blue-500/10
                    border border-blue-500/20
                    text-sm
                  "
                >
                  <Wallet
                    size={14}
                    className="text-blue-400"
                  />

                  {packageData?.price}
                </div>
              </div>

              {/* FEATURES */}
              <div className="space-y-3">
                {packageData?.features
                  ?.slice(0, 6)
                  .map((feature, index) => (
                    <div
                      key={index}
                      className="
                        flex
                        items-start
                        gap-3
                      "
                    >
                      <div
                        className="
                          w-4 h-4
                          rounded-full
                          bg-blue-500/15
                          flex
                          items-center
                          justify-center
                          shrink-0
                          mt-0.5
                        "
                      >
                        <Check
                          size={10}
                          className="text-blue-400"
                        />
                      </div>

                      <span className="text-[13px] text-gray-300 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
              </div>

              {/* NOTE */}
              <div
                className="
                  mt-6
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.02]
                  p-4
                "
              >
                <div className="flex gap-3">
                  <Shield
                    size={16}
                    className="text-blue-400 shrink-0 mt-0.5"
                  />

                  <p className="text-[12px] text-gray-400 leading-relaxed">
                    Projects typically begin with
                    planning or a booking deposit
                    before development starts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div
            className="
              rounded-[24px]
              border border-white/10
              bg-white/[0.025]
              backdrop-blur-xl
              overflow-hidden
              flex
              flex-col
            "
          >
            {/* TOP */}
            <div className="p-5 border-b border-white/10">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-3 py-1.5
                  rounded-full
                  bg-blue-500/10
                  border border-blue-500/20
                  text-blue-400
                  text-[11px]
                  mb-4
                "
              >
                <Briefcase size={13} />
                Project Onboarding
              </div>

              <h1
                className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  leading-tight
                "
              >
                Start Your
                <span className="text-blue-500">
                  {" "}
                  Project.
                </span>
              </h1>

              <p
                className="
                  mt-3
                  text-sm
                  text-gray-400
                  max-w-2xl
                  leading-relaxed
                "
              >
                Tell us about your business,
                goals and preferred workflow.
              </p>
            </div>

            {/* FORM AREA */}
            <div
              className="
                flex-1
                overflow-y-auto
              "
            >
              <form
                onSubmit={handleSubmit}
                className="p-5 space-y-6"
              >
                {/* BASIC INFO */}
                <div>
                  <h3 className="text-sm font-semibold mb-4 text-gray-200">
                    Basic Information
                  </h3>

                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      {
                        name: "fullName",
                        placeholder:
                          "Full Name",
                      },

                      {
                        name: "companyName",
                        placeholder:
                          "Company Name",
                      },

                      {
                        name: "email",
                        placeholder:
                          "Email Address",
                      },

                      {
                        name: "whatsapp",
                        placeholder:
                          "WhatsApp Number",
                      },

                      {
                        name: "country",
                        placeholder:
                          "Country",
                      },

                      {
                        name: "businessType",
                        placeholder:
                          "Business Type",
                      },
                    ].map((field, index) => (
                      <input
                        key={index}
                        type="text"
                        name={field.name}
                        placeholder={
                          field.placeholder
                        }
                        onChange={handleChange}
                        className="
                          w-full
                          h-11
                          px-4
                          rounded-xl
                          bg-white/[0.03]
                          border border-white/10
                          focus:outline-none
                          focus:border-blue-500/40
                          text-sm
                        "
                      />
                    ))}
                  </div>
                </div>

                {/* PROJECT DETAILS */}
                <div>
                  <h3 className="text-sm font-semibold mb-4 text-gray-200">
                    Project Details
                  </h3>

                  <div className="grid md:grid-cols-2 gap-3 mb-3">
                    <select
                      name="timeline"
                      onChange={handleChange}
                      className="
                        h-11
                        px-4
                        rounded-xl
                        bg-[#0b1220]
                        border border-white/10
                        focus:outline-none
                        focus:border-blue-500/40
                        text-sm
                      "
                    >
                      <option>
                        Expected Timeline
                      </option>

                      <option>ASAP</option>

                      <option>
                        1–2 Weeks
                      </option>

                      <option>1 Month</option>

                      <option>Flexible</option>
                    </select>

                    <select
                      name="budget"
                      onChange={handleChange}
                      className="
                        h-11
                        px-4
                        rounded-xl
                        bg-[#0b1220]
                        border border-white/10
                        focus:outline-none
                        focus:border-blue-500/40
                        text-sm
                      "
                    >
                      <option>
                        Budget Range
                      </option>

                      <option>
                        Under $300
                      </option>

                      <option>
                        $300–$800
                      </option>

                      <option>
                        $800–$2,000
                      </option>

                      <option>
                        $2,000+
                      </option>
                    </select>
                  </div>

                  <textarea
                    rows="4"
                    name="description"
                    placeholder="Describe your project and required features..."
                    onChange={handleChange}
                    className="
                      w-full
                      px-4
                      py-3
                      rounded-xl
                      bg-white/[0.03]
                      border border-white/10
                      focus:outline-none
                      focus:border-blue-500/40
                      text-sm
                      resize-none
                    "
                  />
                </div>

                {/* START METHOD */}
                <div>
                  <h3 className="text-sm font-semibold mb-4 text-gray-200">
                    Choose How To Begin
                  </h3>

                  <div className="grid md:grid-cols-3 gap-3">
                    {/* CONSULTATION */}
                    <button
                      type="button"
                      onClick={() =>
                        setStartMethod(
                          "consultation"
                        )
                      }
                      className={`
                        rounded-2xl
                        p-4
                        text-left
                        border
                        transition-all

                        ${
                          startMethod ===
                          "consultation"
                            ? `
                              border-blue-500/40
                              bg-blue-500/[0.08]
                            `
                            : `
                              border-white/10
                              bg-white/[0.02]
                            `
                        }
                      `}
                    >
                      <h4 className="text-sm font-semibold mb-2">
                        Consultation
                      </h4>

                      <p className="text-[12px] text-gray-400 leading-relaxed">
                        Strategy & planning before
                        development.
                      </p>

                      <div className="mt-4 text-blue-400 text-xs">
                        From $25
                      </div>
                    </button>

                    {/* DEPOSIT */}
                    <button
                      type="button"
                      onClick={() =>
                        setStartMethod(
                          "deposit"
                        )
                      }
                      className={`
                        rounded-2xl
                        p-4
                        text-left
                        border
                        transition-all

                        ${
                          startMethod ===
                          "deposit"
                            ? `
                              border-blue-500/40
                              bg-blue-500/[0.08]
                            `
                            : `
                              border-white/10
                              bg-white/[0.02]
                            `
                        }
                      `}
                    >
                      <h4 className="text-sm font-semibold mb-2">
                        Start With Deposit
                      </h4>

                      <p className="text-[12px] text-gray-400 leading-relaxed">
                        Secure your project slot
                        immediately.
                      </p>

                      <div className="mt-4 text-blue-400 text-xs">
                        Faster onboarding
                      </div>
                    </button>

                    {/* TEMPLATES */}
                    <div
                      className="
                        rounded-2xl
                        p-4
                        border border-white/10
                        bg-white/[0.02]
                      "
                    >
                      <h4 className="text-sm font-semibold mb-2">
                        Templates
                      </h4>

                      <p className="text-[12px] text-gray-400 leading-relaxed mb-4">
                        Ready-made websites for
                        fast launch.
                      </p>

                      <Link
                        to="/templates"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          text-blue-400
                          text-xs
                        "
                      >
                        Explore
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* TERMS */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1"
                  />

                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    I agree to the{" "}

                    <Link
                      to="/terms"
                      className="text-blue-400"
                    >
                      Terms
                    </Link>

                    ,{" "}

                    <Link
                      to="/privacy-policy"
                      className="text-blue-400"
                    >
                      Privacy Policy
                    </Link>

                    {" "}and{" "}

                    <Link
                      to="/refund-policy"
                      className="text-blue-400"
                    >
                      Refund Policy
                    </Link>
                    .
                  </p>
                </div>

                {/* BUTTON */}
<button
  type="submit"
  disabled={loading}
  className="
    w-full
    h-12
    rounded-xl
    bg-blue-600
    hover:bg-blue-500
    transition-all
    text-sm
    font-medium
    flex
    items-center
    justify-center
    gap-2
      disabled:opacity-60
  disabled:cursor-not-allowed
  "
>
  {loading ? "Submitting..." : "Continue"}

  {!loading && <ArrowRight size={15} />}
</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    {
  showSuccess && (

    <div
      className="
        fixed inset-0
        z-[200]
        flex items-center justify-center
        bg-black/70
        backdrop-blur-md
        px-4
      "
    >

      <div
        className="
          w-full
          max-w-lg
          rounded-[32px]
          border border-white/10
          bg-[#081120]
          p-8 md:p-10
          text-center
          relative
          overflow-hidden
        "
      >

        {/* glow */}
        <div
          className="
            absolute
            top-[-120px]
            left-1/2
            -translate-x-1/2
            w-[300px]
            h-[300px]
            bg-blue-500/20
            blur-[100px]
            rounded-full
          "
        />

        <div className="relative z-10">

          <div
            className="
              w-20 h-20
              rounded-full
              bg-blue-500/10
              border border-blue-500/20
              flex items-center
              justify-center
              mx-auto
              mb-6
            "
          >

            <Check
              size={34}
              className="text-blue-400"
            />

          </div>

          <h2
            className="
              text-3xl
              font-bold
              mb-4
              text-white
            "
          >
            Project Request Sent
          </h2>

          <p
            className="
              text-gray-400
              leading-relaxed
              text-sm md:text-base
              mb-8
            "
          >
            Your project inquiry has been
            received successfully.

            Our team are reviewing your
            requirements and contact you
            shortly via email or WhatsApp.
          </p>

          <div
            className="
              flex flex-col sm:flex-row
              gap-3
            "
          >



            <Link
              to="/"

              className="
                flex-1
                h-12
                rounded-2xl
                border border-white/10
                hover:border-blue-500/40
                hover:bg-white/[0.03]
                transition-all
                text-sm
                font-medium
                flex items-center justify-center
              "
            >
              Go Home
            </Link>

          </div>

        </div>

      </div>

    </div>
  )
}
    </>
  );
}