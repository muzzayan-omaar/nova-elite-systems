import { useEffect, useMemo, useState } from "react";

import axios from "../../api/axios";

import {
  DollarSign,
  FileText,
  AlertTriangle,
  Clock3,
  Search,
  Filter,
} from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

export default function Revenue() {
  const [analytics, setAnalytics] =
    useState(null);

  const [fromDate, setFromDate] =
    useState("");

  const [toDate, setToDate] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [clientFilter, setClientFilter] =
    useState("");

  const fetchAnalytics =
    async () => {
      try {
        const res =
          await axios.get(
            "/revenue/analytics"
          );

        setAnalytics(res.data);

      } catch (err) {
        console.log(err);
      }
    };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const COLORS = [
    "#3b82f6",
    "#eab308",
    "#ef4444",
    "#6b7280",
  ];

  if (!analytics) {
    return (
      <div className="text-white p-10">
        Loading analytics...
      </div>
    );
  }

  const {
    totals,
    revenueChartData,
    invoiceStatusData,
    invoices = [],
  } = analytics;

  /* FILTER LOGIC */

  const filteredInvoices =
    useMemo(() => {
      return invoices.filter(
        (invoice) => {
          const invoiceDate =
            invoice.issueDate
              ? new Date(
                  invoice.issueDate
                )
              : null;

          const matchesStatus =
            statusFilter === "All"
              ? true
              : invoice.status ===
                statusFilter;

          const matchesClient =
            invoice.clientName
              ?.toLowerCase()
              .includes(
                clientFilter.toLowerCase()
              );

          const matchesFrom =
            fromDate && invoiceDate
              ? invoiceDate >=
                new Date(fromDate)
              : true;

          const matchesTo =
            toDate && invoiceDate
              ? invoiceDate <=
                new Date(toDate)
              : true;

          return (
            matchesStatus &&
            matchesClient &&
            matchesFrom &&
            matchesTo
          );
        }
      );
    }, [
      invoices,
      statusFilter,
      clientFilter,
      fromDate,
      toDate,
    ]);

  /* FILTERED TOTALS */

  const filteredRevenue =
    filteredInvoices.reduce(
      (acc, invoice) =>
        acc + Number(invoice.total),
      0
    );

  const filteredPaid =
    filteredInvoices.filter(
      (i) => i.status === "Paid"
    ).length;

  const filteredPending =
    filteredInvoices.filter(
      (i) => i.status === "Pending"
    ).length;

  const filteredOverdue =
    filteredInvoices.filter(
      (i) => i.status === "Overdue"
    ).length;

  /* STATUS CHART */

  const dynamicStatusData = [
    {
      name: "Paid",
      value: filteredPaid,
    },
    {
      name: "Pending",
      value: filteredPending,
    },
    {
      name: "Overdue",
      value: filteredOverdue,
    },
  ];

  return (
    <section
      className="
        min-h-screen
        bg-[#050816]
        text-white
        p-6
      "
    >

      {/* BG GLOW */}

      <div
        className="
          fixed
          top-0
          left-1/2
          -translate-x-1/2
          w-[1000px]
          h-[1000px]
          rounded-full
          bg-blue-500/10
          blur-[180px]
          pointer-events-none
        "
      />

      <div className="relative z-10">

        {/* HEADER */}

        <div className="mb-10">

          <p
            className="
              uppercase
              tracking-[0.3em]
              text-xs
              text-blue-400
              font-semibold
              mb-4
            "
          >
            FINANCIAL ANALYTICS
          </p>

          <h1
            className="
              text-4xl
              font-bold
            "
          >
            Revenue
            <span className="text-blue-500">
              {" "}Dashboard
            </span>
          </h1>

        </div>

        {/* FILTERS */}

        <div
          className="
            rounded-[30px]
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-6
            mb-10
          "
        >

          <div
            className="
              flex
              items-center
              gap-3
              mb-6
            "
          >

            <div
              className="
                w-11 h-11
                rounded-2xl
                bg-blue-500/10
                flex
                items-center
                justify-center
                text-blue-400
              "
            >
              <Filter size={18} />
            </div>

            <div>

              <p className="text-sm text-gray-400">
                Revenue Filters
              </p>

              <h3 className="text-xl font-semibold">
                Analytics Controls
              </h3>

            </div>

          </div>

          <div
            className="
              grid
              md:grid-cols-2
              xl:grid-cols-4
              gap-4
            "
          >

            {/* SEARCH */}

            <div
              className="
                relative
              "
            >

              <Search
                size={16}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-500
                "
              />

              <input
                type="text"
                placeholder="Search Client..."
                value={clientFilter}
                onChange={(e) =>
                  setClientFilter(
                    e.target.value
                  )
                }
                className="
                  w-full
                  bg-[#0B1220]
                  border border-white/5
                  rounded-2xl
                  h-14
                  pl-11
                  pr-4
                  outline-none
                  text-sm
                  focus:border-blue-500/40
                "
              />

            </div>

            {/* STATUS */}

            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(
                  e.target.value
                )
              }
              className="
                bg-[#0B1220]
                border border-white/5
                rounded-2xl
                h-14
                px-4
                outline-none
                text-sm
                focus:border-blue-500/40
              "
            >

              <option value="All">
                All Status
              </option>

              <option value="Paid">
                Paid
              </option>

              <option value="Pending">
                Pending
              </option>

              <option value="Overdue">
                Overdue
              </option>

              <option value="Cancelled">
                Cancelled
              </option>

            </select>

            {/* FROM */}

            <input
              type="date"
              value={fromDate}
              onChange={(e) =>
                setFromDate(
                  e.target.value
                )
              }
              className="
                bg-[#0B1220]
                border border-white/5
                rounded-2xl
                h-14
                px-4
                outline-none
                text-sm
                focus:border-blue-500/40
              "
            />

            {/* TO */}

            <input
              type="date"
              value={toDate}
              onChange={(e) =>
                setToDate(
                  e.target.value
                )
              }
              className="
                bg-[#0B1220]
                border border-white/5
                rounded-2xl
                h-14
                px-4
                outline-none
                text-sm
                focus:border-blue-500/40
              "
            />

          </div>

        </div>

        {/* KPI CARDS */}

        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-4
            gap-5
            mb-10
          "
        >

          {[
            {
              title:
                "Filtered Revenue",
              value: `UGX ${filteredRevenue.toLocaleString()}`,
              icon: (
                <DollarSign size={20} />
              ),
              color:
                "text-emerald-400",
            },

            {
              title: "Paid",
              value: filteredPaid,
              icon: (
                <FileText size={20} />
              ),
              color:
                "text-blue-400",
            },

            {
              title: "Pending",
              value:
                filteredPending,
              icon: (
                <Clock3 size={20} />
              ),
              color:
                "text-yellow-400",
            },

            {
              title: "Overdue",
              value:
                filteredOverdue,
              icon: (
                <AlertTriangle size={20} />
              ),
              color:
                "text-red-400",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="
                rounded-[28px]
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-6
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between
                  mb-6
                "
              >

                <div
                  className={`
                    w-12 h-12
                    rounded-2xl
                    bg-white/5
                    flex
                    items-center
                    justify-center
                    ${card.color}
                  `}
                >
                  {card.icon}
                </div>

              </div>

              <p className="text-gray-500 text-sm">
                {card.title}
              </p>

              <h2
                className="
                  text-3xl
                  font-bold
                  mt-3
                "
              >
                {card.value}
              </h2>

            </div>
          ))}

        </div>

        {/* CHARTS */}

        <div
          className="
            grid
            xl:grid-cols-[1.5fr_450px]
            gap-6
            mb-10
          "
        >

          {/* REVENUE CHART */}

          <div
            className="
              rounded-[30px]
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-7
            "
          >

            <div className="mb-8">

              <p
                className="
                  uppercase
                  tracking-[0.2em]
                  text-xs
                  text-blue-400
                  mb-3
                "
              >
                Revenue Trend
              </p>

              <h2
                className="
                  text-2xl
                  font-semibold
                "
              >
                Monthly Revenue
              </h2>

            </div>

            <div className="h-[350px]">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <LineChart
                  data={
                    revenueChartData
                  }
                >

                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#1f2937"
                  />

                  <XAxis
                    dataKey="month"
                    stroke="#9ca3af"
                  />

                  <YAxis
                    stroke="#9ca3af"
                  />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#3b82f6"
                    strokeWidth={4}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* PIE CHART */}

          <div
            className="
              rounded-[30px]
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-7
            "
          >

            <div className="mb-8">

              <p
                className="
                  uppercase
                  tracking-[0.2em]
                  text-xs
                  text-blue-400
                  mb-3
                "
              >
                Invoice Status
              </p>

              <h2
                className="
                  text-2xl
                  font-semibold
                "
              >
                Payment Overview
              </h2>

            </div>

            <div className="h-[350px]">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <PieChart>

                  <Pie
                    data={
                      dynamicStatusData
                    }
                    dataKey="value"
                    nameKey="name"
                    outerRadius={120}
                  >

                    {dynamicStatusData.map(
                      (
                        entry,
                        index
                      ) => (
                        <Cell
                          key={index}
                          fill={
                            COLORS[index]
                          }
                        />
                      )
                    )}

                  </Pie>

                  <Tooltip />

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>

        {/* RECENT INVOICES */}

        <div
          className="
            rounded-[30px]
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            overflow-hidden
          "
        >

          <div
            className="
              px-7 py-6
              border-b border-white/10
            "
          >

            <p
              className="
                uppercase
                tracking-[0.2em]
                text-xs
                text-blue-400
                mb-3
              "
            >
              Financial Records
            </p>

            <h2
              className="
                text-2xl
                font-semibold
              "
            >
              Invoice Breakdown
            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr
                  className="
                    border-b border-white/10
                    text-left
                  "
                >

                  {[
                    "Invoice",
                    "Client",
                    "Status",
                    "Amount",
                    "Date",
                  ].map((item, index) => (
                    <th
                      key={index}
                      className="
                        px-7 py-5
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        text-gray-500
                        font-medium
                      "
                    >
                      {item}
                    </th>
                  ))}

                </tr>

              </thead>

              <tbody>

                {filteredInvoices.map(
                  (invoice) => (

                    <tr
                      key={invoice._id}
                      className="
                        border-b border-white/5
                        hover:bg-white/[0.02]
                        transition
                      "
                    >

                      <td className="px-7 py-5">
                        {
                          invoice.invoiceNumber
                        }
                      </td>

                      <td className="px-7 py-5 text-gray-300">
                        {
                          invoice.clientName
                        }
                      </td>

                      <td className="px-7 py-5">

                        <span
                          className={`
                            px-3 py-1
                            rounded-full
                            text-xs
                            font-medium

                            ${
                              invoice.status ===
                              "Paid"
                                ? "bg-emerald-500/15 text-emerald-400"
                                : invoice.status ===
                                  "Overdue"
                                ? "bg-red-500/15 text-red-400"
                                : invoice.status ===
                                  "Cancelled"
                                ? "bg-gray-500/15 text-gray-400"
                                : "bg-yellow-500/15 text-yellow-400"
                            }
                          `}
                        >
                          {
                            invoice.status
                          }
                        </span>

                      </td>

                      <td className="px-7 py-5">
                        UGX{" "}
                        {Number(
                          invoice.total
                        ).toLocaleString()}
                      </td>

                      <td className="px-7 py-5 text-gray-500">
                        {
                          invoice.issueDate
                        }
                      </td>

                    </tr>
                  )
                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </section>
  );
}