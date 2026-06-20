import { useState } from "react";
import { toast } from "sonner";
import axios from "../../../api/axios";

import HandoverForm from "../../../components/admin/onboarding/handover/HandoverForm";
import HandoverPreview from "../../../components/admin/onboarding/handover/HandoverPreview";
import HandoverTable from "../../../components/admin/onboarding/handover/HandoverTable";

export default function Handover() {
  const [refreshTable, setRefreshTable] =
    useState(false);

  const [data, setData] = useState({
    clientName: "",
    company: "",

    handoverNumber: `NES-HDO-${Date.now()
      .toString()
      .slice(-5)}`,

    projectTitle: "",

    websiteUrl: "",
    adminUrl: "",

    adminEmail: "",
    adminPassword: "",

    hostingProvider: "",
    domainRegistrar: "",

    sourceCodeDelivered: true,
    assetsDelivered: true,
    trainingCompleted: false,

    handoverDate: "",

    notes: "",

    status: "Completed",
  });

  const updateField = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const saveHandover = async () => {
    try {
      await axios.post(
        "/handovers",
        data
      );

      toast.success(
        "Handover saved"
      );

      setRefreshTable(!refreshTable);

    } catch (err) {
      console.log(err);

      toast.error(
        "Failed to save handover"
      );
    }
  };

  return (
    <section className="text-white">

      <div className="mb-8">

        <p className="uppercase tracking-[0.3em] text-xs text-blue-400">
          Onboarding System
        </p>

        <h1 className="text-3xl font-bold">
          Project Handover
        </h1>

      </div>

      <div className="grid xl:grid-cols-[1fr_520px] gap-8">

        <HandoverForm
          data={data}
          updateField={updateField}
        />

        <HandoverPreview
          data={data}
          saveHandover={saveHandover}
        />

      </div>

      <div className="mt-12">

        <HandoverTable
          refresh={refreshTable}
        />

      </div>

    </section>
  );
}