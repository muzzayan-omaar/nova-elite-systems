export default function InvoicePreview({
  invoiceData,
  subtotal,
  total,
}) {
  return (
    <div
      className="
        sticky top-6
        rounded-[32px]
        border border-white/10
        bg-[#0B1220]
        p-8
        overflow-hidden
      "
    >

      {/* BG GLOW */}
      <div
        className="
          absolute
          top-[-120px]
          right-[-120px]
          w-[260px]
          h-[260px]
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-[-120px]
          left-[-120px]
          w-[240px]
          h-[240px]
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      {/* TOP */}
      <div
        className="
          relative z-10
          flex
          items-start
          justify-between
          mb-10
        "
      >

        {/* LEFT */}
        <div>

          <img
            src="https://res.cloudinary.com/diszilwhc/image/upload/v1777939226/IMG_20260422_200643_073_fdpjkb.webp"
            alt="NOVA"
            className="h-10 object-contain"
          />

          <p
            className="
              text-gray-400
              text-sm
              mt-4
              max-w-[220px]
              leading-relaxed
            "
          >
            Premium digital &
            infrastructure solutions.
          </p>

        </div>

        {/* RIGHT */}
        <div className="text-right">

          <p
            className="
              text-xs
              text-gray-500
              uppercase
              tracking-[0.2em]
              mb-2
            "
          >
            Invoice
          </p>

          <h2
            className="
              text-2xl
              font-bold
            "
          >
            {invoiceData.invoiceNumber}
          </h2>

          <div className="mt-5 space-y-2">

            <div className="text-sm">
              <span className="text-gray-500">
                Issued:
              </span>

              <span className="ml-2 text-gray-300">
                {invoiceData.issueDate ||
                  "--"}
              </span>
            </div>

            <div className="text-sm">
              <span className="text-gray-500">
                Due:
              </span>

              <span className="ml-2 text-gray-300">
                {invoiceData.dueDate ||
                  "--"}
              </span>
            </div>

            <div className="text-sm">
              <span className="text-gray-500">
                Status:
              </span>

              <span className="ml-2 text-blue-400">
                {invoiceData.status}
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* CLIENT + PAYMENT */}
      <div
        className="
          relative z-10
          grid md:grid-cols-2
          gap-6
          mb-10
        "
      >

        {/* CLIENT */}
        <div>

          <p
            className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-blue-400
              mb-4
            "
          >
            Client
          </p>

          <h3
            className="
              text-xl
              font-semibold
            "
          >
            {invoiceData.clientName ||
              "Client Name"}
          </h3>

          <p className="text-gray-400 text-sm mt-2">
            {invoiceData.company}
          </p>

          <p className="text-gray-500 text-sm mt-1">
            {invoiceData.email}
          </p>

          <p className="text-gray-500 text-sm mt-1">
            {invoiceData.phone}
          </p>

        </div>

        {/* PAYMENT INFO */}
        <div>

          <p
            className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-blue-400
              mb-4
            "
          >
            Payment Info
          </p>

          <div className="space-y-2 text-sm">

            <div>
              <span className="text-gray-500">
                Method:
              </span>

              <span className="ml-2 text-gray-300">
                Bank Transfer
              </span>
            </div>

            <div>
              <span className="text-gray-500">
                Bank:
              </span>

              <span className="ml-2 text-gray-300">
                Emirates NBD
              </span>
            </div>

            <div>
              <span className="text-gray-500">
                Account:
              </span>

              <span className="ml-2 text-gray-300">
                NOVA Elite Systems
              </span>
            </div>

            <div>
              <span className="text-gray-500">
                Currency:
              </span>

              <span className="ml-2 text-gray-300">
                USD / AED
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* SERVICES */}
      <div
        className="
          relative z-10
          rounded-3xl
          border border-white/10
          overflow-hidden
          bg-white/[0.02]
        "
      >

        {/* HEADER */}
        <div
          className="
            grid
            grid-cols-[1.6fr_80px_120px]
            gap-4
            px-5 py-4
            border-b border-white/10
            text-[11px]
            uppercase
            tracking-[0.18em]
            text-gray-500
          "
        >

          <p>Service</p>

          <p className="text-center">
            Qty
          </p>

          <p className="text-right">
            Total
          </p>

        </div>

        {/* ITEMS */}
        {invoiceData.items.map(
          (item, index) => (
            <div
              key={index}
              className="
                grid
                grid-cols-[1.6fr_80px_120px]
                gap-4
                px-5 py-5
                border-b border-white/5
                items-center
              "
            >

              <div>

                <h4
                  className="
                    text-sm
                    font-medium
                  "
                >
                  {item.service ||
                    "Service"}
                </h4>

                <p
                  className="
                    text-xs
                    text-gray-500
                    mt-1
                  "
                >
                  Premium business solution
                </p>

              </div>

              <p
                className="
                  text-center
                  text-sm
                  text-gray-400
                "
              >
                {item.qty}
              </p>

              <span
                className="
                  text-sm
                  text-right
                  text-gray-300
                "
              >
                $
                {item.qty *
                  item.price}
              </span>

            </div>
          )
        )}

      </div>

      {/* NOTES */}
      <div
        className="
          relative z-10
          mt-8
        "
      >

        <p
          className="
            text-xs
            uppercase
            tracking-[0.2em]
            text-blue-400
            mb-4
          "
        >
          Notes
        </p>

        <p
          className="
            text-sm
            text-gray-400
            leading-relaxed
          "
        >
          {invoiceData.notes ||
            "Thank you for choosing NOVA Elite Systems. Payment is expected within the agreed timeline unless otherwise discussed."}
        </p>

      </div>

      {/* TOTALS */}
      <div
        className="
          relative z-10
          mt-10
          pt-8
          border-t border-white/10
        "
      >

        <div
          className="
            flex
            justify-between
            text-sm
            text-gray-400
            mb-3
          "
        >
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>

        <div
          className="
            flex
            justify-between
            text-sm
            text-gray-400
            mb-5
          "
        >
          <span>Tax</span>

          <span>
            ${invoiceData.tax}
          </span>
        </div>

        <div
          className="
            flex
            justify-between
            text-xl
            font-bold
          "
        >

          <span>Total</span>

          <span className="text-blue-400">
            ${total}
          </span>

        </div>

      </div>

      {/* SIGNATURE */}
      <div
        className="
          relative z-10
          mt-16
          flex
          justify-end
        "
      >

        <div className="text-center">

          <h2
            className="
              text-[34px]
              italic
              font-light
              leading-none
            "
            style={{
              fontFamily: "cursive",
            }}
          >
            Mirembe Joan
          </h2>

          <div
            className="
              w-[200px]
              h-[1px]
              bg-white/20
              mt-2
              mb-3
            "
          />

          <p className="text-sm text-gray-400">
            Sales Manager
          </p>

        </div>

      </div>

      <button
  onClick={saveInvoice}
  className="
    mt-5
    bg-blue-600
    hover:bg-blue-500
    transition
    px-6 py-3
    rounded-2xl
    text-sm
    font-medium
  "
>
  Save Invoice
</button>

    </div>
  );
}