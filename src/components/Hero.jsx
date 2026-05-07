export default function Hero() {
  return (
    <section
      className="
        min-h-screen
        pt-32 md:pt-28
        pb-14 md:pb-0
        bg-gradient-to-b
        from-[#05070F]
        to-[#0B0F1A]
        text-white
        flex items-center
        px-5 md:px-6
        overflow-hidden
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          grid md:grid-cols-2
          gap-14 md:gap-10
          items-center
          w-full
        "
      >

        {/* LEFT */}
        <div className="text-center md:text-left">

          <h1
            className="
              text-[2.5rem]
              leading-[1.1]
              sm:text-5xl
              md:text-6xl
              font-bold
            "
          >
            Smart Solutions.
            <br />
            Seamless Systems.
            <br />
            <span className="text-blue-500">
              Stronger Businesses.
            </span>
          </h1>

          <p
            className="
              text-gray-400
              mt-6
              max-w-lg
              mx-auto md:mx-0
              text-sm sm:text-base
              leading-relaxed
            "
          >
            High-performance digital platforms and secure
            infrastructure that help UAE businesses scale,
            automate, and operate efficiently.
          </p>

          <div
            className="
              flex flex-col sm:flex-row
              gap-3 sm:gap-4
              mt-8
              justify-center md:justify-start
            "
          >

            <button
              className="
                bg-blue-600 hover:bg-blue-700
                px-6 py-3
                rounded-lg
                shadow-lg
                text-sm md:text-base
                transition
              "
            >
              Get a Quote →
            </button>

            <button
              className="
                border border-gray-600
                px-6 py-3
                rounded-lg
                hover:bg-gray-800
                text-sm md:text-base
                transition
              "
            >
              View Our Work
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">

          {/* GLOW */}
          <div
            className="
              w-[260px] h-[260px]
              md:w-[400px] md:h-[400px]
              bg-blue-500/10
              rounded-full
              blur-3xl
              absolute
            "
          />

          <img
            src="https://res.cloudinary.com/diszilwhc/image/upload/v1777984942/globe1_g9sjcl.jpg"
            alt="hero"
            className="
              relative
              w-[300px]
              sm:w-[380px]
              md:w-[520px]
              object-contain
            "
          />
        </div>

      </div>
    </section>
  );
}