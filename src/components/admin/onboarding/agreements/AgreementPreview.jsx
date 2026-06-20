export default function AgreementPreview({
  data,
  saveAgreement,
}) {
  return (
    <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.02]">

      <div className="mb-6">

        <h1 className="text-xl font-bold">
          NOVA ELITE SYSTEMS
        </h1>

        <p className="text-xs text-gray-400">
          Service Agreement
        </p>

      </div>

      <div className="space-y-4 text-sm text-gray-300">

        <p>
          <span className="text-white">
            Agreement No:
          </span>{" "}
          {data.agreementNumber}
        </p>

        <p>
          <span className="text-white">
            Client:
          </span>{" "}
          {data.clientName || "-"}
        </p>

        <p>
          <span className="text-white">
            Company:
          </span>{" "}
          {data.company || "-"}
        </p>

        <hr className="border-white/10" />

        <p>
          <span className="text-white">
            Project:
          </span>{" "}
          {data.projectTitle || "-"}
        </p>

        <p>
          <span className="text-white">
            Type:
          </span>{" "}
          {data.projectType || "-"}
        </p>

        <hr className="border-white/10" />

        <div>
          <p className="text-white mb-2">
            Scope of Work
          </p>

          <p>{data.scopeOfWork || "-"}</p>
        </div>

        <div>
          <p className="text-white mb-2">
            Payment Terms
          </p>

          <p>{data.paymentTerms}</p>
        </div>

        <div>
          <p className="text-white mb-2">
            Timeline
          </p>

          <p>{data.timeline || "-"}</p>
        </div>

        <div>
          <p className="text-white mb-2">
            Revisions
          </p>

          <p>
            {data.revisions} Revision Rounds
          </p>
        </div>

        <div>
          <p className="text-white mb-2">
            Ownership
          </p>

          <p>{data.ownershipClause}</p>
        </div>

      </div>

      <div className="mt-8 pt-6 border-t border-white/10">

        <div className="grid grid-cols-2 gap-8 text-sm">

          <div>
            <div className="h-12" />
            <div className="border-t border-white/20 pt-2">
              NOVA ELITE SYSTEMS
            </div>
          </div>

          <div>
            <div className="h-12" />
            <div className="border-t border-white/20 pt-2">
              Client Signature
            </div>
          </div>

        </div>

      </div>

      <button
        onClick={saveAgreement}
        className="
          mt-8
          w-full
          bg-blue-600
          hover:bg-blue-700
          transition
          px-6
          py-3
          rounded-2xl
        "
      >
        Save Agreement
      </button>

    </div>
  );
}