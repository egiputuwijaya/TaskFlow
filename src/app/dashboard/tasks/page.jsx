"use client";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";

export default function ItemAllTasks() {
  const [tasks, setTasks] = useState([
    {
      name: "",
      type: "",
      dueDate: "",
      timeDue: "",
      priority: "",
      status: "",
      description: "",
      checked: false,
    },
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newTasks = [...tasks];
    newTasks[index][name] = value;
    setTasks(newTasks);
  };

  const handleTambah = () => {
    setTasks([
      ...tasks,
      {
        name: "",
        type: "",
        dueDate: "",
        timeDue: "",
        priority: "",
        status: "",
        description: "",
        checked: false,
      },
    ]);
  };

  const toggleCheck = (index) => {
    const newTasks = [...tasks];
    newTasks[index].checked = !newTasks[index].checked;
    setTasks(newTasks);
  };

  const deleteChecked = () => {
    setTasks(tasks.filter((task) => !task.checked));
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
            <th className="px-4 py-2">Time Due</th>
            <th className="px-4 py-2">Priority</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Description</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task, index) => (
            <tr key={index} className=" border-gray-300 group">
              <td className="text-center">
                {task.checked && (
                  <button
                    onClick={deleteChecked}
                    className=" px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex flex-row items-center gap-2"
                  >
                    <FaRegTrashAlt className="text-white" />
                  </button>
                )}
              </td>
              <td className="text-center">
                <input
                  type="checkbox"
                  checked={task.checked}
                  onChange={() => toggleCheck(index)}
                  className={`w-5 h-5 text-blue-600 border-gray-300 rounded 
      ${task.checked ? "inline-block" : "hidden group-hover:inline-block"} 
      transition-all`}
                />
              </td>

              <td className="border-y border-gray-300">
                <input
                  type="text"
                  name="name"
                  value={task.name}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full h-full focus:outline-none rounded-none"
                />
              </td>
              <td className="border border-gray-300 px-3 py-2">
                <select
                  name="type"
                  value={task.type}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full h-full focus:outline-none rounded-none appearance-none border-none px-5"
                >
                  <option value="">Select Type</option>
                  <option value="development">Development</option>
                  <option value="design">Design</option>
                  <option value="testing">Testing</option>
                </select>
              </td>
              <td className="border border-gray-300 px-3 py-2">
                <input
                  type="date"
                  name="dueDate"
                  value={task.dueDate}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full h-full focus:outline-none rounded-none appearance:none"
                />
              </td>
              <td className="border border-gray-300 px-3 py-2">
                <input
                  type="time"
                  name="timeDue"
                  value={task.timeDue}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full h-full focus:outline-none rounded-none"
                />
              </td>
              <td className="border border-gray-300 px-3 py-2">
                <select
                  name="priority"
                  value={task.priority}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full h-full focus:outline-none rounded-none appearance-none px-5"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </td>
              <td className="border border-gray-300 px-3 py-2">
                <select
                  name="status"
                  value={task.status}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full h-full focus:outline-none rounded-none appearance-none px-5"
                >
                  <option value="not started">Not Started</option>
                  <option value="in progress">In Progress</option>
                  <option value="done">Done</option>
                </select>
              </td>
              <td className="border border-gray-300 px-3 py-2">
                <input
                  type="text"
                  name="description"
                  value={task.description}
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

      <pre className="mt-4 bg-gray-100 p-3 rounded text-gray-500">
        {JSON.stringify(tasks, null, 2)}
      </pre>
    </div>
  );
}
