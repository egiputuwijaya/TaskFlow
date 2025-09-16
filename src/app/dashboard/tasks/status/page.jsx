"use client";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";

export default function TaskBoard() {
  const [tasks, setTasks] = useState([]);
  const [draggedTask, setDraggedTask] = useState(null);

  const handleTambah = (status) => {
    setTasks([
      ...tasks,
      {
        name: "Tugas Saya",
        type: "",
        dueDate: "",
        timeDue: "",
        priority: "",
        status,
        description: "",
        expanded: false,
      },
    ]);
  };

  const handleToggle = (status, localIndex) => {
    setTasks(
      tasks.map((t, i) => {
        if (
          t.status === status &&
          tasks.filter((x) => x.status === status).indexOf(t) === localIndex
        ) {
          return { ...t, expanded: !t.expanded };
        }
        return t;
      })
    );
  };

  const handleChange = (status, localIndex, e) => {
    const { name, value } = e.target;
    setTasks(
      tasks.map((t, i) => {
        if (
          t.status === status &&
          tasks.filter((x) => x.status === status).indexOf(t) === localIndex
        ) {
          return { ...t, [name]: value };
        }
        return t;
      })
    );
  };

  const deleteTask = (status, localIndex) => {
    setTasks(
      tasks.filter((t, i) => {
        if (
          t.status === status &&
          tasks.filter((x) => x.status === status).indexOf(t) === localIndex
        ) {
          return false;
        }
        return true;
      })
    );
  };

  // saat mulai drag
  const handleDragStart = (task) => {
    setDraggedTask(task);
  };

  // saat drop ke kolom lain
  const handleDrop = (status) => {
    if (draggedTask) {
      setTasks(tasks.map((t) => (t === draggedTask ? { ...t, status } : t)));
      setDraggedTask(null);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {/* NOT STARTED */}
      <TaskColumn
        title="not started"
        color="red"
        tasks={tasks}
        handleTambah={handleTambah}
        handleToggle={handleToggle}
        handleChange={handleChange}
        deleteTask={deleteTask}
        handleDragStart={handleDragStart}
        handleDrop={handleDrop}
      />

      {/* IN PROGRESS */}
      <TaskColumn
        title="in progress"
        color="blue"
        tasks={tasks}
        handleTambah={handleTambah}
        handleToggle={handleToggle}
        handleChange={handleChange}
        deleteTask={deleteTask}
        handleDragStart={handleDragStart}
        handleDrop={handleDrop}
      />

      {/* DONE */}
      <TaskColumn
        title="done"
        color="green"
        tasks={tasks}
        handleTambah={handleTambah}
        handleToggle={handleToggle}
        handleChange={handleChange}
        deleteTask={deleteTask}
        handleDragStart={handleDragStart}
        handleDrop={handleDrop}
      />
    </div>
  );
}

function TaskColumn({
  title,
  color,
  tasks,
  handleTambah,
  handleToggle,
  handleChange,
  deleteTask,
  handleDragStart,
  handleDrop,
}) {
  const filtered = tasks.filter((t) => t.status === title);

  return (
    <div
      className={`bg-${color}-100 flex flex-col gap-2 p-4 rounded-2xl min-h-[200px]`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => handleDrop(title)}
    >
      {/* HEADER */}
      <div className="flex flex-row gap-3 items-center">
        <div className={`bg-${color}-500 px-2 py-1 rounded-2xl`}>
          <h1 className="text-white font-semibold capitalize">{title}</h1>
        </div>
        <p className="text-gray-500">{filtered.length}</p>
      </div>

      {/* TASKS LIST */}
      {filtered.map((task, localIndex) => (
        <div
          className="flex flex-row gap-2 items-start"
          key={localIndex}
          draggable
          onDragStart={() => handleDragStart(task)}
        >
          {/* CARD TUGAS */}
          <div className="flex-1 bg-white border rounded p-2">
            {/* Judul & tombol expand */}
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-700">{task.name}</h3>
              <button
                onClick={() => handleToggle(title, localIndex)}
                className="text-sm text-blue-500 hover:underline"
              >
                {task.expanded ? "Tutup" : "Edit"}
              </button>
            </div>

            {/* Expand form */}
            {task.expanded && (
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  value={task.name}
                  onChange={(e) => handleChange(title, localIndex, e)}
                  className="w-full focus:outline-none border-b mb-2"
                  placeholder="Task Name"
                />
                <select
                  name="type"
                  value={task.type}
                  onChange={(e) => handleChange(title, localIndex, e)}
                  className="w-full mb-2"
                >
                  <option value="">Select Type</option>
                  <option value="development">Development</option>
                  <option value="design">Design</option>
                  <option value="testing">Testing</option>
                </select>
                <input
                  type="date"
                  name="dueDate"
                  value={task.dueDate}
                  onChange={(e) => handleChange(title, localIndex, e)}
                  className="w-full mb-2"
                />
                <input
                  type="time"
                  name="timeDue"
                  value={task.timeDue}
                  onChange={(e) => handleChange(title, localIndex, e)}
                  className="w-full mb-2"
                />
                <select
                  name="priority"
                  value={task.priority}
                  onChange={(e) => handleChange(title, localIndex, e)}
                  className="w-full mb-2"
                >
                  <option value="">Priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                <textarea
                  name="description"
                  value={task.description}
                  onChange={(e) => handleChange(title, localIndex, e)}
                  className="w-full"
                  placeholder="Description"
                />
              </div>
            )}
          </div>

          {/* BUTTON HAPUS */}
          <button
            onClick={() => deleteTask(title, localIndex)}
            className="h-fit px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex flex-row items-center gap-2"
          >
            <FaRegTrashAlt className="text-white" />
          </button>
        </div>
      ))}

      {/* TAMBAH TUGAS */}
      <div
        onClick={() => handleTambah(title)}
        className="flex flex-row gap-2 items-center text-gray-500 py-2 px-2 cursor-pointer hover:text-blue-500"
      >
        <FiPlus />
        <span>Tugas Baru</span>
      </div>
    </div>
  );
}
