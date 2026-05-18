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
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BookConsultation() {
const [formData, setFormData] =
  useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    serviceInterest:
      "Website Development",
    preferredDate: "",
    projectDetails: "",
  });

  const updateField =
  (field, value) => {

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const submitConsultation =
  async () => {

    try {

      await axios.post(
        "/consultations",
        formData
      );

      toast.success(
        "Consultation request submitted"
      );

      setFormData({
        fullName: "",
        businessName: "",
        email: "",
        phone: "",
        serviceInterest:
          "Website Development",
        preferredDate: "",
        projectDetails: "",
      });

    } catch (err) {

      console.log(err);

      toast.error(
        "Submission failed"
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/consultations", formData);
      toast.success("Consultation booked successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to book consultation.");
      console.error("Error booking consultation:", error);
    }
  };

  return (
    <>
      <Navbar />

      <section
        className="
          relative
          min-h-screen
          bg-[#050816]
          text-white
          pt-28
          pb-24
          px-6
          overflow-hidden
        "
      >

        {/* BACKGROUND */}
        <div
          className="
            absolute
            top-[-250px]
            left-1/2
            -translate-x-1/2
            w-[1000px]
            h-[1000px]
            rounded-full
            bg-blue-500/10
            blur-[180px]
            pointer-events-none
          "
        />

        <div
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
          "
        >

          {/* HERO */}
          <div
            className="
              grid
              md:grid-cols-2
              gap-14
              items-center
              min-h-[420px]
            "
          >

            {/* LEFT */}
            <div>

              <p
                className="
                  uppercase
                  tracking-[0.28em]
                  text-[11px]
                  text-blue-400
                  mb-5
                  font-semibold
                "
              >
                STRATEGY SESSION
              </p>

              <h1
                className="
                  text-4xl
                  md:text-5xl
                  font-bold
                  leading-[1.02]
                  max-w-[520px]
                "
              >
                Book A
                <span className="text-blue-500">
                  {" "}Consultation
                </span>
              </h1>

              <p
                className="
                  mt-6
                  text-gray-400
                  leading-relaxed
                  max-w-lg
                  text-sm
                  md:text-[15px]
                "
              >
                Let’s discuss your vision, project goals
                and the systems needed to elevate your
                business digitally and operationally.
              </p>

              <div
                className="
                  flex flex-wrap
                  gap-4
                  mt-8
                "
              >

                <div
                  className="
                    flex items-center gap-2
                    text-sm text-gray-300
                  "
                >
                  <Clock3 size={16} className="text-blue-400" />
                  30–60 min session
                </div>

                <div
                  className="
                    flex items-center gap-2
                    text-sm text-gray-300
                  "
                >
                  <Sparkles size={16} className="text-blue-400" />
                  Tailored strategy guidance
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div
              className="
                relative
                flex
                justify-center
                md:justify-end
              "
            >

              <div
                className="
                  absolute
                  w-[340px]
                  h-[340px]
                  rounded-full
                  bg-blue-500/10
                  blur-3xl
                "
              />

              <div
                className="
                  relative
                  w-full
                  max-w-[500px]
                "
              >

                <div
                  className="
                    flex items-center justify-between
                    py-5
                    border-b border-white/10
                  "
                >
                  <div className="flex items-center gap-4">

                    <div
                      className="
                        w-12 h-12
                        rounded-2xl
                        bg-blue-500/10
                        border border-blue-500/20
                        flex items-center justify-center
                        text-blue-400
                      "
                    >
                      <Globe size={20} />
                    </div>

                    <div>
                      <h3 className="font-medium text-white">
                        Digital Strategy
                      </h3>

                      <p className="text-sm text-gray-400 mt-1">
                        Websites, SaaS & mobile platforms
                      </p>
                    </div>

                  </div>

                  <ArrowRight
                    size={18}
                    className="text-blue-400"
                  />
                </div>

                <div
                  className="
                    flex items-center justify-between
                    py-5
                    border-b border-white/10
                  "
                >
                  <div className="flex items-center gap-4">

                    <div
                      className="
                        w-12 h-12
                        rounded-2xl
                        bg-blue-500/10
                        border border-blue-500/20
                        flex items-center justify-center
                        text-blue-400
                      "
                    >
                      <Shield size={20} />
                    </div>

                    <div>
                      <h3 className="font-medium text-white">
                        Infrastructure Planning
                      </h3>

                      <p className="text-sm text-gray-400 mt-1">
                        CCTV, networking & security systems
                      </p>
                    </div>

                  </div>

                  <ArrowRight
                    size={18}
                    className="text-blue-400"
                  />
                </div>

                <div
                  className="
                    flex items-center justify-between
                    py-5
                  "
                >
                  <div className="flex items-center gap-4">

                    <div
                      className="
                        w-12 h-12
                        rounded-2xl
                        bg-blue-500/10
                        border border-blue-500/20
                        flex items-center justify-center
                        text-blue-400
                      "
                    >
                      <Briefcase size={20} />
                    </div>

                    <div>
                      <h3 className="font-medium text-white">
                        Business Growth
                      </h3>

                      <p className="text-sm text-gray-400 mt-1">
                        Automation & scaling consultations
                      </p>
                    </div>

                  </div>

                  <ArrowRight
                    size={18}
                    className="text-blue-400"
                  />
                </div>

              </div>

            </div>

          </div>

          {/* FORM */}
          <div
            className="
              mt-10
              pt-10
              border-t border-white/10
            "
          >

            <div
              className="
                flex items-center gap-4
                mb-10
              "
            >

              <div
                className="
                  w-14 h-14
                  rounded-[20px]
                  bg-blue-500/10
                  border border-blue-500/20
                  flex items-center justify-center
                  text-blue-400
                "
              >
                <CalendarDays size={24} />
              </div>

              <div>
                <h2
                  className="
                    text-2xl
                    md:text-3xl
                    font-semibold
                  "
                >
                  Schedule Consultation
                </h2>

                <p
                  className="
                    text-gray-400
                    text-sm
                    mt-2
                  "
                >
                  Share your project details and preferred session time.
                </p>
              </div>

            </div>

            {/* INPUTS */}
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-7">

              <div className="space-y-2">
                <label className="text-sm text-gray-400">
                  Full Name
                </label>

                <input
                  type="text"
                    value={formData.fullName}
  onChange={(e) =>
    updateField(
      "fullName",
      e.target.value
    )
  }
                  placeholder="John Doe"
                  className="
                    w-full
                    bg-transparent
                    border-b border-white/10
                    focus:border-blue-500
                    outline-none
                    py-3
                    text-sm
                    placeholder:text-gray-600
                    transition
                  "
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">
                  Business Name
                </label>

                <input
                  type="text"
                  placeholder="Your Company"
                    value={formData.businessName}
  onChange={(e) =>
    updateField(
      "businessName",
      e.target.value
    )
  }
                  className="
                    w-full
                    bg-transparent
                    border-b border-white/10
                    focus:border-blue-500
                    outline-none
                    py-3
                    text-sm
                    placeholder:text-gray-600
                    transition
                  "
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="example@email.com"
                    value={formData.email}
  onChange={(e) =>
    updateField(
      "email",
      e.target.value
    )
  }
                  className="
                    w-full
                    bg-transparent
                    border-b border-white/10
                    focus:border-blue-500
                    outline-none
                    py-3
                    text-sm
                    placeholder:text-gray-600
                    transition
                  "
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="+971 ..."
                    value={formData.phone}
  onChange={(e) =>
    updateField(
      "phone",
      e.target.value
    )
  }
                  className="
                    w-full
                    bg-transparent
                    border-b border-white/10
                    focus:border-blue-500
                    outline-none
                    py-3
                    text-sm
                    placeholder:text-gray-600
                    transition
                  "
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">
                  Service Interest
                </label>

                <select
                    value={formData.serviceInterest}
                    onChange={(e) =>
                      updateField(
                        "serviceInterest",
                        e.target.value
                      )
                    }
                  className="
                    w-full
                    bg-transparent
                    border-b border-white/10
                    focus:border-blue-500
                    outline-none
                    py-3
                    text-sm
                    text-gray-300
                    transition
                  "
                >
                  <option className="bg-[#07111F]">
                    Website Development
                  </option>

                  <option className="bg-[#07111F]">
                    App Development
                  </option>

                  <option className="bg-[#07111F]">
                    CCTV Systems
                  </option>

                  <option className="bg-[#07111F]">
                    Networking
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">
                  Preferred Date
                </label>

                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) =>
                    updateField(
                      "preferredDate",
                      e.target.value
                    )
                  }
                  className="
                    w-full
                    bg-transparent
                    border-b border-white/10
                    focus:border-blue-500
                    outline-none
                    py-3
                    text-sm
                    text-gray-300
                    transition
                  "
                />
              </div>

            </div>

            {/* TEXTAREA */}
            <div className="mt-8">

              <label className="text-sm text-gray-400">
                Project Details
              </label>

              <textarea
                rows="5"
                placeholder="Tell us about your project or business goals..."
                value={formData.projectDetails}
                onChange={(e) =>
                  updateField(
                    "projectDetails",
                    e.target.value
                  )
                }
                className="
                  w-full
                  bg-transparent
                  border-b border-white/10
                  focus:border-blue-500
                  outline-none
                  py-4
                  text-sm
                  resize-none
                  placeholder:text-gray-600
                  transition
                  mt-2
                "
              />

            </div>

            {/* BUTTON */}
            <div className="mt-8">

              <button
                onClick={submitConsultation}
                className="
                  px-6 py-3.5
                  rounded-2xl
                  bg-blue-600
                  hover:bg-blue-500
                  transition
                  flex items-center gap-3
                  text-sm
                  font-medium
                  shadow-[0_0_30px_rgba(59,130,246,0.25)]
                "
              >
                <CalendarDays size={18} />
                Schedule Consultation
              </button>

            </div>

          </div>

        </div><br />
        <br />
<Footer />
      </section>

      
    </>
  );
}