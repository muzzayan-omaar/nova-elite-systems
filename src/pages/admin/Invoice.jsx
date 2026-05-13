import { useMemo, useState } from "react";
import {
  Plus,
  Trash2,
  FileText,
  CalendarDays,
  CircleDollarSign,
} from "lucide-react";

import InvoiceForm from "../../components/admin/InvoiceForm";
import InvoicePreview from "../../components/admin/InvoicePreview";
import InvoiceTable from "../../components/admin/InvoiceTable";
import axios from "../../api/axios";

export default function Invoices() {
  const [invoiceData, setInvoiceData] = useState({
    clientName: "",
    company: "",
    email: "",
    phone: "",

    invoiceNumber: `INV-${Date.now()
      .toString()
      .slice(-5)}`,

    issueDate: "",
    dueDate: "",

    status: "Pending",

    notes: "",

    tax: 0,

    items: [
      {
        service: "",
        qty: 1,
        price: 0,
      },
    ],
  });

  /* ---------------- CALCULATIONS ---------------- */

  const subtotal = useMemo(() => {
    return invoiceData.items.reduce(
      (acc, item) =>
        acc + item.qty * item.price,
      0
    );
  }, [invoiceData.items]);

  const total = useMemo(() => {
    return (
      subtotal +
      Number(invoiceData.tax || 0)
    );
  }, [subtotal, invoiceData.tax]);

  /* ---------------- UPDATE INPUT ---------------- */

  const updateField = (field, value) => {
    setInvoiceData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /* ---------------- UPDATE ITEM ---------------- */

  const updateItem = (
    index,
    field,
    value
  ) => {
    const updatedItems = [
      ...invoiceData.items,
    ];

    updatedItems[index][field] =
      field === "service"
        ? value
        : Number(value);

    setInvoiceData((prev) => ({
      ...prev,
      items: updatedItems,
    }));
  };

  /* ---------------- ADD ITEM ---------------- */

  const addItem = () => {
    setInvoiceData((prev) => ({
      ...prev,

      items: [
        ...prev.items,
        {
          service: "",
          qty: 1,
          price: 0,
        },
      ],
    }));
  };

  /* ---------------- REMOVE ITEM ---------------- */

  const removeItem = (index) => {
    const filtered =
      invoiceData.items.filter(
        (_, i) => i !== index
      );

    setInvoiceData((prev) => ({
      ...prev,
      items: filtered,
    }));
  };

  const saveInvoice = async () => {
  try {
    await axios.post(
      "/invoices",
      {
        ...invoiceData,
        subtotal,
        total,
      }
    );

    alert("Invoice saved successfully");
  } catch (err) {
    console.log(err);
  }
};
  return (
    <section
      className="
        min-h-screen
        bg-[#050816]
        text-white
        p-6
        overflow-hidden
      "
    >

      {/* BG GLOW */}
      <div
        className="
          fixed
          top-0
          left-1/2
          -translate-x-1/2
          w-[1000px]
          h-[1000px]
          rounded-full
          bg-blue-500/10
          blur-[180px]
          pointer-events-none
        "
      />

      <div
        className="
          relative
          z-10
        "
      >

        {/* TOP */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-6
            mb-10
          "
        >

          <div>

            <p
              className="
                uppercase
                tracking-[0.3em]
                text-xs
                text-blue-400
                font-semibold
                mb-4
              "
            >
              ADMIN BILLING
            </p>

            <h1
              className="
                text-4xl
                font-bold
                leading-none
              "
            >
              Invoice
              <span className="text-blue-500">
                {" "}Manager
              </span>
            </h1>

          </div>

          {/* STATS */}
          <div
            className="
              flex
              gap-4
              flex-wrap
            "
          >

            {[
              {
                icon: <FileText size={18} />,
                label: "Invoices",
                value: "24",
              },

              {
                icon: (
                  <CircleDollarSign
                    size={18}
                  />
                ),
                label: "Revenue",
                value: "$12.4K",
              },

              {
                icon: (
                  <CalendarDays
                    size={18}
                  />
                ),
                label: "Pending",
                value: "7",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  px-5 py-4
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  min-w-[150px]
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <div
                    className="
                      w-10 h-10
                      rounded-xl
                      bg-blue-500/10
                      flex items-center
                      justify-center
                      text-blue-400
                    "
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        text-gray-500
                      "
                    >
                      {item.label}
                    </p>

                    <h3
                      className="
                        text-lg
                        font-semibold
                        mt-1
                      "
                    >
                      {item.value}
                    </h3>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* MAIN GRID */}
        <div
          className="
            grid
            xl:grid-cols-[1fr_520px]
            gap-8
            items-start
          "
        >

          {/* LEFT */}
          <InvoiceForm
            invoiceData={invoiceData}
            updateField={updateField}
            updateItem={updateItem}
            addItem={addItem}
            removeItem={removeItem}
            subtotal={subtotal}
            total={total}
          />

          {/* RIGHT */}
          <InvoicePreview
            invoiceData={invoiceData}
            subtotal={subtotal}
            total={total}
          />

        </div>

        {/* TABLE */}
        <div className="mt-14">
          <InvoiceTable />
        </div>

      </div>

    </section>
  );
}