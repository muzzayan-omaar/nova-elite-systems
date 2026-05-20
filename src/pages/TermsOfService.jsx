import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsOfService() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#050816] text-white px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl font-bold mb-6">
            Terms of Service
          </h1>

          <p className="text-gray-400 mb-8">
            Effective Date: 2026
          </p>

          <div className="space-y-6 text-gray-300 leading-relaxed text-sm">

            <p>
              These Terms govern the use of services provided by NOVA Elite Systems,
              including web development, SaaS platforms, mobile applications,
              CCTV systems, networking, and access control solutions.
            </p>

            <h2 className="text-xl font-semibold text-white mt-10">
              1. Service Agreement
            </h2>

            <p>
              All projects begin after client approval of scope, pricing,
              and timeline. Work will not commence without confirmation.
            </p>

            <h2 className="text-xl font-semibold text-white mt-10">
              2. Payments
            </h2>

            <p>
              Payments must follow agreed milestones. Some services may require
              upfront deposits before development begins.
            </p>

            <h2 className="text-xl font-semibold text-white mt-10">
              3. Refund Policy
            </h2>

            <p>
              Due to the custom nature of digital services, refunds are
              generally not provided once work has started.
            </p>

            <h2 className="text-xl font-semibold text-white mt-10">
              4. Client Responsibilities
            </h2>

            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li>Provide accurate project requirements</li>
              <li>Supply necessary content and assets</li>
              <li>Respond in a timely manner during development</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-10">
              5. Intellectual Property
            </h2>

            <p>
              Final delivered projects belong to the client after full payment.
              NOVA retains the right to showcase work in portfolios unless agreed otherwise.
            </p>

            <h2 className="text-xl font-semibold text-white mt-10">
              6. Limitation of Liability
            </h2>

            <p>
              We are not liable for indirect damages, loss of revenue,
              or third-party service failures.
            </p>

            <h2 className="text-xl font-semibold text-white mt-10">
              7. Jurisdiction
            </h2>

            <p>
              These terms are governed under the laws of Uganda,
              while allowing international service coverage including UAE.
            </p>

          </div>
        </div>
      </section>

      
    </>
  );
}