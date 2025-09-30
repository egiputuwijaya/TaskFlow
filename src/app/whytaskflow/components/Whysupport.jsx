export default function WhySupport() {
  return (
    <div className="bg-white px-10 py-20 hidden md:block">
      <h1 className="text-center text-4xl font-semibold text-blue-600 mb-16">
        The Pieces That Power It
      </h1>

      <div className="flex items-center justify-center">
        <div className="relative w-full max-w-5xl">
          <img
            src="/Whysupport.jpg"
            alt="Main"
            className="w-full h-auto rounded-2xl mx-auto"
          />

          <div className="absolute bottom-6 left-6 bg-gray-100 rounded-xl shadow-md p-4 w-40">
            <h1 className="text-center font-semibold text-sm text-gray-700">
              Calendar & Timeline
            </h1>
            <img src="/calendar.svg" alt="Calendar" className="mx-auto mt-2" />
          </div>

          <div className="absolute bottom-6 right-6 bg-gray-100 rounded-xl shadow-md p-4 w-40">
            <h1 className="text-center font-semibold text-sm text-gray-700">
              Tasks & Projects
            </h1>
            <img src="/task.svg" alt="Task" className="mx-auto mt-2" />
          </div>

          <div className="absolute top-6 right-6 bg-gray-100 rounded-xl shadow-md p-4 w-40">
            <h1 className="text-center font-semibold text-sm text-gray-700">
              Notifications
            </h1>
            <img
              src="/notification.svg"
              alt="Notification"
              className="mx-auto mt-2"
            />
          </div>

          <div className="absolute top-6 left-6 bg-gray-100 rounded-xl shadow-md p-4 w-40">
            <h1 className="text-center font-semibold text-sm text-gray-700">
              Files & Comments
            </h1>
            <img src="/files.svg" alt="Files" className="mx-auto mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
