"use client";
import { GrTask } from "react-icons/gr";
import { FaArrowTrendUp } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";
import { MdContentPaste } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { AiOutlineTeam } from "react-icons/ai";
import { TbTimelineEventText } from "react-icons/tb";
import { MdEventNote } from "react-icons/md";
import { BsBug } from "react-icons/bs";
import { BsCalendar4Week } from "react-icons/bs";
import { MdDeveloperMode } from "react-icons/md";
import { MdOutlineClass } from "react-icons/md";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { useState, useEffect } from "react";
import * as motion from "motion/react-client";

export default function TypeDashboard() {
  const [tasks, setTasks] = useState([]);

  const types = [
    {
      name: "PRODUCT_DESIGN",
      label: "Product Design",
      icon: <GrTask className="text-white " />,
    },
    {
      name: "CONTENT_WRITER",
      label: "Content Writer",
      icon: <TfiWrite className="text-white " />,
    },
    {
      name: "PROJECT_MANAJER",
      label: "Project Manager",
      icon: <MdContentPaste className="text-white " />,
    },
    {
      name: "GOAL_TRECKER",
      label: "Goal Tracker",
      icon: <TbTargetArrow className="text-white " />,
    },
    {
      name: "MEETING_AGENDA",
      label: "Meeting Agenda",
      icon: <AiOutlineTeam className="text-white " />,
    },
    {
      name: "EVENT_PLANNING",
      label: "Event Planning",
      icon: <TbTimelineEventText className="text-white " />,
    },
    {
      name: "CONTENT_CALENDAR",
      label: "Content Calendar",
      icon: <MdEventNote className="text-white " />,
    },
    {
      name: "BUG_TRACKING",
      label: "Bug Tracking",
      icon: <BsBug className="text-white " />,
    },
    {
      name: "WEEKLY_DAYLY",
      label: "Weekly Daily",
      icon: <BsCalendar4Week className="text-white " />,
    },
    {
      name: "DEVELOPMENT_WORKFLOW",
      label: "Develop Workflow",
      icon: <MdDeveloperMode className="text-white " />,
    },
    {
      name: "CLASS_PLANNING",
      label: "Class Planning",
      icon: <MdOutlineClass className="text-white " />,
    },
    {
      name: "OFFICE_MANAGER",
      label: "Office Manager",
      icon: <PiBuildingOfficeLight className="text-white " />,
    },
  ];

  useEffect(() => {
    async function fetchTask() {
      try {
        const res = await fetch("/api/tasks", {
          credentials: "include",
        });
        if (!res.ok) {
          console.error("Gagal fetch tasks", await res.text());
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
    fetchTask();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-4">
      {types.map((type, index) => {
        const count = tasks.filter(
          (task) => task.typeTasks === type.name
        ).length;
        return (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="bg-white flex flex-col gap-3 p-4 rounded-2xl hover:scale-105 hover:bg-blue-100 transition duration-200"
            key={index}
          >
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-gray-700 font-semibold">{type.label}</h1>
              <div className="bg-blue-500 p-1 rounded">{type.icon}</div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-blue-500 text-2xl font-semibold">{count}</h1>
              <div className="flex flex-row gap-2 justify-center items-center">
                <FaArrowTrendUp className="text-blue-500" />
                <h1 className="text-purple-400">+2%</h1>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
