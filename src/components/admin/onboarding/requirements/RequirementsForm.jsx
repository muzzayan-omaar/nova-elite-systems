export default function RequirementsForm({
  data,
  updateField,
  saveRequirement,
}) {
  return (
    <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03] space-y-6">

      <h2 className="text-lg font-semibold text-white">
        Requirement Form
      </h2>

      {/* CLIENT INFO */}
      <div className="grid md:grid-cols-2 gap-4">

        <input
          placeholder="Client Name"
          value={data.clientName}
          onChange={(e) => updateField("clientName", e.target.value)}
          className="input"
        />

        <input
          placeholder="Company / Organization"
          value={data.company}
          onChange={(e) => updateField("company", e.target.value)}
          className="input"
        />

        <input
          placeholder="Email"
          value={data.email}
          onChange={(e) => updateField("email", e.target.value)}
          className="input"
        />

        <input
          placeholder="Phone"
          value={data.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          className="input"
        />
      </div>

      {/* PROJECT INFO */}
      <div className="grid md:grid-cols-2 gap-4">

        <input
          placeholder="Project Title"
          value={data.projectTitle}
          onChange={(e) => updateField("projectTitle", e.target.value)}
          className="input"
        />

        <select
          value={data.projectType}
          onChange={(e) => updateField("projectType", e.target.value)}
          className="input"
        >
          <option>Website</option>
          <option>Web App</option>
          <option>Mobile App</option>
          <option>ERP System</option>
        </select>
      </div>

      {/* SCOPE */}
      <textarea
        placeholder="Pages Needed (Home, About, Contact...)"
        value={data.pages}
        onChange={(e) => updateField("pages", e.target.value)}
        className="input min-h-[90px]"
      />

      <textarea
        placeholder="Features (Admin panel, payments, CMS...)"
        value={data.features}
        onChange={(e) => updateField("features", e.target.value)}
        className="input min-h-[90px]"
      />

      <textarea
        placeholder="Reference Links (optional)"
        value={data.referenceLinks}
        onChange={(e) => updateField("referenceLinks", e.target.value)}
        className="input min-h-[70px]"
      />

      {/* COMMERCIAL */}
      <div className="grid md:grid-cols-2 gap-4">

        <input
          placeholder="Budget"
          value={data.budget}
          onChange={(e) => updateField("budget", e.target.value)}
          className="input"
        />

        <input
          type="date"
          value={data.deadline}
          onChange={(e) => updateField("deadline", e.target.value)}
          className="input"
        />
      </div>

      {/* NOTES */}
      <textarea
        placeholder="Additional Notes"
        value={data.notes}
        onChange={(e) => updateField("notes", e.target.value)}
        className="input min-h-[100px]"
      />

      {/* SAVE */}
      <button
        onClick={saveRequirement}
        className="w-full bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-2xl font-medium"
      >
        Save Requirement
      </button>
    </div>
  );
}