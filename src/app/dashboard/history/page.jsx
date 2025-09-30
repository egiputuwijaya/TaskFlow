"use client";

import DashboardLayout from "@/components/DashboardLayout";
import { useState, useEffect } from "react";

export default function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openId, setOpenId] = useState(null);

  // ambil data history dari backend
  useEffect(() => {
    async function fetchHistory() {
      try {
        const res = await fetch("/api/history", {
          credentials: "include",
        });

        if (!res.ok) {
          const errorMessage = await res.text();
          console.error("Gagal fetch history:", errorMessage);
          setHistory([]);
          return;
        }

        const data = await res.json();
        if (Array.isArray(data)) {
          setHistory(data);
        } else {
          setHistory([]);
        }
      } catch (error) {
        console.error("Error fetch history:", error);
        setHistory([]);
      } finally {
        setLoading(false);
      }
    }

    fetchHistory();
  }, []);

  // handle delete history
  async function handleDelete(id) {
    try {
      const res = await fetch(`/api/history/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!res.ok) {
        const errorMessage = await res.text();
        console.error("Gagal hapus history:", errorMessage);
        return;
      }

      // update state setelah delete
      setHistory((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error hapus history:", error);
    }
  }

  return (
    <DashboardLayout>
      <div className="bg-white rounded-2xl min-h-[400px] shadow-md">
        <div className="py-6 px-8">
          <h1 className="text-blue-600 font-semibold text-lg">Your History</h1>
          <div className="border-b border-blue-500 mt-2"></div>

          <div className="py-5 space-y-3">
            {loading ? (
              <p className="text-gray-400">Loading history...</p>
            ) : history.length === 0 ? (
              <p className="text-gray-400">Belum ada history</p>
            ) : (
              history.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-xl overflow-hidden shadow-sm"
                >
                  <div className="flex justify-between items-center text-gray-700 py-3 px-4 hover:bg-blue-50 transition">
                    <h1 className="font-medium">{item.nameTasks}</h1>
                    <div className="flex flex-row gap-4">
                      <button
                        onClick={() =>
                          setOpenId(openId === item.id ? null : item.id)
                        }
                        className="text-sm text-blue-500 hover:underline"
                      >
                        {openId === item.id ? "Tutup" : "Detail"}
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-sm text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  {/* detail section */}
                  {openId === item.id && (
                    <div className="bg-gray-50 px-6 py-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                      <div>
                        <p className="font-semibold">Task Name</p>
                        <p>{item.nameTasks}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Type Task</p>
                        <p className="text-sm text-gray-400">
                          {item.typeTasks === "PRODUCT_DESIGN"
                            ? "Product Design"
                            : item.typeTasks === "CONTENT_WRITER"
                            ? "Content Writer"
                            : item.typeTasks === "PROJECT_MANAJER"
                            ? "Project Manajer"
                            : item.typeTasks === "GOAL_TRECKER"
                            ? "Goal Tracker"
                            : item.typeTasks === "MEETING_AGENDA"
                            ? "Meeting Agenda"
                            : item.typeTasks === "EVENT_PLANNING"
                            ? "Event Planning"
                            : item.typeTasks === "CONTENT_CALENDAR"
                            ? "Content Calendar"
                            : item.typeTasks === "BUG_TRACKING"
                            ? "Bug Tracking"
                            : item.typeTasks === "WEEKLY_DAYLY"
                            ? "Weekly Daily"
                            : item.typeTasks === "DEVELOPMENT_WORKFLOW"
                            ? "Development Workflow"
                            : item.typeTasks === "CLASS_PLANNING"
                            ? "Class Planning"
                            : item.typeTasks === "OFFICE_MANAGER"
                            ? "Office Manager"
                            : ""}
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">Due Date</p>
                        <p>
                          {new Date(item.dueDateTime).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "2-digit",
                            }
                          )}
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">Priority</p>
                        <p>
                          {" "}
                          {item.priority === "LOW"
                            ? "Low"
                            : item.priority === "MEDIUM"
                            ? "Medium"
                            : item.priority === "HIGH"
                            ? "High"
                            : ""}
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">Status</p>
                        <p>
                          {" "}
                          {item.statusTask === "NOT_STARTED"
                            ? "Not Started"
                            : item.statusTask === "IN_PROGRESS"
                            ? "In Progress"
                            : item.statusTask === "DONE"
                            ? "Done"
                            : ""}
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">Description</p>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
