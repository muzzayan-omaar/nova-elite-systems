export default function RequirementsPreview({ data }) {
  return (
    <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.02] relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-blue-500/5 blur-3xl" />

      <div className="relative z-10">

        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-xl font-bold">
            NOVA ELITE SYSTEMS
          </h1>

          <p className="text-xs text-gray-400">
            Client Requirement Document
          </p>
        </div>

        {/* CLIENT */}
        <div className="space-y-1 text-sm text-gray-300">
          <p><span className="text-white">Client:</span> {data.clientName || "-"}</p>
          <p><span className="text-white">Company:</span> {data.company || "-"}</p>
          <p><span className="text-white">Email:</span> {data.email || "-"}</p>
          <p><span className="text-white">Phone:</span> {data.phone || "-"}</p>
        </div>

        <hr className="my-4 border-white/10" />

        {/* PROJECT */}
        <div className="space-y-1 text-sm text-gray-300">
          <p><span className="text-white">Project:</span> {data.projectTitle || "-"}</p>
          <p><span className="text-white">Type:</span> {data.projectType || "-"}</p>
        </div>

        <hr className="my-4 border-white/10" />

        {/* SCOPE */}
        <div className="text-sm text-gray-300 space-y-2">
          <p><span className="text-white">Pages:</span></p>
          <p>{data.pages || "-"}</p>

          <p className="mt-3"><span className="text-white">Features:</span></p>
          <p>{data.features || "-"}</p>

          <p className="mt-3"><span className="text-white">References:</span></p>
          <p>{data.referenceLinks || "-"}</p>
        </div>

        <hr className="my-4 border-white/10" />

        {/* COMMERCIAL */}
        <div className="text-sm text-gray-300 space-y-1">
          <p><span className="text-white">Budget:</span> {data.budget || "-"}</p>
          <p><span className="text-white">Deadline:</span> {data.deadline || "-"}</p>
        </div>

        <hr className="my-4 border-white/10" />

        {/* NOTES */}
        <div className="text-sm text-gray-300">
          <p className="text-white mb-1">Notes:</p>
          <p>{data.notes || "-"}</p>
        </div>

      </div>
    </div>
  );
}