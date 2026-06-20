export default function ProjectScopeForm({
  data,
  updateField,
  updateArrayField,
  addArrayItem,
  removeArrayItem,
}) {
  const renderArrayField = (
    title,
    field
  ) => (
    <div className="space-y-3">

      <div className="flex justify-between items-center">

        <h3 className="font-medium">
          {title}
        </h3>

        <button
          type="button"
          onClick={() =>
            addArrayItem(field)
          }
          className="text-blue-400 text-sm"
        >
          + Add
        </button>

      </div>

      {data[field].map(
        (item, index) => (
          <div
            key={index}
            className="flex gap-2"
          >

            <input
              value={item}
              onChange={(e) =>
                updateArrayField(
                  field,
                  index,
                  e.target.value
                )
              }
              className="input flex-1"
            />

            <button
              type="button"
              onClick={() =>
                removeArrayItem(
                  field,
                  index
                )
              }
              className="text-red-400"
            >
              ✕
            </button>

          </div>
        )
      )}

    </div>
  );

  return (
    <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03] space-y-6">

      <h2 className="text-lg font-semibold">
        Scope Builder
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          placeholder="Client Name"
          value={data.clientName}
          onChange={(e) =>
            updateField(
              "clientName",
              e.target.value
            )
          }
          className="input"
        />

        <input
          placeholder="Company"
          value={data.company}
          onChange={(e) =>
            updateField(
              "company",
              e.target.value
            )
          }
          className="input"
        />

        <input
          placeholder="Email"
          value={data.email}
          onChange={(e) =>
            updateField(
              "email",
              e.target.value
            )
          }
          className="input"
        />

        <input
          placeholder="Project Title"
          value={data.projectTitle}
          onChange={(e) =>
            updateField(
              "projectTitle",
              e.target.value
            )
          }
          className="input"
        />

      </div>

      <input
        placeholder="Project Type"
        value={data.projectType}
        onChange={(e) =>
          updateField(
            "projectType",
            e.target.value
          )
        }
        className="input"
      />

      <textarea
        placeholder="Project Objectives"
        value={data.objectives}
        onChange={(e) =>
          updateField(
            "objectives",
            e.target.value
          )
        }
        className="input min-h-[120px]"
      />

      {renderArrayField(
        "Deliverables",
        "deliverables"
      )}

      {renderArrayField(
        "Included Features",
        "includedFeatures"
      )}

      {renderArrayField(
        "Excluded Features",
        "excludedFeatures"
      )}

      <input
        placeholder="Timeline"
        value={data.timeline}
        onChange={(e) =>
          updateField(
            "timeline",
            e.target.value
          )
        }
        className="input"
      />

      <textarea
        placeholder="Assumptions"
        value={data.assumptions}
        onChange={(e) =>
          updateField(
            "assumptions",
            e.target.value
          )
        }
        className="input min-h-[100px]"
      />

      <textarea
        placeholder="Additional Notes"
        value={data.notes}
        onChange={(e) =>
          updateField(
            "notes",
            e.target.value
          )
        }
        className="input min-h-[100px]"
      />

    </div>
  );
}