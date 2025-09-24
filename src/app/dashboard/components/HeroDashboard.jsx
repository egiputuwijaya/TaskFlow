"use client"
import Link from "next/link";
import { PiFinnTheHumanLight } from "react-icons/pi";
import { FiBookOpen } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function HeroDashboard() {
  const [username, setUserName] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/user", { method: "GET" });
        if (!res.ok) throw new Error("Failed to fetch user");
        const data = await res.json();
        setUserName(data.user);
      } catch (err) {
        console.error(err);
      }
    }
    fetchUser();
  }, []);

  return (
    <div className="p-5 rounded-2xl bg-gradient-to-br from-pink-500 via-blue-500 to-purple-300">
      <div className="flex flex-col gap-3 md:gap-10">
        <div className="flex flex-row gap-5">
          <div className="flex flex-row gap-3 items-center bg-white/20 px-5 py-1 rounded-2xl">
            <PiFinnTheHumanLight className="text-md" />
            <h1 className="text-sm">
              Welcome back, {username ? username.name : "Loading..."}
            </h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-3xl font-semibold">
              Ready to create something amazing today?
            </h1>
            <p>
              Your Taskflow AI task studio is ready. Let's turn your task into
              reality.
            </p>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <Link href="/">
              <div className="flex flex-row items-center gap-2">
                <FiBookOpen className="text-xl" />
                <h1 className="text- font-thin">View Tutorials</h1>
              </div>
            </Link>
            <Link href="/">
              <div className="bg-white/90 rounded-xl flex flex-row items-center px-3 py-1 gap-2">
                <h1 className="text-md font-thin text-blue-500">
                  Start Your Task
                </h1>
                <FaArrowRight className="text-md text-blue-500" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
