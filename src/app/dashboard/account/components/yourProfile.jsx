"use client";

import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";

export default function YourProfile() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordHash, setPasswordHash] = useState("");
  const [createdAt, setCreatedAt] = useState("");

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
      } catch (err) {
        console.log(err);
      }
    }
    fetchUser();
  }, []);

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
          <div className="flex flex-col py-5">
            <p className="text-sm text-gray-500">Password</p>
            <p className="text-sm text-gray-800 font-semibold">
              {passwordHash}
            </p>
          </div>
        </div>
        <div className="">
          <button className="py-1 px-5 rounded bg-orange-500 hover:bg-orange-600">
            <CiEdit className="text-2xl text-white"/>
          </button>
        </div>
      </div>
    </div>
  );
}
