import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get("/clients").then((res) => setClients(res.data));
  }, []);

  return (
    <section className="py-8 md:py-10 overflow-hidden">

      <div
        className="
          relative
          max-w-6xl mx-auto
          flex flex-wrap items-center justify-center
          gap-x-8 gap-y-6
          md:gap-12
          px-5 md:px-6
        "
      >

        {clients.map((client) => (
          <img
            key={client._id}
            src={client.logo}
            alt={client.name}
            className="
              h-5 sm:h-6 md:h-8
              max-w-[90px] sm:max-w-[110px] md:max-w-none
              object-contain
              opacity-60
              grayscale
              transition duration-300
              hover:grayscale-0 hover:opacity-100
            "
          />
        ))}

      </div>

    </section>
  );
}