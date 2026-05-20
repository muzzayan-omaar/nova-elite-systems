export default function ProcessTimeline({
  steps,
}) {
  return (
    <section className="py-28">

      <div
        className="
          max-w-6xl
          mx-auto
          px-6
        "
      >

        <div className="mb-16">

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
            PROCESS
          </p>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              tracking-[-0.03em]
            "
          >
            How We Execute
          </h2>

        </div>

        <div
          className="
            relative
            space-y-10
          "
        >

          {/* LINE */}

          <div
            className="
              absolute
              left-[18px]
              top-0
              bottom-0
              w-[1px]
              bg-white/10
            "
          />

          {steps.map(
            (step, index) => (
              <div
                key={index}
                className="
                  relative
                  flex
                  gap-8
                "
              >

                {/* DOT */}

                <div
                  className="
                    relative
                    z-10
                    w-9
                    h-9
                    rounded-full
                    bg-blue-600
                    flex
                    items-center
                    justify-center
                    text-sm
                    font-bold
                    shrink-0
                  "
                >
                  {index + 1}
                </div>

                {/* CONTENT */}

                <div
                  className="
                    pb-10
                  "
                >

                  <h3
                    className="
                      text-2xl
                      font-semibold
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-gray-400
                      leading-relaxed
                      max-w-2xl
                    "
                  >
                    {step.desc}
                  </p>

                </div>

              </div>
            )
          )}

        </div>

      </div>

    </section>
  );
}