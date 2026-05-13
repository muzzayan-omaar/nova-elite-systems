import {
  Plus,
  Trash2,
} from "lucide-react";

export default function InvoiceForm({
  invoiceData,
  updateField,
  updateItem,
  addItem,
  removeItem,
  subtotal,
  total,
}) {
  return (
    <div
      className="
        rounded-[32px]
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-2xl
        p-7
      "
    >

      {/* CLIENT DETAILS */}
      <div className="mb-10">

        <p
          className="
            text-xs
            tracking-[0.25em]
            text-blue-400
            uppercase
            font-semibold
            mb-6
          "
        >
          Client Details
        </p>

        <div className="grid md:grid-cols-2 gap-5">

          <Input
            placeholder="Client Name"
            value={invoiceData.clientName}
            onChange={(e) =>
              updateField(
                "clientName",
                e.target.value
              )
            }
          />

          <Input
            placeholder="Company Name"
            value={invoiceData.company}
            onChange={(e) =>
              updateField(
                "company",
                e.target.value
              )
            }
          />

          <Input
            placeholder="Email Address"
            value={invoiceData.email}
            onChange={(e) =>
              updateField(
                "email",
                e.target.value
              )
            }
          />

          <Input
            placeholder="Phone Number"
            value={invoiceData.phone}
            onChange={(e) =>
              updateField(
                "phone",
                e.target.value
              )
            }
          />

        </div>

      </div>

      {/* INVOICE DETAILS */}
      <div className="mb-10">

        <p
          className="
            text-xs
            tracking-[0.25em]
            text-blue-400
            uppercase
            font-semibold
            mb-6
          "
        >
          Invoice Details
        </p>

        <div className="grid md:grid-cols-2 gap-5">

          <Input
            placeholder="Invoice Number"
            value={invoiceData.invoiceNumber}
            onChange={(e) =>
              updateField(
                "invoiceNumber",
                e.target.value
              )
            }
          />

          <select
            value={invoiceData.status}
            onChange={(e) =>
              updateField(
                "status",
                e.target.value
              )
            }
            className="novaInput"
          >
            <option>Pending</option>
            <option>Paid</option>
            <option>Partial</option>
            <option>Overdue</option>
          </select>

          <Input
            type="date"
            value={invoiceData.issueDate}
            onChange={(e) =>
              updateField(
                "issueDate",
                e.target.value
              )
            }
          />

          <Input
            type="date"
            value={invoiceData.dueDate}
            onChange={(e) =>
              updateField(
                "dueDate",
                e.target.value
              )
            }
          />

        </div>

      </div>

      {/* PAYMENT DETAILS */}

<div className="mb-10">

  <p
    className="
      text-xs
      tracking-[0.25em]
      text-blue-400
      uppercase
      font-semibold
      mb-6
    "
  >
    Payment Details
  </p>

  <div className="grid md:grid-cols-2 gap-5">

    <Input
      placeholder="Payment Method"
      value={invoiceData.paymentMethod}
      onChange={(e) =>
        updateField(
          "paymentMethod",
          e.target.value
        )
      }
    />

    <Input
      placeholder="Bank Name"
      value={invoiceData.bankName}
      onChange={(e) =>
        updateField(
          "bankName",
          e.target.value
        )
      }
    />

    <Input
      placeholder="Account Name"
      value={invoiceData.accountName}
      onChange={(e) =>
        updateField(
          "accountName",
          e.target.value
        )
      }
    />

    <Input
      placeholder="Account Number"
      value={invoiceData.accountNumber}
      onChange={(e) =>
        updateField(
          "accountNumber",
          e.target.value
        )
      }
    />

  </div>

</div>

      {/* SERVICES */}
      <div>

        <div
          className="
            flex
            items-center
            justify-between
            mb-6
          "
        >

          <p
            className="
              text-xs
              tracking-[0.25em]
              text-blue-400
              uppercase
              font-semibold
            "
          >
            Services
          </p>

          <button
            onClick={addItem}
            className="
              flex
              items-center
              gap-2
              px-4 py-2
              rounded-xl
              bg-blue-600
              hover:bg-blue-500
              transition
              text-sm
            "
          >
            <Plus size={16} />
            Add Service
          </button>

        </div>

        <div className="space-y-5">

          {invoiceData.items.map(
            (item, index) => (
              <div
                key={index}
                className="
                  border border-white/10
                  rounded-2xl
                  p-5
                  bg-white/[0.02]
                "
              >

                <div className="grid md:grid-cols-12 gap-4">

                  <div className="md:col-span-5">
                    <Input
                      placeholder="Service Name"
                      value={item.service}
                      onChange={(e) =>
                        updateItem(
                          index,
                          "service",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Input
                      type="number"
                      placeholder="Qty"
                      value={item.qty}
                      onChange={(e) =>
                        updateItem(
                          index,
                          "qty",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="md:col-span-3">
                    <Input
                      type="number"
                      placeholder="Price"
                      value={item.price}
                      onChange={(e) =>
                        updateItem(
                          index,
                          "price",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div
                    className="
                      md:col-span-2
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <span
                      className="
                        text-sm
                        text-gray-300
                      "
                    >
                      $
                      {item.qty *
                        item.price}
                    </span>

                    <button
                      onClick={() =>
                        removeItem(index)
                      }
                      className="
                        text-red-400
                        hover:text-red-300
                        transition
                      "
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                </div>

              </div>
            )
          )}

        </div>

      </div>

      {/* TOTALS */}
      <div
        className="
          mt-10
          border-t border-white/10
          pt-8
        "
      >

        <div className="grid md:grid-cols-2 gap-5">

          <Input
            type="number"
            placeholder="Tax"
            value={invoiceData.tax}
            onChange={(e) =>
              updateField(
                "tax",
                e.target.value
              )
            }
          />

          <div
            className="
              rounded-2xl
              border border-blue-500/20
              bg-blue-500/10
              p-5
            "
          >

            <div
              className="
                flex
                items-center
                justify-between
                text-sm
                text-gray-300
                mb-3
              "
            >
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>

            <div
              className="
                flex
                items-center
                justify-between
                text-sm
                text-gray-300
                mb-4
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
                items-center
                justify-between
                text-lg
                font-semibold
              "
            >
              <span>Total</span>
              <span className="text-blue-400">
                ${total}
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className="
        w-full
        h-[54px]
        rounded-2xl
        border border-white/10
        bg-white/[0.03]
        px-5
        text-sm
        text-white
        placeholder:text-gray-500
        outline-none
        focus:border-blue-500/40
        transition-all
      "
    />
  );
}