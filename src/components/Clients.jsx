import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get("/clients").then((res) => setClients(res.data));
  }, []);

  return (
    <section className="bg-[#0B0F1A] py-6">
      <p className="text-center text-gray-400 mb-4">
        Trusted by businesses across UAE
      </p>

      <div className="flex justify-center gap-8 flex-wrap">
        {clients.map((c) => (
          <img
            key={c._id}
            src={c.logo}
            className="h-10 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition"
          />
        ))}
      </div>
    </section>
  );
}