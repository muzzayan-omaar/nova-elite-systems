import { useEffect, useMemo, useState } from "react";
import { FileText, DollarSign, Calendar } from "lucide-react";
import { toast } from "sonner";

import QuotationForm from "../../../components/admin/onboarding/quotations/QuotationsForm";
import QuotationPreview from "../../../components/admin/onboarding/quotations/QuotationsPreview";
import QuotationTable from "../../../components/admin/onboarding/quotations/QuotationsTable";

import axios from "../../../api/axios";

export default function Quotations({ draft }) {
  const [refreshTable, setRefreshTable] = useState(false);

  const [data, setData] = useState({
    clientName: "",
    company: "",
    email: "",

    quotationNumber: `QTN-${Date.now()
      .toString()
      .slice(-5)}`,

    projectTitle: "",
    projectType: "",

    scope: "",
    timeline: "",

    paymentTerms: "50% upfront, 50% on completion",

    notes: "",

    status: "Pending",

    items: [
      {
        description: "",
        qty: 1,
        price: 0,
      },
    ],
  });

  // ================================
  // AUTO FILL FROM REQUIREMENTS (SAFE)
  // ================================
  useEffect(() => {
    if (!draft) return;

    setData((prev) => ({
      ...prev,

      clientName: draft.clientName || "",
      company: draft.company || "",
      email: draft.email || "",

      projectTitle: draft.projectTitle || "",
      projectType: draft.projectType || "",

      scope: Array.isArray(draft.features)
        ? draft.features.join(", ")
        : draft.features || "",

      timeline: draft.deadline || "",

      items: [
        {
          description:
            (draft.projectType || "Service") + " Development",
          qty: 1,
          price: 0,
        },
      ],
    }));
  }, [draft]);

  // ================================
  // CALCULATIONS
  // ================================
  const subtotal = useMemo(() => {
    return data.items.reduce(
      (acc, item) => acc + item.qty * item.price,
      0
    );
  }, [data.items]);

  const total = useMemo(() => subtotal, [subtotal]);

  // ================================
  // UPDATE FIELD
  // ================================
  const updateField = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // ================================
  // UPDATE ITEM
  // ================================
  const updateItem = (index, field, value) => {
    const updated = [...data.items];

    updated[index][field] =
      field === "description" ? value : Number(value);

    setData((prev) => ({
      ...prev,
      items: updated,
    }));
  };

  // ================================
  // ADD ITEM
  // ================================
  const addItem = () => {
    setData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        { description: "", qty: 1, price: 0 },
      ],
    }));
  };

  // ================================
  // REMOVE ITEM
  // ================================
  const removeItem = (index) => {
    setData((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  // ================================
  // SAVE QUOTATION
  // ================================
  const saveQuotation = async () => {
    try {
      await axios.post("/quotations", {
        ...data,
        subtotal,
        total,
      });

      toast.success("Quotation saved");

      setRefreshTable((prev) => !prev);

      // reset form
      setData({
        clientName: "",
        company: "",
        email: "",
        quotationNumber: `QTN-${Date.now()
          .toString()
          .slice(-5)}`,
        projectTitle: "",
        projectType: "",
        scope: "",
        timeline: "",
        paymentTerms: "50% upfront, 50% on completion",
        notes: "",
        status: "Pending",
        items: [{ description: "", qty: 1, price: 0 }],
      });
    } catch (err) {
      console.log(err);
      toast.error("Failed to save quotation");
    }
  };

  // ================================
  // UI
  // ================================
  return (
    <section className="text-white w-full">

      {/* HEADER */}
      <div className="mb-8">
        <p className="text-xs tracking-[0.3em] text-blue-400 uppercase">
          Onboarding System
        </p>

        <h1 className="text-3xl font-bold">
          Quotations
        </h1>
      </div>

      {/* GRID */}
      <div className="grid xl:grid-cols-[1fr_520px] gap-8">

        <QuotationForm
          data={data}
          updateField={updateField}
          updateItem={updateItem}
          addItem={addItem}
          removeItem={removeItem}
          subtotal={subtotal}
          total={total}
        />

        <QuotationPreview
          data={data}
          subtotal={subtotal}
          total={total}
          saveQuotation={saveQuotation}
        />

      </div>

      {/* TABLE */}
      <div className="mt-12">
        <QuotationTable refresh={refreshTable} />
      </div>

    </section>
  );
}