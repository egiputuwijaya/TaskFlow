import TaskProfileChart from "../../components/taskProfileChart";

export default function YourTaskProfile() {
  return (
    <div className="bg-white rounded-2xl py-5 px-10">
      <h1 className="text-blue-500 font-semibold">Your Statistic</h1>
      <div className="border border-blue-500"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 py-4 gap-6">
        <div className="flex flex-col items-center">
          <TaskProfileChart value={70} color="#FFC107" />
          <h1 className="text-sm text-gray-500 mt-2">Not Started</h1>
        </div>

        <div className="flex flex-col items-center">
          <TaskProfileChart value={25} color="#FFC107" />
          <h1 className="text-sm text-gray-500 mt-2">In Progress</h1>
        </div>

        <div className="flex flex-col items-center">
          <TaskProfileChart value={5} color="#FFC107" />
          <h1 className="text-sm text-gray-500 mt-2">Done</h1>
        </div>
      </div>
    </div>
  );
}
