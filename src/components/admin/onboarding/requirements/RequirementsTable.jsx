import { useEffect, useState } from "react";
import axios from "../../../../api/axios";

export default function RequirementsTable({ refresh, onGenerateQuotation }) {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("/requirements");
      setItems(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);
const generateQuotation = async (requirement) => {
  try {
    // OPTIONAL: send requirement to backend if you want persistence
    // await axios.post("/quotations/from-requirement", requirement);

    // NAVIGATE OR SEND DATA
    localStorage.setItem(
      "draftQuotation",
      JSON.stringify(requirement)
    );

    window.location.href = "/admin"; 
    // or better: switch tab to onboarding/quotations

  } catch (err) {
    console.log(err);
  }
};

  return (
  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

    <h2 className="text-lg font-semibold mb-4">
      Saved Requirements
    </h2>

    <div className="space-y-3">

      {items.map((item) => (

        <div
          key={item._id}
          className="p-4 rounded-2xl bg-[#0b1220] border border-white/5 flex justify-between items-center"
        >

          <div>
            <p className="text-white font-medium">
              {item.clientName}
            </p>

            <p className="text-sm text-gray-400">
              {item.projectTitle}
            </p>

            <p className="text-xs text-gray-500 mt-1">
              {item.projectType}
            </p>
          </div>

          <button
            onClick={() =>
              onGenerateQuotation?.(item)
            }
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl text-sm"
          >
            Generate Quotation
          </button>

        </div>

      ))}

    </div>

  </div>
);
}