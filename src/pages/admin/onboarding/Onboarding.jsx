import { useState } from "react";

import Requirements from "./Requirements";
import ProjectScope from "./ProjectScope";
import Quotations from "./Quotations";
import Agreements from "./Agreements";
import Handover from "./Handover";
import Invoice from "../Invoice"

export default function Onboarding() {
  const [activeTab, setActiveTab] =
    useState("requirements");

  const [draftQuotation, setDraftQuotation] =
    useState(null);

  const tabs = [
    {
      id: "requirements",
      label: "Requirements",
    },
    {
      id: "scope",
      label: "Project Scope",
    },
    {
      id: "quotations",
      label: "Quotations",
    },
    {
      id: "agreements",
      label: "Agreements",
    },
    {
        id: "invoice",
        label: "Invoice"
    },
    {
      id: "handover",
      label: "Handover",
    },
  ];

  return (
    <div className="w-full">

      {/* HEADER */}

      <div className="mb-8">

        <p className="text-xs uppercase tracking-[0.25em] text-blue-400 mb-2">
          Client Pipeline
        </p>

        <h1 className="text-3xl font-bold">
          Onboarding Manager
        </h1>

      </div>

      {/* SUB NAV */}

      <div
        className="
          flex flex-wrap gap-2
          mb-8
          border border-white/10
          bg-white/[0.03]
          rounded-3xl
          p-3
        "
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() =>
              setActiveTab(tab.id)
            }
            className={`
              px-5 py-3
              rounded-2xl
              text-sm
              transition-all

              ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* CONTENT */}

      {activeTab === "requirements" && (
        <Requirements
          onGenerateQuotation={(data) => {
            setDraftQuotation(data);
            setActiveTab("quotations");
          }}
        />
      )}

      {activeTab === "scope" && (
        <ProjectScope />
      )}

      {activeTab === "quotations" && (
        <Quotations
          draft={draftQuotation}
        />
      )}

      {activeTab === "agreements" && (
        <Agreements />
      )}

      {activeTab === "invoice" && (
        <Invoice/>
      )}

      {activeTab === "handover" && (
        <Handover />
      )}

    </div>
  );
}