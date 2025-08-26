import { FaCheckCircle, FaRegTimesCircle } from "react-icons/fa";
export default function WhyDifferent() {
  const TaskFlow = [
    {
      text: "Everything you need — from task tracking, project planning, scheduling, file management, collaboration, and reporting lives in a single platform",
    },
    {
      text: "Built-in automation engine lets you set rules, recurring tasks, and reminders so repetitive work is handled automatically",
    },
    {
      text: "Flexible enough for small teams but powerful enough for enterprise-level collaboration, without forcing you to change workflows",
    },
  ];

  const Other = [
    {
      text: "Often require third-party integrations or switching between multiple apps (e.g., one for tasks, another for calendar, another for reporting)",
    },
    {
      text: "Many task managers provide basic reminders only; advanced automation usually requires separate add-ons or paid integrations",
    },
    {
      text: "Some apps are too simple for scaling teams (good for personal use but limited for organizations), while others are too complex for small startups",
    },
  ];
  return (
    <div className="bg-white px-30">
      <h1 className="text-center text-black text-4xl font-semibold py-10">
        What Makes{" "}
        <span className="text-white bg-blue-600 px-2 rounded">TaskFlow</span>{" "}
        Different
      </h1>
      <div className="flex flex-row gap-20">
        <div
          className="flex flex-col px-5 rounded-b-2xl py-3"
          style={{ backgroundColor: "#3B82F6" }}
        >
          <h1 className="text-white font-semibold text-2xl py-2">TaskFlow</h1>
          {TaskFlow.map((task, index) => (
            <div
              className="flex flex-row items-center gap-3 bg-white\"
              key={index}
            >
              <FaCheckCircle className="text-6xl text-green-500" />
              <p className="text-sm">{task.text}</p>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col px-5 rounded-b-2xl py-3"
          style={{ backgroundColor: "#3B82F6" }}
        >
          <h1 className="text-white font-semibold text-2xl py-2">Other</h1>
          {Other.map((task, index) => (
            <div className="flex flex-row items-center gap-3" key={index}>
              <FaRegTimesCircle className="text-6xl text-red-500" />
              <p className="text-sm">{task.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
