import { useEffect, useState } from "react";

import axios from "../../api/axios";

import {
  DollarSign,
  FileText,
  AlertTriangle,
  Clock3,
  Search,
  Wallet,
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
} from "recharts";

export default function Revenue() {
  const [analytics, setAnalytics] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  /* FILTERS */

  const [fromDate, setFromDate] =
    useState("");

  const [toDate, setToDate] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [clientFilter, setClientFilter] =
    useState("");

  /* FETCH ANALYTICS */

  const fetchAnalytics =
    async () => {
      try {
        setLoading(true);

        const params = {};

        if (fromDate)
          params.from = fromDate;

        if (toDate)
          params.to = toDate;

        if (
          statusFilter &&
          statusFilter !== "All"
        ) {
          params.status =
            statusFilter;
        }

        if (clientFilter) {
          params.client =
            clientFilter;
        }

        const res =
          await axios.get(
            "/revenue/analytics",
            {
              params,
            }
          );

        setAnalytics(res.data);

      } catch (err) {
        console.log(err);

      } finally {
        setLoading(false);
      }
    };

  /* AUTO REFRESH */

  useEffect(() => {
    fetchAnalytics();
  }, [
    fromDate,
    toDate,
    statusFilter,
    clientFilter,
  ]);

  const COLORS = [
    "#3b82f6",
    "#eab308",
    "#ef4444",
    "#6b7280",
  ];

  if (loading || !analytics) {
    return (
      <div className="text-white p-8">
        Loading revenue...
      </div>
    );
  }

  const {
    totals,
    revenueChartData,
    invoiceStatusData,
  } = analytics;

  return (
    <section
      className="
        min-h-screen
        bg-[#050816]
        text-white
      "
    >

      {/* BG */}

      <div
        className="
          fixed
          top-0
          left-1/2
          -translate-x-1/2
          w-[900px]
          h-[900px]
          rounded-full
          bg-blue-500/10
          blur-[180px]
          pointer-events-none
        "
      />

      <div className="relative z-10">

        {/* HEADER */}

        <div
          className="
            flex
            flex-col
            xl:flex-row
            xl:items-center
            xl:justify-between
            gap-5
            mb-7
          "
        >

          <div>

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
              FINANCIAL ANALYTICS
            </p>

            <h1
              className="
                text-3xl
                font-bold
              "
            >
              Revenue Dashboard
            </h1>

          </div>

          {/* FILTERS */}

          <div
            className="
              flex
              flex-wrap
              gap-3
            "
          >

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
                border border-white/10
                rounded-xl
                px-3 py-2
                text-sm
                outline-none
              "
            />

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
                border border-white/10
                rounded-xl
                px-3 py-2
                text-sm
                outline-none
              "
            />

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
                px-3 py-2
                text-sm
                outline-none
              "
            >

              <option>
                All
              </option>

              <option>
                Paid
              </option>

              <option>
                Pending
              </option>

              <option>
                Overdue
              </option>

              <option>
                Cancelled
              </option>

            </select>

            <div className="relative">

              <Search
                size={14}
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-gray-500
                "
              />

              <input
                type="text"
                placeholder="Client..."
                value={clientFilter}
                onChange={(e) =>
                  setClientFilter(
                    e.target.value
                  )
                }
                className="
                  bg-[#0B1220]
                  border border-white/10
                  rounded-xl
                  pl-9
                  pr-3
                  py-2
                  text-sm
                  outline-none
                "
              />

            </div>

          </div>

        </div>

        {/* KPI */}

        <div
          className="
            grid
            grid-cols-2
            xl:grid-cols-5
            gap-4
            mb-6
          "
        >

          {[
            {
              label:
                "Net Profit",
              value: `UGX ${totals.netProfit.toLocaleString()}`,
              icon: (
                <DollarSign
                  size={16}
                />
              ),
              color:
                "text-emerald-400",
            },

            {
              label:
                "Revenue",
              value: `UGX ${totals.grossRevenue.toLocaleString()}`,
              icon: (
                <FileText
                  size={16}
                />
              ),
              color:
                "text-blue-400",
            },

            {
              label:
                "Expenses",
              value: `UGX ${totals.totalExpenses.toLocaleString()}`,
              icon: (
                <Wallet
                  size={16}
                />
              ),
              color:
                "text-red-400",
            },

            {
              label:
                "Pending",
              value:
                totals.pendingInvoices,
              icon: (
                <Clock3
                  size={16}
                />
              ),
              color:
                "text-yellow-400",
            },

            {
              label:
                "Overdue",
              value:
                totals.overdueInvoices,
              icon: (
                <AlertTriangle
                  size={16}
                />
              ),
              color:
                "text-orange-400",
            },
          ].map((item, index) => (

            <div
              key={index}
              className="
                border
                border-white/10
                bg-white/[0.03]
                rounded-2xl
                px-4
                py-4
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between
                  mb-3
                "
              >

                <p
                  className="
                    text-[10px]
                    text-gray-500
                    uppercase
                    tracking-[0.18em]
                  "
                >
                  {item.label}
                </p>

                <div
                  className={item.color}
                >
                  {item.icon}
                </div>

              </div>

              <h2
                className="
                  text-lg
                  font-semibold
                "
              >
                {item.value}
              </h2>

            </div>
          ))}

        </div>

        {/* CHARTS */}

        <div
          className="
            grid
            xl:grid-cols-[1.6fr_380px]
            gap-5
          "
        >

          {/* LINE CHART */}

          <div
            className="
              border border-white/10
              bg-white/[0.03]
              rounded-3xl
              p-5
            "
          >

            <div className="mb-5">

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-blue-400
                  mb-2
                "
              >
                Revenue Trend
              </p>

              <h2
                className="
                  text-lg
                  font-semibold
                "
              >
                Monthly Revenue
              </h2>

            </div>

            <div className="h-[340px]">

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
                    stroke="#6b7280"
                    fontSize={12}
                  />

                  <YAxis
                    stroke="#6b7280"
                    fontSize={12}
                  />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#3b82f6"
                    strokeWidth={3}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* PIE */}

          <div
            className="
              border border-white/10
              bg-white/[0.03]
              rounded-3xl
              p-5
            "
          >

            <div className="mb-5">

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-blue-400
                  mb-2
                "
              >
                Invoice Status
              </p>

              <h2
                className="
                  text-lg
                  font-semibold
                "
              >
                Payment Overview
              </h2>

            </div>

            <div className="h-[280px]">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <PieChart>

                  <Pie
                    data={
                      invoiceStatusData
                    }
                    dataKey="value"
                    nameKey="name"
                    outerRadius={90}
                  >

                    {invoiceStatusData.map(
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

            {/* LEGEND */}

            <div className="space-y-3 mt-4">

              {invoiceStatusData.map(
                (item, index) => (

                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                      "
                    >

                      <div
                        className="
                          w-2.5
                          h-2.5
                          rounded-full
                        "
                        style={{
                          background:
                            COLORS[index],
                        }}
                      />

                      <p
                        className="
                          text-sm
                          text-gray-300
                        "
                      >
                        {item.name}
                      </p>

                    </div>

                    <p
                      className="
                        text-sm
                        text-gray-500
                      "
                    >
                      {item.value}
                    </p>

                  </div>
                )
              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}