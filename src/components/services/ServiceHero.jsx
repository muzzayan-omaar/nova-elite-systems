import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ServiceHero({
  eyebrow,
  title,
  description,
  metrics = [],
}) {
  return (
    <section
      className="
        relative
        overflow-hidden
        pt-36
        pb-28
      "
    >

      {/* BACKGROUND GRID */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* GLOW */}

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
        "
      />

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
        "
      >

        <div
          className="
            grid
            lg:grid-cols-2
            gap-20
            items-center
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
                font-semibold
                mb-6
              "
            >
              {eyebrow}
            </p>

           <h1
  className="
    text-5xl
    md:text-7xl
    font-black
    leading-[0.95]
    tracking-[-0.04em]
    max-w-[700px]
  "
>
  {title}
</h1>

            <p
              className="
                mt-8
                text-gray-400
                text-lg
                leading-relaxed
                max-w-2xl
              "
            >
              {description}
            </p>

            {/* ACTIONS */}

            <div
              className="
                flex
                flex-wrap
                gap-4
                mt-10
              "
            >

              <button
                className="
                  px-7
                  py-4
                  rounded-2xl
                  bg-blue-600
                  hover:bg-blue-500
                  transition
                  text-sm
                  font-medium
                  flex
                  items-center
                  gap-3
                  shadow-[0_0_40px_rgba(59,130,246,0.3)]
                "
              >
                Book Consultation
                <ArrowRight size={18} />
              </button>

              <button
                className="
                  px-7
                  py-4
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  hover:bg-white/[0.05]
                  transition
                  text-sm
                "
              >
                View Solutions
              </button>

            </div>

            {/* TRUST */}

            <div
              className="
                flex
                flex-wrap
                gap-6
                mt-10
              "
            >

              {[
                "Enterprise-grade systems",
                "Scalable architecture",
                "Ongoing technical support",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-gray-300
                  "
                >

                  <CheckCircle2
                    size={16}
                    className="text-blue-400"
                  />

                  {item}

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div
            className="
              relative
            "
          >

            {/* MAIN PANEL */}

            <div
              className="
                relative
                rounded-[32px]
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                overflow-hidden
                shadow-[0_20px_80px_rgba(0,0,0,0.45)]
              "
            >

              {/* TOP BAR */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                  px-6
                  py-4
                  border-b border-white/10
                "
              >

                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />

              </div>

              {/* CONTENT */}

              <div className="p-8">

                <div
                  className="
                    grid
                    grid-cols-2
                    gap-5
                  "
                >

                  {metrics.map((item, index) => (
                    <div
                      key={index}
                      className="
                        rounded-2xl
                        border border-white/10
                        bg-black/20
                        p-6
                      "
                    >

                      <p
                        className="
                          text-4xl
                          font-bold
                          text-white
                        "
                      >
                        {item.value}
                      </p>

                      <p
                        className="
                          text-sm
                          text-gray-400
                          mt-3
                          leading-relaxed
                        "
                      >
                        {item.label}
                      </p>

                    </div>
                  ))}

                </div>

                {/* BOTTOM STRIP */}

                <div
                  className="
                    mt-6
                    rounded-2xl
                    border border-blue-500/20
                    bg-blue-500/10
                    p-5
                  "
                >

                  <p
                    className="
                      text-sm
                      text-blue-200
                      leading-relaxed
                    "
                  >
                    Built for organizations requiring
                    modern infrastructure, scalable
                    digital systems and reliable
                    operational performance.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}