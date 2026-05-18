import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import axios from "../../api/axios";

import {
  ShieldCheck,
  LockKeyhole,
} from "lucide-react";

import { toast } from "sonner";

export default function AdminLogin() {

  /* =========================
     STATE
  ========================= */

  const [email, setEmail] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  const [loading,
    setLoading] =
    useState(false);

  const navigate =
    useNavigate();

  /* =========================
     LOGIN
  ========================= */

  const handleLogin =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        const res =
          await axios.post(
            "/admin/auth/login",
            {
              email,
              password,
            }
          );

        /* SAVE TOKEN */

        localStorage.setItem(
          "adminToken",
          res.data.token
        );

        localStorage.setItem(
          "adminData",
          JSON.stringify(
            res.data.admin
          )
        );

        toast.success(
          "Login successful"
        );

        navigate("/admin");

      } catch (err) {

        console.log(err);

        toast.error(
          err.response?.data
            ?.message ||
          "Login failed"
        );

      } finally {

        setLoading(false);
      }
    };

  return (
    <section
      className="
        min-h-screen
        bg-[#050816]
        flex
        items-center
        justify-center
        px-6
        text-white
        relative
        overflow-hidden
      "
    >

      {/* BG */}

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-blue-500/10
          blur-[140px]
        "
      />

      {/* CARD */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-md
          rounded-[32px]
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-2xl
          p-8
        "
      >

        {/* TOP */}

        <div className="mb-8">

          <div
            className="
              w-16 h-16
              rounded-3xl
              bg-blue-500/10
              border border-blue-500/20
              flex items-center justify-center
              text-blue-400
              mb-6
            "
          >
            <ShieldCheck
              size={30}
            />
          </div>

          <p
            className="
              uppercase
              tracking-[0.25em]
              text-[10px]
              text-blue-400
              mb-3
            "
          >
            ADMIN ACCESS
          </p>

          <h1
            className="
              text-3xl
              font-bold
            "
          >
            Admin Login
          </h1>

        </div>

        {/* FORM */}

        <form
          onSubmit={
            handleLogin
          }
          className="space-y-6"
        >

          {/* EMAIL */}

          <div>

            <label
              className="
                text-sm
                text-gray-400
                block
                mb-2
              "
            >
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              placeholder="admin@novaelite.com"
              className="
                w-full
                h-[56px]
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                px-5
                outline-none
                focus:border-blue-500/40
              "
            />

          </div>

          {/* PASSWORD */}

          <div>

            <label
              className="
                text-sm
                text-gray-400
                block
                mb-2
              "
            >
              Password
            </label>

            <div className="relative">

              <LockKeyhole
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
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                placeholder="••••••••"
                className="
                  w-full
                  h-[56px]
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  pl-12
                  pr-5
                  outline-none
                  focus:border-blue-500/40
                "
              />

            </div>

          </div>

          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              h-[56px]
              rounded-2xl
              bg-blue-600
              hover:bg-blue-500
              transition
              font-medium
              shadow-[0_0_30px_rgba(59,130,246,0.25)]
            "
          >
            {
              loading
                ? "Signing in..."
                : "Login"
            }
          </button>

        </form>

      </div>

    </section>
  );
}