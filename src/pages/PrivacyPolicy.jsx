import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#050816] text-white px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl font-bold mb-6">
            Privacy Policy
          </h1>

          <p className="text-gray-400 mb-8">
            Effective Date: 2026
          </p>

          <div className="space-y-6 text-gray-300 leading-relaxed text-sm">

            <p>
              NOVA Elite Systems ("we", "our", "us") is a digital services company
              providing web development, mobile applications, SaaS platforms,
              CCTV systems, networking, and access control solutions.
            </p>

            <p>
              We are legally based in Uganda, while serving clients globally
              including the United Arab Emirates and other regions.
            </p>

            <h2 className="text-xl font-semibold text-white mt-10">
              1. Information We Collect
            </h2>

            <p>
              We may collect personal information such as name, email address,
              phone number, project details, and communication history when you:
            </p>

            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li>Contact us through forms or WhatsApp</li>
              <li>Request a quote or consultation</li>
              <li>Use our website or AI assistant</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-10">
              2. How We Use Your Information
            </h2>

            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li>To respond to inquiries and provide services</li>
              <li>To prepare project proposals and pricing</li>
              <li>To improve user experience and AI assistance</li>
              <li>To communicate updates about projects</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-10">
              3. Data Protection
            </h2>

            <p>
              We implement reasonable technical and organizational measures
              to protect your data against unauthorized access, loss, or misuse.
            </p>

            <h2 className="text-xl font-semibold text-white mt-10">
              4. Third-Party Services
            </h2>

            <p>
              We may use third-party services such as hosting providers,
              analytics tools, and communication platforms. These services
              only access data necessary to perform their functions.
            </p>

            <h2 className="text-xl font-semibold text-white mt-10">
              5. International Clients
            </h2>

            <p>
              As we serve clients in Uganda, UAE, and other regions,
              your data may be processed across different jurisdictions.
              We ensure a consistent level of protection regardless of location.
            </p>

            <h2 className="text-xl font-semibold text-white mt-10">
              6. Contact
            </h2>

            <p>
              For privacy concerns, contact:
              <br />
              support@novaelitesystems.com
            </p>

          </div>
        </div>

      
      </section>

     
    </>
  );
}