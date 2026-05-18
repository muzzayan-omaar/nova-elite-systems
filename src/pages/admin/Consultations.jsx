import {
  useEffect,
  useState,
} from "react";

import axios from "../../api/axios";

import {
  CalendarDays,
  Trash2,
  Eye,
  X,
} from "lucide-react";

import { toast } from "sonner";

export default function Consultations() {

  /* =========================
     STATE
  ========================= */

  const [consultations, setConsultations] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [selectedConsultation,
    setSelectedConsultation] =
    useState(null);

  /* =========================
     FETCH
  ========================= */

  const fetchConsultations =
    async () => {

      try {

        const res =
          await axios.get(
            "/consultations"
          );

        setConsultations(
          res.data
        );

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);
      }
    };

  useEffect(() => {

    fetchConsultations();

  }, []);

  /* =========================
     UPDATE STATUS
  ========================= */

  const updateStatus =
    async (id, status) => {

      try {

        await axios.patch(
          `/consultations/${id}`,
          { status }
        );

        fetchConsultations();

        toast.success(
          "Consultation updated"
        );

      } catch (err) {

        console.log(err);

        toast.error(
          "Update failed"
        );
      }
    };

  /* =========================
     DELETE
  ========================= */

  const deleteConsultation =
    async (id) => {

      try {

        await axios.delete(
          `/consultations/${id}`
        );

        fetchConsultations();

        toast.success(
          "Consultation deleted"
        );

      } catch (err) {

        console.log(err);

        toast.error(
          "Delete failed"
        );
      }
    };

  /* =========================
     LOADING
  ========================= */

  if (loading) {

    return (
      <div className="text-white p-8">
        Loading consultations...
      </div>
    );
  }

  return (
    <section className="text-white">

      {/* =========================
         HEADER
      ========================= */}

      <div className="mb-8">

        <p
          className="
            uppercase
            tracking-[0.25em]
            text-[10px]
            text-blue-400
            font-semibold
            mb-2
          "
        >
          CONSULTATION MANAGEMENT
        </p>

        <h1
          className="
            text-3xl
            font-bold
          "
        >
          Consultation Requests
        </h1>

      </div>

      {/* =========================
         TABLE
      ========================= */}

      <div
        className="
          border border-white/10
          bg-white/[0.03]
          rounded-3xl
          overflow-hidden
        "
      >

        <div className="overflow-x-auto">

          <table className="w-full">

            {/* HEAD */}

            <thead
              className="
                border-b
                border-white/10
                bg-white/[0.03]
              "
            >

              <tr
                className="
                  text-left
                  text-xs
                  uppercase
                  tracking-[0.15em]
                  text-gray-400
                "
              >

                <th className="p-5">
                  Client
                </th>

                <th className="p-5">
                  Service
                </th>

                <th className="p-5">
                  Preferred Date
                </th>

                <th className="p-5">
                  Status
                </th>

                <th className="p-5">
                  Details
                </th>

                <th className="p-5">
                  Actions
                </th>

              </tr>

            </thead>

            {/* BODY */}

            <tbody>

              {consultations.map(
                (
                  consultation
                ) => (

                  <tr
                    key={
                      consultation._id
                    }
                    className="
                      border-b
                      border-white/5
                    "
                  >

                    {/* CLIENT */}

                    <td className="p-5">

                      <div>

                        <p
                          className="
                            font-medium
                            text-sm
                          "
                        >
                          {
                            consultation.fullName
                          }
                        </p>

                        <p
                          className="
                            text-xs
                            text-gray-500
                            mt-1
                          "
                        >
                          {
                            consultation.email
                          }
                        </p>

                      </div>

                    </td>

                    {/* SERVICE */}

                    <td
                      className="
                        p-5
                        text-sm
                        text-gray-300
                      "
                    >
                      {
                        consultation.serviceInterest
                      }
                    </td>

                    {/* DATE */}

                    <td
                      className="
                        p-5
                        text-sm
                        text-gray-400
                      "
                    >
                      {
                        consultation.preferredDate ||
                        "-"
                      }
                    </td>

                    {/* STATUS */}

                    <td className="p-5">

                      <select
                        value={
                          consultation.status
                        }
                        onChange={(e) =>
                          updateStatus(
                            consultation._id,
                            e.target.value
                          )
                        }
                        className="
                          bg-[#0B1220]
                          border
                          border-white/10
                          rounded-xl
                          px-3 py-2
                          text-sm
                          outline-none
                        "
                      >

                        <option>
                          New
                        </option>

                        <option>
                          Contacted
                        </option>

                        <option>
                          Meeting Scheduled
                        </option>

                        <option>
                          Closed
                        </option>

                      </select>

                    </td>

                    {/* DETAILS */}

                    <td
                      className="
                        p-5
                        text-sm
                        text-gray-400
                        max-w-[280px]
                      "
                    >

                      <p className="line-clamp-2">

                        {
                          consultation.projectDetails
                        }

                      </p>

                    </td>

                    {/* ACTIONS */}

                    <td className="p-5">

                      <div
                        className="
                          flex
                          items-center
                          gap-4
                        "
                      >

                        {/* VIEW */}

                        <button
                          onClick={() =>
                            setSelectedConsultation(
                              consultation
                            )
                          }
                          className="
                            text-blue-400
                            hover:text-blue-300
                            transition
                          "
                        >
                          <Eye size={18} />
                        </button>

                        {/* DELETE */}

                        <button
                          onClick={() =>
                            deleteConsultation(
                              consultation._id
                            )
                          }
                          className="
                            text-red-400
                            hover:text-red-300
                            transition
                          "
                        >
                          <Trash2 size={18} />
                        </button>

                      </div>

                    </td>

                  </tr>
                )
              )}

            </tbody>

          </table>

        </div>

      </div>

      {/* =========================
         VIEW MODAL
      ========================= */}

      {selectedConsultation && (

        <div
          className="
            fixed
            inset-0
            bg-black/70
            backdrop-blur-sm
            flex
            items-center
            justify-center
            z-50
            p-5
          "
        >

          <div
            className="
              w-full
              max-w-3xl
              rounded-3xl
              border border-white/10
              bg-[#07111F]
              p-8
              relative
            "
          >

            {/* CLOSE */}

            <button
              onClick={() =>
                setSelectedConsultation(
                  null
                )
              }
              className="
                absolute
                top-5
                right-5
                text-gray-400
                hover:text-white
              "
            >
              <X size={22} />
            </button>

            {/* HEADER */}

            <div className="mb-8">

              <p
                className="
                  uppercase
                  tracking-[0.25em]
                  text-[10px]
                  text-blue-400
                  mb-3
                "
              >
                CONSULTATION
              </p>

              <h2
                className="
                  text-3xl
                  font-bold
                "
              >
                {
                  selectedConsultation.fullName
                }
              </h2>

            </div>

            {/* GRID */}

            <div
              className="
                grid
                md:grid-cols-2
                gap-6
              "
            >

              <Info
                label="Email"
                value={
                  selectedConsultation.email
                }
              />

              <Info
                label="Phone"
                value={
                  selectedConsultation.phone
                }
              />

              <Info
                label="Business"
                value={
                  selectedConsultation.businessName ||
                  "-"
                }
              />

              <Info
                label="Service Interest"
                value={
                  selectedConsultation.serviceInterest
                }
              />

              <Info
                label="Preferred Date"
                value={
                  selectedConsultation.preferredDate ||
                  "-"
                }
              />

              <Info
                label="Status"
                value={
                  selectedConsultation.status
                }
              />

            </div>

            {/* DETAILS */}

            <div className="mt-8">

              <p
                className="
                  text-gray-500
                  text-sm
                  mb-3
                "
              >
                Project Details
              </p>

              <div
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  p-5
                "
              >

                <p
                  className="
                    text-sm
                    text-gray-300
                    leading-relaxed
                    whitespace-pre-wrap
                  "
                >
                  {
                    selectedConsultation.projectDetails
                  }
                </p>

              </div>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}

/* =========================
   INFO COMPONENT
========================= */

function Info({
  label,
  value,
}) {

  return (
    <div>

      <p
        className="
          text-gray-500
          text-sm
          mb-2
        "
      >
        {label}
      </p>

      <p className="text-sm">
        {value}
      </p>

    </div>
  );
}