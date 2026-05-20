export default function IndustryGrid({
  items,
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
            INDUSTRIES
          </p>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              tracking-[-0.03em]
            "
          >
            Solutions Built For
          </h2>

        </div>

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >

          {items.map(
            (item, index) => (
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

                <div className="text-blue-400">
                <item.icon size={28} />
                </div>

                <h3
                  className="
                    mt-6
                    text-xl
                    font-semibold
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-gray-400
                    text-sm
                    leading-relaxed
                  "
                >
                  {item.desc}
                </p>

              </div>
            )
          )}

        </div>

      </div>

    </section>
  );
}