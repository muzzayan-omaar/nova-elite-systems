import { useLocation, Link } from "react-router-dom";

import {
  Shield,
  Wallet,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Landmark,
  Smartphone,
} from "lucide-react";

import Navbar from "../components/Navbar";

export default function ProjectBooking() {
  const location = useLocation();

  const {
    service,
    packageData,
    formData,
  } = location.state || {};

  const depositAmount = (() => {
    if (!packageData?.price) return "Custom";

    const numeric = parseFloat(
      packageData.price
        .replace("$", "")
        .replace(",", "")
    );

    if (isNaN(numeric)) return "Custom";

    return `$${(numeric * 0.3).toFixed(2)}`;
  })();

  const paymentMethods = [
    {
      icon: Smartphone,
      title: "MTN MoMo",
    },

    {
      icon: Smartphone,
      title: "Airtel Money",
    },

    {
      icon: CreditCard,
      title: "Card / Stripe",
    },

    {
      icon: Landmark,
      title: "Bank Transfer",
    },
  ];

  const handleBooking = () => {
    alert(
      "Booking request submitted successfully."
    );
  };

  return (
    <>
      <Navbar />

      <section
        className="
          h-screen
          overflow-hidden
          bg-[#050816]
          text-white
          pt-24
          px-4
          relative
        "
      >

        {/* BACKGROUND */}
        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[700px]
            h-[700px]
            bg-blue-500/10
            blur-[140px]
            rounded-full
            pointer-events-none
          "
        />

        <div
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
            h-full
            flex
            items-center
          "
        >

          <div
            className="
              w-full
              grid
              lg:grid-cols-[300px_1fr]
              gap-4
              h-[calc(100vh-120px)]
            "
          >

            {/* LEFT PANEL */}
            <div
              className="
                rounded-[24px]
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-5
                flex
                flex-col
                justify-between
              "
            >

              <div>

                {/* TOP */}
                <div className="mb-6">

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-3 py-1
                      rounded-full
                      bg-blue-500/10
                      text-blue-400
                      text-[11px]
                      mb-4
                    "
                  >
                    <Shield size={12} />
                    Booking Summary
                  </div>

                  <h2 className="text-xl font-bold leading-tight">
                    {service}
                  </h2>

                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    {packageData?.subtitle}
                  </p>

                </div>

                {/* PACKAGE */}
                <div
                  className="
                    border border-white/6
                    rounded-2xl
                    p-4
                    mb-5
                    bg-white/[0.02]
                  "
                >

                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      text-gray-500
                      mb-2
                    "
                  >
                    Package
                  </p>

                  <div className="flex items-center justify-between">

                    <div>
                      <h3 className="text-lg font-semibold">
                        {packageData?.title}
                      </h3>

                      <p className="text-xs text-gray-500 mt-1">
                        Deposit Required
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-gray-500">
                        Deposit
                      </p>

                      <h4 className="text-blue-400 font-bold">
                        {depositAmount}
                      </h4>
                    </div>

                  </div>
                </div>

                {/* FEATURES */}
                <div className="space-y-2.5">

                  {packageData?.features
                    ?.slice(0, 4)
                    .map((feature, index) => (
                      <div
                        key={index}
                        className="
                          flex
                          items-center
                          gap-2.5
                        "
                      >

                        <CheckCircle2
                          size={14}
                          className="text-blue-400 shrink-0"
                        />

                        <span className="text-[13px] text-gray-300">
                          {feature}
                        </span>

                      </div>
                    ))}

                </div>
              </div>

              {/* NOTE */}
              <div
                className="
                  mt-5
                  text-[11px]
                  leading-relaxed
                  text-gray-500
                  border-t border-white/6
                  pt-4
                "
              >
                Deposits secure your project slot
                and begin onboarding, planning and
                system preparation.
              </div>

            </div>

            {/* RIGHT PANEL */}
            <div
              className="
                rounded-[24px]
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-6
                flex
                flex-col
              "
            >

              {/* HERO */}
              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-5
                  mb-6
                "
              >

                <div>

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-3 py-1
                      rounded-full
                      bg-blue-500/10
                      text-blue-400
                      text-[11px]
                      mb-3
                    "
                  >
                    <Wallet size={12} />
                    Secure Checkout
                  </div>

                  <h1
                    className="
                      text-3xl
                      font-bold
                      leading-tight
                    "
                  >
                    Confirm Booking
                  </h1>

                  <p
                    className="
                      text-sm
                      text-gray-400
                      mt-2
                      max-w-xl
                    "
                  >
                    Select payment method and
                    submit your onboarding request.
                  </p>

                </div>

                <div
                  className="
                    hidden
                    md:flex
                    flex-col
                    items-end
                  "
                >

                  <p className="text-xs text-gray-500">
                    Booking Deposit
                  </p>

                  <h2
                    className="
                      text-2xl
                      font-bold
                      text-blue-400
                    "
                  >
                    {depositAmount}
                  </h2>

                </div>

              </div>

              {/* PAYMENT + CLIENT */}
              <div
                className="
                  grid
                  lg:grid-cols-[1.1fr_0.9fr]
                  gap-5
                  flex-1
                "
              >

                {/* PAYMENT */}
                <div
                  className="
                    border border-white/6
                    rounded-2xl
                    p-4
                    bg-white/[0.02]
                  "
                >

                  <h3 className="text-sm font-semibold mb-4">
                    Payment Method
                  </h3>

                  <div className="grid grid-cols-2 gap-3">

                    {paymentMethods.map(
                      (item, index) => (
                        <button
                          key={index}
                          className="
                            rounded-xl
                            border border-white/8
                            bg-[#0c1322]
                            hover:border-blue-500/30
                            transition-all
                            p-3
                            text-left
                          "
                        >

                          <item.icon
                            size={16}
                            className="text-blue-400 mb-3"
                          />

                          <h4 className="text-sm font-medium">
                            {item.title}
                          </h4>

                        </button>
                      )
                    )}

                  </div>

                </div>

                {/* CLIENT */}
                <div
                  className="
                    border border-white/6
                    rounded-2xl
                    p-4
                    bg-white/[0.02]
                  "
                >

                  <h3 className="text-sm font-semibold mb-4">
                    Client Info
                  </h3>

                  <div className="space-y-4">

                    {[
                      {
                        label: "Full Name",
                        value:
                          formData?.fullName,
                      },

                      {
                        label: "Email",
                        value: formData?.email,
                      },

                      {
                        label: "WhatsApp",
                        value:
                          formData?.whatsapp,
                      },

                      {
                        label: "Timeline",
                        value:
                          formData?.timeline,
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="
                          flex
                          justify-between
                          gap-4
                          border-b border-white/5
                          pb-3
                        "
                      >

                        <p className="text-xs text-gray-500">
                          {item.label}
                        </p>

                        <p
                          className="
                            text-sm
                            text-right
                            text-gray-200
                          "
                        >
                          {item.value || "-"}
                        </p>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

              {/* BOTTOM */}
              <div
                className="
                  mt-5
                  pt-5
                  border-t border-white/6
                  flex
                  flex-col
                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                  gap-5
                "
              >

                {/* AGREEMENT */}
                <div
                  className="
                    flex
                    items-start
                    gap-3
                    max-w-2xl
                  "
                >

                  <input
                    type="checkbox"
                    required
                    className="mt-1"
                  />

                  <p
                    className="
                      text-[11px]
                      text-gray-500
                      leading-relaxed
                    "
                  >
                    By continuing, you agree to
                    our{" "}

                    <Link
                      to="/terms"
                      className="text-blue-400"
                    >
                      Terms
                    </Link>

                    ,{" "}

                    <Link
                      to="/privacy-policy"
                      className="text-blue-400"
                    >
                      Privacy Policy
                    </Link>

                    {" "}and{" "}

                    <Link
                      to="/refund-policy"
                      className="text-blue-400"
                    >
                      Refund Policy
                    </Link>

                    .
                  </p>

                </div>

                {/* BUTTON */}
                <button
                  onClick={handleBooking}
                  className="
                    shrink-0
                    px-7
                    py-3.5
                    rounded-xl
                    bg-blue-600
                    hover:bg-blue-500
                    transition-all
                    text-sm
                    font-medium
                    flex
                    items-center
                    justify-center
                    gap-2
                    shadow-[0_0_30px_rgba(59,130,246,0.25)]
                  "
                >
                  Submit Booking

                  <ArrowRight size={15} />
                </button>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}