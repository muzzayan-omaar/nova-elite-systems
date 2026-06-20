import { useState } from "react";
import { toast } from "sonner";
import axios from "../../../api/axios";

import AgreementForm from "../../../components/admin/onboarding/agreements/AgreementForm";
import AgreementPreview from "../../../components/admin/onboarding/agreements/AgreementPreview";
import AgreementTable from "../../../components/admin/onboarding/agreements/AgreementTable";

export default function Agreements() {
  const [refreshTable, setRefreshTable] = useState(false);

  const [data, setData] = useState({
    clientName: "",
    company: "",
    email: "",

    agreementNumber: `NES-AGR-${Date.now()
      .toString()
      .slice(-5)}`,

    projectTitle: "",
    projectType: "",

    scopeOfWork: "",

    paymentTerms:
      "50% deposit before commencement, 50% upon completion.",

    timeline: "",

    revisions: "3",

    ownershipClause:
      "Ownership transfers upon full payment.",

    notes: "",

    status: "Draft",
  });

  const updateField = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const saveAgreement = async () => {
    try {
      await axios.post("/agreements", data);

      toast.success("Agreement saved");

      setRefreshTable(!refreshTable);

      setData({
        clientName: "",
        company: "",
        email: "",

        agreementNumber: `NES-AGR-${Date.now()
          .toString()
          .slice(-5)}`,

        projectTitle: "",
        projectType: "",

        scopeOfWork: "",

        paymentTerms:
          "50% deposit before commencement, 50% upon completion.",

        timeline: "",

        revisions: "3",

        ownershipClause:
          "Ownership transfers upon full payment.",

        notes: "",

        status: "Draft",
      });

    } catch (err) {
      console.log(err);
      toast.error("Failed to save agreement");
    }
  };

  return (
    <section className="text-white w-full">

      <div className="mb-8">
        <p className="text-xs tracking-[0.3em] text-blue-400 uppercase">
          Onboarding System
        </p>

        <h1 className="text-3xl font-bold">
          Agreements
        </h1>
      </div>

      <div className="grid xl:grid-cols-[1fr_520px] gap-8">

        <AgreementForm
          data={data}
          updateField={updateField}
        />

        <AgreementPreview
          data={data}
          saveAgreement={saveAgreement}
        />

      </div>

      <div className="mt-12">
        <AgreementTable refresh={refreshTable} />
      </div>

    </section>
  );
}