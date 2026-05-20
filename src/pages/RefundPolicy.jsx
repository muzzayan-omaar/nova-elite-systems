import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Shield, AlertTriangle, CheckCircle, Info } from "lucide-react";

export default function RefundPolicy() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#050816] text-white pt-32 pb-24 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">

          {/* HERO */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs mb-4">
              <Shield size={14} />
              Policies & Protection
            </div>

            <h1 className="text-3xl md:text-4xl font-bold">
              Refund & Payment Policy
            </h1>

            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              Clear, transparent policies designed to protect both our clients and our creative process.
            </p>
          </div>

          {/* CONTENT */}
          <div className="space-y-10">

            {/* CONSULTATION */}
            <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3 text-blue-400">
                <Info size={16} />
                Consultation Fees
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                Consultation and discovery fees are <span className="text-white font-medium">non-refundable</span> as they cover time, planning, and technical analysis required before project initiation.
                However, in some cases, consultation fees may be credited toward the final project cost if development proceeds.
              </p>
            </div>

            {/* DEPOSITS */}
            <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3 text-blue-400">
                <CheckCircle size={16} />
                Project Booking Deposits
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                A booking deposit is required to secure your project slot and begin planning or development.  
                Deposits are <span className="text-white font-medium">non-refundable once work has started</span>, including design or technical setup.
              </p>

              <p className="text-sm text-gray-400 mt-3">
                If cancellation occurs before any work begins, partial refunds may be considered depending on time reserved.
              </p>
            </div>

            {/* DIGITAL PRODUCTS */}
            <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3 text-blue-400">
                <AlertTriangle size={16} />
                Digital Products & Templates
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                All template and digital product sales are <span className="text-white font-medium">non-refundable</span> due to their instant delivery and digital nature.
                Please review all previews and descriptions before purchase.
              </p>
            </div>

            {/* PROJECT PROGRESS */}
            <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3 text-blue-400">
                <Shield size={16} />
                Project Progress & Abandonment
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                Once a project is underway, payments are tied to completed milestones and are non-refundable.  
                Projects inactive for more than <span className="text-white font-medium">30 days</span> without client communication may be paused or closed without refund.
              </p>
            </div>

            {/* CLIENT RESPONSIBILITY */}
            <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3 text-blue-400">
                <Info size={16} />
                Client Responsibilities
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                Clients are expected to provide timely feedback, content, and required materials during the project lifecycle.
                Delays in communication may affect delivery timelines and project scheduling.
              </p>
            </div>

            {/* FINAL NOTE */}
            <div className="text-center pt-6">
              <p className="text-xs text-gray-500 leading-relaxed">
                By engaging our services, you acknowledge and agree to this Refund & Payment Policy alongside our Terms of Service and Privacy Policy.
              </p>
            </div>

          </div>
        </div>
      </section>

  
    </>
  );
}