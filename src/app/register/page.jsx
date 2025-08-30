"use client";
import { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMassage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name }),
    });
    const data = await res.json();
    setMassage(data.message || data.error);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* BAGIAN KIRI */}
      <div className="relative flex flex-col justify-center items-center w-full md:w-1/2 px-6 sm:px-10 md:px-16 py-10">
        <div className="absolute top-6 left-6 sm:top-6 sm:left-10">
          <Link href="/">
            <div className="flex flex-row items-center gap-2 sm:gap-3">
              <img src="/logo.svg" alt="logo" className="w-8 sm:w-10" />
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
                TaskFlow
              </h1>
            </div>
          </Link>
        </div>

        <div className="w-full max-w-md pt-10">
          <div className="mb-2 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Create an Account
            </h1>
            <p className="mt-2 text-gray-500 text-sm sm:text-base">
              Register an account to manage projects, track progress, and
              achieve more.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="you@email.com"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full text-gray-700 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 required:"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full text-gray-700 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 required:"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full text-gray-700 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 required:"
              />

              <div className="text-right mt-2">
                <Link href="/forgot-password">
                  <span className="text-sm text-blue-600 hover:underline cursor-pointer">
                    Forgot Your Password?
                  </span>
                </Link>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 text-white py-2 font-medium hover:bg-blue-700 transition"
            >
              Register
            </button>
            {message && <p>{message}</p>}
          </form>
        </div>
        <p className="mt-6 text-center text-gray-600 text-sm">
          Already Have An Account?{" "}
          <Link href="/login">
            <span className="text-blue-600 font-medium hover:underline cursor-pointer">
              Log in
            </span>
          </Link>
        </p>
      </div>

      {/* BAGIAN KANAN */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 sm:px-10 md:px-12 py-10 bg-white">
        <div
          className="w-full max-w-xl text-center md:text-left px-6 sm:px-12 py-10 rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: "url('/login_bg.svg')" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Effortlessly manage your team and operations.
          </h2>
          <p className="mb-8 text-gray-200 text-sm sm:text-base">
            Log in to access your CRM dashboard and manage your team.
          </p>
          <img
            src="/login.svg"
            alt="dashboard preview"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
