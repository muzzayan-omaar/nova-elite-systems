import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function CaseStudies() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/case-studies").then((res) => setData(res.data));
  }, []);

  return (
    <section className="bg-[#0B0F1A] text-white py-16 px-6">
      <h2 className="text-3xl text-center font-bold mb-10">
        Case Studies
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {data.slice(0, 2).map((item) => (
          <div key={item._id} className="bg-[#111827] rounded-xl overflow-hidden">
            <img src={item.image} className="w-full h-48 object-cover" />

            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>

              <p className="text-blue-500 mt-2">{item.result}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}