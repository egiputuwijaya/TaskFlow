"use client";
import { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";

export default function ItemAllTasks() {
  const [tasks, setTasks] = useState([]);

  // Ambil semua task user login
  useEffect(() => {
    async function fetchTasks() {
      try {
        const res = await fetch("/api/tasks", {
          credentials: "include",
        });
        if (!res.ok) {
          console.error("Gagal fetch tasks:", await res.text());
          return;
        }
        const data = await res.json();
        if (Array.isArray(data)) {
          setTasks(data);
        } else {
          setTasks([]);
        }
      } catch (err) {
        console.error("Error fetch tasks:", err);
      }
    }
    fetchTasks();
  }, []);

  // Tambah task baru
  const handleTambah = async () => {
    const newTask = {
      nameTasks: "New Task",
      typeTasks: "DEVELOPMENT_WORKFLOW", // sesuai enum Prisma
      dueDateTime: new Date().toISOString(),
      priority: "LOW",
      statusTask: "NOT_STARTED",
      description: "",
    };

    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(newTask),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("❌ Tambah task gagal:", errorText);
        return;
      }

      const created = await res.json();
      setTasks((prev) => [...prev, created]);
    } catch (err) {
      console.error("🔥 Error fetch:", err);
    }
  };

  // Update task
  const handleChange = async (index, e) => {
    const { name, value } = e.target;
    const updatedTasks = [...tasks];

    if (name === "dueDateTime") {
      updatedTasks[index][name] = new Date(value + "T00:00:00").toISOString();
    } else {
      updatedTasks[index][name] = value;
    }

    setTasks(updatedTasks);

    const taskId = updatedTasks[index].id;
    if (taskId) {
      const res = await fetch(`/api/tasks/${taskId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTasks[index]),
      });

      if (!res.ok) {
        console.error("❌ Update task gagal:", await res.text());
      }
    }
  };

  // Hapus task yang dicentang
  const deleteChecked = async () => {
    const toDelete = tasks.filter((task) => task.checked);
    for (const task of toDelete) {
      if (task.id) {
        await fetch(`/api/tasks/${task.id}`, { method: "DELETE" });
      }
    }
    setTasks(tasks.filter((task) => !task.checked));
  };

  // Toggle checkbox
  const toggleCheck = (index) => {
    const newTasks = [...tasks];
    newTasks[index].checked = !newTasks[index].checked;
    setTasks(newTasks);
  };

  return (
    <div className="overflow-x-auto max-w-6xl">
      <table className="table-auto border-collapse border-gray-300 w-full text-sm text-gray-700">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 w-10"></th>
            <th className="px-4 py-2 w-10"></th>
            <th className="px-4 py-2">Task Name</th>
            <th className="px-4 py-2">Type Task</th>
            <th className="px-4 py-2">Due Date</th>
            <th className="px-4 py-2">Priority</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id || index} className="border-gray-300 group">
              <td className="text-center">
                {task.checked && (
                  <button
                    onClick={deleteChecked}
                    className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex flex-row items-center gap-2"
                  >
                    <FaRegTrashAlt className="text-white" />
                  </button>
                )}
              </td>
              <td className="text-center">
                <input
                  type="checkbox"
                  checked={task.checked || false}
                  onChange={() => toggleCheck(index)}
                  className={`w-5 h-5 text-blue-600 border-gray-300 rounded 
                    ${
                      task.checked
                        ? "inline-block"
                        : "hidden group-hover:inline-block"
                    } 
                    transition-all`}
                />
              </td>
              <td className="border-y border-gray-300">
                <input
                  type="text"
                  name="nameTasks"
                  value={task.nameTasks || ""}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full h-full focus:outline-none rounded-none"
                />
              </td>
              <td className="border border-gray-300 px-3 py-2">
                <select
                  name="typeTasks"
                  value={task.typeTasks || ""}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full h-full focus:outline-none rounded-none border-none px-2"
                >
                  {/* ✅ enum sesuai Prisma */}
                  <option value="PRODUCT_DESIGN">Product Design</option>
                  <option value="CONTENT_WRITER">Content Writer</option>
                  <option value="PROJECT_MANAJER">Project Manager</option>
                  <option value="GOAL_TRECKER">Goal Tracker</option>
                  <option value="MEETING_AGENDA">Meeting Agenda</option>
                  <option value="EVENT_PLANNING">Event Planning</option>
                  <option value="CONTENT_CALENDAR">Content Calendar</option>
                  <option value="BUG_TRACKING">Bug Tracking</option>
                  <option value="WEEKLY_DAYLY">Weekly/Daily</option>
                  <option value="DEVELOPMENT_WORKFLOW">
                    Development Workflow
                  </option>
                  <option value="CLASS_PLANNING">Class Planning</option>
                  <option value="OFFICE_MANAGER">Office Manager</option>
                </select>
              </td>
              <td className="border border-gray-300 px-3 py-2">
                <input
                  type="date"
                  name="dueDateTime"
                  value={
                    task.dueDateTime
                      ? new Date(task.dueDateTime).toISOString().split("T")[0]
                      : ""
                  }
                  onChange={(e) => handleChange(index, e)}
                  className="w-full h-full focus:outline-none rounded-none"
                />
              </td>
              <td className="border border-gray-300 px-3 py-2">
                <select
                  name="priority"
                  value={task.priority || "LOW"}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full h-full focus:outline-none rounded-none border-none px-2"
                >
                  <option value="LOW">Low</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="HIGH">High</option>
                </select>
              </td>
              <td className="border border-gray-300 px-3 py-2">
                <select
                  name="statusTask"
                  value={task.statusTask || "NOT_STARTED"}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full h-full focus:outline-none rounded-none border-none px-2"
                >
                  <option value="NOT_STARTED">Not Started</option>
                  <option value="IN_PROGRESS">In Progress</option>
                  <option value="DONE">Done</option>
                </select>
              </td>
              <td className="border border-gray-300 px-3 py-2">
                <input
                  type="text"
                  name="description"
                  value={task.description || ""}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Description"
                  className="w-full h-full focus:outline-none rounded-none"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex flex-row gap-2 items-center text-gray-400 py-3">
        <FiPlus />
        <button onClick={handleTambah}>Tugas Baru</button>
      </div>
    </div>
  );
}
