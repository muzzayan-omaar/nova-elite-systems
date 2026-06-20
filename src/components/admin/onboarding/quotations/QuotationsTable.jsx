import { useEffect, useState } from "react";
import axios from "../../../../api/axios";

export default function QuotationTable({ refresh }) {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("/quotations");
      setItems(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

      <h2 className="text-lg font-semibold mb-4">
        Saved Quotations
      </h2>

      <div className="space-y-3">

        {items.map((q) => (
          <div
            key={q._id}
            className="p-4 rounded-2xl bg-[#0b1220] border border-white/5"
          >

            <p className="text-white font-medium">
              {q.clientName}
            </p>

            <p className="text-sm text-gray-400">
              {q.projectTitle}
            </p>

            <p className="text-xs text-gray-500 mt-1">
              {q.quotationNumber}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}