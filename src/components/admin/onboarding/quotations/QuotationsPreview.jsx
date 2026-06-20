export default function QuotationPreview({
  data,
  subtotal,
  total,
  saveQuotation,
}) {
  return (
    <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.02] relative overflow-hidden">

      {/* GLOW */}
      <div className="absolute inset-0 bg-blue-500/5 blur-3xl" />

      <div className="relative z-10">

        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-xl font-bold">
            NOVA ELITE SYSTEMS
          </h1>

          <p className="text-xs text-gray-400">
            Official Quotation Document
          </p>
        </div>

        {/* QUOTATION NO */}
        <div className="text-sm text-gray-400 mb-4">
          <span className="text-white">Quotation:</span>{" "}
          {data.quotationNumber}
        </div>

        {/* CLIENT */}
        <div className="text-sm text-gray-300 space-y-1">
          <p><span className="text-white">Client:</span> {data.clientName || "-"}</p>
          <p><span className="text-white">Company:</span> {data.company || "-"}</p>
          <p><span className="text-white">Email:</span> {data.email || "-"}</p>
        </div>

        <hr className="my-4 border-white/10" />

        {/* PROJECT */}
        <div className="text-sm text-gray-300 space-y-1">
          <p><span className="text-white">Project:</span> {data.projectTitle || "-"}</p>
          <p><span className="text-white">Type:</span> {data.projectType || "-"}</p>
          <p><span className="text-white">Timeline:</span> {data.timeline || "-"}</p>
        </div>

        <hr className="my-4 border-white/10" />

        {/* ITEMS */}
        <div className="text-sm space-y-2">
          {data.items.map((item, i) => (
            <div key={i} className="flex justify-between text-gray-300">
              <span>{item.description || "-"}</span>
              <span>
                {item.qty} × {item.price}
              </span>
            </div>
          ))}
        </div>

        <hr className="my-4 border-white/10" />

        {/* TOTAL */}
        <div className="flex justify-between text-white font-bold">
          <span>Total</span>
          <span>{total}</span>
        </div>

        {/* PAYMENT TERMS */}
        <div className="mt-4 text-xs text-gray-400">
          {data.paymentTerms}
        </div>

        {/* SAVE BUTTON */}
        <button
          onClick={saveQuotation}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-2xl"
        >
          Save & Generate Quotation
        </button>

      </div>
    </div>
  );
}