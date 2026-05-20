import {
  Check,
  ArrowRight,
} from "lucide-react";

export default function FeatureSplit({
  eyebrow,
  title,
  description,
  features,
  reverse = false,
  image,
}) {
  return (
    <section className="py-28">

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
        "
      >

        <div
          className={`
            grid
            lg:grid-cols-2
            gap-20
            items-center

            ${
              reverse
                ? "lg:[&>*:first-child]:order-2"
                : ""
            }
          `}
        >

          {/* VISUAL */}

          <div className="relative">

            {/* GLOW */}

            <div
              className="
                absolute
                inset-0
                bg-blue-500/10
                blur-3xl
                rounded-full
              "
            />

            {/* PANEL */}

            <div
              className="
                relative
                rounded-[32px]
                border border-white/10
                bg-white/[0.03]
                overflow-hidden
                backdrop-blur-xl
                shadow-[0_20px_80px_rgba(0,0,0,0.45)]
              "
            >

              <img
                src={image}
                alt={title}
                className="
                  w-full
                  h-[500px]
                  object-cover
                "
              />

            </div>

          </div>

          {/* CONTENT */}

          <div>

            <p
              className="
                uppercase
                tracking-[0.25em]
                text-[11px]
                text-blue-400
                font-semibold
                mb-5
              "
            >
              {eyebrow}
            </p>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                leading-tight
                tracking-[-0.03em]
              "
            >
              {title}
            </h2>

            <p
              className="
                mt-6
                text-gray-400
                text-lg
                leading-relaxed
              "
            >
              {description}
            </p>

            {/* FEATURES */}

            <div
              className="
                space-y-5
                mt-10
              "
            >

              {features.map(
                (item, index) => (
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
                        w-8
                        h-8
                        rounded-full
                        bg-blue-500/10
                        border border-blue-500/20
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                    >

                      <Check
                        size={16}
                        className="text-blue-400"
                      />

                    </div>

                    <div>

                      <p
                        className="
                          text-white
                          font-medium
                        "
                      >
                        {item.title}
                      </p>

                      <p
                        className="
                          text-sm
                          text-gray-400
                          mt-1
                          leading-relaxed
                        "
                      >
                        {item.desc}
                      </p>

                    </div>

                  </div>
                )
              )}

            </div>

            {/* CTA */}

            <button
              className="
                mt-10
                flex
                items-center
                gap-3
                text-blue-400
                hover:text-blue-300
                transition
              "
            >
              Explore Infrastructure
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}