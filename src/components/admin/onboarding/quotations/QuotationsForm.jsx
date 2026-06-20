export default function QuotationForm({
  data,
  updateField,
  updateItem,
  addItem,
  removeItem,
  subtotal,
  total,
}) {
  return (
    <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03] space-y-6">

      <h2 className="text-lg font-semibold">
        Quotation Builder
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
          placeholder="Company"
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
          placeholder="Project Title"
          value={data.projectTitle}
          onChange={(e) => updateField("projectTitle", e.target.value)}
          className="input"
        />
      </div>

      {/* PROJECT DETAILS */}
      <div className="grid md:grid-cols-2 gap-4">

        <input
          placeholder="Project Type (Website, App...)"
          value={data.projectType}
          onChange={(e) => updateField("projectType", e.target.value)}
          className="input"
        />

        <input
          placeholder="Timeline (e.g. 30 Days)"
          value={data.timeline}
          onChange={(e) => updateField("timeline", e.target.value)}
          className="input"
        />
      </div>

      {/* PAYMENT TERMS */}
      <input
        placeholder="Payment Terms"
        value={data.paymentTerms}
        onChange={(e) => updateField("paymentTerms", e.target.value)}
        className="input"
      />

      {/* ITEMS */}
      <div className="space-y-4">

        <h3 className="text-sm text-gray-400">
          Pricing Breakdown
        </h3>

        {data.items.map((item, index) => (
          <div
            key={index}
            className="grid md:grid-cols-4 gap-3"
          >

            <input
              placeholder="Service Description"
              value={item.description}
              onChange={(e) =>
                updateItem(index, "description", e.target.value)
              }
              className="input md:col-span-2"
            />

            <input
              placeholder="Qty"
              type="number"
              value={item.qty}
              onChange={(e) =>
                updateItem(index, "qty", e.target.value)
              }
              className="input"
            />

            <input
              placeholder="Price"
              type="number"
              value={item.price}
              onChange={(e) =>
                updateItem(index, "price", e.target.value)
              }
              className="input"
            />

            <button
              onClick={() => removeItem(index)}
              className="text-red-400 text-xs mt-1"
            >
              Remove
            </button>

          </div>
        ))}

        <button
          onClick={addItem}
          className="text-blue-400 text-sm"
        >
          + Add Item
        </button>
      </div>

      {/* TOTAL */}
      <div className="flex justify-between text-sm text-gray-300 pt-4 border-t border-white/10">
        <span>Subtotal</span>
        <span>{subtotal}</span>
      </div>

      <div className="flex justify-between text-white font-semibold">
        <span>Total</span>
        <span>{total}</span>
      </div>

    </div>
  );
}