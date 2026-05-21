import {
  LifeBuoy,
  Upload,
  MonitorSmartphone,
  Zap,
  Clock3,
  Wifi,
  PhoneCall,
} from "lucide-react";

import {
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import axios from "../api/axios";

import { toast } from "sonner";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TechnicalSupport() {
  const navigate = useNavigate();
  const [loading, setLoading] =
  useState(false);

const [form, setForm] =
  useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    serviceType:
      "Web Development",
    priority: "Medium",
    issue: "",
  });

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]:
      e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  navigate("/project-booking", {
    state: {
      service,
      packageData,
      formData,
      startMethod,
    },
  });
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

        {/* BACKGROUND GLOW */}
        <div
          className="
            absolute
            top-[-200px]
            left-1/2
            -translate-x-1/2
            w-[900px]
            h-[900px]
            rounded-full
            bg-blue-500/10
            blur-[160px]
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
              gap-10
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
                SUPPORT CENTER
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
                Technical
                <br />

                <span className="text-blue-500">
                  Support
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
                Fast assistance for websites, apps,
                networking infrastructure and security systems.
                Our support team helps you resolve issues quickly
                without interrupting your operations.
              </p>

            </div>

            {/* RIGHT */}
            <div
              className="
                flex
                flex-col
                justify-center
                gap-5
                md:pl-8
              "
            >

              {[
                {
                  icon: <Zap size={18} />,
                  title: "Rapid Issue Resolution",
                  desc: "Priority handling for urgent technical problems.",
                },

                {
                  icon: <Wifi size={18} />,
                  title: "Remote Infrastructure Support",
                  desc: "Networking, CCTV and remote diagnostics assistance.",
                },

                {
                  icon: <Clock3 size={18} />,
                  title: "Reliable Response Times",
                  desc: "Clear communication and dependable support flow.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-start
                    gap-4
                  "
                >

                  <div
                    className="
                      w-11 h-11
                      rounded-2xl
                      bg-blue-500/10
                      border border-blue-500/20
                      flex items-center justify-center
                      text-blue-400
                      shrink-0
                    "
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h3
                      className="
                        text-white
                        font-medium
                        text-[15px]
                        mb-1
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        text-gray-400
                        text-sm
                        leading-relaxed
                        max-w-md
                      "
                    >
                      {item.desc}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* SUPPORT FORM */}
          <div
            className="
              mt-8
              pt-10
              border-t border-white/10
            "
          >

            {/* TOP */}
            <div
              className="
                flex
                items-center
                gap-4
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
                <LifeBuoy size={24} />
              </div>

              <div>
                <h2
                  className="
                    text-2xl
                    md:text-3xl
                    font-semibold
                  "
                >
                  Submit Support Ticket
                </h2>

                <p
                  className="
                    text-gray-400
                    text-sm
                    mt-2
                  "
                >
                  Tell us about the issue and our team will assist you.
                </p>
              </div>

            </div>

            {/* FORM */}
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-7">

              <div className="space-y-2">
                <label className="text-sm text-gray-400">
                  Full Name
                </label>

                <input
  type="text"
  name="fullName"
  value={form.fullName}
  onChange={handleChange}
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
                  Company
                </label>

               <input
  type="text"
  name="company"
  value={form.company}
  onChange={handleChange}
  placeholder="Your Company"
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
  name="email"
  value={form.email}
  onChange={handleChange}
  placeholder="example@email.com"
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
  name="phone"
  value={form.phone}
  onChange={handleChange}
  placeholder="+971 ..."
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
                  Service Type
                </label>

                <select
                  name="serviceType"
                  value={form.serviceType}
                  onChange={handleChange}
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
                    Web Development
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
                  Priority Level
                </label>

                <select
  name="priority"
  value={form.priority}
  onChange={handleChange}
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
                    Low
                  </option>

                  <option className="bg-[#07111F]">
                    Medium
                  </option>

                  <option className="bg-[#07111F]">
                    Urgent
                  </option>
                </select>
              </div>

            </div>

            {/* TEXTAREA */}
            <div className="mt-8">

              <label className="text-sm text-gray-400">
                Describe the Issue
              </label>

              <textarea
                rows="5"
                name="issue"
                value={form.issue}
                onChange={handleChange}
                placeholder="Explain the issue you're facing..."
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

            {/* ACTIONS */}
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-5
                mt-8
              "
            >

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="
                  flex items-center gap-3
                  px-6 py-3.5
                  rounded-2xl
                  bg-blue-600
                  hover:bg-blue-500
                  transition
                  text-sm
                  font-medium
                  shadow-[0_0_30px_rgba(59,130,246,0.25)]
                "
              >
                <Upload size={18} />
                {
  loading
    ? "Submitting..."
    : "Submit Ticket"
}
              </button>

              <div
                className="
                  flex items-center gap-3
                  text-gray-400
                  text-sm
                "
              >
                <PhoneCall size={16} className="text-blue-400" />

                Emergency support available for critical systems.
              </div>

            </div>

          </div>

          {/* QUICK HELP */}
          <div
            className="
              grid
              md:grid-cols-4
              gap-y-8
              gap-x-6
              mt-20
              pt-10
              border-t border-white/10
            "
          >

            {[
              "Emergency Support",
              "WhatsApp Assistance",
              "Remote Access",
              "Priority Response",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  gap-4
                "
              >

                <div
                  className="
                    w-12 h-12
                    rounded-2xl
                    bg-white/[0.03]
                    border border-white/10
                    flex items-center justify-center
                    text-blue-400
                    shrink-0
                  "
                >
                  <MonitorSmartphone size={18} />
                </div>

                <p
                  className="
                    text-sm
                    text-gray-300
                  "
                >
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

     
    </>
  );
}