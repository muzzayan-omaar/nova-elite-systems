import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Home() {
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/case-studies");
      setCaseStudies(res.data);
    };

    fetchData();
  }, []);

  {/* Client logos */}
const [clients, setClients] = useState([]);

useEffect(() => {
  const fetchClients = async () => {
    const res = await axios.get("/clients");
    setClients(res.data);
  };

  fetchClients();
}, []);

  return (
    <div>
      <h1 className="text-white text-3xl">Homepage</h1>

      {/* Client Logos Section */}
<div className="flex gap-6 items-center justify-center mt-10 flex-wrap">
  {clients.map((client) => (
    <img
      key={client._id}
      src={client.logo}
      alt={client.name}
      className="h-12 opacity-70 hover:opacity-100 transition"
    />
  ))}
</div>

      {/* Case Studies Section */}
      <div className="grid grid-cols-3 gap-4 mt-10">
        {caseStudies.map((item) => (
          <div key={item._id} className="bg-gray-900 p-4">
            <img src={item.image} className="w-full h-40 object-cover" />
            <h2 className="text-white mt-2">{item.title}</h2>
            <p className="text-gray-400">{item.result}</p>
          </div>
        ))}
      </div>
    </div>
  );
}