import Link from "next/link";
import { PiFinnTheHumanLight } from "react-icons/pi";
import { FiBookOpen } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";

export default function HeroDashboard() {
  return (
    <div className="p-5 rounded-2xl bg-gradient-to-br from-pink-500 via-blue-500 to-purple-300">
      <div className="flex flex-col gap-10">
        <div className="flex flex-row gap-5">
          <div className="flex flex-row gap-3 items-center bg-white/20 px-5 py-1 rounded-2xl">
            <PiFinnTheHumanLight className="text-md" />
            <h1>Welcome back, Egi Putu Wijaya</h1>
          </div>
          <div className="flex flex-row gap-3 items-center bg-white/20 px-5 py-1 rounded-2xl">
            <h1>TaskFlow Pro</h1>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold">
              Ready to create something amazing today?
            </h1>
            <p>
              Your Taskflow AI task studio is ready. Let's turn your task into
              reality.
            </p>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <Link href="/">
              <div className="flex flex-row items-center gap-2">
                <FiBookOpen className="text-xl" />
                <h1 className="text- font-thin">View Tutorials</h1>
              </div>
            </Link>
            <Link href="/">
              <div className="bg-white/90 rounded-xl flex flex-row items-center px-3 py-1 gap-2">
                <h1 className="text-md font-thin text-blue-500">
                  View Tutorials
                </h1>
                <FaArrowRight className="text-md text-blue-500" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
