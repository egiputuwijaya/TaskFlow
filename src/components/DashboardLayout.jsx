"use client";
import { useState } from "react";
import { FaBars, FaTimes, FaTasks } from "react-icons/fa";
import { TbSmartHome } from "react-icons/tb";
import { RiTeamLine, RiRobot3Line, RiAccountCircleLine } from "react-icons/ri";
import { LuFootprints } from "react-icons/lu";
import { BsClockHistory } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as motion from "motion/react-client";

export default function DashboardLayout({ children }) {
  const [width, setWidth] = useState(240);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleResize = (e) => {
    const newWidth = e.clientX;
    setWidth(Math.min(Math.max(newWidth, 230), 280));
  };

  const stopResize = () => {
    window.removeEventListener("mousemove", handleResize);
    window.removeEventListener("mouseup", stopResize);
  };

  const initResize = () => {
    window.addEventListener("mousemove", handleResize);
    window.addEventListener("mouseup", stopResize);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* DESKTOP SIDEBAR */}
      <div className="hidden md:block">
        <aside
          style={{ width: `${width}px` }}
          className="fixed top-0 left-0 h-screen bg-white text-gray-600 p-6 flex-shrink-0"
        >
          <div className="flex flex-col gap-5">
            <Link href="/">
              <div className="flex flex-row items-center gap-3">
                <h1 className="text-black font-semibold text-3xl">TaskFlow</h1>
                <img src="/logo.svg" alt="" className="w-10" />
              </div>
            </Link>

            <nav className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <h1 className="italic text-[12px] text-gray-500">OVERVIEW</h1>

                <div className="px-3">
                  <Link href="/dashboard">
                    <div
                      className={`flex flex-row gap-3 items-center ${
                        pathname === "/dashboard"
                          ? "bg-blue-500 px-2 py-1 text-white border rounded-xl"
                          : ""
                      }`}
                    >
                      <TbSmartHome className="text-md" />
                      <h2 className="">Dashboard</h2>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="italic text-[12px] text-gray-500">TASKS</h1>
                <div className="flex flex-col gap-2 px-3">
                  <Link
                    href="/dashboard/tasks"
                    className={`${
                      pathname === "/dashboard/tasks" ||
                      pathname === "/dashboard/tasks/status" ||
                      pathname === "/dashboard/tasks/calendar"
                        ? "bg-blue-500 px-2 py-1 text-white border rounded-xl"
                        : ""
                    }`}
                  >
                    <div className="flex flex-row gap-3 items-center ">
                      <FaTasks className="text-md" />
                      <h2 className="">Your Task</h2>
                    </div>
                  </Link>
                  <Link
                    href="/dashboard/taskflowAI"
                    className={`${
                      pathname === "/dashboard/taskflowAI"
                        ? "bg-blue-500 px-2 py-1 text-white border rounded-xl"
                        : ""
                    }`}
                  >
                    <div className="flex flex-row gap-3 items-center">
                      <RiRobot3Line className="text-md" />
                      <h2 className="">TaskFlow AI</h2>
                    </div>
                  </Link>
                  <Link
                    href="/dashboard/colab"
                    className={`${
                      pathname === "/dashboard/colab"
                        ? "bg-blue-500 px-2 py-1 text-white border rounded-xl"
                        : ""
                    }`}
                  >
                    <div className="flex flex-row gap-3 items-center">
                      <RiTeamLine className="text-md" />
                      <h2 className="">TaskFlow Colab</h2>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="italic text-[12px] text-gray-500">SETTINGS</h1>
                <div className="flex flex-col gap-2 px-3">
                  <Link
                    href="/dashboard/account"
                    className={`${
                      pathname === "/dashboard/account"
                        ? "bg-blue-500 px-2 py-1 text-white border rounded-xl"
                        : ""
                    }`}
                  >
                    <div className="flex flex-row gap-3 items-center ">
                      <RiAccountCircleLine className="text-md" />
                      <h2 className="">Account</h2>
                    </div>
                  </Link>
                  <Link
                    href="/dashboard/history"
                    className={`${
                      pathname === "/dashboard/history"
                        ? "bg-blue-500 px-2 py-1 text-white border rounded-xl"
                        : ""
                    }`}
                  >
                    <div className="flex flex-row gap-3 items-center ">
                      <BsClockHistory className="text-md" />
                      <h2 className="">History</h2>
                    </div>
                  </Link>
                </div>
              </div>
            </nav>
          </div>

          {/* DRAG HANDLE */}
          <div
            onMouseDown={initResize}
            className="absolute top-0 right-0 w-1 cursor-col-resize bg-gray-100 hover:bg-gray-200"
            style={{ height: "100%" }}
          ></div>
        </aside>
      </div>

      {/* MOBILE TOGGLE BUTTON */}
      <div className="md:hidden fixed top-0 left-0 w-full h-14 bg-white flex items-center px-4 shadow z-40">
        <div className="flex flex-row gap-3">
          <button onClick={() => setIsOpen(true)}>
            <FaBars className="text-2xl text-gray-800" />
          </button>
          <div className="flex flex-row items-center gap-2">
            <h1 className="text-black font-semibold text-xl">TaskFlow</h1>
            <img src="/logo.svg" alt="" className="w-6" />
          </div>
        </div>
      </div>

      {/* MOBILE SIDEBAR OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* MOBILE SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white text-gray-600 p-6 z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 w-64`}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-800"
        >
          <FaTimes className="text-2xl" />
        </button>

        <div className="flex flex-col gap-5 pb-3">
          <Link href="/">
            <div className="flex flex-row items-center gap-3">
              <h1 className="text-black font-semibold text-3xl">TaskFlow</h1>
              <img src="/logo.svg" alt="" className="w-10" />
            </div>
          </Link>

          <nav className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <h1 className="italic text-[12px] text-gray-500">OVERVIEW</h1>

              <div className="px-3">
                <Link href="/dashboard">
                  <div
                    className={`flex flex-row gap-3 items-center ${
                      pathname === "/dashboard"
                        ? "bg-blue-500 px-2 py-1 text-white border rounded-xl"
                        : ""
                    }`}
                  >
                    <TbSmartHome className="text-md" />
                    <h2 className="">Dashboard</h2>
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h1 className="italic text-[12px] text-gray-500">TASKS</h1>
              <div className="flex flex-col gap-2 px-3">
                <Link
                  href="/dashboard/tasks"
                  className={`${
                    pathname === "/dashboard/tasks" ||
                    pathname === "/dashboard/tasks/status" ||
                    pathname === "/dashboard/tasks/calendar"
                      ? "bg-blue-500 px-2 py-1 text-white border rounded-xl"
                      : ""
                  }`}
                >
                  <div className="flex flex-row gap-3 items-center ">
                    <FaTasks className="text-md" />
                    <h2 className="">Your Task</h2>
                  </div>
                </Link>
                <Link
                  href="/dashboard/taskflowAI"
                  className={`${
                    pathname === "/dashboard/taskflowAI"
                      ? "bg-blue-500 px-2 py-1 text-white border rounded-xl"
                      : ""
                  }`}
                >
                  <div className="flex flex-row gap-3 items-center">
                    <RiRobot3Line className="text-md" />
                    <h2 className="">TaskFlow AI</h2>
                  </div>
                </Link>

                <Link
                  href="/dashboard/colab"
                  className={`${
                    pathname === "/dashboard/colab"
                      ? "bg-blue-500 px-2 py-1 text-white border rounded-xl"
                      : ""
                  }`}
                >
                  <div className="flex flex-row gap-3 items-center">
                    <RiTeamLine className="text-md" />
                    <h2 className="">TaskFlow Colab</h2>
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h1 className="italic text-[12px] text-gray-500">SETTINGS</h1>
              <div className="flex flex-col gap-2 px-3">
                <Link
                  href="/dashboard/account"
                  className={`${
                    pathname === "/dashboard/account"
                      ? "bg-blue-500 px-2 py-1 text-white border rounded-xl"
                      : ""
                  }`}
                >
                  <div className="flex flex-row gap-3 items-center ">
                    <RiAccountCircleLine className="text-md" />
                    <h2 className="">Account</h2>
                  </div>
                </Link>
                <Link
                  href="/dashboard/history"
                  className={`${
                    pathname === "/dashboard/history"
                      ? "bg-blue-500 px-2 py-1 text-white border rounded-xl"
                      : ""
                  }`}
                >
                  <div className="flex flex-row gap-3 items-center ">
                    <BsClockHistory className="text-md" />
                    <h2 className="">History</h2>
                  </div>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      {/* DESKTOP MAIN CONTENT */}
      <main
        className="hidden md:block flex-1 p-3 overflow-auto"
        style={{ marginLeft: `${width}px` }}
      >
        {children}
      </main>

      {/* MOBILE MAIN CONTENT */}
      <main className="block md:hidden flex-1 p-3 overflow-auto pt-16">
        {children}
      </main>
    </div>
  );
}
