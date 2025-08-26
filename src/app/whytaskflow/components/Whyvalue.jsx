export default function WhyValue() {
  return (
    <div className="bg-white px-30 py-10">
      <h1 className="text-4xl font-semibold text-center text-black ">
        The{" "}
        <span className="bg-blue-600 px-2 py-1 rounded-xl text-white">
          TaskFlow
        </span>{" "}
        Adventage
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-10">
        <div className="bg-blue-500 rounded-b-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition">
          <h1 className="text-center text-white font-semibold text-lg">
            Clarity by Design
          </h1>
          <p className="text-center text-gray-100 mt-2">
            See priorities, owners, and deadlines at a glance so nothing slips
            through the cracks
          </p>
        </div>

        <div className="bg-blue-500 rounded-b-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition">
          <h1 className="text-center text-white font-semibold text-lg">
            Speed to Execution
          </h1>
          <p className="text-center text-gray-100 mt-2">
            Create, assign, and track tasks in seconds with zero friction UX
          </p>
        </div>

        <div className="bg-blue-500 rounded-b-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition">
          <h1 className="text-center text-white font-semibold text-lg">
            Collaboration that Scales
          </h1>
          <p className="text-center text-gray-100 mt-2">
            Comments, file sharing, mentions, and roles keep everyone aligned in
            real time
          </p>
        </div>

        <div className="bg-blue-500 rounded-b-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition">
          <h1 className="text-center text-white font-semibold text-lg">
            Insight-Driven Decisions
          </h1>
          <p className="text-center text-gray-100 mt-2">
            Built-in reports turn activity into actionable insights
          </p>
        </div>
      </div>
    </div>
  );
}
