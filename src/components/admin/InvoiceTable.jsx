export default function InvoiceTable() {
  return (
    <div
      className="
        rounded-[30px]
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        overflow-hidden
      "
    >

      <div
        className="
          px-7 py-6
          border-b border-white/10
          flex
          items-center
          justify-between
        "
      >

        <div>

          <p
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-blue-400
              font-semibold
              mb-3
            "
          >
            Invoice Records
          </p>

          <h2
            className="
              text-2xl
              font-semibold
            "
          >
            Saved Invoices
          </h2>

        </div>

      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr
              className="
                border-b border-white/10
                text-left
              "
            >

              {[
                "Invoice",
                "Client",
                "Amount",
                "Status",
                "Date",
              ].map((item, index) => (
                <th
                  key={index}
                  className="
                    px-7 py-5
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-gray-500
                    font-medium
                  "
                >
                  {item}
                </th>
              ))}

            </tr>

          </thead>

          <tbody>

            {[1, 2, 3].map((_, index) => (
              <tr
                key={index}
                className="
                  border-b border-white/5
                  hover:bg-white/[0.02]
                  transition
                "
              >

                <td className="px-7 py-5">
                  INV-2043
                </td>

                <td className="px-7 py-5 text-gray-300">
                  Khalid Holdings
                </td>

                <td className="px-7 py-5">
                  $2,400
                </td>

                <td className="px-7 py-5">

                  <span
                    className="
                      px-3 py-1
                      rounded-full
                      bg-yellow-500/10
                      border border-yellow-500/20
                      text-yellow-400
                      text-xs
                    "
                  >
                    Pending
                  </span>

                </td>

                <td className="px-7 py-5 text-gray-500">
                  May 12, 2026
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}