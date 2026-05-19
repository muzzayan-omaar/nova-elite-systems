
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { servicesData }
from "../data/servicesData";

export default function ServicePage() {

  const { slug } = useParams();

  const service =
    servicesData[slug];

  if (!service) {
    return (
      <div
        className="
          min-h-screen
          bg-[#050816]
          text-white
          flex
          items-center
          justify-center
        "
      >
        Service not found
      </div>
    );
  }

  const Icon =
    service.icon;

  return (
    <>
      <Navbar />

      <section
        className="
          bg-[#050816]
          text-white
          overflow-hidden
        "
      >

        {/* HERO */}

        <div
          className="
            relative
            min-h-[760px]
            flex
            items-center
          "
        >

          <img
            src={service.heroImage}
            alt={service.title}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-[#020617]/85
            "
          />

          <div
            className="
              absolute
              top-[-200px]
              left-1/2
              -translate-x-1/2
              w-[1000px]
              h-[1000px]
              rounded-full
              bg-blue-500/10
              blur-[180px]
            "
          />

          <div
            className="
              relative
              z-10
              max-w-7xl
              mx-auto
              px-6
              pt-40
              pb-20
              grid
              md:grid-cols-2
              gap-16
              items-center
            "
          >

            {/* LEFT */}

            <div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4 py-2
                  rounded-full
                  border border-blue-500/20
                  bg-blue-500/10
                  text-blue-300
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  mb-8
                "
              >
                <Sparkles size={14} />
                Enterprise Solutions
              </div>

              <h1
                className="
                  text-5xl
                  md:text-7xl
                  font-bold
                  leading-[0.95]
                "
              >
                {service.title}
              </h1>

              <p
                className="
                  mt-8
                  text-gray-300
                  text-lg
                  leading-relaxed
                  max-w-xl
                "
              >
                {service.subtitle}
              </p>

              {/* CTA */}

              <div
                className="
                  flex
                  flex-wrap
                  gap-4
                  mt-10
                "
              >

                <a
                  href="/book-consultation"
                  className="
                    px-7 py-4
                    rounded-2xl
                    bg-blue-600
                    hover:bg-blue-500
                    transition
                    text-sm
                    font-medium
                    flex items-center gap-3
                    shadow-[0_0_40px_rgba(59,130,246,0.35)]
                  "
                >
                  Book Consultation
                  <ArrowRight size={18} />
                </a>

                <a
                  href="/technical-support"
                  className="
                    px-7 py-4
                    rounded-2xl
                    border border-white/10
                    bg-white/[0.03]
                    hover:bg-white/[0.06]
                    transition
                    text-sm
                  "
                >
                  Technical Support
                </a>

              </div>

            </div>

            {/* RIGHT */}

            <div
              className="
                grid
                grid-cols-3
                gap-5
              "
            >

              {service.stats.map(
                (item, index) => (

                  <div
                    key={index}
                    className="
                      rounded-3xl
                      border border-white/10
                      bg-white/[0.04]
                      backdrop-blur-xl
                      p-6
                    "
                  >

                    <h3
                      className="
                        text-3xl
                        font-bold
                        text-blue-400
                      "
                    >
                      {item.value}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-sm
                        text-gray-400
                      "
                    >
                      {item.label}
                    </p>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

        {/* OVERVIEW */}

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            py-24
          "
        >

          <div
            className="
              max-w-4xl
            "
          >

            <p
              className="
                uppercase
                tracking-[0.25em]
                text-[11px]
                text-blue-400
                mb-4
              "
            >
              OVERVIEW
            </p>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                leading-tight
              "
            >
              Premium infrastructure
              and scalable digital systems
            </h2>

            <p
              className="
                mt-8
                text-gray-400
                text-lg
                leading-relaxed
                max-w-3xl
              "
            >
              {service.overview}
            </p>

          </div>

        </div>

        {/* FEATURES */}

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            pb-24
          "
        >

          <div
            className="
              flex
              items-center
              justify-between
              mb-12
            "
          >

            <div>

              <p
                className="
                  uppercase
                  tracking-[0.25em]
                  text-[11px]
                  text-blue-400
                  mb-3
                "
              >
                FEATURES
              </p>

              <h2
                className="
                  text-4xl
                  font-bold
                "
              >
                What’s Included
              </h2>

            </div>

            <div
              className="
                hidden md:flex
                w-16 h-16
                rounded-3xl
                bg-blue-500/10
                border border-blue-500/20
                items-center justify-center
                text-blue-400
              "
            >
              <Icon size={30} />
            </div>

          </div>

          <div
            className="
              grid
              md:grid-cols-2
              lg:grid-cols-4
              gap-6
            "
          >

            {service.features.map(
              (feature, index) => (

                <div
                  key={index}
                  className="
                    rounded-3xl
                    border border-white/10
                    bg-white/[0.03]
                    p-7
                    hover:border-blue-500/30
                    transition
                  "
                >

                  <div
                    className="
                      w-12 h-12
                      rounded-2xl
                      bg-blue-500/10
                      border border-blue-500/20
                      flex items-center justify-center
                      text-blue-400
                      mb-5
                    "
                  >
                    <CheckCircle2 size={20} />
                  </div>

                  <h3
                    className="
                      text-lg
                      font-medium
                    "
                  >
                    {feature}
                  </h3>

                </div>

              )
            )}

          </div>

        </div>

        {/* PROCESS */}

        <div
          className="
            border-y
            border-white/10
            bg-white/[0.02]
          "
        >

          <div
            className="
              max-w-7xl
              mx-auto
              px-6
              py-24
            "
          >

            <p
              className="
                uppercase
                tracking-[0.25em]
                text-[11px]
                text-blue-400
                mb-4
              "
            >
              WORKFLOW
            </p>

            <h2
              className="
                text-4xl
                font-bold
                mb-14
              "
            >
              Our Process
            </h2>

            <div className="space-y-6">

              {service.process.map(
                (step, index) => (

                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      justify-between
                      border border-white/10
                      rounded-3xl
                      bg-white/[0.03]
                      p-6
                    "
                  >

                    <div className="flex items-center gap-5">

                      <div
                        className="
                          w-14 h-14
                          rounded-2xl
                          bg-blue-500/10
                          border border-blue-500/20
                          flex items-center justify-center
                          text-blue-400
                          font-bold
                        "
                      >
                        0{index + 1}
                      </div>

                      <h3
                        className="
                          text-lg
                          font-medium
                        "
                      >
                        {step}
                      </h3>

                    </div>

                    <ArrowRight
                      size={20}
                      className="text-blue-400"
                    />

                  </div>

                )
              )}

            </div>

          </div>

        </div>

        {/* INDUSTRIES */}

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            py-24
          "
        >

          <p
            className="
              uppercase
              tracking-[0.25em]
              text-[11px]
              text-blue-400
              mb-4
            "
          >
            INDUSTRIES
          </p>

          <h2
            className="
              text-4xl
              font-bold
              mb-12
            "
          >
            Industries We Serve
          </h2>

          <div
            className="
              flex
              flex-wrap
              gap-4
            "
          >

            {service.industries.map(
              (industry, index) => (

                <div
                  key={index}
                  className="
                    px-6 py-4
                    rounded-2xl
                    border border-white/10
                    bg-white/[0.03]
                    text-sm
                    text-gray-300
                  "
                >
                  {industry}
                </div>

              )
            )}

          </div>

        </div>

        {/* FAQ */}

        <div
          className="
            border-t
            border-white/10
          "
        >

          <div
            className="
              max-w-5xl
              mx-auto
              px-6
              py-24
            "
          >

            <p
              className="
                uppercase
                tracking-[0.25em]
                text-[11px]
                text-blue-400
                mb-4
              "
            >
              FAQ
            </p>

            <h2
              className="
                text-4xl
                font-bold
                mb-12
              "
            >
              Frequently Asked Questions
            </h2>

            <div className="space-y-5">

              {service.faqs.map(
                (faq, index) => (

                  <div
                    key={index}
                    className="
                      rounded-3xl
                      border border-white/10
                      bg-white/[0.03]
                      p-7
                    "
                  >

                    <h3
                      className="
                        text-lg
                        font-medium
                        mb-4
                      "
                    >
                      {faq.question}
                    </h3>

                    <p
                      className="
                        text-gray-400
                        leading-relaxed
                      "
                    >
                      {faq.answer}
                    </p>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

        {/* CTA */}

        <div
          className="
            px-6
            pb-24
          "
        >

          <div
            className="
              max-w-7xl
              mx-auto
              rounded-[40px]
              border border-blue-500/20
              bg-blue-500/10
              p-12
              md:p-16
              relative
              overflow-hidden
            "
          >

            <div
              className="
                absolute
                top-[-120px]
                right-[-120px]
                w-[320px]
                h-[320px]
                rounded-full
                bg-blue-500/20
                blur-[120px]
              "
            />

            <div className="relative z-10">

              <div
                className="
                  flex
                  flex-col
                  md:flex-row
                  md:items-center
                  md:justify-between
                  gap-10
                "
              >

                <div>

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      text-blue-300
                      mb-5
                    "
                  >
                    <ShieldCheck size={18} />

                    Enterprise Infrastructure
                  </div>

                  <h2
                    className="
                      text-4xl
                      md:text-5xl
                      font-bold
                      leading-tight
                      max-w-3xl
                    "
                  >
                    Ready to modernize
                    your infrastructure
                    and digital operations?
                  </h2>

                </div>

                <a
                  href="/book-consultation"
                  className="
                    shrink-0
                    px-8 py-4
                    rounded-2xl
                    bg-blue-600
                    hover:bg-blue-500
                    transition
                    flex items-center gap-3
                    text-sm
                    font-medium
                  "
                >
                  Start Consultation
                  <ArrowRight size={18} />
                </a>

              </div>

            </div>

          </div>

        </div>

        <Footer />

      </section>
    </>
  );
}
