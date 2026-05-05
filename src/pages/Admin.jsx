import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Admin() {

  // ===============================
  // CASE STUDIES STATE
  // ===============================
  const [caseStudies, setCaseStudies] = useState([]);
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    result: "",
    image: null,
  });

  // ===============================
  // CLIENT STATE
  // ===============================
  const [clients, setClients] = useState([]);
  const [clientForm, setClientForm] = useState({
    name: "",
    logo: null,
  });

  // ===============================
  // FETCH DATA
  // ===============================
  const fetchCaseStudies = async () => {
    const res = await axios.get("/case-studies");
    setCaseStudies(res.data);
  };

  const fetchClients = async () => {
    const res = await axios.get("/clients");
    setClients(res.data);
  };

  useEffect(() => {
    fetchCaseStudies();
    fetchClients();
  }, []);

  // ===============================
  // CASE STUDY HANDLERS
  // ===============================
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("category", form.category);
    formData.append("description", form.description);
    formData.append("result", form.result);
    formData.append("image", form.image);

    await axios.post("/case-studies", formData);

    setForm({
      title: "",
      category: "",
      description: "",
      result: "",
      image: null,
    });

    fetchCaseStudies();
  };

  const handleDelete = async (id) => {
    await axios.delete(`/case-studies/${id}`);
    fetchCaseStudies();
  };

  // ===============================
  // CLIENT HANDLERS
  // ===============================
  const handleClientChange = (e) => {
    setClientForm({
      ...clientForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleClientFile = (e) => {
    setClientForm({
      ...clientForm,
      logo: e.target.files[0],
    });
  };

  const handleClientSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", clientForm.name);
    formData.append("logo", clientForm.logo);

    await axios.post("/clients", formData);

    setClientForm({
      name: "",
      logo: null,
    });

    fetchClients();
  };

  const handleClientDelete = async (id) => {
    await axios.delete(`/clients/${id}`);
    fetchClients();
  };

    // ===============================
  // OFFER HANDLERS
  // ===============================
  const [offers, setOffers] = useState([]);
const [offerForm, setOfferForm] = useState({
  title: "",
  discount: "",
  expiresAt: "",
});

const fetchOffers = async () => {
  const res = await axios.get("/offers");
  setOffers(res.data);
};

const handleOfferChange = (e) => {
  setOfferForm({
    ...offerForm,
    [e.target.name]: e.target.value,
  });
};

const handleOfferSubmit = async (e) => {
  e.preventDefault();

  await axios.post("/offers", offerForm);

  setOfferForm({
    title: "",
    discount: "",
    expiresAt: "",
  });

  fetchOffers();
};

  // ===============================
  // UI
  // ===============================
  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl mb-6">Admin Dashboard</h1>

      {/* ================= CASE STUDY FORM ================= */}
      <form onSubmit={handleSubmit} className="space-y-2 mb-10">
        <h2 className="text-xl">Add Case Study</h2>

        <input name="title" placeholder="Title" onChange={handleChange} value={form.title} className="w-full p-2 bg-gray-800" />
        <input name="category" placeholder="Category" onChange={handleChange} value={form.category} className="w-full p-2 bg-gray-800" />
        <input name="description" placeholder="Description" onChange={handleChange} value={form.description} className="w-full p-2 bg-gray-800" />
        <input name="result" placeholder="Result" onChange={handleChange} value={form.result} className="w-full p-2 bg-gray-800" />
        
        <input type="file" onChange={handleImage} className="w-full" />

        <button className="bg-blue-500 px-4 py-2">Add Case Study</button>
      </form>

      {/* ================= CLIENT FORM ================= */}
      <form onSubmit={handleClientSubmit} className="space-y-2 mb-10">
        <h2 className="text-xl">Add Client</h2>

        <input
          name="name"
          placeholder="Client Name"
          onChange={handleClientChange}
          value={clientForm.name}
          className="w-full p-2 bg-gray-800"
        />

        <input
          type="file"
          onChange={handleClientFile}
          className="w-full"
        />

        <button className="bg-green-500 px-4 py-2">Add Client</button>
      </form>

      {/* OFFERS FORM */}
      <form onSubmit={handleOfferSubmit} className="space-y-2 mb-10">
        <h2 className="text-xl">Add Offer</h2>

        <input
          name="title"
          placeholder="Offer Title"
          onChange={handleOfferChange}
          className="w-full p-2 bg-gray-800"
        />

        <input
          name="discount"
          type="number"
          placeholder="Discount %"
          onChange={handleOfferChange}
          className="w-full p-2 bg-gray-800"
        />

        <input
          name="expiresAt"
          type="date"
          onChange={handleOfferChange}
          className="w-full p-2 bg-gray-800"
        />

        <button className="bg-yellow-500 px-4 py-2">Add Offer</button>
      </form>

      {/* ================= CASE STUDIES LIST ================= */}
      <div className="mb-10">
        <h2 className="text-xl mb-4">Case Studies</h2>

        {caseStudies.map((item) => (
          <div key={item._id} className="bg-gray-900 p-4 mb-3">
            <img src={item.image} className="w-32 mb-2" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <button
              onClick={() => handleDelete(item._id)}
              className="bg-red-500 px-3 py-1 mt-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* ================= CLIENT LIST ================= */}
      <div>
        <h2 className="text-xl mb-4">Clients</h2>

        <div className="flex flex-wrap gap-4">
          {clients.map((client) => (
            <div key={client._id} className="bg-gray-900 p-3">
              <img src={client.logo} className="h-12 mb-2" />
              <p>{client.name}</p>

              <button
                onClick={() => handleClientDelete(client._id)}
                className="bg-red-500 px-2 py-1 mt-2"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}