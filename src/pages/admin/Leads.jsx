import { useEffect, useState } from "react";
import axios from "../../api/axios";

import {
  Search,
  Mail,
  MessageCircle,
  Clock3,
  Globe,
  Briefcase,
  Wallet,
  CalendarDays,
  ArrowUpRight,
  CheckCheck,
  Sparkles,
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
  // FETCH
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

      // newest first
      const sorted =
        res.data.sort(
          (a, b) =>
            new Date(
              b.createdAt
            ) -
            new Date(
              a.createdAt
            )
        );

      setLeads(sorted);

      if (
        sorted.length > 0 &&
        !selectedLead
      ) {
        setSelectedLead(
          sorted[0]
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
  // MARK VIEWED
  // =========================

  const handleSelectLead =
    (lead) => {

      const updated =
        leads.map((item) => {

          if (
            item._id === lead._id
          ) {

            return {
              ...item,
              viewed: true,
            };
          }

          return item;
        });

      setLeads(updated);

      setSelectedLead({
        ...lead,
        viewed: true,
      });
    };

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

      setSelectedLead({
        ...selectedLead,
        status,
      });

      fetchLeads();

    } catch (error) {
      console.log(error);
    }
  };

  // =========================
  // FILTERS
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
  // STATS
  // =========================

  const stats = {
    total:
      leads.length,

    new:
      leads.filter(
        (l) => !l.viewed
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

  // =========================
  // STATUS COLORS
  // =========================

  const statusStyles = {
    new:
      "text-blue-400 bg-blue-500/10 border-blue-500/20",

    contacted:
      "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",

    "proposal-sent":
      "text-purple-400 bg-purple-500/10 border-purple-500/20",

    "in-progress":
      "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",

    completed:
      "text-green-400 bg-green-500/10 border-green-500/20",

    rejected:
      "text-red-400 bg-red-500/10 border-red-500/20",
  };

  return (

    <section>

      {/* HEADER */}

      <div
        className="
          flex flex-col lg:flex-row
          lg:items-center
          justify-between
          gap-6
          mb-8
        "
      >

        <div>

          <div
            className="
              inline-flex
              items-center gap-2
              px-3 py-1.5
              rounded-full
              border border-blue-500/20
              bg-blue-500/10
              text-blue-400
              text-xs
              mb-4
            "
          >

            <Sparkles size={13} />

            Leads CRM

          </div>

          <h1 className="text-4xl font-bold">
            Project Leads
          </h1>

          <p className="text-gray-400 mt-3">
            Manage inquiries, onboarding,
            proposals and communication.
          </p>

        </div>

        {/* SEARCH */}

        <div
          className="
            flex items-center gap-3
            px-5
            h-14
            rounded-2xl
            border border-white/10
            bg-white/[0.03]
            lg:w-[340px]
          "
        >

          <Search
            size={18}
            className="text-gray-500"
          />

          <input
            type="text"

            value={search}

            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }

            placeholder="Search leads..."

            className="
              bg-transparent
              outline-none
              w-full
              text-sm
            "
          />

        </div>

      </div>

      {/* STATS */}

      <div
        className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-4
          mb-6
        "
      >

        {[
          {
            label: "Total",
            value: stats.total,
          },

          {
            label: "New Leads",
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
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              p-5
              backdrop-blur-xl
            "
          >

            <p className="text-xs text-gray-500 uppercase tracking-[0.15em]">
              {item.label}
            </p>

            <h2 className="text-3xl font-bold mt-3">
              {item.value}
            </h2>

          </div>
        ))}

      </div>

      {/* MAIN */}

      <div
        className="
          grid
          lg:grid-cols-[360px_1fr]
          gap-5
        "
      >

        {/* LEADS LIST */}

        <div
          className="
            rounded-[32px]
            border border-white/10
            bg-white/[0.03]
            overflow-hidden
            h-[78vh]
            backdrop-blur-2xl
          "
        >

          {/* TOP */}

          <div
            className="
              p-5
              border-b border-white/5
              flex items-center justify-between
            "
          >

            <h3 className="font-semibold">
              All Leads
            </h3>

            <select
              value={statusFilter}

              onChange={(e) =>
                setStatusFilter(
                  e.target.value
                )
              }

              className="
                bg-[#0B1220]
                border border-white/10
                rounded-xl
                h-10
                px-3
                text-xs
              "
            >

              <option value="all">
                All
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

          {/* LIST */}

          <div className="overflow-y-auto h-full">

            {filteredLeads.map((lead) => (

              <button
                key={lead._id}

                onClick={() =>
                  handleSelectLead(
                    lead
                  )
                }

                className={`
                  relative
                  w-full
                  text-left
                  px-5 py-5
                  border-b border-white/5
                  transition-all

                  ${
                    selectedLead?._id ===
                    lead._id
                      ? `
                        bg-blue-500/[0.08]
                      `
                      : `
                        hover:bg-white/[0.03]
                      `
                  }
                `}
              >

                {/* NEW INDICATOR */}

                {!lead.viewed && (

                  <div
                    className="
                      absolute
                      top-5 right-5
                      px-2 py-1
                      rounded-full
                      bg-blue-500
                      text-[10px]
                      font-semibold
                    "
                  >
                    NEW
                  </div>
                )}

                <div className="pr-14">

                  <div
                    className="
                      flex items-center gap-3
                      mb-3
                    "
                  >

                    <div
                      className="
                        w-11 h-11
                        rounded-2xl
                        bg-blue-500/10
                        border border-blue-500/20
                        flex items-center justify-center
                        text-blue-400
                        text-sm
                        font-bold
                        shrink-0
                      "
                    >
                      {
                        lead.fullName?.charAt(
                          0
                        )
                      }
                    </div>

                    <div>

                      <h3 className="font-semibold">
                        {
                          lead.fullName
                        }
                      </h3>

                      <p className="text-xs text-gray-500 mt-1">
                        {
                          lead.companyName ||
                          "Independent Client"
                        }
                      </p>

                    </div>

                  </div>

                  <div
                    className="
                      flex items-center
                      justify-between
                    "
                  >

                    <div>

                      <p className="text-sm text-blue-400">
                        {
                          lead.service
                        }
                      </p>

                      <p className="text-xs text-gray-500 mt-1">
                        {
                          lead.packageName
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

                </div>

              </button>
            ))}

          </div>

        </div>

        {/* DETAILS */}

        <div
          className="
            relative
            rounded-[32px]
            border border-white/10
            bg-white/[0.03]
            p-8
            overflow-hidden
            backdrop-blur-2xl
            h-[78vh]
            overflow-y-auto
          "
        >

          {/* GLOW */}

          <div
            className="
              absolute
              top-[-250px]
              right-[-120px]
              w-[450px]
              h-[450px]
              bg-blue-500/10
              blur-[120px]
              rounded-full
              pointer-events-none
            "
          />

          {selectedLead ? (

            <div className="relative z-10">

              {/* TOP */}

              <div
                className="
                  flex flex-col xl:flex-row
                  xl:items-center
                  justify-between
                  gap-6
                  mb-10
                "
              >

                <div
                  className="
                    flex items-center gap-5
                  "
                >

                  <div
                    className="
                      w-20 h-20
                      rounded-[28px]
                      bg-blue-500/10
                      border border-blue-500/20
                      flex items-center justify-center
                      text-3xl
                      font-bold
                      text-blue-400
                    "
                  >
                    {
                      selectedLead.fullName?.charAt(
                        0
                      )
                    }
                  </div>

                  <div>

                    <h2 className="text-4xl font-bold">
                      {
                        selectedLead.fullName
                      }
                    </h2>

                    <p className="text-gray-400 mt-2">
                      {
                        selectedLead.companyName ||
                        "Independent Client"
                      }
                    </p>

                    <div
                      className="
                        flex items-center gap-3
                        mt-4
                        flex-wrap
                      "
                    >

                      <div
                        className={`
                          px-4 py-2
                          rounded-full
                          border
                          text-xs
                          capitalize

                          ${
                            statusStyles[
                              selectedLead.status
                            ]
                          }
                        `}
                      >
                        {
                          selectedLead.status
                        }
                      </div>

                      <div
                        className="
                          text-xs
                          text-gray-500
                          flex items-center gap-2
                        "
                      >

                        <CalendarDays size={14} />

                        {
                          new Date(
                            selectedLead.createdAt
                          ).toLocaleDateString()
                        }

                      </div>

                    </div>

                  </div>

                </div>

                {/* ACTIONS */}

                <div className="flex gap-3">

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

              {/* MINI STATS */}

              <div
                className="
                  grid
                  md:grid-cols-4
                  gap-4
                  mb-8
                "
              >

                {[
                  {
                    label: "Service",
                    value:
                      selectedLead.service,
                  },

                  {
                    label: "Budget",
                    value:
                      selectedLead.budget ||
                      "—",
                  },

                  {
                    label: "Timeline",
                    value:
                      selectedLead.timeline ||
                      "—",
                  },

                  {
                    label: "Country",
                    value:
                      selectedLead.country ||
                      "—",
                  },

                ].map((item, index) => (

                  <div
                    key={index}

                    className="
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.03]
                      p-4
                    "
                  >

                    <p className="text-xs text-gray-500 uppercase tracking-[0.15em]">
                      {item.label}
                    </p>

                    <h3 className="font-semibold mt-3 text-sm">
                      {item.value}
                    </h3>

                  </div>
                ))}

              </div>

              {/* DESCRIPTION */}

              <div
                className="
                  rounded-[28px]
                  border border-white/10
                  bg-white/[0.03]
                  p-7
                  mb-8
                "
              >

                <div
                  className="
                    flex items-center gap-3
                    mb-5
                  "
                >

                  <div
                    className="
                      w-10 h-10
                      rounded-xl
                      bg-blue-500/10
                      border border-blue-500/20
                      flex items-center justify-center
                    "
                  >

                    <Briefcase
                      size={16}
                      className="text-blue-400"
                    />

                  </div>

                  <div>

                    <h3 className="font-semibold">
                      Project Description
                    </h3>

                    <p className="text-xs text-gray-500 mt-1">
                      Client requirements &
                      project vision
                    </p>

                  </div>

                </div>

                <p
                  className="
                    text-gray-400
                    leading-relaxed
                    text-sm
                  "
                >
                  {
                    selectedLead.description ||
                    "No project description provided."
                  }
                </p>

              </div>

              {/* CONTACT + STATUS */}

              <div
                className="
                  grid
                  lg:grid-cols-2
                  gap-5
                "
              >

                {/* CONTACT */}

                <div
                  className="
                    rounded-[28px]
                    border border-white/10
                    bg-white/[0.03]
                    p-6
                  "
                >

                  <h3 className="font-semibold mb-5">
                    Contact Information
                  </h3>

                  <div className="space-y-4">

                    <div>

                      <p className="text-xs text-gray-500 mb-2">
                        Email Address
                      </p>

                      <p className="text-sm">
                        {
                          selectedLead.email
                        }
                      </p>

                    </div>

                    <div>

                      <p className="text-xs text-gray-500 mb-2">
                        WhatsApp Number
                      </p>

                      <p className="text-sm">
                        {
                          selectedLead.whatsapp
                        }
                      </p>

                    </div>

                  </div>

                </div>

                {/* STATUS */}

                <div
                  className="
                    rounded-[28px]
                    border border-white/10
                    bg-white/[0.03]
                    p-6
                  "
                >

                  <h3 className="font-semibold mb-5">
                    Lead Pipeline
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
                      w-full
                      h-12
                      px-4
                      rounded-2xl
                      bg-[#0B1220]
                      border border-white/10
                      text-sm
                    "
                  >

                    <option value="new">
                      New Lead
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

                  <button
                    className="
                      mt-5
                      w-full
                      h-12
                      rounded-2xl
                      border border-white/10
                      hover:border-blue-500/30
                      hover:bg-blue-500/10
                      transition-all
                      flex items-center justify-center
                      gap-2
                      text-sm
                    "
                  >

                    <CheckCheck size={16} />

                    Save Changes

                  </button>

                </div>

              </div>

            </div>

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