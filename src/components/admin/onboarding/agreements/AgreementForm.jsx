export default function AgreementForm({
  data,
  updateField,
}) {
  return (
    <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03] space-y-6">

      <h2 className="text-lg font-semibold">
        Agreement Builder
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          className="input"
          placeholder="Client Name"
          value={data.clientName}
          onChange={(e) =>
            updateField(
              "clientName",
              e.target.value
            )
          }
        />

        <input
          className="input"
          placeholder="Company"
          value={data.company}
          onChange={(e) =>
            updateField(
              "company",
              e.target.value
            )
          }
        />

        <input
          className="input"
          placeholder="Email"
          value={data.email}
          onChange={(e) =>
            updateField(
              "email",
              e.target.value
            )
          }
        />

        <input
          className="input"
          placeholder="Project Title"
          value={data.projectTitle}
          onChange={(e) =>
            updateField(
              "projectTitle",
              e.target.value
            )
          }
        />

      </div>

      <input
        className="input"
        placeholder="Project Type"
        value={data.projectType}
        onChange={(e) =>
          updateField(
            "projectType",
            e.target.value
          )
        }
      />

      <textarea
        className="input min-h-[120px]"
        placeholder="Scope of Work"
        value={data.scopeOfWork}
        onChange={(e) =>
          updateField(
            "scopeOfWork",
            e.target.value
          )
        }
      />

      <textarea
        className="input min-h-[100px]"
        placeholder="Payment Terms"
        value={data.paymentTerms}
        onChange={(e) =>
          updateField(
            "paymentTerms",
            e.target.value
          )
        }
      />

      <input
        className="input"
        placeholder="Timeline"
        value={data.timeline}
        onChange={(e) =>
          updateField(
            "timeline",
            e.target.value
          )
        }
      />

      <input
        className="input"
        placeholder="Revision Rounds"
        value={data.revisions}
        onChange={(e) =>
          updateField(
            "revisions",
            e.target.value
          )
        }
      />

      <textarea
        className="input min-h-[100px]"
        placeholder="Ownership Clause"
        value={data.ownershipClause}
        onChange={(e) =>
          updateField(
            "ownershipClause",
            e.target.value
          )
        }
      />

      <textarea
        className="input min-h-[120px]"
        placeholder="Additional Notes"
        value={data.notes}
        onChange={(e) =>
          updateField(
            "notes",
            e.target.value
          )
        }
      />

    </div>
  );
}