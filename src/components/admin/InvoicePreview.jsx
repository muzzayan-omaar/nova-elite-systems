import {
  Download,
} from "lucide-react";

export default function InvoicePreview({
  invoiceData,
  subtotal,
  total,
}) {
  return (
    <div
      className="
        sticky
        top-6
      "
    >

      <div
        className="
          rounded-[34px]
          overflow-hidden
          border border-white/10
          bg-white
          text-black
          shadow-2xl
        "
      >

        {/* TOP BAR */}
        <div
          className="
            h-2
            bg-gradient-to-r
            from-blue-700
            via-blue-500
            to-cyan-400
          "
        />

        <div className="p-10">

          {/* HEADER */}
          <div
            className="
              flex
              items-start
              justify-between
              gap-8
              pb-10
              border-b border-black/10
            "
          >

            {/* LEFT */}
            <div>

              <img
                src="https://res.cloudinary.com/diszilwhc/image/upload/v1777939226/IMG_20260422_200643_073_fdpjkb.webp"
                alt="NOVA"
                className="
                  h-16
                  object-contain
                  mb-6
                "
              />

              <div className="space-y-1 text-[13px] text-black/70">

                <p>NOVA Elite Systems</p>
                <p>Abu Dhabi, UAE</p>
                <p>support@novaelite.systems</p>
                <p>+971 XX XXX XXXX</p>

              </div>

            </div>

            {/* RIGHT */}
            <div className="text-right">

              <h1
                className="
                  text-5xl
                  tracking-[0.25em]
                  font-light
                  mb-8
                "
              >
                INVOICE
              </h1>

              <div
                className="
                  space-y-2
                  text-sm
                "
              >

                <div className="flex gap-5 justify-end">
                  <span className="font-semibold">
                    Invoice No:
                  </span>

                  <span>
                    {invoiceData.invoiceNumber}
                  </span>
                </div>

                <div className="flex gap-5 justify-end">
                  <span className="font-semibold">
                    Date:
                  </span>

                  <span>
                    {invoiceData.issueDate || "--"}
                  </span>
                </div>

                <div className="flex gap-5 justify-end">
                  <span className="font-semibold">
                    Due Date:
                  </span>

                  <span>
                    {invoiceData.dueDate || "--"}
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* CLIENT + PAYMENT */}
          <div
            className="
              grid
              grid-cols-2
              gap-10
              py-10
            "
          >

            {/* ISSUED TO */}
            <div>

              <p
                className="
                  text-xs
                  font-bold
                  tracking-[0.2em]
                  mb-4
                "
              >
                ISSUED TO
              </p>

              <div className="space-y-1 text-[15px] text-black/80">

                <p className="font-medium text-black">
                  {invoiceData.clientName || "Client Name"}
                </p>

                <p>
                  {invoiceData.company || "Company"}
                </p>

                <p>
                  {invoiceData.email || "email@example.com"}
                </p>

                <p>
                  {invoiceData.phone || "+971 XX XXX XXXX"}
                </p>

              </div>

            </div>

            {/* PAYMENT INFO */}
            <div>

              <p
                className="
                  text-xs
                  font-bold
                  tracking-[0.2em]
                  mb-4
                "
              >
                PAYMENT DETAILS
              </p>

              <div className="space-y-1 text-[15px] text-black/80">

                <p className="font-medium text-black">
                  Bank Transfer
                </p>

                <p>NOVA Elite Systems</p>

                <p>Account Name: NOVA Elite Systems</p>

                <p>IBAN: XXXX XXXX XXXX</p>

              </div>

            </div>

          </div>

          {/* TABLE */}
          <div className="mt-4">

            {/* HEADER */}
            <div
              className="
                grid
                grid-cols-[1.5fr_120px_100px_120px]
                gap-4
                border-b border-black/20
                pb-4
                text-[13px]
                font-bold
                tracking-[0.15em]
              "
            >

              <p>DESCRIPTION</p>
              <p className="text-center">
                UNIT PRICE
              </p>
              <p className="text-center">
                QTY
              </p>
              <p className="text-right">
                TOTAL
              </p>

            </div>

            {/* ITEMS */}
            <div className="pt-3">

              {invoiceData.items.map(
                (item, index) => (
                  <div
                    key={index}
                    className="
                      grid
                      grid-cols-[1.5fr_120px_100px_120px]
                      gap-4
                      py-4
                      border-b border-black/5
                      text-[15px]
                    "
                  >

                    <p>
                      {item.service ||
                        "Service"}
                    </p>

                    <p className="text-center">
                      ${item.price}
                    </p>

                    <p className="text-center">
                      {item.qty}
                    </p>

                    <p className="text-right font-medium">
                      $
                      {item.qty *
                        item.price}
                    </p>

                  </div>
                )
              )}

            </div>

          </div>

          {/* TOTALS */}
          <div
            className="
              flex
              justify-end
              mt-10
            "
          >

            <div className="w-[320px]">

              <div
                className="
                  flex
                  items-center
                  justify-between
                  py-3
                  border-b border-black/10
                  text-[15px]
                "
              >

                <span className="text-black/70">
                  Subtotal
                </span>

                <span className="font-medium">
                  ${subtotal}
                </span>

              </div>

              <div
                className="
                  flex
                  items-center
                  justify-between
                  py-3
                  border-b border-black/10
                  text-[15px]
                "
              >

                <span className="text-black/70">
                  Tax / Additional
                </span>

                <span className="font-medium">
                  ${invoiceData.tax}
                </span>

              </div>

              <div
                className="
                  flex
                  items-center
                  justify-between
                  py-5
                  text-xl
                  font-bold
                "
              >

                <span>TOTAL</span>

                <span className="text-blue-700">
                  ${total}
                </span>

              </div>

            </div>

          </div>

          {/* NOTES */}
          {invoiceData.notes && (
            <div className="mt-8">

              <p
                className="
                  text-xs
                  font-bold
                  tracking-[0.2em]
                  mb-3
                "
              >
                NOTES
              </p>

              <p
                className="
                  text-[14px]
                  text-black/70
                  leading-relaxed
                  max-w-2xl
                "
              >
                {invoiceData.notes}
              </p>

            </div>
          )}

          {/* SIGNATURE */}
          <div
            className="
              flex
              justify-end
              mt-16
            "
          >

            <div className="text-center">

              <h3
                className="
                  text-4xl
                  italic
                  font-light
                  mb-2
                "
                style={{
                  fontFamily: "cursive",
                }}
              >
                Mirembe Joan
              </h3>

              <div
                className="
                  w-[220px]
                  h-[1px]
                  bg-black/30
                  mb-2
                "
              />

              <p className="text-sm text-black/60">
                Sales Manager
              </p>

            </div>

          </div>

          {/* DOWNLOAD */}
          <button
            className="
              mt-12
              w-full
              py-4
              rounded-2xl
              bg-[#050816]
              text-white
              flex
              items-center
              justify-center
              gap-3
              hover:bg-blue-700
              transition-all duration-300
            "
          >

            <Download size={18} />

            Download PDF

          </button>

        </div>

      </div>

    </div>
  );
}