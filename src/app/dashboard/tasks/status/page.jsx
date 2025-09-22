"use client";
import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";

export default function TaskBoard() {
  const [tasks, setTasks] = useState([]);
  const [draggedTask, setDraggedTask] = useState(null);

  // Ambil semua task user login
  useEffect(() => {
    async function fetchTask() {
      try {
        const res = await fetch("/api/tasks", { credentials: "include" });
        if (!res.ok) {
          console.error("Gagal fetch tasks", await res.text());
          return;
        }
        const data = await res.json();
        setTasks(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetch tasks", error);
      }
    }
    fetchTask();
  }, []);

  // Tambah task baru
  const handleTambah = async (statusTask = "NOT_STARTED") => {
    const newTask = {
      nameTasks: "New Task",
      typeTasks: "DEVELOPMENT_WORKFLOW",
      dueDateTime: new Date().toISOString(),
      priority: "LOW",
      statusTask, // ✅ pakai statusTask
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
  const handleChange = async (statusTask, localIndex, e) => {
    const { name, value } = e.target;
    const updatedTasks = [...tasks];
    const task = updatedTasks.filter((t) => t.statusTask === statusTask)[
      localIndex
    ];

    if (!task) return;

    if (name === "dueDateTime") {
      task[name] = new Date(value + "T00:00:00").toISOString();
    } else {
      task[name] = value;
    }

    setTasks(updatedTasks);

    if (task.id) {
      // kirim hanya field yang valid
      const payload = {
        nameTasks: task.nameTasks,
        typeTasks: task.typeTasks,
        priority: task.priority,
        description: task.description,
        statusTask: task.statusTask,
        ...(task.dueDateTime ? { dueDateTime: task.dueDateTime } : {}), // kalau ada dueDateTime baru
      };

      const res = await fetch(`/api/tasks/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) console.error("❌ Update task gagal:", await res.text());
    }
  };

  const handleToggle = (statusTask, localIndex) => {
    setTasks(
      tasks.map((t) => {
        if (
          t.statusTask === statusTask &&
          tasks.filter((x) => x.statusTask === statusTask).indexOf(t) ===
            localIndex
        ) {
          return { ...t, expanded: !t.expanded };
        }
        return t;
      })
    );
  };

  const deleteTask = async (statusTask, localIndex) => {
    const taskToDelete = tasks.filter((t) => t.statusTask === statusTask)[
      localIndex
    ];
    if (!taskToDelete?.id) return;

    try {
      // Hapus di backend
      const res = await fetch(`/api/tasks/${taskToDelete.id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!res.ok) {
        console.error("❌ Gagal hapus task:", await res.text());
        return;
      }

      // Hapus di frontend (optimistic UI)
      setTasks(tasks.filter((t) => t.id !== taskToDelete.id));
    } catch (err) {
      console.error("🔥 Error hapus task:", err);
    }
  };

  // Drag & drop
  const handleDragStart = (task) => setDraggedTask(task);
  const handleDrop = async (statusTask) => {
    if (draggedTask) {
      const updated = { ...draggedTask, statusTask };

      // Update frontend dulu (optimistic UI)
      setTasks(tasks.map((t) => (t.id === draggedTask.id ? updated : t)));
      setDraggedTask(null);

      try {
        // Update backend
        const res = await fetch(`/api/tasks/${draggedTask.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ statusTask }),
        });

        if (!res.ok) {
          console.error("❌ Gagal update status:", await res.text());
        }
      } catch (err) {
        console.error("🔥 Error update status:", err);
      }
    }
  };

  const totalTask = tasks.length;

  return (
    <div className="">
      <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-xl shadow-md p-5 flex items-center justify-between mb-5">
        <div className="flex flex-col">
          <p className="text-sm font-medium opacity-80">Total Tasks</p>
          <p className="text-3xl font-bold">{totalTask}</p>
        </div>
        <div className="bg-white/20 rounded-full p-3 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-white animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m2 4H7m10-8H7m6 12a9 9 0 100-18 9 9 0 000 18z"
            />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {["NOT_STARTED", "IN_PROGRESS", "DONE"].map((statusTask) => (
          <TaskColumn
            key={statusTask}
            title={statusTask.replace("_", " ").toLowerCase()}
            statusTask={statusTask}
            color={
              statusTask === "NOT_STARTED"
                ? "red"
                : statusTask === "IN_PROGRESS"
                ? "blue"
                : "green"
            }
            tasks={tasks}
            handleTambah={() => handleTambah(statusTask)}
            handleToggle={handleToggle}
            handleChange={handleChange}
            deleteTask={deleteTask}
            handleDragStart={handleDragStart}
            handleDrop={handleDrop}
          />
        ))}
      </div>
    </div>
  );
}

function TaskColumn({
  title,
  color,
  statusTask,
  tasks,
  handleTambah,
  handleToggle,
  handleChange,
  deleteTask,
  handleDragStart,
  handleDrop,
}) {
  const filtered = tasks.filter((t) => t.statusTask === statusTask);
  return (
    <div className="">
      <div
        className={`bg-${color}-200 flex flex-col gap-2 p-4 rounded-2xl min-h-[200px]`}
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => handleDrop(statusTask)}
      >
        <div className="flex flex-row gap-3 items-center">
          <div className={`bg-${color}-500 px-2 py-1 rounded-2xl`}>
            <h1 className="text-white font-semibold capitalize">{title}</h1>
          </div>
          <p className="text-gray-500">{filtered.length}</p>
        </div>

        {filtered.map((task, localIndex) => (
          <div
            key={task.id || localIndex}
            className="flex flex-row gap-2 items-start"
            draggable
            onDragStart={() => handleDragStart(task)}
          >
            <div className="flex-1 bg-white border rounded p-2">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-700">
                  {task.nameTasks}
                </h3>
                <button
                  onClick={() => handleToggle(task.statusTask, localIndex)}
                  className="text-sm text-blue-500 hover:underline"
                >
                  {task.expanded ? "Tutup" : "Edit"}
                </button>
              </div>
              {task.expanded && (
                <div className="mt-2 flex flex-col gap-2">
                  <input
                    type="text"
                    name="nameTasks"
                    value={task.nameTasks}
                    onChange={(e) =>
                      handleChange(task.statusTask, localIndex, e)
                    }
                    className="w-full focus:outline-none border-b text-gray-400"
                    placeholder="Task Name"
                  />
                  <select
                    name="typeTasks"
                    value={task.typeTasks}
                    onChange={(e) =>
                      handleChange(task.statusTask, localIndex, e)
                    }
                    className="w-full text-gray-400"
                  >
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
                  <input
                    type="date"
                    name="dueDateTime"
                    value={task.dueDateTime?.split("T")[0]}
                    onChange={(e) =>
                      handleChange(task.statusTask, localIndex, e)
                    }
                    className="w-full text-gray-400"
                  />
                  <select
                    name="priority"
                    value={task.priority}
                    onChange={(e) =>
                      handleChange(task.statusTask, localIndex, e)
                    }
                    className="w-full text-gray-400"
                  >
                    <option value="LOW">Low</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HIGH">High</option>
                  </select>
                  <textarea
                    name="description"
                    value={task.description}
                    onChange={(e) =>
                      handleChange(task.statusTask, localIndex, e)
                    }
                    className="w-full text-gray-400 border p-1 border-gray-400 focus:outline-none rounded-md"
                    placeholder="Description"
                  />
                </div>
              )}
            </div>
            <button
              onClick={() => deleteTask(task.statusTask, localIndex)}
              className="h-fit px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex flex-row items-center gap-2"
            >
              <FaRegTrashAlt />
            </button>
          </div>
        ))}

        <div
          onClick={handleTambah}
          className="flex flex-row gap-2 items-center text-gray-500 py-2 px-2 cursor-pointer hover:text-blue-500"
        >
          <FiPlus />
          <span>Tugas Baru</span>
        </div>
      </div>
    </div>
  );
}
