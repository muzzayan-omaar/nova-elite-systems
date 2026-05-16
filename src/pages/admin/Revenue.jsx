import { useEffect, useState } from "react";

import axios from "../../api/axios";

import {
  DollarSign,
  FileText,
  AlertTriangle,
  Clock3,
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
  } = analytics;

  const COLORS = [
    "#3b82f6",
    "#eab308",
    "#ef4444",
    "#6b7280",
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
              title: "Total Revenue",
              value: `UGX ${totals.totalRevenue}`,
              icon: (
                <DollarSign size={20} />
              ),
              color:
                "text-emerald-400",
            },

            {
              title: "Paid Invoices",
              value:
                totals.paidInvoices,
              icon: (
                <FileText size={20} />
              ),
              color:
                "text-blue-400",
            },

            {
              title: "Pending",
              value:
                totals.pendingInvoices,
              icon: (
                <Clock3 size={20} />
              ),
              color:
                "text-yellow-400",
            },

            {
              title: "Overdue",
              value:
                totals.overdueInvoices,
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
                      invoiceStatusData
                    }
                    dataKey="value"
                    nameKey="name"
                    outerRadius={120}
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

            <div className="mt-5 space-y-3">

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

                    <div className="flex items-center gap-3">

                      <div
                        className="
                          w-3 h-3 rounded-full
                        "
                        style={{
                          background:
                            COLORS[index],
                        }}
                      />

                      <span className="text-sm text-gray-300">
                        {item.name}
                      </span>

                    </div>

                    <span className="text-sm text-gray-400">
                      {item.value}
                    </span>

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