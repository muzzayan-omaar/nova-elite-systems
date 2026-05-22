import { useEffect, useState } from "react";
import axios from "../../api/axios";

import {
  Search,
  Mail,
  MessageCircle,
  CalendarDays,
  Briefcase,
  CheckCheck,
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

      // preserve viewed state
      const viewedLeads =
        JSON.parse(
          localStorage.getItem(
            "viewedLeads"
          ) || "[]"
        );

      const mapped =
        sorted.map((lead) => ({
          ...lead,
          viewed:
            viewedLeads.includes(
              lead._id
            ),
        }));

      setLeads(mapped);

      if (
        mapped.length > 0 &&
        !selectedLead
      ) {
        setSelectedLead(
          mapped[0]
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
  // SELECT LEAD
  // =========================

  const handleSelectLead =
    (lead) => {

      const viewed =
        JSON.parse(
          localStorage.getItem(
            "viewedLeads"
          ) || "[]"
        );

      if (
        !viewed.includes(
          lead._id
        )
      ) {

        viewed.push(
          lead._id
        );

        localStorage.setItem(
          "viewedLeads",
          JSON.stringify(viewed)
        );
      }

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
  // NEW LEADS COUNT
  // =========================

  const newLeadsCount =
    leads.filter(
      (item) =>
        !item.viewed
    ).length;

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

      {/* TOP BAR */}

      <div
        className="
          flex
          flex-col lg:flex-row
          gap-4
          justify-between
          mb-5
        "
      >

        {/* SUMMARY */}

        <div className="flex flex-wrap gap-3">

          {[
            {
              label: "Total",
              value: leads.length,
              color: "text-white",
              bg: "bg-white/[0.04]",
            },

            {
              label: "New",
              value: newLeadsCount,
              color: "text-blue-400",
              bg: "bg-blue-500/[0.08]",
            },

            {
              label: "Progress",
              value: leads.filter(
                (item) =>
                  item.status ===
                  "in-progress"
              ).length,
              color: "text-yellow-400",
              bg: "bg-yellow-500/[0.08]",
            },

            {
              label: "Done",
              value: leads.filter(
                (item) =>
                  item.status ===
                  "completed"
              ).length,
              color: "text-green-400",
              bg: "bg-green-500/[0.08]",
            },
          ].map((item, index) => (

            <div
              key={index}

              className={`
                ${item.bg}
                border border-white/10
                rounded-2xl
                px-4
                py-3
                min-w-[105px]
              `}
            >

              <p className="text-[10px] uppercase tracking-[0.18em] text-gray-500 mb-1">
                {item.label}
              </p>

              <h2
                className={`
                  text-xl
                  font-bold
                  ${item.color}
                `}
              >
                {item.value}
              </h2>

            </div>
          ))}

        </div>

        {/* SEARCH */}

        <div
          className="
            flex items-center gap-3
            px-4
            h-12
            rounded-2xl
            border border-white/10
            bg-white/[0.03]
            lg:w-[300px]
          "
        >

          <Search
            size={16}
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

      {/* MAIN */}

      <div
        className="
          grid
          lg:grid-cols-[340px_1fr]
          gap-4
        "
      >

        {/* LEFT PANEL */}

        <div
          className="
            rounded-2xl
            border border-white/10
            bg-white/[0.03]
            overflow-hidden
            h-[82vh]
          "
        >

          {/* TOP */}

          <div
            className="
              p-4
              border-b border-white/5
              flex items-center justify-between
            "
          >

            <h3 className="text-sm font-medium">
              Leads
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
                h-9
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
                Proposal
              </option>

              <option value="in-progress">
                Progress
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
                  px-4 py-4
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

                {!lead.viewed && (

                  <div
                    className="
                      absolute
                      top-4 right-4
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

                <div className="pr-12">

                  <div
                    className="
                      flex items-center gap-3
                      mb-3
                    "
                  >

                    <div
                      className="
                        w-10 h-10
                        rounded-xl
                        bg-blue-500/10
                        border border-blue-500/20
                        flex items-center justify-center
                        text-blue-400
                        font-semibold
                        text-sm
                      "
                    >
                      {
                        lead.fullName?.charAt(
                          0
                        )
                      }
                    </div>

                    <div>

                      <h3 className="font-medium text-[13px]">
                        {
                          lead.fullName
                        }
                      </h3>

                      <p className="text-[11px] text-gray-500 mt-1">
                        {
                          lead.companyName ||
                          "Independent"
                        }
                      </p>

                    </div>

                  </div>

                  <div
                    className="
                      flex items-center justify-between
                    "
                  >

                    <div>

                      <p className="text-[12px] text-blue-400">
                        {
                          lead.service
                        }
                      </p>

                      <p className="text-[11px] text-gray-500 mt-1">
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

        {/* RIGHT PANEL */}

        <div
          className="
            rounded-2xl
            border border-white/10
            bg-white/[0.03]
            p-5
            h-[82vh]
            overflow-y-auto
          "
        >

          {selectedLead ? (

            <div>

              {/* TOP */}

              <div
                className="
                  flex flex-col xl:flex-row
                  xl:items-center
                  justify-between
                  gap-5
                  mb-6
                "
              >

                <div
                  className="
                    flex items-center gap-4
                  "
                >

                  <div
                    className="
                      w-16 h-16
                      rounded-2xl
                      bg-blue-500/10
                      border border-blue-500/20
                      flex items-center justify-center
                      text-blue-400
                      text-2xl
                      font-bold
                    "
                  >
                    {
                      selectedLead.fullName?.charAt(
                        0
                      )
                    }
                  </div>

                  <div>

                    <h2 className="text-3xl font-bold">
                      {
                        selectedLead.fullName
                      }
                    </h2>

                    <p className="text-sm text-gray-400 mt-2">
                      {
                        selectedLead.companyName ||
                        "Independent Client"
                      }
                    </p>

                    <div
                      className="
                        flex items-center gap-3
                        mt-3
                        flex-wrap
                      "
                    >

                      <div
                        className={`
                          px-4 py-2
                          rounded-full
                          border
                          text-[11px]
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
                          text-[11px]
                          text-gray-500
                          flex items-center gap-2
                        "
                      >

                        <CalendarDays size={13} />

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
                        `mailto:${selectedLead.email}`;

                    }}

                    className="
                      h-11
                      px-5
                      rounded-2xl
                      bg-blue-600
                      hover:bg-blue-500
                      transition
                      flex items-center gap-2
                      text-sm
                    "
                  >

                    <Mail size={15} />

                    Email

                  </button>

                  <button
                    onClick={() => {

                      const message =
`Hello ${selectedLead.fullName}, thank you for contacting NOVA Elite Systems.`;

                      window.open(
                        `https://wa.me/${selectedLead.whatsapp}?text=${encodeURIComponent(message)}`
                      );

                    }}

                    className="
                      h-11
                      px-5
                      rounded-2xl
                      border border-white/10
                      hover:border-green-500/30
                      hover:bg-green-500/10
                      transition
                      flex items-center gap-2
                      text-sm
                    "
                  >

                    <MessageCircle size={15} />

                    WhatsApp

                  </button>

                </div>

              </div>

              {/* MINI STATS */}

              <div
                className="
                  grid
                  md:grid-cols-4
                  gap-3
                  mb-6
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

                    <p className="text-[10px] uppercase tracking-[0.15em] text-gray-500 mb-2">
                      {item.label}
                    </p>

                    <h3 className="font-medium text-sm">
                      {item.value}
                    </h3>

                  </div>
                ))}

              </div>

              {/* DESCRIPTION */}

              <div
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  p-5
                  mb-5
                "
              >

                <div
                  className="
                    flex items-center gap-3
                    mb-4
                  "
                >

                  <div
                    className="
                      w-9 h-9
                      rounded-xl
                      bg-blue-500/10
                      border border-blue-500/20
                      flex items-center justify-center
                    "
                  >

                    <Briefcase
                      size={15}
                      className="text-blue-400"
                    />

                  </div>

                  <div>

                    <h3 className="font-medium text-sm">
                      Project Description
                    </h3>

                    <p className="text-[11px] text-gray-500 mt-1">
                      Requirements & scope
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
                    "No description provided."
                  }
                </p>

              </div>

              {/* CONTACT + STATUS */}

              <div
                className="
                  grid
                  lg:grid-cols-2
                  gap-4
                "
              >

                {/* CONTACT */}

                <div
                  className="
                    rounded-2xl
                    border border-white/10
                    bg-white/[0.03]
                    p-5
                  "
                >

                  <h3 className="font-medium text-sm mb-5">
                    Contact Information
                  </h3>

                  <div className="space-y-4">

                    <div>

                      <p className="text-[11px] text-gray-500 mb-2">
                        Email
                      </p>

                      <p className="text-sm">
                        {
                          selectedLead.email
                        }
                      </p>

                    </div>

                    <div>

                      <p className="text-[11px] text-gray-500 mb-2">
                        WhatsApp
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
                    rounded-2xl
                    border border-white/10
                    bg-white/[0.03]
                    p-5
                  "
                >

                  <h3 className="font-medium text-sm mb-5">
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
                      h-11
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

                  <button
                    className="
                      mt-4
                      w-full
                      h-11
                      rounded-2xl
                      border border-white/10
                      hover:border-blue-500/30
                      hover:bg-blue-500/10
                      transition
                      flex items-center justify-center gap-2
                      text-sm
                    "
                  >

                    <CheckCheck size={15} />

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