import {
  useEffect,
  useState,
} from "react";

import axios from "../../api/axios";

import {
  Headphones,
  Trash2,
  Eye,
  Mail,
  X,
} from "lucide-react";

import { toast } from "sonner";

export default function SupportTickets() {

  const [tickets, setTickets] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

    const [selectedTicket, setSelectedTicket] =
  useState(null);
  const [replyTicket, setReplyTicket] =
  useState(null);

const [replyLoading, setReplyLoading] =
  useState(false);

const [replySubject, setReplySubject] =
  useState("");

const [replyMessage, setReplyMessage] =
  useState("");

const [selectedTemplate, setSelectedTemplate] =
  useState("received");

  const generateTemplate =
  (template, ticket) => {

    if (!ticket) return "";

    switch (template) {

      case "received":
        return `
Hello ${ticket.fullName},

We have received your support request regarding ${ticket.serviceType}.

Our technical team is reviewing the issue and will contact you shortly.

Regards,
NOVA Elite Systems
`;

      case "progress":
        return `
Hello ${ticket.fullName},

Your support request is currently being worked on by our technical team.

We will keep you updated on the progress.

Regards,
NOVA Elite Systems
`;

      case "resolved":
        return `
Hello ${ticket.fullName},

Your support request has been resolved.

If you still experience any issue, feel free to reply to this email.

Regards,
NOVA Elite Systems
`;

      default:
        return "";
    }
  };

  const openReplyModal =
  (ticket) => {

    setReplyTicket(ticket);

    setSelectedTemplate(
      "received"
    );

    setReplySubject(
      "Support Ticket Update"
    );

    setReplyMessage(
      generateTemplate(
        "received",
        ticket
      )
    );
  };

  const sendReply =
  async () => {
    try {

      setReplyLoading(true);

      await axios.post(
        "/support/reply",
        {
          to:
            replyTicket.email,

          subject:
            replySubject,

          message:
            replyMessage,
        }
      );

      toast.success(
        "Reply sent"
      );

      setReplyTicket(null);

    } catch (err) {

      console.log(err);

      toast.error(
        "Failed to send email"
      );

    } finally {

      setReplyLoading(false);
    }
  };

  /* FETCH */

  const fetchTickets =
    async () => {
      try {
        const res =
          await axios.get(
            "/support"
          );

        setTickets(res.data);

      } catch (err) {
        console.log(err);

      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchTickets();
  }, []);

  /* UPDATE STATUS */

  const updateStatus =
    async (id, status) => {
      try {
        await axios.patch(
          `/support/${id}`,
          { status }
        );

        fetchTickets();

        toast.success(
          "Ticket updated"
        );

      } catch (err) {
        console.log(err);

        toast.error(
          "Failed to update"
        );
      }
    };

  /* DELETE */

  const deleteTicket =
    async (id) => {
      try {
        await axios.delete(
          `/support/${id}`
        );

        fetchTickets();

        toast.success(
          "Ticket deleted"
        );

      } catch (err) {
        console.log(err);

        toast.error(
          "Delete failed"
        );
      }
    };

  if (loading) {
    return (
      <div className="text-white p-8">
        Loading tickets...
      </div>
    );
  }

  return (
    <section className="text-white">

      {/* HEADER */}

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
          SUPPORT MANAGEMENT
        </p>

        <h1
          className="
            text-3xl
            font-bold
          "
        >
          Support Tickets
        </h1>

      </div>

      {/* TABLE */}

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
                  Priority
                </th>

                <th className="p-5">
                  Status
                </th>

                <th className="p-5">
                  Issue
                </th>

                <th className="p-5">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {tickets.map(
                (ticket) => (

                  <tr
                    key={ticket._id}
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
                          {ticket.fullName}
                        </p>

                        <p
                          className="
                            text-xs
                            text-gray-500
                            mt-1
                          "
                        >
                          {ticket.email}
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
                      {ticket.serviceType}
                    </td>

                    {/* PRIORITY */}

                    <td className="p-5">

                      <span
                        className={`
                          text-xs
                          px-3 py-1
                          rounded-full

                          ${
                            ticket.priority ===
                            "Urgent"
                              ? "bg-red-500/20 text-red-400"

                              : ticket.priority ===
                                "Medium"
                              ? "bg-yellow-500/20 text-yellow-400"

                              : "bg-blue-500/20 text-blue-400"
                          }
                        `}
                      >
                        {ticket.priority}
                      </span>

                    </td>

                    {/* STATUS */}

                    <td className="p-5">

                      <select
                        value={
                          ticket.status
                        }
                        onChange={(e) =>
                          updateStatus(
                            ticket._id,
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
                          In Progress
                        </option>

                        <option>
                          Resolved
                        </option>

                        <option>
                          Closed
                        </option>

                      </select>

                    </td>

                    {/* ISSUE */}

                    <td
                      className="
                        p-5
                        text-sm
                        text-gray-400
                        max-w-[280px]
                      "
                    >
                      <p className="line-clamp-2">
                        {ticket.issue}
                      </p>
                    </td>

                    {/* ACTIONS */}

                    <td className="p-5">

  <div className="flex items-center gap-4">

    {/* VIEW */}

    <button
      onClick={() =>
        setSelectedTicket(ticket)
      }
      className="
        text-blue-400
        hover:text-blue-300
        transition
      "
    >
      <Eye size={18} />
    </button>

    {/* REPLY */}

<button
  onClick={() =>
    openReplyModal(ticket)
  }
  className="
    text-emerald-400
    hover:text-emerald-300
    transition
  "
>
      <Mail size={18} />
    </button>

    {/* DELETE */}

    <button
      onClick={() =>
        deleteTicket(
          ticket._id
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

      {/* VIEW MODAL */}

{selectedTicket && (

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
          setSelectedTicket(null)
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
          SUPPORT TICKET
        </p>

        <h2
          className="
            text-3xl
            font-bold
          "
        >
          {selectedTicket.fullName}
        </h2>

      </div>

      {/* GRID */}

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <p className="text-gray-500 text-sm mb-2">
            Email
          </p>

          <p className="text-sm">
            {selectedTicket.email}
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm mb-2">
            Phone
          </p>

          <p className="text-sm">
            {selectedTicket.phone}
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm mb-2">
            Company
          </p>

          <p className="text-sm">
            {selectedTicket.company || "-"}
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm mb-2">
            Service
          </p>

          <p className="text-sm">
            {selectedTicket.serviceType}
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm mb-2">
            Priority
          </p>

          <p className="text-sm">
            {selectedTicket.priority}
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm mb-2">
            Status
          </p>

          <p className="text-sm">
            {selectedTicket.status}
          </p>
        </div>

      </div>

      {/* ISSUE */}

      <div className="mt-8">

        <p
          className="
            text-gray-500
            text-sm
            mb-3
          "
        >
          Issue Description
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
            {selectedTicket.issue}
          </p>

        </div>

      </div>

    </div>

  </div>
)}

{/* REPLY MODAL */}

{replyTicket && (

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
        max-w-2xl
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
          setReplyTicket(null)
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
          SUPPORT REPLY
        </p>

        <h2
          className="
            text-3xl
            font-bold
          "
        >
          Reply to
          {" "}
          {replyTicket.fullName}
        </h2>

      </div>

      {/* TEMPLATE */}

      <div className="mb-5">

        <label
          className="
            text-sm
            text-gray-400
            mb-2
            block
          "
        >
          Template
        </label>

        <select
          value={selectedTemplate}
          onChange={(e) => {

            setSelectedTemplate(
              e.target.value
            );

            setReplyMessage(
              generateTemplate(
                e.target.value,
                replyTicket
              )
            );
          }}
          className="
            w-full
            bg-[#0B1220]
            border border-white/10
            rounded-2xl
            px-4 py-3
            outline-none
          "
        >

          <option value="received">
            Ticket Received
          </option>

          <option value="progress">
            In Progress
          </option>

          <option value="resolved">
            Resolved
          </option>

        </select>

      </div>

      {/* SUBJECT */}

      <div className="mb-5">

        <label
          className="
            text-sm
            text-gray-400
            mb-2
            block
          "
        >
          Subject
        </label>

        <input
          value={replySubject}
          onChange={(e) =>
            setReplySubject(
              e.target.value
            )
          }
          className="
            w-full
            bg-[#0B1220]
            border border-white/10
            rounded-2xl
            px-4 py-3
            outline-none
          "
        />

      </div>

      {/* MESSAGE */}

      <div>

        <label
          className="
            text-sm
            text-gray-400
            mb-2
            block
          "
        >
          Message
        </label>

        <textarea
          rows="12"
          value={replyMessage}
          onChange={(e) =>
            setReplyMessage(
              e.target.value
            )
          }
          className="
            w-full
            bg-[#0B1220]
            border border-white/10
            rounded-2xl
            px-4 py-4
            outline-none
            resize-none
          "
        />

      </div>

      {/* ACTIONS */}

      <div
        className="
          flex
          justify-end
          mt-6
        "
      >

        <button
          onClick={sendReply}
          disabled={replyLoading}
          className="
            px-6 py-3
            rounded-2xl
            bg-blue-600
            hover:bg-blue-500
            transition
            text-sm
            font-medium
          "
        >
          {
            replyLoading
              ? "Sending..."
              : "Send Reply"
          }
        </button>

      </div>

    </div>

  </div>
)}

    </section>
  );
}