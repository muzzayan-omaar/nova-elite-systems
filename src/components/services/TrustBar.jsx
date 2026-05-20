export default function TrustBar({
  items,
}) {
  return (
    <section
      className="
        py-8
        border-y
        border-white/10
        bg-white/[0.02]
        backdrop-blur-xl
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
        "
      >

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-10
          "
        >

          {items.map(
            (item, index) => (
              <div
                key={index}
                className="
                  text-center
                "
              >

                <p
                  className="
                    text-4xl
                    md:text-5xl
                    font-black
                    tracking-[-0.04em]
                  "
                >
                  {item.value}
                </p>

                <p
                  className="
                    text-sm
                    text-gray-400
                    mt-3
                  "
                >
                  {item.label}
                </p>

              </div>
            )
          )}

        </div>

      </div>

    </section>
  );
}