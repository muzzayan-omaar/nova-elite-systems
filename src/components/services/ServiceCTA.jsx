import {
  ArrowRight,
} from "lucide-react";

export default function ServiceCTA() {
  return (
    <section className="py-28">

      <div
        className="
          max-w-6xl
          mx-auto
          px-6
        "
      >

        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border border-white/10
            bg-gradient-to-br
            from-blue-600
            to-blue-900
            p-12
            md:p-20
          "
        >

          {/* GLOW */}

          <div
            className="
              absolute
              top-[-200px]
              right-[-200px]
              w-[500px]
              h-[500px]
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

          <div className="relative z-10">

            <p
              className="
                uppercase
                tracking-[0.25em]
                text-[11px]
                text-blue-100
                font-semibold
                mb-6
              "
            >
              START YOUR PROJECT
            </p>

            <h2
              className="
                text-4xl
                md:text-6xl
                font-black
                leading-[1]
                tracking-[-0.04em]
                max-w-4xl
              "
            >
              Build Smarter,
              Faster &
              More Secure Systems
            </h2>

            <p
              className="
                mt-8
                text-blue-100/80
                text-lg
                max-w-2xl
                leading-relaxed
              "
            >
              Partner with NOVA Elite Systems
              to create scalable digital and
              infrastructure solutions designed
              for long-term operational growth.
            </p>

            <div
              className="
                flex
                flex-wrap
                gap-5
                mt-10
              "
            >

              <button
                className="
                  px-7
                  py-4
                  rounded-2xl
                  bg-white
                  text-black
                  font-medium
                  flex
                  items-center
                  gap-3
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
                  border border-white/20
                  bg-white/10
                  backdrop-blur-xl
                "
              >
                Contact Team
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}