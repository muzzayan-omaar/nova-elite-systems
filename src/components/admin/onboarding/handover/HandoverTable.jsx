import { useEffect, useState } from "react";
import axios from "../../../../api/axios";

export default function HandoverTable({
  refresh,
}) {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const res =
        await axios.get(
          "/handovers"
        );

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
        Completed Handovers
      </h2>

      <div className="space-y-3">

        {items.map((item) => (
          <div
            key={item._id}
            className="p-4 rounded-2xl bg-[#0b1220] border border-white/5"
          >

            <p className="font-medium">
              {item.clientName}
            </p>

            <p className="text-sm text-gray-400">
              {item.projectTitle}
            </p>

            <p className="text-xs text-gray-500">
              {item.handoverNumber}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}