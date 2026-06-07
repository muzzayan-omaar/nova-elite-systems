import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Shield, Clock, CheckCircle, Heart, Info, ArrowRight } from "lucide-react";

export default function RefundPolicy() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#050816] text-white pt-32 pb-24 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">

          {/* HERO */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm mb-6">
              <Shield size={18} />
              Fair & Transparent
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Refund Policy
            </h1>

            <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
              We believe in building trust through flexibility. 
              If things don’t feel right in the beginning, we’ve got you covered.
            </p>

            <div className="flex items-center justify-center gap-2 mt-8 text-sm text-gray-400">
              <Clock size={18} className="text-emerald-400" />
              <span>48-hour refund window for cancelled projects</span>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="space-y-12">

            {/* FRIENDLY INTRO */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10 text-center">
              <div className="mx-auto w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Heart size={32} className="text-emerald-400" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">We’re Here to Make It Work</h2>
              <p className="text-gray-300 max-w-lg mx-auto">
                Your peace of mind matters. That’s why we offer a straightforward 48-hour window to cancel and receive a full refund if you decide to call off the project early — before any meaningful work begins.
              </p>
            </div>

            {/* KEY POLICIES */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* 48 HOUR REFUND */}
              <div className="border border-emerald-500/20 bg-white/[0.03] rounded-3xl p-8 hover:border-emerald-500/40 transition-all group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                    <Clock size={24} className="text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">48-Hour Money-Back</h3>
                    <p className="text-emerald-400 text-sm">For cancelled projects</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  If you decide to call off the project within <span className="text-white font-medium">48 hours</span> of booking and no work has started, we’ll issue a <span className="text-white font-medium">full refund</span> — no questions asked.
                </p>
                <div className="mt-6 text-xs text-emerald-400 flex items-center gap-1.5">
                  <ArrowRight size={14} /> Your trust is more important than any deposit
                </div>
              </div>

              {/* CONSULTATION */}
              <div className="border border-white/10 bg-white/[0.03] rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                    <Info size={24} className="text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-lg">Consultation & Discovery</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Consultation fees are generally non-refundable as they cover dedicated time for research, planning, and technical scoping. However, we’re happy to apply them as a credit toward your project if we move forward.
                </p>
              </div>
            </div>

            {/* DEPOSITS & WORK */}
            <div className="border border-white/10 bg-white/[0.03] rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle size={24} className="text-emerald-400" />
                <h3 className="font-semibold text-xl">Project Deposits & Development</h3>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-medium mb-2 text-white">Before Work Begins</h4>
                  <p className="text-gray-300">
                    Your booking deposit secures your slot. If you cancel within 48 hours and we haven’t started design or development work, you’ll receive a full refund.
                  </p>
                </div>

                <div className="h-px bg-white/10" />

                <div>
                  <h4 className="font-medium mb-2 text-white">Once Work Has Started</h4>
                  <p className="text-gray-300">
                    Payments tied to completed milestones are non-refundable. We only charge for work that has been delivered and approved.
                  </p>
                </div>
              </div>
            </div>

            {/* DIGITAL PRODUCTS */}
            <div className="border border-white/10 bg-white/[0.03] rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                  <Shield size={24} className="text-amber-400" />
                </div>
                <h3 className="font-semibold text-lg">Digital Products & Templates</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Due to the instant access nature of digital downloads and templates, all sales are final and non-refundable. We encourage you to review previews, demos, and descriptions carefully before purchasing.
              </p>
            </div>

            {/* CLIENT COMMITMENT */}
            <div className="border border-white/10 bg-white/[0.03] rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <Info size={24} className="text-blue-400" />
                <h3 className="font-semibold text-lg">Working Together</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Great projects happen through great communication. We ask that you provide timely feedback and materials so we can deliver the best possible results. Projects inactive for extended periods (30+ days) without communication may be paused.
              </p>
            </div>

            {/* FINAL ASSURANCE */}
            <div className="text-center bg-white/[0.02] border border-white/10 rounded-3xl py-12 px-8">
              <p className="text-lg text-gray-300 max-w-md mx-auto">
                Our goal is simple: deliver exceptional work and build long-term relationships. 
                We’re always happy to discuss any concerns you might have.
              </p>
              
              <div className="mt-8 inline-flex items-center gap-3 text-sm text-gray-400">
                Questions? Reach out anytime at{' '}
                <a href="mailto:hello@yourcompany.com" className="text-blue-400 hover:underline">
                  support@novaelitesystems.com
                </a>
              </div>
            </div>

          </div>

          {/* FOOTER NOTE */}
          <div className="mt-16 text-center">
            <p className="text-xs text-gray-500">
              Last updated: June 2026 • By working with us, you agree to this Refund Policy, our Terms of Service, and Privacy Policy.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}