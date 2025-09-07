import { FaRegCalendarAlt } from "react-icons/fa";
import ProgressBar from "./ProgressBar";

export default function ProjectDashboard() {
  return (
    <div className="bg-white flex flex-col gap-2 p-2 rounded-xl">
      <h1 className="font-semibold text-gray-900">Active Projects</h1>
      {/* SATU  */}
      <div className="bg-blue-50 flex flex-col gap-4 rounded-xl p-3 border-l-3 border-green-500">
        <div className="flex flex-row justify-between items-center">
          <div className="">
            <h1 className="font-semibold text-gray-700">
              Coffee Shop Winter Campaign
            </h1>
            <p className="text-sm text-gray-400">Office Manager</p>
          </div>
          <p className="text-green-500 text-sm bg-green-200 px-3 rounded-2xl">
            Completed
          </p>
        </div>
        <div className="flex flex-col text-gray-400 gap-2">
          <ProgressBar value={100} />
          <div className="flex flex-row items-center gap-2">
            <FaRegCalendarAlt className="text-md" />
            <p className="text-xs">Sep 19</p>
          </div>
        </div>
      </div>
      {/* DUA  */}
      <div className="bg-blue-50 flex flex-col gap-4 rounded-xl p-3 border-l-3 border-blue-500">
        <div className="flex flex-row justify-between items-center">
          <div className="">
            <h1 className="font-semibold text-gray-700">
              Coffee Shop Winter Campaign
            </h1>
            <p className="text-sm text-gray-400">Office Manager</p>
          </div>
          <p className="text-blue-500 text-sm bg-blue-200 px-3 rounded-2xl">
            In Progress
          </p>
        </div>
        <div className="flex flex-col text-gray-400 gap-2">
          <ProgressBar value={67} />
          <div className="flex flex-row items-center gap-2">
            <FaRegCalendarAlt className="text-md" />
            <p className="text-xs">Sep 19</p>
          </div>
        </div>
      </div>
      {/* TIGA */}
      <div className="bg-blue-50 flex flex-col gap-4 rounded-xl p-3 border-l-3 border-red-500">
        <div className="flex flex-row justify-between items-center">
          <div className="">
            <h1 className="font-semibold text-gray-700">
              Coffee Shop Winter Campaign
            </h1>
            <p className="text-sm text-gray-400">Office Manager</p>
          </div>
          <p className="text-red-500 text-sm bg-red-200 px-3 rounded-2xl">
            Not Started
          </p>
        </div>
        <div className="flex flex-col text-gray-400 gap-2">
          <ProgressBar value={10} />
          <div className="flex flex-row items-center gap-2">
            <FaRegCalendarAlt className="text-md" />
            <p className="text-xs">Sep 19</p>
          </div>
        </div>
      </div>
    </div>
  );
}
