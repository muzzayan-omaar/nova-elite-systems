export default function Services() {
  return (
    <section className="bg-[#0B0F1A] text-white py-16 px-6">
      <h2 className="text-center text-3xl font-bold mb-2">Our Services</h2>
      <p className="text-center text-gray-400 mb-10">
        Complete technology solutions to power and protect your business.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-[#111827] p-6 rounded-xl">
          <h3 className="text-blue-500 font-semibold">Web Development</h3>
          <p className="text-gray-400 mt-2">
            Fast, responsive and modern websites.
          </p>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl">
          <h3 className="text-blue-500 font-semibold">App Development</h3>
          <p className="text-gray-400 mt-2">
            Custom mobile applications.
          </p>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl">
          <h3 className="text-blue-500 font-semibold">SaaS Apps</h3>
          <p className="text-gray-400 mt-2">
            Scalable business systems.
          </p>
        </div>
      </div>
    </section>
  );
}