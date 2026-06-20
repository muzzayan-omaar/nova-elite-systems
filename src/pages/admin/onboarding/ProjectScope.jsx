import { useState } from "react";
import { useEffect } from "react";
import { toast } from "sonner";
import axios from "../../../api/axios";

import ProjectScopeForm from "../../../components/admin/onboarding/projectScope/ProjectScopeForm";
import ProjectScopePreview from "../../../components/admin/onboarding/projectScope/ProjectScopePreview";
import ProjectScopeTable from "../../../components/admin/onboarding/projectScope/ProjectScopeTable";

export default function ProjectScope() {
  const [refreshTable, setRefreshTable] = useState(false);

  const [data, setData] = useState({
    clientName: "",
    company: "",
    email: "",

    scopeNumber: `NES-SCP-${Date.now()
      .toString()
      .slice(-5)}`,

    projectTitle: "",
    projectType: "",

    objectives: "",

    deliverables: [""],

    includedFeatures: [""],

    excludedFeatures: [""],

    timeline: "",

    assumptions: "",

    notes: "",

    status: "Draft",
  });

  useEffect(() => {

  const saved =
    localStorage.getItem(
      "draftScope"
    );

  if (!saved) return;

  const scope =
    JSON.parse(saved);

  setData(scope);

  }, []);

  const updateField = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateArrayField = (
    field,
    index,
    value
  ) => {
    const updated = [...data[field]];
    updated[index] = value;

    setData((prev) => ({
      ...prev,
      [field]: updated,
    }));
  };

  const addArrayItem = (field) => {
    setData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const removeArrayItem = (
    field,
    index
  ) => {
    setData((prev) => ({
      ...prev,
      [field]: prev[field].filter(
        (_, i) => i !== index
      ),
    }));
  };

  const saveScope = async () => {
    try {
      await axios.post(
        "/project-scopes",
        data
      );

      toast.success(
        "Project scope saved"
      );

      setRefreshTable(!refreshTable);

    } catch (err) {
      console.log(err);

      toast.error(
        "Failed to save scope"
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
          Project Scope
        </h1>

      </div>

      <div className="grid xl:grid-cols-[1fr_520px] gap-8">

        <ProjectScopeForm
          data={data}
          updateField={updateField}
          updateArrayField={
            updateArrayField
          }
          addArrayItem={addArrayItem}
          removeArrayItem={
            removeArrayItem
          }
        />

        <ProjectScopePreview
          data={data}
          saveScope={saveScope}
        />

      </div>

      <div className="mt-12">

        <ProjectScopeTable
          refresh={refreshTable}
        />

      </div>

    </section>
  );
}