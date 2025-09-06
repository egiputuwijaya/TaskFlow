export default function Comment() {
  return (
    <div
      className="bg-white bg-cover bg-center py-10 md:px-30"
      style={{ backgroundImage: "url('/Comment_bg.svg')" }}
    >
      <div className="flex flex-col md:flex-row md:p-10 gap-5">
        <div className="flex flex-col  border-l-2 border-gray-500 px-2 gap-2">
          <h2 className="text-center text-gray-800 text-2xl font-serif ">
            TaskFlow completely transformed the way our team collaborates and
            delivers results
          </h2>
          <p className="text-center text-gray-700">
            Sarah L., Project Manager at BrightTech
          </p>
        </div>
        <div className="flex flex-col border-l-2 border-gray-500 px-2 gap-2">
          <h2 className="text-center text-gray-800 text-2xl font-serif">
            With TaskFlow, the way our team organizes projects has drastically
            improved
          </h2>
          <p className="text-center text-gray-700">
            James K., Operations Lead at GlobalTrade
          </p>
        </div>
        <div className="flex flex-col  border-x-2 border-gray-500 px-2 gap-2">
          <h2 className="text-center text-gray-800 text-2xl font-serif">
            The way our team manages projects and tasks has been revolutionized
            by TaskFlow
          </h2>
          <p className="text-center text-gray-700">
            Anita R., CEO of StartSmart
          </p>
        </div>
      </div>
    </div>
  );
}
