import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function OfferBanner() {
  const [offer, setOffer] = useState(null);

  useEffect(() => {
    axios.get("/offers").then((res) => {
      if (res.data.length > 0) setOffer(res.data[0]);
    });
  }, []);

  if (!offer) return null;

  return (
    <div className="bg-blue-600 text-center py-3 text-white">
      {offer.title} — {offer.discount}% OFF
    </div>
  );
}