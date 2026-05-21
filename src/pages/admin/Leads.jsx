import { useEffect, useState } from "react";
import axios from "../../api/axios";

import {
  Search,
  Mail,
  MessageCircle,
  CalendarDays,
  Briefcase,
  Globe,
  Wallet,
  Clock3,
  CheckCircle2,
} from "lucide-react";

export default function Leads() {

  const [leads, setLeads] =
    useState([]);

  const [selectedLead, setSelectedLead] =
    useState(null);

  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("all");

  // =========================
  // FETCH LEADS
  // =========================

  const fetchLeads = async () => {

    try {

      const token =
        localStorage.getItem(
          "adminToken"
        );

      const res =
        await axios.get(
          `/inquiries?status=${statusFilter}`,
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

      setLeads(res.data);

      if (
        res.data.length > 0 &&
        !selectedLead
      ) {
        setSelectedLead(
          res.data[0]
        );
      }

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [statusFilter]);

  // =========================
  // UPDATE STATUS
  // =========================

  const updateStatus = async (
    id,
    status
  ) => {

    try {

      const token =
        localStorage.getItem(
          "adminToken"
        );

      await axios.put(
        `/inquiries/${id}`,
        { status },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      fetchLeads();

      setSelectedLead({
        ...selectedLead,
        status,
      });

    } catch (error) {
      console.log(error);
    }
  };

  // =========================
  // FILTERED LEADS
  // =========================

  const filteredLeads =
    leads.filter((lead) => {

      const term =
        search.toLowerCase();

      return (
        lead.fullName
          ?.toLowerCase()
          .includes(term) ||

        lead.email
          ?.toLowerCase()
          .includes(term) ||

        lead.companyName
          ?.toLowerCase()
          .includes(term) ||

        lead.service
          ?.toLowerCase()
          .includes(term)
      );
    });

  // =========================
  // STATUS COLORS
  // =========================

  const statusStyles = {
    new:
      "bg-blue-500/15 text-blue-400 border-blue-500/20",

    contacted:
      "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",

    "proposal-sent":
      "bg-purple-500/15 text-purple-400 border-purple-500/20",

    "in-progress":
      "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",

    completed:
      "bg-green-500/15 text-green-400 border-green-500/20",

    rejected:
      "bg-red-500/15 text-red-400 border-red-500/20",

    closed:
      "bg-gray-500/15 text-gray-400 border-gray-500/20",
  };

  // =========================
  // STATS
  // =========================

  const stats = {
    total: leads.length,

    new:
      leads.filter(
        (l) => l.status === "new"
      ).length,

    progress:
      leads.filter(
        (l) =>
          l.status ===
          "in-progress"
      ).length,

    completed:
      leads.filter(
        (l) =>
          l.status ===
          "completed"
      ).length,
  };

  return (

    <section>

      {/* TOP */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold mb-3">
          Leads CRM
        </h1>

        <p className="text-gray-400">
          Manage inquiries, proposals,
          onboarding and communication.
        </p>

      </div>

      {/* STATS */}

      <div className="grid md:grid-cols-4 gap-4 mb-6">

        {[
          {
            label: "Total Leads",
            value: stats.total,
          },

          {
            label: "New",
            value: stats.new,
          },

          {
            label: "In Progress",
            value: stats.progress,
          },

          {
            label: "Completed",
            value: stats.completed,
          },

        ].map((item, index) => (

          <div
            key={index}

            className="
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              p-6
            "
          >

            <p className="text-sm text-gray-400">
              {item.label}
            </p>

            <h2 className="text-4xl font-bold mt-3">
              {item.value}
            </h2>

          </div>
        ))}

      </div>

      {/* SEARCH + FILTER */}

      <div className="flex flex-wrap gap-4 mb-6">

        <div
          className="
            flex items-center gap-3
            px-4
            h-12
            rounded-2xl
            border border-white/10
            bg-white/[0.03]
            flex-1
          "
        >

          <Search
            size={18}
            className="text-gray-500"
          />

          <input
            type="text"

            placeholder="Search leads..."

            value={search}

            onChange={(e) =>
              setSearch(e.target.value)
            }

            className="
              bg-transparent
              outline-none
              text-sm
              w-full
            "
          />

        </div>

        <select
          value={statusFilter}

          onChange={(e) =>
            setStatusFilter(
              e.target.value
            )
          }

          className="
            h-12
            px-4
            rounded-2xl
            bg-[#0B1220]
            border border-white/10
            text-sm
          "
        >

          <option value="all">
            All Status
          </option>

          <option value="new">
            New
          </option>

          <option value="contacted">
            Contacted
          </option>

          <option value="proposal-sent">
            Proposal Sent
          </option>

          <option value="in-progress">
            In Progress
          </option>

          <option value="completed">
            Completed
          </option>

        </select>

      </div>

      {/* MAIN */}

      <div
        className="
          grid
          lg:grid-cols-[360px_1fr]
          gap-5
        "
      >

        {/* SIDEBAR */}

        <div
          className="
            rounded-3xl
            border border-white/10
            bg-white/[0.03]
            overflow-hidden
            h-[75vh]
            overflow-y-auto
          "
        >

          {filteredLeads.map((lead) => (

            <button
              key={lead._id}

              onClick={() =>
                setSelectedLead(lead)
              }

              className={`
                w-full
                text-left
                p-5
                border-b border-white/5
                transition-all

                ${
                  selectedLead?._id ===
                  lead._id
                    ? "bg-blue-500/[0.08]"
                    : "hover:bg-white/[0.03]"
                }
              `}
            >

              <div className="flex items-start justify-between">

                <div>

                  <h3 className="font-semibold">
                    {lead.fullName}
                  </h3>

                  <p className="text-sm text-gray-400 mt-1">
                    {
                      lead.companyName
                    }
                  </p>

                </div>

                <div
                  className={`
                    px-3 py-1
                    rounded-full
                    border
                    text-[10px]
                    capitalize

                    ${
                      statusStyles[
                        lead.status
                      ]
                    }
                  `}
                >
                  {lead.status}
                </div>

              </div>

              <div className="mt-4">

                <p className="text-sm text-blue-400">
                  {lead.service}
                </p>

                <p className="text-xs text-gray-500 mt-2">
                  {lead.packageName}
                </p>

              </div>

            </button>
          ))}

        </div>

        {/* DETAILS */}

        <div
          className="
            rounded-3xl
            border border-white/10
            bg-white/[0.03]
            p-8
            h-[75vh]
            overflow-y-auto
          "
        >

          {selectedLead ? (

            <>

              {/* HEADER */}

              <div
                className="
                  flex flex-col lg:flex-row
                  lg:items-center
                  justify-between
                  gap-5
                  mb-8
                "
              >

                <div>

                  <h2 className="text-3xl font-bold">
                    {
                      selectedLead.fullName
                    }
                  </h2>

                  <p className="text-gray-400 mt-2">
                    {
                      selectedLead.companyName
                    }
                  </p>

                </div>

                <div className="flex gap-3">

                  {/* EMAIL */}

                  <button
                    onClick={() => {

                      window.location.href =
                        `mailto:${selectedLead.email}?subject=Your Project Inquiry`;

                    }}

                    className="
                      h-12
                      px-5
                      rounded-2xl
                      bg-blue-600
                      hover:bg-blue-500
                      transition-all
                      flex items-center gap-2
                      text-sm
                    "
                  >

                    <Mail size={16} />

                    Email

                  </button>

                  {/* WHATSAPP */}

                  <button
                    onClick={() => {

                      const message =
`Hello ${selectedLead.fullName},
Thank you for contacting NOVA Elite Systems regarding your ${selectedLead.service} project.`;

                      window.open(
                        `https://wa.me/${selectedLead.whatsapp}?text=${encodeURIComponent(message)}`
                      );

                    }}

                    className="
                      h-12
                      px-5
                      rounded-2xl
                      border border-white/10
                      hover:border-green-500/30
                      hover:bg-green-500/10
                      transition-all
                      flex items-center gap-2
                      text-sm
                    "
                  >

                    <MessageCircle size={16} />

                    WhatsApp

                  </button>

                </div>

              </div>

              {/* GRID */}

              <div className="grid md:grid-cols-2 gap-5 mb-8">

                {[
                  {
                    icon:
                      <Briefcase size={16} />,
                    label: "Service",
                    value:
                      selectedLead.service,
                  },

                  {
                    icon:
                      <Wallet size={16} />,
                    label: "Budget",
                    value:
                      selectedLead.budget,
                  },

                  {
                    icon:
                      <Clock3 size={16} />,
                    label: "Timeline",
                    value:
                      selectedLead.timeline,
                  },

                  {
                    icon:
                      <Globe size={16} />,
                    label: "Country",
                    value:
                      selectedLead.country,
                  },

                ].map((item, index) => (

                  <div
                    key={index}

                    className="
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.02]
                      p-5
                    "
                  >

                    <div className="flex items-center gap-2 text-blue-400 mb-3">

                      {item.icon}

                      <p className="text-sm">
                        {item.label}
                      </p>

                    </div>

                    <h3 className="font-semibold">
                      {item.value || "—"}
                    </h3>

                  </div>
                ))}

              </div>

              {/* DESCRIPTION */}

              <div
                className="
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.02]
                  p-6
                  mb-8
                "
              >

                <h3 className="font-semibold mb-4">
                  Project Description
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {
                    selectedLead.description
                  }
                </p>

              </div>

              {/* STATUS */}

              <div>

                <h3 className="font-semibold mb-4">
                  Lead Status
                </h3>

                <select
                  value={
                    selectedLead.status
                  }

                  onChange={(e) =>
                    updateStatus(
                      selectedLead._id,
                      e.target.value
                    )
                  }

                  className="
                    h-12
                    px-4
                    rounded-2xl
                    bg-[#0B1220]
                    border border-white/10
                    text-sm
                  "
                >

                  <option value="new">
                    New
                  </option>

                  <option value="contacted">
                    Contacted
                  </option>

                  <option value="proposal-sent">
                    Proposal Sent
                  </option>

                  <option value="in-progress">
                    In Progress
                  </option>

                  <option value="completed">
                    Completed
                  </option>

                  <option value="rejected">
                    Rejected
                  </option>

                </select>

              </div>

            </>

          ) : (

            <div
              className="
                h-full
                flex items-center justify-center
                text-gray-500
              "
            >
              Select a lead
            </div>
          )}

        </div>

      </div>

    </section>
  );
}