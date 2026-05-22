import { useState } from "react";
import { Plus, X } from "lucide-react";

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What’s included in the website packages?",
      answer:
        "Our website packages include modern UI/UX design, responsive development, performance optimization, SEO foundations, deployment assistance and post-launch guidance depending on your selected plan.",
    },

    {
      question: "Do you provide hosting and domain setup?",
      answer:
        "Yes. NOVA can assist with domain registration, hosting setup, deployment and business email configuration so your project launches professionally from day one.",
    },

    {
      question: "How long does a typical project take?",
      answer:
        "Delivery depends on project complexity. Smaller business websites can be completed within days, while larger platforms, SaaS systems or infrastructure projects may take several weeks.",
    },

    {
      question: "Can I request custom features?",
      answer:
        "Absolutely. Every business is different. We can integrate booking systems, dashboards, payment gateways, AI tools, automation systems and other custom functionality tailored to your needs.",
    },

    {
      question: "Do you offer revisions?",
      answer:
        "Yes. All packages include revision rounds to ensure the final result aligns with your brand and expectations.",
    },

    {
      question: "Do you only work with clients in the UAE?",
      answer:
        "No. NOVA works with businesses internationally. We collaborate remotely with clients across different industries and regions.",
    },

    {
      question: "What happens after the project is completed?",
      answer:
        "We provide ongoing support options, maintenance, upgrades and technical assistance depending on your selected package or support agreement.",
    },
  ];

  return (
    <section
      className="
        relative
        py-28
        overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[900px]
          h-[900px]
          rounded-full
          bg-blue-500/5
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
          px-6
          grid
          md:grid-cols-[0.9fr_1.1fr]
          gap-20
        "
      >

        {/* LEFT SIDE */}
        <div className="md:sticky md:top-32 h-fit">

          <p
            className="
              text-blue-400
              uppercase
              tracking-[0.3em]
              text-xs
              font-semibold
              mb-5
            "
          >
            FAQS
          </p>

          <h2
            className="
              text-4xl
              md:text-6xl
              font-bold
              leading-[1.05]
            "
          >
            Questions?
            <br />

            <span className="text-blue-500">
              We’ve Got
            </span>

            <br />
            Answers.
          </h2>

          <p
            className="
              mt-7
              text-gray-400
              leading-relaxed
              text-sm
              md:text-base
              max-w-md
            "
          >
            Everything you need to know about our
            pricing, timelines, services and project
            process before getting started with NOVA.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-2">

          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="
                  border-b
                  border-white/10
                  py-7
                "
              >

                {/* QUESTION */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="
                    w-full
                    flex
                    items-start
                    justify-between
                    gap-6
                    text-left
                  "
                >

                  <h3
                    className="
                      text-lg
                      md:text-2xl
                      font-medium
                      text-white
                      leading-snug
                    "
                  >
                    {item.question}
                  </h3>

                  <div
                    className={`
                      mt-1
                      shrink-0
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "rotate-180 text-blue-400"
                          : "text-gray-500"
                      }
                    `}
                  >
                    {isOpen ? (
                      <X size={22} />
                    ) : (
                      <Plus size={22} />
                    )}
                  </div>
                </button>

                {/* ANSWER */}
                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-500
                    ${
                      isOpen
                        ? "max-h-[300px] opacity-100 mt-6"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >

                  {/* ACCENT LINE */}
                  <div
                    className="
                      w-14
                      h-[2px]
                      bg-blue-500
                      mb-5
                    "
                  />

                  <p
                    className="
                      text-gray-400
                      leading-relaxed
                      text-sm
                      md:text-base
                      max-w-2xl
                    "
                  >
                    {item.answer}
                  </p>

                </div>
              </div>
            );
          })}

          {/* CTA */}
          <div
            className="
              pt-16
              text-center
            "
          >





          </div>

        </div>

      </div>
    </section>
  );
}