import { useEffect, useState } from "react";
import axios from "../../api/axios";

export default function InvoiceTable({
  refresh,
}) {
  const [invoices, setInvoices] =
    useState([]);

  const fetchInvoices = async () => {
    try {
      const res = await axios.get(
        "/invoices"
      );

      setInvoices(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, [refresh]);

  const deleteInvoice = async (id) => {
    try {
      await axios.delete(
        `/invoices/${id}`
      );

      fetchInvoices();

    } catch (err) {
      console.log(err);
    }
  };

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
        "
      >

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
                "Actions",
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

            {invoices.map((invoice) => (

              <tr
                key={invoice._id}
                className="
                  border-b border-white/5
                  hover:bg-white/[0.02]
                  transition
                "
              >

                <td className="px-7 py-5">
                  {invoice.invoiceNumber}
                </td>

                <td className="px-7 py-5 text-gray-300">
                  {invoice.clientName}
                </td>

                <td className="px-7 py-5">
                  ${invoice.total}
                </td>

                <td className="px-7 py-5">

                  <span
                    className="
                      px-3 py-1
                      rounded-full
                      bg-blue-500/10
                      border border-blue-500/20
                      text-blue-400
                      text-xs
                    "
                  >
                    {invoice.status}
                  </span>

                </td>

                <td className="px-7 py-5 text-gray-500">
                  {invoice.issueDate}
                </td>

                <td className="px-7 py-5">

                  <div className="flex gap-3">

                    <a
                      href={`http://localhost:5000/api/invoices/pdf/${invoice._id}`}
                      target="_blank"
                      className="
                        text-blue-400
                        text-sm
                      "
                    >
                      PDF
                    </a>

                    <button
                      onClick={() =>
                        deleteInvoice(
                          invoice._id
                        )
                      }
                      className="
                        text-red-400
                        text-sm
                      "
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}