import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Shield, FileText, Users, Clock, Scale } from "lucide-react";

export default function TermsOfService() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#050816] text-white pt-32 pb-24 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">

          {/* HERO */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm mb-6">
              <Shield size={18} />
              Legal Agreement
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Terms of Service
            </h1>

            <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
              Please read these Terms carefully before engaging our services.
            </p>

            <p className="text-sm text-gray-500 mt-8">
              Effective Date: June 07, 2026
            </p>
          </div>

          <div className="prose prose-invert prose-gray max-w-none text-gray-300 leading-relaxed space-y-12">

            <p className="text-lg">
              These Terms of Service ("Terms") govern your use of services provided by <span className="text-white font-medium">NOVA Elite Systems</span> (referred to as "NOVA", "we", "us", or "our"). 
              By engaging our services, you agree to be bound by these Terms.
            </p>

            {/* 1. Services */}
            <div>
              <h2 className="text-2xl font-semibold text-white flex items-center gap-3 mb-4">
                <FileText size={24} className="text-blue-400" />
                1. Our Services
              </h2>
              <p>
                NOVA Elite Systems provides web development, mobile applications, SaaS platforms, 
                CCTV & security systems, networking solutions, access control, branding, and related digital services.
              </p>
            </div>

            {/* 2. Agreement Process */}
            <div>
              <h2 className="text-2xl font-semibold text-white flex items-center gap-3 mb-4">
                2. Service Agreement & Project Initiation
              </h2>
              <p>
                A formal project agreement, scope of work, and quotation must be mutually approved before work begins. 
                We only commence development after receiving written confirmation and the agreed deposit.
              </p>
            </div>

            {/* 3. Payments */}
            <div>
              <h2 className="text-2xl font-semibold text-white flex items-center gap-3 mb-4">
                3. Payments and Billing
              </h2>
              <p>
                All payments are due according to the agreed milestone schedule. Late payments may result in suspension of work 
                and possible late fees. We reserve the right to pause or terminate a project if payments are overdue by more than 14 days.
              </p>
            </div>

            {/* 4. Refund & Cancellation */}
            <div>
              <h2 className="text-2xl font-semibold text-white flex items-center gap-3 mb-4">
                4. Refund & Cancellation Policy
              </h2>
              <p>
                Our Refund Policy is outlined in detail on our dedicated <a href="/refund-policy" className="text-blue-400 hover:underline">Refund Policy page</a>. 
                In summary, we offer a 48-hour full refund window for projects cancelled before any work begins.
              </p>
            </div>

            {/* 5. Client Responsibilities */}
            <div>
              <h2 className="text-2xl font-semibold text-white flex items-center gap-3 mb-4">
                <Users size={24} className="text-blue-400" />
                5. Client Responsibilities
              </h2>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide clear, accurate, and complete project requirements and content in a timely manner.</li>
                <li>Review and provide feedback on deliverables within the agreed timeframe.</li>
                <li>Ensure all provided materials do not infringe on third-party intellectual property rights.</li>
                <li>Maintain professional communication throughout the project.</li>
              </ul>
            </div>

            {/* 6. Project Timeline */}
            <div>
              <h2 className="text-2xl font-semibold text-white flex items-center gap-3 mb-4">
                <Clock size={24} className="text-blue-400" />
                6. Project Timeline & Delays
              </h2>
              <p>
                We strive to meet agreed deadlines. However, delays caused by the client (late feedback, content, approvals, etc.) 
                may result in timeline extensions. We are not responsible for delays caused by third-party services or force majeure events.
              </p>
            </div>

            {/* 7. Intellectual Property */}
            <div>
              <h2 className="text-2xl font-semibold text-white flex items-center gap-3 mb-4">
                7. Intellectual Property
              </h2>
              <p>
                Upon full and final payment, all custom deliverables become the client’s property. 
                We retain the right to display the project in our portfolio, marketing materials, and website unless a separate NDA or agreement states otherwise.
              </p>
              <p className="mt-4">
                We may use open-source tools, libraries, and third-party assets. Ownership of these remains with their respective creators.
              </p>
            </div>

            {/* 8. Confidentiality */}
            <div>
              <h2 className="text-2xl font-semibold text-white flex items-center gap-3 mb-4">
                8. Confidentiality
              </h2>
              <p>
                Both parties agree to keep confidential information secure and not disclose it to third parties without prior written consent.
              </p>
            </div>

            {/* 9. Warranties & Disclaimers */}
            <div>
              <h2 className="text-2xl font-semibold text-white flex items-center gap-3 mb-4">
                9. Warranties and Disclaimers
              </h2>
              <p>
                We warrant that our custom work will substantially conform to the agreed scope. 
                All services are provided “as is” beyond the agreed deliverables. We do not guarantee that websites or applications will be error-free, 
                immune to hacking, or generate specific business results.
              </p>
            </div>

            {/* 10. Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-semibold text-white flex items-center gap-3 mb-4">
                <Scale size={24} className="text-blue-400" />
                10. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, NOVA Elite Systems shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages, including loss of profits, data, or goodwill. 
                Our total liability shall not exceed the total amount paid by the client for the specific project.
              </p>
            </div>

            {/* 11. Termination */}
            <div>
              <h2 className="text-2xl font-semibold text-white flex items-center gap-3 mb-4">
                11. Termination
              </h2>
              <p>
                Either party may terminate the agreement with written notice. The client remains responsible for payment for all work completed up to the termination date.
              </p>
            </div>

            {/* 12. Governing Law */}
            <div>
              <h2 className="text-2xl font-semibold text-white flex items-center gap-3 mb-4">
                12. Governing Law & Jurisdiction
              </h2>
              <p>
                These Terms are governed by the laws of Uganda. Any disputes shall be resolved in the courts of Uganda, 
                though we remain open to international arbitration where appropriate.
              </p>
            </div>

            {/* 13. Changes to Terms */}
            <div>
              <h2 className="text-2xl font-semibold text-white flex items-center gap-3 mb-4">
                13. Changes to These Terms
              </h2>
              <p>
                We may update these Terms from time to time. We will notify existing clients of material changes. 
                Continued engagement with our services after changes constitutes acceptance of the new Terms.
              </p>
            </div>

          </div>

          {/* FINAL NOTE */}
          <div className="mt-20 pt-10 border-t border-white/10 text-center text-sm text-gray-500">
            <p>
              By engaging NOVA Elite Systems, you confirm that you have read, understood, and agree to these Terms of Service, 
              our <a href="/refund-policy" className="text-blue-400 hover:underline">Refund Policy</a>, and <a href="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</a>.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}