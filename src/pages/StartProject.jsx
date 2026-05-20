import { useLocation, Link } from "react-router-dom";

import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  ArrowRight,
  Check,
  Shield,
  Briefcase,
  Wallet,
  Sparkles,
} from "lucide-react";

export default function StartProject() {

  const location = useLocation();

  const {
    service,
    packageData,
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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      service,
      package: packageData,
      startMethod,
      formData,
    });

    alert(
      "Project inquiry submitted successfully."
    );
  };

  return (
    <>
      <Navbar />

      <section
        className="
          min-h-screen
          bg-[#050816]
          text-white
          pt-32
          pb-24
          px-5 md:px-8
          overflow-hidden
          relative
        "
      >

        {/* BACKGROUND GLOW */}
        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[900px]
            h-[900px]
            bg-blue-500/10
            blur-[180px]
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
grid
lg:grid-cols-[340px_1fr]
gap-5
          "
        >

          {/* LEFT PANEL */}
<div
  className="
    sticky
    top-24
    h-fit
    rounded-[24px]
    border border-white/10
    bg-white/[0.025]
    backdrop-blur-xl
    overflow-hidden
  "
>

            {/* HEADER */}
            <div
              className="
                p-5
                border-b border-white/10
              "
            >

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4 py-2
                  rounded-full
                  bg-blue-500/10
                  border border-blue-500/20
                  text-blue-400
                  text-sm
                  mb-5
                "
              >
                <Sparkles size={15} />
                Project Summary
              </div>

              <h2
                className="
                  text-2xl
                  font-bold
                  leading-tight
                "
              >
                {service || "Custom Project"}
              </h2>

              <p
                className="
                  text-gray-400
                  text-sm
                  mt-3
                "
              >
                {packageData?.subtitle}
              </p>
            </div>

            {/* PACKAGE */}
            <div className="p-6">

              <div className="mb-8">

                <p
                  className="
                    text-gray-500
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    mb-2
                  "
                >
                  Selected Package
                </p>

                <h3
                  className="
                    text-3xl
                    font-bold
                    text-white
                  "
                >
                  {packageData?.title}
                </h3>

                <div
                  className="
                    mt-4
                    inline-flex
                    items-center
                    gap-2
                    px-4 py-2
                    rounded-xl
                    bg-blue-500/10
                    border border-blue-500/20
                  "
                >
                  <Wallet
                    size={16}
                    className="text-blue-400"
                  />

                  <span className="text-sm">
                    {packageData?.price}
                  </span>
                </div>
              </div>

              {/* FEATURES */}
              <div className="space-y-4">

                {packageData?.features?.map(
                  (feature, index) => (
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
                          w-5 h-5
                          rounded-full
                          bg-blue-500/15
                          flex items-center
                          justify-center
                          shrink-0
                          mt-0.5
                        "
                      >
                        <Check
                          size={12}
                          className="text-blue-400"
                        />
                      </div>

                      <span
                        className="
                          text-sm
                          text-gray-300
                        "
                      >
                        {feature}
                      </span>
                    </div>
                  )
                )}

              </div>

              {/* TIMELINE */}
              <div
                className="
                  mt-8
                  p-5
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                "
              >

                <div className="flex gap-3">

                  <Shield
                    className="text-blue-400"
                    size={18}
                  />

                  <div>

                    <h4 className="font-medium mb-2">
                      Estimated Timeline
                    </h4>

                    <p
                      className="
                        text-sm
                        text-gray-400
                        leading-relaxed
                      "
                    >
                      Typical delivery:
                      2–6 weeks depending
                      on project complexity.
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div
            className="
              rounded-[32px]
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-2xl
              overflow-hidden
            "
          >

            <div className="p-8 md:p-10">

              {/* HERO */}
              <div className="mb-10">

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-4 py-2
                    rounded-full
                    bg-blue-500/10
                    border border-blue-500/20
                    text-blue-400
                    text-sm
                    mb-5
                  "
                >
                  <Briefcase size={15} />
                  Project Onboarding
                </div>

                <h1
                  className="
                    text-4xl
                    md:text-5xl
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
                    mt-5
                    text-gray-400
                    max-w-2xl
                    leading-relaxed
                  "
                >
                  Tell us about your vision,
                  goals and preferred project
                  workflow.
                </p>
              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="space-y-10"
              >

                {/* BASIC INFO */}
                <div>

                  <h3
                    className="
                      text-xl
                      font-semibold
                      mb-6
                    "
                  >
                    Basic Information
                  </h3>

                  <div
                    className="
                      grid
                      md:grid-cols-2
                      gap-5
                    "
                  >

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
                          px-5 py-4
                          rounded-2xl
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

                  <h3
                    className="
                      text-xl
                      font-semibold
                      mb-6
                    "
                  >
                    Project Details
                  </h3>

                  <div
                    className="
                      grid
                      md:grid-cols-2
                      gap-5
                      mb-5
                    "
                  >

                    <select
                      name="timeline"
                      onChange={handleChange}
                      className="
                        w-full
                        px-5 py-4
                        rounded-2xl
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

                      <option>
                        ASAP
                      </option>

                      <option>
                        1–2 Weeks
                      </option>

                      <option>
                        1 Month
                      </option>

                      <option>
                        Flexible
                      </option>
                    </select>

                    <select
                      name="budget"
                      onChange={handleChange}
                      className="
                        w-full
                        px-5 py-4
                        rounded-2xl
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
                    rows="6"
                    name="description"
                    placeholder="
Describe your project, goals and required features...
                    "
                    onChange={handleChange}
                    className="
                      w-full
                      px-5 py-4
                      rounded-2xl
                      bg-white/[0.03]
                      border border-white/10
                      focus:outline-none
                      focus:border-blue-500/40
                      text-sm
                    "
                  />
                </div>

                {/* START METHOD */}
                <div>

                  <h3
                    className="
                      text-xl
                      font-semibold
                      mb-6
                    "
                  >
                    How Would You Like To Begin?
                  </h3>

                  <div className="space-y-4">

                    {/* OPTION 1 */}
                    <button
                      type="button"
                      onClick={() =>
                        setStartMethod(
                          "consultation"
                        )
                      }
                      className={`
                        w-full
                        text-left
                        p-6
                        rounded-3xl
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
                              bg-white/[0.03]
                            `
                        }
                      `}
                    >

                      <h4 className="font-semibold text-lg mb-2">
                        Consultation & Planning
                      </h4>

                      <p
                        className="
                          text-sm
                          text-gray-400
                          leading-relaxed
                        "
                      >
                        Ideal for custom
                        systems and larger
                        projects requiring
                        technical planning.
                      </p>

                      {startMethod ===
                        "consultation" && (
                        <div
                          className="
                            mt-5
                            inline-flex
                            items-center
                            gap-2
                            px-4 py-2
                            rounded-xl
                            bg-blue-500/10
                            border border-blue-500/20
                            text-blue-400
                            text-sm
                          "
                        >
                          Consultation Fee:
                          $25
                        </div>
                      )}
                    </button>

                    {/* OPTION 2 */}
                    <button
                      type="button"
                      onClick={() =>
                        setStartMethod(
                          "deposit"
                        )
                      }
                      className={`
                        w-full
                        text-left
                        p-6
                        rounded-3xl
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
                              bg-white/[0.03]
                            `
                        }
                      `}
                    >

                      <h4 className="font-semibold text-lg mb-2">
                        Ready To Start With Deposit
                      </h4>

                      <p
                        className="
                          text-sm
                          text-gray-400
                          leading-relaxed
                        "
                      >
                        For businesses ready
                        to immediately begin
                        development.
                      </p>

                    </button>

                    {/* OPTION 3 */}
                    <div
                      className="
                        p-6
                        rounded-3xl
                        border border-white/10
                        bg-white/[0.03]
                      "
                    >

                      <h4 className="font-semibold text-lg mb-2">
                        Browse Ready-Made Templates
                      </h4>

                      <p
                        className="
                          text-sm
                          text-gray-400
                          leading-relaxed
                          mb-5
                        "
                      >
                        Explore affordable
                        pre-built websites and
                        digital products ready
                        for fast deployment.
                      </p>

                      <Link
                        to="/templates"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          text-blue-400
                          text-sm
                        "
                      >
                        Explore Templates
                        <ArrowRight size={15} />
                      </Link>

                    </div>

                  </div>
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="
                    w-full
                    py-5
                    rounded-2xl
                    bg-blue-600
                    hover:bg-blue-500
                    transition-all
                    font-semibold
                    text-base
                    flex
                    items-center
                    justify-center
                    gap-3
                    shadow-[0_0_40px_rgba(59,130,246,0.35)]
                  "
                >
                  Submit Project Inquiry

                  <ArrowRight size={18} />
                </button>
                <div className="flex items-start gap-2 mt-4">
  <input type="checkbox" required className="mt-1" />

  <p className="text-[11px] text-gray-500 leading-relaxed">
    I agree to the{" "}
    <Link to="/terms" className="text-blue-400 hover:underline">
      Terms of Service
    </Link>
    ,{" "}
    <Link to="/privacy-policy" className="text-blue-400 hover:underline">
      Privacy Policy
    </Link>{" "}
    and{" "}
    <Link to="/refund-policy" className="text-blue-400 hover:underline">
      Refund Policy
    </Link>
    . I understand that a deposit may be required before project commencement.
  </p>
</div>

              </form>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
}