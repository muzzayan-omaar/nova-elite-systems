import { useEffect, useState } from "react";
import axios from "../api/axios";

import {
  LayoutDashboard,
  Briefcase,
  Users,
  BadgePercent,
  Receipt,
  DollarSign,
  CreditCard,
  Headphones,
  User,
} from "lucide-react";

import Invoice from "./admin/Invoice";
import Revenue from "./admin/Revenue";
import Expenses from "./admin/Expenses";
import SupportTickets from "./admin/SupportTickets";
import Consultations from "./admin/Consultations";
import Leads from "./admin/Leads";
import Templates from "./admin/Templates";

import {
  LogOut,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

export default function Admin() {

  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate = useNavigate();

  const logout =
  () => {

    localStorage.removeItem(
      "adminToken"
    );

    localStorage.removeItem(
      "adminData"
    );

    navigate(
      "/admin-login"
    );
  };

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
  // OFFERS STATE
  // ===============================
  const [offers, setOffers] = useState([]);

  const [offerForm, setOfferForm] = useState({
    title: "",
    discount: "",
    expiresAt: "",
  });

  // ===============================
  // FETCH DATA
  // ===============================
  const fetchCaseStudies = async () => {
    try {
      const res = await axios.get("/case-studies");
      setCaseStudies(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchClients = async () => {
    try {
      const res = await axios.get("/clients");
      setClients(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchOffers = async () => {
    try {
      const res = await axios.get("/offers");
      setOffers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCaseStudies();
    fetchClients();
    fetchOffers();
  }, []);

  // ===============================
  // CASE STUDY HANDLERS
  // ===============================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    setForm({
      ...form,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
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

    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/case-studies/${id}`);
      fetchCaseStudies();
    } catch (err) {
      console.log(err);
    }
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

    try {
      const formData = new FormData();

      formData.append("name", clientForm.name);
      formData.append("logo", clientForm.logo);

      await axios.post("/clients", formData);

      setClientForm({
        name: "",
        logo: null,
      });

      fetchClients();

    } catch (err) {
      console.log(err);
    }
  };

  const handleClientDelete = async (id) => {
    try {
      await axios.delete(`/clients/${id}`);
      fetchClients();
    } catch (err) {
      console.log(err);
    }
  };

  // ===============================
  // OFFER HANDLERS
  // ===============================
  const handleOfferChange = (e) => {
    setOfferForm({
      ...offerForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleOfferSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/offers", offerForm);

      setOfferForm({
        title: "",
        discount: "",
        expiresAt: "",
      });

      fetchOffers();

    } catch (err) {
      console.log(err);
    }
  };

  // ===============================
  // UI
  // ===============================
  return (
    <section className="min-h-screen bg-[#050816] text-white">

      <div className="flex">

        {/* SIDEBAR */}
        <div
          className="
            hidden md:block
            w-[260px]
            min-h-screen
            border-r border-white/10
            bg-[#07111F]
            p-6
            sticky top-0
          "
        >

          {/* LOGO */}
          <div className="mb-10">

            <img
              src="https://res.cloudinary.com/diszilwhc/image/upload/v1777939226/IMG_20260422_200643_073_fdpjkb.webp"
              alt="NOVA"
              className="h-12 object-contain"
            />

          </div>

          {/* NAVIGATION */}
          <div className="space-y-2">

            {[
              {
                id: "dashboard",
                label: "Dashboard",
                icon: <LayoutDashboard size={18} />,
              },

              {
                id: "caseStudies",
                label: "Case Studies",
                icon: <Briefcase size={18} />,
              },

              {
                id: "clients",
                label: "Clients",
                icon: <Users size={18} />,
              },

              {
                id: "offers",
                label: "Offers",
                icon: <BadgePercent size={18} />,
              },
              {
                id: "revenue",
                label: "Revenue",
                icon: <DollarSign size={18} />,
              },
              {
                id: "invoices",
                label: "Invoices",
                icon: <Receipt size={18} />,
              },
              {
                id: "support",
                label: "Support",
                icon: <Headphones size={18} />,
              },
              {
                id: "expenses",
                label: "Expenses",
                icon: <CreditCard size={18} />,
              },
              {
                id: "consultations",
                label: "Consultations",
                icon: <Briefcase size={18} />,
              },
              {
                id: "leads",
                label: "Leads",
                icon: <User size={18} />,
              },
              {
                id: "templates",
                label: "Templates",
                icon: <LayoutTemplate size={18} />,
              },
              {
                id: "logout",
                label: "Logout",
                icon: <LogOut size={18} />,
              }

            ].map((item) => (

              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`
                  w-full
                  flex items-center gap-3
                  px-4 py-3
                  rounded-2xl
                  transition-all duration-300
                  text-sm

                  ${
                    activeTab === item.id
                      ? "bg-blue-600 text-white"
                      : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                  }
                `}
              >

                {item.icon}

                {item.label}

              </button>
            ))}

          </div>

        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 p-6 md:p-8 overflow-hidden">

          {/* DASHBOARD */}
          {activeTab === "dashboard" && (

            <div>

              <h1 className="text-4xl font-bold mb-3">
                Admin Dashboard
              </h1>

              <p className="text-gray-400 mb-10">
                Manage NOVA Elite Systems content,
                invoices, offers and case studies.
              </p>

              <div className="grid md:grid-cols-4 gap-5">

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-gray-400 text-sm">
                    Case Studies
                  </p>

                  <h2 className="text-4xl font-bold mt-3">
                    {caseStudies.length}
                  </h2>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-gray-400 text-sm">
                    Clients
                  </p>

                  <h2 className="text-4xl font-bold mt-3">
                    {clients.length}
                  </h2>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-gray-400 text-sm">
                    Offers
                  </p>

                  <h2 className="text-4xl font-bold mt-3">
                    {offers.length}
                  </h2>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-gray-400 text-sm">
                    System Status
                  </p>

                  <h2 className="text-2xl font-bold mt-3 text-green-400">
                    Online
                  </h2>
                </div>

              </div>

            </div>
          )}

          {/* CASE STUDIES */}
          {activeTab === "caseStudies" && (

            <div>

              <h1 className="text-3xl font-bold mb-8">
                Case Studies
              </h1>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.03]
                  p-6
                  mb-10
                  space-y-4
                "
              >

                <input
                  name="title"
                  placeholder="Title"
                  onChange={handleChange}
                  value={form.title}
                  className="
                    w-full
                    bg-[#0B1220]
                    border border-white/5
                    focus:border-blue-500/40
                    outline-none
                    p-4
                    rounded-2xl
                    text-sm
                  "
                />

                <input
                  name="category"
                  placeholder="Category"
                  onChange={handleChange}
                  value={form.category}
                  className="
                    w-full
                    bg-[#0B1220]
                    border border-white/5
                    focus:border-blue-500/40
                    outline-none
                    p-4
                    rounded-2xl
                    text-sm
                  "
                />

                <textarea
                  name="description"
                  placeholder="Description"
                  onChange={handleChange}
                  value={form.description}
                  className="
                    w-full
                    bg-[#0B1220]
                    border border-white/5
                    focus:border-blue-500/40
                    outline-none
                    p-4
                    rounded-2xl
                    text-sm
                  "
                />

                <input
                  name="result"
                  placeholder="Result"
                  onChange={handleChange}
                  value={form.result}
                  className="
                    w-full
                    bg-[#0B1220]
                    border border-white/5
                    focus:border-blue-500/40
                    outline-none
                    p-4
                    rounded-2xl
                    text-sm
                  "
                />

                <input
                  type="file"
                  onChange={handleImage}
                  className="w-full"
                />

                <button className="bg-blue-600 px-6 py-3 rounded-2xl">
                  Add Case Study
                </button>

              </form>

              {/* LIST */}
              <div className="grid md:grid-cols-2 gap-5">

                {caseStudies.map((item) => (

                  <div
                    key={item._id}
                    className="
                      rounded-3xl
                      overflow-hidden
                      border border-white/10
                      bg-white/[0.03]
                    "
                  >

                    <img
                      src={item.image}
                      alt=""
                      className="h-56 w-full object-cover"
                    />

                    <div className="p-5">

                      <p className="text-blue-400 text-xs uppercase mb-2">
                        {item.category}
                      </p>

                      <h2 className="text-xl font-semibold mb-3">
                        {item.title}
                      </h2>

                      <p className="text-gray-400 text-sm">
                        {item.description}
                      </p>

                      <button
                        onClick={() => handleDelete(item._id)}
                        className="
                          mt-5
                          bg-red-500
                          px-4 py-2
                          rounded-xl
                          text-sm
                        "
                      >
                        Delete
                      </button>

                    </div>

                  </div>
                ))}

              </div>

            </div>
          )}

          {/* CLIENTS */}
          {activeTab === "clients" && (

            <div>

              <h1 className="text-3xl font-bold mb-8">
                Clients
              </h1>

              <form
                onSubmit={handleClientSubmit}
                className="
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.03]
                  p-6
                  mb-10
                  space-y-4
                "
              >

                <input
                  name="name"
                  placeholder="Client Name"
                  onChange={handleClientChange}
                  value={clientForm.name}
                  className="
                    w-full
                    bg-[#0B1220]
                    border border-white/5
                    focus:border-blue-500/40
                    outline-none
                    p-4
                    rounded-2xl
                    text-sm
                  "
                />

                <input
                  type="file"
                  onChange={handleClientFile}
                  className="w-full"
                />

                <button className="bg-green-600 px-6 py-3 rounded-2xl">
                  Add Client
                </button>

              </form>

              <div className="grid md:grid-cols-4 gap-5">

                {clients.map((client) => (

                  <div
                    key={client._id}
                    className="
                      rounded-3xl
                      border border-white/10
                      bg-white/[0.03]
                      p-5
                    "
                  >

                    <img
                      src={client.logo}
                      className="h-12 object-contain mb-5"
                    />

                    <p>{client.name}</p>

                    <button
                      onClick={() =>
                        handleClientDelete(client._id)
                      }
                      className="
                        mt-4
                        bg-red-500
                        px-4 py-2
                        rounded-xl
                        text-sm
                      "
                    >
                      Delete
                    </button>

                  </div>
                ))}

              </div>

            </div>
          )}

          {/* OFFERS */}
          {activeTab === "offers" && (

            <div>

              <h1 className="text-3xl font-bold mb-8">
                Offers
              </h1>

              <form
                onSubmit={handleOfferSubmit}
                className="
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.03]
                  p-6
                  max-w-xl
                  space-y-4
                "
              >

                <input
                  name="title"
                  placeholder="Offer Title"
                  onChange={handleOfferChange}
                  className="
                    w-full
                    bg-[#0B1220]
                    border border-white/5
                    focus:border-blue-500/40
                    outline-none
                    p-4
                    rounded-2xl
                    text-sm
                  "
                />

                <input
                  name="discount"
                  type="number"
                  placeholder="Discount %"
                  onChange={handleOfferChange}
                  className="
                    w-full
                    bg-[#0B1220]
                    border border-white/5
                    focus:border-blue-500/40
                    outline-none
                    p-4
                    rounded-2xl
                    text-sm
                  "
                />

                <input
                  name="expiresAt"
                  type="date"
                  onChange={handleOfferChange}
                  className="
                    w-full
                    bg-[#0B1220]
                    border border-white/5
                    focus:border-blue-500/40
                    outline-none
                    p-4
                    rounded-2xl
                    text-sm
                  "
                />

                <button className="bg-yellow-500 px-6 py-3 rounded-2xl text-black">
                  Add Offer
                </button>

              </form>

            </div>
          )}

          {/* INVOICES */}
          {activeTab === "invoices" && (
            <Invoice />
          )}

          {/* REVENUE */}
          {activeTab === "revenue" && (
            <Revenue />
          )}

          {/* EXPENSES */}
          {activeTab === "expenses" && (
            <Expenses />
          )}

          {/* SUPPORT */}
          {activeTab === "support" && (
            <SupportTickets />
          )}

          {/* CONSULTATIONS */}
          {activeTab === "consultations" && (
            <Consultations />
          )}

          {/* LEADS */}
          {activeTab === "leads" && (
            <Leads />
          )}

          {activeTab === "templates" && (
            <Templates />
          )}

          {/* LOGOUT */}
          {activeTab === "logout" && (
            <button
              onClick={logout}
              className="bg-red-500 px-6 py-3 rounded-2xl text-white"
            >
              Logout
            </button>
          )}

        </div>

      </div>

    </section>
  );
}