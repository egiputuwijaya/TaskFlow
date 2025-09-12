import { TbUrgent } from "react-icons/tb";

export default function ItemAllTasks() {
  return (
    <div className="overflow-x-auto max-w-6xl">
      <table className="table-auto border-collapse border-gray-300 w-full text-sm text-gray-700">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Task Name</th>
            <th className="px-4 py-2">Type Task</th>
            <th className="px-4 py-2">Due Date</th>
            <th className="px-4 py-2">Priority</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-y border-gray-300 ">
              <input
                type="text"
                className="w-full h-full focus:outline-none rounded-none "
              />
            </td>

            <td className="border border-gray-300 px-3 py-2">
              <select
                name=""
                id=""
                className="w-full h-full focus:outline-none rounded-none  appearance-none border-none px-5"
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
                className="w-full h-full focus:outline-none rounded-none"
              />
            </td>

            <td className="border border-gray-300 px-3 py-2">
              <select
                name="priority"
                id="priority"
                className="w-full h-full focus:outline-none rounded-none appearance-none px-5"
              >
                <option value="low" className="text-green-600">
                  Low
                </option>
                <option value="medium" className="text-yellow-600">
                  Medium
                </option>
                <option value="high" className="text-red-600">
                  High
                </option>
              </select>
            </td>

            <td className="border border-gray-300 px-3 py-2">
              <input
                type="text"
                name=""
                id=""
                className="w-full h-full focus:outline-none rounded-none "
                placeholder="Description"
              />
            </td>

            <td className="border border-gray-300 px-3 py-2 text-center">
              <button
                type="submit"
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
