import { useMemo, useState } from "react";
import { ClipboardList, User, Building2 } from "lucide-react";
import { toast } from "sonner";

import RequirementsForm from "../../../components/admin/onboarding/requirements/RequirementsForm";
import RequirementsPreview from "../../../components/admin/onboarding/requirements/RequirementsPreview";
import RequirementsTable from "../../../components/admin/onboarding/requirements/RequirementsTable";

import axios from "../../../api/axios";

export default function Requirements() {
  const [refreshTable, setRefreshTable] = useState(false);
  const [draftQuotation, setDraftQuotation] = useState(null);

  const [data, setData] = useState({
    clientName: "",
    company: "",
    email: "",
    phone: "",

    projectTitle: "",
    projectType: "Website",

    pages: "",
    features: "",
    referenceLinks: "",

    budget: "",
    deadline: "",

    notes: "",

    status: "Draft",
  });

  // UPDATE FIELD
  const updateField = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // SAVE REQUIREMENT
  const saveRequirement = async () => {
    try {
      const res = await axios.post("/requirements", data);

      toast.success("Requirement saved successfully");

      setRefreshTable(!refreshTable);

      // reset
      setData({
        clientName: "",
        company: "",
        email: "",
        phone: "",
        projectTitle: "",
        projectType: "Website",
        pages: "",
        features: "",
        referenceLinks: "",
        budget: "",
        deadline: "",
        notes: "",
        status: "Draft",
      });

    } catch (err) {
      console.log(err);
      toast.error("Failed to save requirement");
    }
  };

  return (
    <section className="text-white w-full">

      {/* HEADER */}
      <div className="mb-8">
        <p className="text-xs tracking-[0.3em] text-blue-400 uppercase">
          Onboarding System
        </p>

        <h1 className="text-3xl font-bold">
          Client Requirements
        </h1>
      </div>

      {/* GRID */}
      <div className="grid xl:grid-cols-[1fr_520px] gap-8">

        <RequirementsForm
          data={data}
          updateField={updateField}
          saveRequirement={saveRequirement}
        />

        <RequirementsPreview
          data={data}
        />

      </div>

      {/* TABLE */}
      <div className="mt-12">
        <RequirementsTable
  refresh={refreshTable}
  onGenerateQuotation={setDraftQuotation}
/>
      </div>

    </section>
  );
}