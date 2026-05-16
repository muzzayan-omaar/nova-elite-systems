import { X } from "lucide-react";
import { useState } from "react";
import axios from "../../api/axios";
import { toast } from "sonner";

export default function InvoiceStatusModal({
  invoice,
  onClose,
  onUpdated,
}) {
  const [status, setStatus] =
    useState(invoice.status);

  const [loading, setLoading] =
    useState(false);

  const statuses = [
    "Pending",
    "Paid",
    "Overdue",
    "Cancelled",
  ];

  const updateStatus = async () => {
    try {
      setLoading(true);

      await axios.put(
        `/invoices/${invoice._id}/status`,
        {
          status,
        }
      );

      toast.success(
        "Invoice updated"
      );

      onUpdated();

      onClose();
    } catch (err) {
      console.log(err);

      toast.error(
        "Failed to update"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        fixed inset-0
        bg-black/70
        backdrop-blur-sm
        z-50
        flex
        items-center
        justify-center
        p-4
      "
    >
      <div
        className="
          w-full
          max-w-md
          rounded-3xl
          border border-white/10
          bg-[#0B1220]
          p-7
          relative
        "
      >
        <button
          onClick={onClose}
          className="
            absolute
            top-4
            right-4
            text-gray-400
          "
        >
          <X size={18} />
        </button>

        <p
          className="
            text-xs
            uppercase
            tracking-[0.25em]
            text-blue-400
            mb-3
          "
        >
          Update Status
        </p>

        <h2
          className="
            text-2xl
            font-bold
            mb-6
          "
        >
          {invoice.invoiceNumber}
        </h2>

        <div className="space-y-3">
          {statuses.map((item) => (
            <button
              key={item}
              onClick={() =>
                setStatus(item)
              }
              className={`
                w-full
                py-3
                rounded-2xl
                border
                transition
                text-sm
                ${
                  status === item
                    ? "bg-blue-600 border-blue-500"
                    : "bg-white/[0.03] border-white/10 hover:border-blue-500"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          onClick={updateStatus}
          disabled={loading}
          className="
            w-full
            mt-6
            bg-blue-600
            hover:bg-blue-500
            transition
            py-3
            rounded-2xl
            font-medium
          "
        >
          {loading
            ? "Updating..."
            : "Save Changes"}
        </button>
      </div>
    </div>
  );
}