import { useEffect, useMemo, useState } from "react";

import axios from "../../api/axios";

import { toast } from "sonner";

import {
  Wallet,
  Trash2,
  Receipt,
  Landmark,
} from "lucide-react";

export default function Expenses() {

  const [expenses, setExpenses] =
    useState([]);

  const [form, setForm] =
    useState({
      title: "",
      category: "",
      amount: "",
      vendor: "",
      paymentMethod: "",
      expenseDate: "",
      notes: "",
    });

  /* FETCH */

  const fetchExpenses =
    async () => {
      try {

        const res =
          await axios.get(
            "/expenses"
          );

        setExpenses(res.data);

      } catch (err) {

        console.log(err);
      }
    };

  useEffect(() => {
    fetchExpenses();
  }, []);

  /* HANDLE CHANGE */

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  /* CREATE */

  const createExpense =
    async (e) => {

      e.preventDefault();

      try {

        await axios.post(
          "/expenses",
          {
            ...form,
            amount:
              Number(
                form.amount
              ),
          }
        );

        toast.success(
          "Expense added"
        );

        setForm({
          title: "",
          category: "",
          amount: "",
          vendor: "",
          paymentMethod: "",
          expenseDate: "",
          notes: "",
        });

        fetchExpenses();

      } catch (err) {

        console.log(err);

        toast.error(
          "Failed to add expense"
        );
      }
    };

  /* DELETE */

  const deleteExpense =
    async (id) => {

      try {

        await axios.delete(
          `/expenses/${id}`
        );

        toast.success(
          "Expense deleted"
        );

        fetchExpenses();

      } catch (err) {

        console.log(err);

        toast.error(
          "Delete failed"
        );
      }
    };

  /* TOTAL */

  const totalExpenses =
    useMemo(() => {

      return expenses.reduce(
        (acc, item) =>
          acc + item.amount,
        0
      );

    }, [expenses]);

  return (
    <section
      className="
        min-h-screen
        bg-[#050816]
        text-white
        p-6
      "
    >

      {/* HEADER */}

      <div className="mb-8">

        <p
          className="
            uppercase
            tracking-[0.25em]
            text-[11px]
            text-blue-400
            font-semibold
            mb-3
          "
        >
          OPERATIONAL COSTS
        </p>

        <h1
          className="
            text-3xl
            font-bold
          "
        >
          Expenses
          <span className="text-blue-500">
            {" "}Manager
          </span>
        </h1>

      </div>

      {/* TOP */}

      <div
        className="
          grid
          xl:grid-cols-[380px_1fr]
          gap-6
        "
      >

        {/* FORM */}

        <form
          onSubmit={
            createExpense
          }
          className="
            rounded-[26px]
            border border-white/10
            bg-white/[0.03]
            p-5
            space-y-4
            h-fit
          "
        >

          <div className="flex items-center gap-3 mb-4">

            <div
              className="
                w-11 h-11
                rounded-2xl
                bg-blue-500/10
                flex items-center
                justify-center
                text-blue-400
              "
            >
              <Wallet size={20} />
            </div>

            <div>

              <p className="text-sm font-medium">
                Add Expense
              </p>

              <p className="text-xs text-gray-500">
                Track company spending
              </p>

            </div>

          </div>

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Expense title"
            className="
              w-full
              bg-[#0B1220]
              border border-white/5
              rounded-2xl
              px-4 py-3
              text-sm
              outline-none
            "
          />

          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Category"
            className="
              w-full
              bg-[#0B1220]
              border border-white/5
              rounded-2xl
              px-4 py-3
              text-sm
              outline-none
            "
          />

          <input
            name="amount"
            type="number"
            value={form.amount}
            onChange={handleChange}
            placeholder="Amount"
            className="
              w-full
              bg-[#0B1220]
              border border-white/5
              rounded-2xl
              px-4 py-3
              text-sm
              outline-none
            "
          />

          <input
            name="vendor"
            value={form.vendor}
            onChange={handleChange}
            placeholder="Vendor / Supplier"
            className="
              w-full
              bg-[#0B1220]
              border border-white/5
              rounded-2xl
              px-4 py-3
              text-sm
              outline-none
            "
          />

          <input
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
            placeholder="Payment Method"
            className="
              w-full
              bg-[#0B1220]
              border border-white/5
              rounded-2xl
              px-4 py-3
              text-sm
              outline-none
            "
          />

          <input
            name="expenseDate"
            type="date"
            value={
              form.expenseDate
            }
            onChange={handleChange}
            className="
              w-full
              bg-[#0B1220]
              border border-white/5
              rounded-2xl
              px-4 py-3
              text-sm
              outline-none
            "
          />

          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Notes"
            rows={4}
            className="
              w-full
              bg-[#0B1220]
              border border-white/5
              rounded-2xl
              px-4 py-3
              text-sm
              outline-none
              resize-none
            "
          />

          <button
            className="
              w-full
              bg-blue-600
              hover:bg-blue-500
              transition
              rounded-2xl
              py-3
              text-sm
              font-medium
            "
          >
            Save Expense
          </button>

        </form>

        {/* RIGHT */}

        <div className="space-y-5">

          {/* TOTAL */}

          <div
            className="
              rounded-[26px]
              border border-white/10
              bg-white/[0.03]
              p-5
              flex
              items-center
              justify-between
            "
          >

            <div>

              <p className="text-gray-500 text-sm">
                Total Expenses
              </p>

              <h2
                className="
                  text-3xl
                  font-bold
                  mt-2
                "
              >
                UGX {totalExpenses}
              </h2>

            </div>

            <div
              className="
                w-14 h-14
                rounded-2xl
                bg-red-500/10
                flex
                items-center
                justify-center
                text-red-400
              "
            >
              <Landmark size={24} />
            </div>

          </div>

          {/* TABLE */}

          <div
            className="
              rounded-[26px]
              border border-white/10
              bg-white/[0.03]
              overflow-hidden
            "
          >

            <div
              className="
                px-5 py-4
                border-b border-white/10
              "
            >

              <p
                className="
                  uppercase
                  tracking-[0.2em]
                  text-[11px]
                  text-blue-400
                  mb-2
                "
              >
                Expense Records
              </p>

              <h2 className="text-lg font-semibold">
                Company Spending
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
                      "Expense",
                      "Category",
                      "Amount",
                      "Date",
                      "Actions",
                    ].map(
                      (
                        item,
                        index
                      ) => (
                        <th
                          key={index}
                          className="
                            px-5 py-4
                            text-[11px]
                            uppercase
                            tracking-[0.15em]
                            text-gray-500
                            font-medium
                          "
                        >
                          {item}
                        </th>
                      )
                    )}

                  </tr>

                </thead>

                <tbody>

                  {expenses.map(
                    (expense) => (

                      <tr
                        key={
                          expense._id
                        }
                        className="
                          border-b border-white/5
                          hover:bg-white/[0.02]
                        "
                      >

                        <td className="px-5 py-4">

                          <div className="flex items-center gap-3">

                            <div
                              className="
                                w-10 h-10
                                rounded-xl
                                bg-blue-500/10
                                flex
                                items-center
                                justify-center
                                text-blue-400
                              "
                            >
                              <Receipt size={17} />
                            </div>

                            <div>

                              <p className="text-sm font-medium">
                                {expense.title}
                              </p>

                              <p className="text-xs text-gray-500">
                                {expense.vendor}
                              </p>

                            </div>

                          </div>

                        </td>

                        <td className="px-5 py-4">

                          <span
                            className="
                              px-3 py-1
                              rounded-full
                              bg-white/5
                              text-xs
                            "
                          >
                            {
                              expense.category
                            }
                          </span>

                        </td>

                        <td className="px-5 py-4 text-red-400 font-medium">
                          UGX {expense.amount}
                        </td>

                        <td className="px-5 py-4 text-gray-400 text-sm">
                          {
                            expense.expenseDate
                          }
                        </td>

                        <td className="px-5 py-4">

                          <button
                            onClick={() =>
                              deleteExpense(
                                expense._id
                              )
                            }
                            className="
                              text-red-400
                              hover:text-red-300
                              transition
                            "
                          >
                            <Trash2 size={17} />
                          </button>

                        </td>

                      </tr>
                    )
                  )}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}