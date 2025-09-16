"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css"; // custom css tambahan

export default function TaskCalendar() {
  const [tasks] = useState([
    { name: "Design Homepage", dueDate: "2025-09-14", priority: "high" },
    { name: "API Development", dueDate: "2025-09-14", priority: "medium" },
    { name: "Testing Module", dueDate: "2025-09-18", priority: "low" },
  ]);

  const [selectedDate, setSelectedDate] = useState(null);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const tasksOnDate = selectedDate
    ? tasks.filter((task) => task.dueDate === formatDate(selectedDate))
    : [];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-400";
      case "low":
        return "bg-green-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className="relative h-screen w-full flex bg-gray-50 overflow-x-hidden">
      {/* Kalender fullscreen */}
      <div className="flex-1 flex justify-center items-center p-2 md:p-6">
        <Calendar
          locale="en-US" // Minggu di kiri
          calendarType="gregory"
          onClickDay={(date) => setSelectedDate(date)}
          tileContent={({ date }) => {
            const todayTasks = tasks.filter(
              (task) => task.dueDate === formatDate(date)
            );
            return todayTasks.length > 0 ? (
              <div className="flex justify-center items-center mt-1 gap-1">
                {todayTasks.map((task, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full ${getPriorityColor(
                      task.priority
                    )}`}
                  ></span>
                ))}
              </div>
            ) : null;
          }}
          tileClassName={({ date }) => {
            const day = date.getDay();
            if (day === 0) return "text-red-500 font-bold"; // Minggu merah
            if (day === 6) return "text-gray-500"; // Sabtu abu-abu
            return "text-gray-800";
          }}
          className="custom-calendar w-full max-w-full h-full rounded-2xl shadow-lg bg-white p-4"
        />
      </div>

      {/* Sidebar Modal (Desktop) */}
      {selectedDate && (
        <>
          <div className="hidden md:block fixed top-0 right-0 h-full w-96 bg-white shadow-2xl border-l p-5 z-50 animate-slideIn">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-xl text-blue-600">
                Tugas {formatDate(selectedDate)}
              </h2>
              <button
                onClick={() => setSelectedDate(null)}
                className="text-red-500 hover:text-red-700 font-bold"
              >
                ✕
              </button>
            </div>

            {tasksOnDate.length > 0 ? (
              <ul className="space-y-3">
                {tasksOnDate.map((task, i) => (
                  <li
                    key={i}
                    className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 border hover:shadow-md transition"
                  >
                    <p className="font-semibold text-gray-700">{task.name}</p>
                    <p className="text-sm text-gray-500">
                      Priority:{" "}
                      <span
                        className={`px-2 py-0.5 rounded-full text-white text-xs ${getPriorityColor(
                          task.priority
                        )}`}
                      >
                        {task.priority}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Tidak ada tugas</p>
            )}
          </div>

          {/* Bottom Sheet (Mobile) */}
          <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-2xl border-t p-5 z-50 animate-slideUp rounded-t-2xl">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold text-lg text-blue-600">
                Tugas {formatDate(selectedDate)}
              </h2>
              <button
                onClick={() => setSelectedDate(null)}
                className="text-red-500 hover:text-red-700 font-bold"
              >
                ✕
              </button>
            </div>

            {tasksOnDate.length > 0 ? (
              <ul className="space-y-2 max-h-60 overflow-y-auto">
                {tasksOnDate.map((task, i) => (
                  <li
                    key={i}
                    className="p-3 rounded-lg bg-blue-50 border hover:bg-blue-100 transition"
                  >
                    <p className="font-semibold text-gray-700">{task.name}</p>
                    <p className="text-sm text-gray-500">
                      Priority:{" "}
                      <span
                        className={`px-2 py-0.5 rounded-full text-white text-xs ${getPriorityColor(
                          task.priority
                        )}`}
                      >
                        {task.priority}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Tidak ada tugas</p>
            )}
          </div>
        </>
      )}

      {/* Animasi */}
      <style jsx>{`
        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out forwards;
        }
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
