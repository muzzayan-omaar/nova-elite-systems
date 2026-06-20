export default function HandoverForm({
  data,
  updateField,
}) {
  return (
    <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03] space-y-5">

      <h2 className="text-lg font-semibold">
        Handover Builder
      </h2>

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
        placeholder="Project Title"
        value={data.projectTitle}
        onChange={(e) =>
          updateField(
            "projectTitle",
            e.target.value
          )
        }
      />

      <input
        className="input"
        placeholder="Website URL"
        value={data.websiteUrl}
        onChange={(e) =>
          updateField(
            "websiteUrl",
            e.target.value
          )
        }
      />

      <input
        className="input"
        placeholder="Admin URL"
        value={data.adminUrl}
        onChange={(e) =>
          updateField(
            "adminUrl",
            e.target.value
          )
        }
      />

      <input
        className="input"
        placeholder="Admin Email"
        value={data.adminEmail}
        onChange={(e) =>
          updateField(
            "adminEmail",
            e.target.value
          )
        }
      />

      <input
        className="input"
        placeholder="Admin Password"
        value={data.adminPassword}
        onChange={(e) =>
          updateField(
            "adminPassword",
            e.target.value
          )
        }
      />

      <input
        className="input"
        placeholder="Hosting Provider"
        value={data.hostingProvider}
        onChange={(e) =>
          updateField(
            "hostingProvider",
            e.target.value
          )
        }
      />

      <input
        className="input"
        placeholder="Domain Registrar"
        value={data.domainRegistrar}
        onChange={(e) =>
          updateField(
            "domainRegistrar",
            e.target.value
          )
        }
      />

      <input
        type="date"
        className="input"
        value={data.handoverDate}
        onChange={(e) =>
          updateField(
            "handoverDate",
            e.target.value
          )
        }
      />

      <textarea
        className="input min-h-[120px]"
        placeholder="Notes"
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