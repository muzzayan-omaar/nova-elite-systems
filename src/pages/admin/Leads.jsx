
import {
 useEffect, useState } from "react";
import API from "../../api/axios";

import {
  Mail,
  Phone,
  Globe,
  Trash2,
} from "lucide-react";

export default function Leads() {

  const [leads, setLeads] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [statusFilter, setStatusFilter] =
    useState("all");

  const fetchLeads = async () => {
    try {

      const res = await API.get(
        `/inquiries?status=${statusFilter}`
      );

      setLeads(res.data);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [statusFilter]);

  const updateStatus = async (
    id,
    status
  ) => {
    try {

      await API.put(
        `/inquiries/${id}`,
        { status }
      );

      fetchLeads();

    } catch (error) {
      console.log(error);
    }
  };

  const deleteLead = async (id) => {

    const confirmDelete =
      window.confirm(
        "Delete this lead?"
      );

    if (!confirmDelete) return;

    try {

      await API.delete(
        `/inquiries/${id}`
      );

      fetchLeads();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      className="
        min-h-screen
        bg-[#050816]
        text-white
        p-8
      "
    >

      <div
        className="
          flex
          justify-between
          items-center
          mb-8
        "
      >

        <h1
          className="
            text-3xl
            font-bold
          "
        >
          Project Leads
        </h1>

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(
              e.target.value
            )
          }

          className="
            bg-[#0b1220]
            border border-white/10
            rounded-xl
            px-4 py-2
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

          <option value="closed">
            Closed
          </option>

          <option value="rejected">
            Rejected
          </option>

        </select>

      </div>

      {loading ? (

        <p>Loading leads...</p>

      ) : (

        <div className="space-y-5">

          {leads.map((lead) => (

            <div
              key={lead._id}

              className="
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                p-6
              "
            >

              <div
                className="
                  flex
                  justify-between
                  gap-6
                  flex-wrap
                "
              >

                <div>

                  <h2
                    className="
                      text-2xl
                      font-bold
                    "
                  >
                    {lead.fullName}
                  </h2>

                  <p
                    className="
                      text-blue-400
                      mt-1
                    "
                  >
                    {lead.service}
                  </p>

                </div>

                <div
                  className="
                    flex
                    gap-3
                    flex-wrap
                  "
                >

                  <select
                    value={lead.status}

                    onChange={(e) =>
                      updateStatus(
                        lead._id,
                        e.target.value
                      )
                    }

                    className="
                      bg-[#0b1220]
                      border border-white/10
                      rounded-xl
                      px-4 py-2
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

                    <option value="closed">
                      Closed
                    </option>

                    <option value="rejected">
                      Rejected
                    </option>

                  </select>

                  <button
                    onClick={() =>
                      deleteLead(
                        lead._id
                      )
                    }

                    className="
                      w-11 h-11
                      rounded-xl
                      bg-red-500/10
                      border border-red-500/20
                      text-red-400
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <Trash2 size={18} />

                  </button>

                </div>

              </div>

              <div
                className="
                  grid
                  md:grid-cols-3
                  gap-5
                  mt-6
                "
              >

                <div>

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-gray-400
                      text-sm
                    "
                  >

                    <Mail size={14} />

                    {lead.email}

                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-gray-400
                      text-sm
                      mt-2
                    "
                  >

                    <Phone size={14} />

                    {lead.whatsapp}

                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-gray-400
                      text-sm
                      mt-2
                    "
                  >

                    <Globe size={14} />

                    {lead.country}

                  </div>

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Package
                  </p>

                  <p className="mt-1">
                    {lead.packageName}
                  </p>

                  <p
                    className="
                      text-blue-400
                      mt-1
                    "
                  >
                    {lead.packagePrice}
                  </p>

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Project Description
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-gray-300
                      leading-relaxed
                    "
                  >
                    {lead.description}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}

    </section>
  );
}
