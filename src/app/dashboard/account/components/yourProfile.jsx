"use client";

import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

export default function YourProfile() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordHash, setPasswordHash] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/user", { method: "GET" });
        if (!res.ok) throw new Error("Failed to fetch user");
        const data = await res.json();
        setUserName(data.user.name);
        setEmail(data.user.email);
        setPasswordHash(data.user.passwordHash);
        setCreatedAt(new Date(data.user.createdAt).toLocaleDateString("id-ID"));

        setForm({
          name: data.user.name,
          email: data.user.email,
          password: "",
        });
      } catch (err) {
        console.log(err);
      }
    }
    fetchUser();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/user", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setMessage("Profile updated successfully ✅");
      } else {
        setMessage("Update failed ❌");
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
    setIsOpen(false);
  };

  return (
    <div className="bg-white rounded-2xl flex flex-col ">
      <div className="flex flex-col py-5 px-10">
        <h1 className="text-blue-500 font-semibold">Your Profile</h1>
        <div className="border border-blue-500"></div>
        <div className="grid grid-col-1 md:grid-cols-3 py-4">
          <div className="flex flex-col">
            <p className="text-sm text-gray-500">Name</p>
            <p className="text-sm text-gray-800 font-semibold">{userName}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-sm text-gray-800 font-semibold">{email}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-gray-500">Created At</p>
            <p className="text-sm text-gray-800 font-semibold">{createdAt}</p>
          </div>
        </div>
        <div className="">
          <button
            onClick={() => setIsOpen(true)}
            className="py-1 px-5 rounded bg-orange-500 hover:bg-orange-600"
          >
            {" "}
            <div className="flex flex-row gap-2 items-center">
              <p className="text-sm">Edit Profile</p>
              <CiEdit className="text-2xl text-white" />
            </div>
          </button>
        </div>
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="relative bg-white p-6 rounded-xl shadow-lg max-w-xl w-full">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
              >
                <IoClose size={24} />
              </button>
              <div className="text-center font-semibold text-gray-700 text-xl">
                <h1>Edit your Profile</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="text-gray-400 w-full border px-3 py-2 rounded-lg focus:outline-blue-500"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="text-gray-400 w-full border px-3 py-2 rounded-lg focus:outline-blue-500"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Password{" "}
                      <span className="text-xs text-red-500">
                        (leave blank if not changing)
                      </span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      className="text-gray-400 w-full border px-3 py-2 rounded-lg focus:outline-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    {loading ? "Updating..." : "Update Profile"}
                  </button>
                </div>
              </form>

              {message && (
                <p className="mt-4 text-center text-gray-700">{message}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
