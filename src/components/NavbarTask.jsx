"use client";
import { IoIosStar, IoIosSearch } from "react-icons/io";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarTask() {
  const pathname = usePathname();
  return (
    <div className="flex flex-row justify-between px-2 md:px-5">
      <div className="flex flex-row gap-4 md:gap-10">
        <Link
          href="/dashboard/tasks"
          className={`flex flex-row gap-1 md:gap-2  items-center px-2 md:px-3  ${
            pathname === "/dashboard/tasks"
              ? "border-2 rounded-2xl border-blue-500 text-blue-500"
              : ""
          }`}
        >
          <IoIosStar
            className={`text-xl ${
              pathname === "/dashboard/tasks"
                ? "text-blue-500"
                : "text-gray-400"
            }`}
          />
          <h1
            className={`${
              pathname === "/dashboard/tasks"
                ? "text-blue-500"
                : "text-gray-400"
            }`}
          >
            All Tasks
          </h1>
        </Link>

        <Link
          href="/dashboard/tasks/status"
          className={`flex flex-row gap-2 items-center px-3 ${
            pathname === "/dashboard/tasks/status"
              ? "border-2  rounded-xl border-blue-500"
              : ""
          }`}
        >
          <FaCircleArrowRight
            className={`text-xl ${
              pathname === "/dashboard/tasks/status"
                ? "text-blue-500"
                : "text-gray-400"
            }`}
          />
          <h1
            className={`${
              pathname === "/dashboard/tasks/status"
                ? "text-blue-500"
                : "text-gray-400"
            }`}
          >
            By Status
          </h1>
        </Link>
        <Link
          href="/dashboard/tasks/calendar"
          className={`flex flex-row gap-2 items-center px-3 ${
            pathname === "/dashboard/tasks/calendar"
              ? "border-2  rounded-xl border-blue-500"
              : ""
          }`}
        >
          <FaRegCalendarAlt
            className={`text-xl ${
              pathname === "/dashboard/tasks/calendar"
                ? "text-blue-500"
                : "text-gray-400"
            }`}
          />
          <h1
            className={`${
              pathname === "/dashboard/tasks/calendar"
                ? "text-blue-500"
                : "text-gray-400"
            }`}
          >
            Calendar
          </h1>
        </Link>
      </div>
      <div className="flex flex-row">
        <form className="flex flex-row gap-2">
          <IoIosSearch className="text-gray-400 text-2xl" />
          <input
            type="text"
            placeholder="Search.."
            className="text-gray-400 focus:outline-none"
          />
        </form>
        <button className="text-white bg-blue-500 px-5 rounded-xl">New</button>
      </div>
    </div>
  );
}
