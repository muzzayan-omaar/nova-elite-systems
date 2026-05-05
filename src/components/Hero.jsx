export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#05070F] to-[#0B0F1A] text-white flex items-center px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Smart Solutions.
            <br />
            Seamless Systems.
            <br />
            <span className="text-blue-500">Stronger Businesses.</span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-lg">
            High-performance digital platforms and secure infrastructure
            that help UAE businesses scale, automate, and operate efficiently.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg shadow-lg">
              Get a Quote →
            </button>

            <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800">
              View Our Work
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden md:flex justify-center">
          <div className="w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl absolute"></div>

          <img
            src="/hero.png"
            alt="hero"
            className="relative w-[420px]"
          />
        </div>

      </div>
    </section>
  );
}