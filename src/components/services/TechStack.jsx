export default function TechStack({
  title = "Technologies We Work With",
  stacks,
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

        {/* HEADER */}

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
            TECHNOLOGY STACK
          </p>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              tracking-[-0.03em]
            "
          >
            {title}
          </h2>

        </div>

        {/* GRID */}

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >

          {stacks.map(
            (stack, index) => (
              <div
                key={index}
                className="
                  rounded-[28px]
                  border border-white/10
                  bg-white/[0.03]
                  p-8
                  hover:border-blue-500/30
                  transition
                "
              >

                <h3
                  className="
                    text-xl
                    font-semibold
                    mb-6
                  "
                >
                  {stack.category}
                </h3>

                <div className="space-y-3">

                  {stack.items.map(
                    (item, idx) => (
                      <div
                        key={idx}
                        className="
                          flex
                          items-center
                          justify-between
                          text-sm
                          border-b
                          border-white/5
                          pb-3
                        "
                      >

                        <span className="text-gray-300">
                          {item}
                        </span>

                        <span
                          className="
                            w-2
                            h-2
                            rounded-full
                            bg-blue-400
                          "
                        />

                      </div>
                    )
                  )}

                </div>

              </div>
            )
          )}

        </div>

      </div>

    </section>
  );
}