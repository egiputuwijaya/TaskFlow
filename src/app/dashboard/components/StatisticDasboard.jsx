"use client";
import { useEffect, useState } from "react";
import TaskProfileChart from "./taskProfileChart";

export default function StatisticDashboard() {
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState({
    notStarted: 0,
    inProgress: 0,
    done: 0,
  });

  // Ambil data tasks dari API
  useEffect(() => {
    async function fetchTasks() {
      try {
        const res = await fetch("/api/tasks", {
          credentials: "include",
        });
        if (!res.ok) {
          console.error("Gagal fetch tasks", await res.text());
          return;
        }
        const data = await res.json();
        if (Array.isArray(data)) {
          setTasks(data);
        } else {
          setTasks([]);
        }
      } catch (error) {
        console.log("Error fetch tasks", error);
      }
    }
    fetchTasks();
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      const total = tasks.length;
      const notStarted = tasks.filter(
        (t) => t.statusTask === "NOT_STARTED"
      ).length;
      const inProgress = tasks.filter(
        (t) => t.statusTask === "IN_PROGRESS"
      ).length;
      const done = tasks.filter((t) => t.statusTask === "DONE").length;

      setStatus({
        notStarted: Math.round((notStarted / total) * 100),
        inProgress: Math.round((inProgress / total) * 100),
        done: Math.round((done / total) * 100),
      });
    }
  }, [tasks]);

  return (
    <div className="py-5">
      <div className="bg-white rounded-xl py-3 px-10">
        <h1 className="text-blue-500 font-semibold">Your Statistic</h1>
        <div className="border border-blue-500"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 justify-self-center py-4 gap-6">
          <div className="flex flex-col items-center">
            <TaskProfileChart value={status.notStarted} color="#FFC107" />
            <h1 className="text-sm text-gray-500 mt-2">Not Started</h1>
          </div>

          <div className="flex flex-col items-center">
            <TaskProfileChart value={status.inProgress} color="#FFC107" />
            <h1 className="text-sm text-gray-500 mt-2">In Progress</h1>
          </div>

          <div className="flex flex-col items-center">
            <TaskProfileChart value={status.done} color="#FFC107" />
            <h1 className="text-sm text-gray-500 mt-2">Done</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
