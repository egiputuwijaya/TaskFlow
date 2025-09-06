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

export default function StatisticDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-4">
      <div className="bg-white flex flex-col gap-3 p-4 rounded-2xl">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-gray-700 font-semibold">Product Design</h1>
          <div className="bg-blue-500 p-1 rounded ">
            <GrTask className="text-xl" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-blue-500 text-2xl font-semibold">71</h1>
          <div className="flex flex-row gap-2 justify-center items-center">
            <FaArrowTrendUp className="text-blue-500 " />
            <h1 className="text-purple-400">+2%</h1>
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col gap-3 p-4 rounded-2xl">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-gray-700 font-semibold">Content Writer</h1>
          <div className="bg-blue-500 p-1 rounded ">
            <TfiWrite className="text-xl" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-blue-500 text-2xl font-semibold">71</h1>
          <div className="flex flex-row gap-2 justify-center items-center">
            <FaArrowTrendUp className="text-blue-500 " />
            <h1 className="text-purple-400">+2%</h1>
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col gap-3 p-4 rounded-2xl">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-gray-700 font-semibold">Project Manager</h1>
          <div className="bg-blue-500 p-1 rounded ">
            <MdContentPaste className="text-xl" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-blue-500 text-2xl font-semibold">71</h1>
          <div className="flex flex-row gap-2 justify-center items-center">
            <FaArrowTrendUp className="text-blue-500 " />
            <h1 className="text-purple-400">+2%</h1>
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col gap-3 p-4 rounded-2xl">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-gray-700 font-semibold">Goal Tracker</h1>
          <div className="bg-blue-500 p-1 rounded ">
            <TbTargetArrow className="text-xl" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-blue-500 text-2xl font-semibold">71</h1>
          <div className="flex flex-row gap-2 justify-center items-center">
            <FaArrowTrendUp className="text-blue-500 " />
            <h1 className="text-purple-400">+2%</h1>
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col gap-3 p-4 rounded-2xl">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-gray-700 font-semibold">Meeting Agenda</h1>
          <div className="bg-blue-500 p-1 rounded ">
            <AiOutlineTeam className="text-xl" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-blue-500 text-2xl font-semibold">71</h1>
          <div className="flex flex-row gap-2 justify-center items-center">
            <FaArrowTrendUp className="text-blue-500 " />
            <h1 className="text-purple-400">+2%</h1>
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col gap-3 p-4 rounded-2xl">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-gray-700 font-semibold">Event Planning</h1>
          <div className="bg-blue-500 p-1 rounded ">
            <TbTimelineEventText className="text-xl" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-blue-500 text-2xl font-semibold">71</h1>
          <div className="flex flex-row gap-2 justify-center items-center">
            <FaArrowTrendUp className="text-blue-500 " />
            <h1 className="text-purple-400">+2%</h1>
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col gap-3 p-4 rounded-2xl">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-gray-700 font-semibold">Content Calendar</h1>
          <div className="bg-blue-500 p-1 rounded ">
            <MdEventNote className="text-xl" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-blue-500 text-2xl font-semibold">71</h1>
          <div className="flex flex-row gap-2 justify-center items-center">
            <FaArrowTrendUp className="text-blue-500 " />
            <h1 className="text-purple-400">+2%</h1>
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col gap-3 p-4 rounded-2xl">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-gray-700 font-semibold">Bug Tracking</h1>
          <div className="bg-blue-500 p-1 rounded ">
            <BsBug className="text-xl" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-blue-500 text-2xl font-semibold">71</h1>
          <div className="flex flex-row gap-2 justify-center items-center">
            <FaArrowTrendUp className="text-blue-500 " />
            <h1 className="text-purple-400">+2%</h1>
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col gap-3 p-4 rounded-2xl">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-gray-700 font-semibold">Weekly Daily</h1>
          <div className="bg-blue-500 p-1 rounded ">
            <BsCalendar4Week className="text-xl" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-blue-500 text-2xl font-semibold">71</h1>
          <div className="flex flex-row gap-2 justify-center items-center">
            <FaArrowTrendUp className="text-blue-500 " />
            <h1 className="text-purple-400">+2%</h1>
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col gap-3 p-4 rounded-2xl">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-gray-700 font-semibold">Development Workflow</h1>
          <div className="bg-blue-500 p-1 rounded ">
            <MdDeveloperMode className="text-xl" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-blue-500 text-2xl font-semibold">71</h1>
          <div className="flex flex-row gap-2 justify-center items-center">
            <FaArrowTrendUp className="text-blue-500 " />
            <h1 className="text-purple-400">+2%</h1>
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col gap-3 p-4 rounded-2xl">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-gray-700 font-semibold">Class Planning</h1>
          <div className="bg-blue-500 p-1 rounded ">
            <MdOutlineClass className="text-xl" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-blue-500 text-2xl font-semibold">71</h1>
          <div className="flex flex-row gap-2 justify-center items-center">
            <FaArrowTrendUp className="text-blue-500 " />
            <h1 className="text-purple-400">+2%</h1>
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col gap-3 p-4 rounded-2xl">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-gray-700 font-semibold">Office Manager</h1>
          <div className="bg-blue-500 p-1 rounded ">
            <PiBuildingOfficeLight className="text-xl" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-blue-500 text-2xl font-semibold">71</h1>
          <div className="flex flex-row gap-2 justify-center items-center">
            <FaArrowTrendUp className="text-blue-500 " />
            <h1 className="text-purple-400">+2%</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
