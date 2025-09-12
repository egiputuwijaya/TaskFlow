import { IoIosStar, IoIosSearch } from "react-icons/io";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function NavbarTask() {
  return (
    <div className="flex flex-row justify-between px-10">
      <div className="flex flex-row gap-10">
        <div className="flex flex-row gap-2 items-center">
          <IoIosStar className="text-xl text-gray-400" />
          <h1 className=" text-gray-400">All Tasks</h1>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <FaCircleArrowRight className="text-xl text-gray-400" />
          <h1 className=" text-gray-400">By Status</h1>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <FaRegCalendarAlt className="text-xl text-gray-400" />
          <h1 className=" text-gray-400">Calendar</h1>
        </div>
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
