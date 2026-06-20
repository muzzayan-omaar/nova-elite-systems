export default function ProjectScopePreview({
  data,
  saveScope,
}) {
  return (
    <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.02]">

      <h1 className="text-xl font-bold">
        NOVA ELITE SYSTEMS
      </h1>

      <p className="text-xs text-gray-400 mb-6">
        Project Scope Document
      </p>

      <div className="space-y-4 text-sm">

        <p>
          <strong>Scope No:</strong>{" "}
          {data.scopeNumber}
        </p>

        <p>
          <strong>Client:</strong>{" "}
          {data.clientName}
        </p>

        <p>
          <strong>Project:</strong>{" "}
          {data.projectTitle}
        </p>

        <hr className="border-white/10" />

        <div>
          <h3 className="font-semibold mb-2">
            Objectives
          </h3>

          <p className="text-gray-300">
            {data.objectives}
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">
            Deliverables
          </h3>

          {data.deliverables.map(
            (item, i) => (
              <p key={i}>
                ✓ {item}
              </p>
            )
          )}
        </div>

        <div>
          <h3 className="font-semibold mb-2">
            Included Features
          </h3>

          {data.includedFeatures.map(
            (item, i) => (
              <p key={i}>
                ✓ {item}
              </p>
            )
          )}
        </div>

        <div>
          <h3 className="font-semibold mb-2">
            Excluded Features
          </h3>

          {data.excludedFeatures.map(
            (item, i) => (
              <p
                key={i}
                className="text-red-400"
              >
                ✕ {item}
              </p>
            )
          )}
        </div>

        <div>
          <strong>Timeline:</strong>{" "}
          {data.timeline}
        </div>

      </div>

      <button
        onClick={saveScope}
        className="mt-8 w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-2xl"
      >
        Save Scope Document
      </button>

    </div>
  );
}