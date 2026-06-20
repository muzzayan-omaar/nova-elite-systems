export default function HandoverPreview({
  data,
  saveHandover,
}) {
  return (
    <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.02]">

      <h1 className="text-xl font-bold">
        NOVA ELITE SYSTEMS
      </h1>

      <p className="text-xs text-gray-400 mb-6">
        Project Handover Document
      </p>

      <div className="space-y-4 text-sm">

        <p>
          <strong>Handover No:</strong>{" "}
          {data.handoverNumber}
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

        <p>
          <strong>Website:</strong>{" "}
          {data.websiteUrl}
        </p>

        <p>
          <strong>Admin Panel:</strong>{" "}
          {data.adminUrl}
        </p>

        <p>
          <strong>Admin Email:</strong>{" "}
          {data.adminEmail}
        </p>

        <p>
          <strong>Admin Password:</strong>{" "}
          {data.adminPassword}
        </p>

        <hr className="border-white/10" />

        <p>
          <strong>Hosting:</strong>{" "}
          {data.hostingProvider}
        </p>

        <p>
          <strong>Domain:</strong>{" "}
          {data.domainRegistrar}
        </p>

        <p>
          <strong>Source Code:</strong>{" "}
          Delivered
        </p>

        <p>
          <strong>Assets:</strong>{" "}
          Delivered
        </p>

        <p>
          <strong>Training:</strong>{" "}
          {data.trainingCompleted
            ? "Completed"
            : "Pending"}
        </p>

      </div>

      <div className="mt-10 border-t border-white/10 pt-6">

        <div className="grid grid-cols-2 gap-8">

          <div>
            <div className="h-14" />

            <div className="border-t border-white/20 pt-2 text-sm">
              NOVA ELITE SYSTEMS
            </div>
          </div>

          <div>
            <div className="h-14" />

            <div className="border-t border-white/20 pt-2 text-sm">
              Client Acceptance
            </div>
          </div>

        </div>

      </div>

      <button
        onClick={saveHandover}
        className="mt-8 w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-2xl"
      >
        Save Handover
      </button>

    </div>
  );
}