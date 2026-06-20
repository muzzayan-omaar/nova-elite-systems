import { useState } from "react";
import {
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function RequirementsForm({
  data,
  updateField,
  saveRequirement,
}) {
  const [saving, setSaving] = useState(false);

  const pageOptions = [
    "Home",
    "About",
    "Services",
    "Projects",
    "Gallery",
    "Blog",
    "Events",
    "Contact",
    "Admin Panel",
  ];

  const featureOptions = [
    "Authentication",
    "Admin Panel",
    "CMS",
    "Payments",
    "Email Notifications",
    "SMS Notifications",
    "Analytics",
    "SEO Optimization",
    "Blog System",
    "File Uploads",
    "Live Chat",
    "Booking System",
    "Donation System",
  ];

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPhone = (phone) =>
    /^\+?[0-9]{9,15}$/.test(phone);

  const toggleArray = (field, value) => {
    const exists = data[field]?.includes(value);

    const updated = exists
      ? data[field].filter((v) => v !== value)
      : [...(data[field] || []), value];

    updateField(field, updated);
  };

  const handleSave = async () => {
    if (
      !data.clientName ||
      !data.email ||
      !data.phone ||
      !data.projectTitle ||
      !data.projectType
    ) {
      alert("Please fill all required fields");
      return;
    }

    setSaving(true);

    try {
      await saveRequirement();
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03] space-y-6">

      <h2 className="text-lg font-semibold text-white">
        Requirement Form
      </h2>

      {/* CLIENT INFO */}
      <div className="grid md:grid-cols-2 gap-4">

        {/* CLIENT NAME */}
        <input
          placeholder="Client Name"
          value={data.clientName}
          onChange={(e) =>
            updateField("clientName", e.target.value)
          }
          className="input"
        />

        {/* COMPANY */}
        <input
          placeholder="Company / Organization"
          value={data.company}
          onChange={(e) =>
            updateField("company", e.target.value)
          }
          className="input"
        />

        {/* EMAIL */}
        <div className="relative">
          <input
            placeholder="Email"
            value={data.email}
            onChange={(e) =>
              updateField("email", e.target.value)
            }
            className="input w-full pr-10"
          />

          {data.email &&
            (isValidEmail(data.email) ? (
              <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" />
            ) : (
              <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500" />
            ))}
        </div>

        {/* PHONE */}
        <div className="relative">
          <input
            placeholder="Phone (+256...)"
            value={data.phone}
            onChange={(e) =>
              updateField("phone", e.target.value)
            }
            className="input w-full pr-10"
          />

          {data.phone &&
            (isValidPhone(data.phone) ? (
              <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" />
            ) : (
              <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500" />
            ))}
        </div>
      </div>

      {/* PROJECT INFO */}
      <div className="grid md:grid-cols-2 gap-4">

        <input
          placeholder="Project Title"
          value={data.projectTitle}
          onChange={(e) =>
            updateField("projectTitle", e.target.value)
          }
          className="input"
        />

        <select
          value={data.projectType}
          onChange={(e) =>
            updateField("projectType", e.target.value)
          }
          className="input"
        >
          <option value="">Select Project Type</option>
          <option>Website</option>
          <option>Web App</option>
          <option>Mobile App</option>
          <option>ERP System</option>
          <option>E-commerce</option>
        </select>
      </div>

      {/* PAGES */}
      <div>
        <p className="text-sm text-gray-400 mb-2">
          Pages Needed
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {pageOptions.map((page) => (
            <button
              type="button"
              key={page}
              onClick={() =>
                toggleArray("pages", page)
              }
              className={`p-2 rounded-xl text-sm border transition ${
                data.pages?.includes(page)
                  ? "bg-blue-600 border-blue-500 text-white"
                  : "bg-[#0b1220] border-white/10 text-gray-300"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <div>
        <p className="text-sm text-gray-400 mb-2">
          Features Needed
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {featureOptions.map((feature) => (
            <button
              type="button"
              key={feature}
              onClick={() =>
                toggleArray("features", feature)
              }
              className={`p-2 rounded-xl text-sm border transition ${
                data.features?.includes(feature)
                  ? "bg-blue-600 border-blue-500 text-white"
                  : "bg-[#0b1220] border-white/10 text-gray-300"
              }`}
            >
              {feature}
            </button>
          ))}
        </div>
      </div>

      {/* BUDGET + DEADLINE */}
      <div className="grid md:grid-cols-2 gap-4">

        <select
          value={data.budget}
          onChange={(e) =>
            updateField("budget", e.target.value)
          }
          className="input"
        >
          <option value="">Select Budget</option>
          <option>Under $500</option>
          <option>$500 - $1,000</option>
          <option>$1,000 - $3,000</option>
          <option>$3,000 - $5,000</option>
          <option>$5,000+</option>
        </select>

        <input
          type="date"
          value={data.deadline}
          onChange={(e) =>
            updateField("deadline", e.target.value)
          }
          className="input"
        />
      </div>

      {/* NOTES */}
      <textarea
        placeholder="Additional Notes"
        value={data.notes}
        onChange={(e) =>
          updateField("notes", e.target.value)
        }
        className="input min-h-[100px]"
      />

      {/* SAVE */}
      <button
        onClick={handleSave}
        disabled={saving}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition px-6 py-3 rounded-2xl font-medium"
      >
        {saving
          ? "Saving Requirement..."
          : "Save Requirement"}
      </button>
    </div>
  );
}