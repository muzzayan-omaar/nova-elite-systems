// src/components/Testimonials.jsx

export default function Testimonials() {

  const testimonials = [
    {
      name: "Amir Hassan",
      company: "Amir Healing Centre",
      quote:
        "NOVA completely transformed our online presence and business credibility.",
    },

    {
      name: "Khalid Group",
      company: "Construction Firm",
      quote:
        "Professional systems, premium design and very reliable technical support.",
    },

    {
      name: "Samantha Real Estate",
      company: "Property Agency",
      quote:
        "The platform helped modernize our entire sales and property workflow.",
    },
  ];

  return (
    <section className="py-28 px-5 md:px-8">

      <div className="max-w-7xl mx-auto">

        <div className="mb-14">

          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.25em]
              text-blue-400
              mb-4
            "
          >
            Testimonials
          </p>

          <h2
            className="
              text-[30px]
              md:text-[42px]
              leading-[1]
              tracking-[-0.05em]
              font-semibold
            "
          >
            Trusted By
            <br />

            Modern Businesses
          </h2>

        </div>

        <div
          className="
            grid
            lg:grid-cols-3
            gap-5
          "
        >

          {testimonials.map((item, index) => (

            <div
              key={index}

              className="
                rounded-[28px]
                border border-white/10
                bg-white/[0.03]
                p-8
              "
            >

              <p
                className="
                  text-[15px]
                  text-gray-300
                  leading-relaxed
                "
              >
                “{item.quote}”
              </p>

              <div className="mt-8">

                <h3 className="font-medium">
                  {item.name}
                </h3>

                <p
                  className="
                    text-sm
                    text-gray-500
                    mt-1
                  "
                >
                  {item.company}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}