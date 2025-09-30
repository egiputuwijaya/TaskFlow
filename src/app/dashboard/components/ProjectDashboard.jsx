"use client";
import { FaRegCalendarAlt } from "react-icons/fa";
import ProgressBar from "./ProgressBar";
import { useEffect, useState } from "react";
import * as motion from "motion/react-client";

export default function ProjectDashboard() {
  const [tasks, setTasks] = useState([]);
  const [showAll, setShowAll] = useState(false);

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

  // pilih 3 teratas jika belum "see all"
  const displayedTasks = showAll ? tasks : tasks.slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className="bg-white flex flex-col gap-2 p-2 rounded-xl"
    >
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-semibold text-gray-900">Active Projects</h1>
        {tasks.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-3 text-blue-500 text-sm hover:underline"
          >
            {showAll ? "See Less" : "See All"}
          </button>
        )}
      </div>

      {displayedTasks.map((task, index) => (
        <div
          className="border rounded-xl overflow-hidden shadow-sm"
          key={index}
        >
          <div className="bg-blue-50 flex flex-col gap-4 rounded-xl p-3 border-l-4 border-green-500">
            <div className="flex flex-row justify-between items-center">
              <div>
                <h1 className="font-semibold text-gray-700">
                  {task.nameTasks}
                </h1>
                <p className="text-sm text-gray-400">
                  {task.typeTasks === "PRODUCT_DESIGN"
                    ? "Product Design"
                    : task.typeTasks === "CONTENT_WRITER"
                    ? "Content Writer"
                    : task.typeTasks === "PROJECT_MANAJER"
                    ? "Project Manager"
                    : task.typeTasks === "GOAL_TRECKER"
                    ? "Goal Tracker"
                    : task.typeTasks === "MEETING_AGENDA"
                    ? "Meeting Agenda"
                    : task.typeTasks === "EVENT_PLANNING"
                    ? "Event Planning"
                    : task.typeTasks === "CONTENT_CALENDAR"
                    ? "Content Calendar"
                    : task.typeTasks === "BUG_TRACKING"
                    ? "Bug Tracking"
                    : task.typeTasks === "WEEKLY_DAYLY"
                    ? "Weekly Daily"
                    : task.typeTasks === "DEVELOPMENT_WORKFLOW"
                    ? "Development Workflow"
                    : task.typeTasks === "CLASS_PLANNING"
                    ? "Class Planning"
                    : task.typeTasks === "OFFICE_MANAGER"
                    ? "Office Manager"
                    : ""}
                </p>
              </div>
              <p
                className={`${
                  task.statusTask === "NOT_STARTED"
                    ? "bg-red-200 text-red-500"
                    : task.statusTask === "IN_PROGRESS"
                    ? "bg-blue-200 text-blue-500"
                    : task.statusTask === "DONE"
                    ? "bg-green-200 text-green-500"
                    : ""
                } text-xs md:text-sm px-3 rounded-2xl`}
              >
                {task.statusTask === "NOT_STARTED"
                  ? "Not Started"
                  : task.statusTask === "IN_PROGRESS"
                  ? "In Progress"
                  : task.statusTask === "DONE"
                  ? "Done"
                  : ""}
              </p>
            </div>
            <div className="flex flex-col text-gray-400 gap-2">
              <ProgressBar
                value={
                  task.statusTask === "NOT_STARTED"
                    ? 0
                    : task.statusTask === "IN_PROGRESS"
                    ? Math.floor(Math.random() * (80 - 40 + 1)) + 40
                    : task.statusTask === "DONE"
                    ? 100
                    : ""
                }
              />
              <div className="flex flex-row items-center gap-2">
                <FaRegCalendarAlt className="text-md" />
                <p className="text-xs">
                  {new Date(task.dueDateTime).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
