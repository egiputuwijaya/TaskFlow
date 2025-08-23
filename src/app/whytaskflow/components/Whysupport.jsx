export default function WhySupport() {
  return (
    <div className="bg-white px-30 py-20">
      <h1 className="text-center text-5xl font-semibold text-black">
        The Pieces That Power It
      </h1>
      <div className="flex flex-row gap-20 justify-center items-center">
        <div className="relative w-full">
          <img src="/WhySupport.png" alt="" className="w-150 rounded-2xl" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 bg-blue-500 text-white px-6 py-3 rounded-xl shadow-lg">
            <h1 className="text-center font-semibold text-lg">
              Calendar & Timeline
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="bg-blue-500 p-2 rounded-b-xl">
            <h1 className="text-center font-semibold">Tasks & Projects</h1>
            <p className="text-center">
              Lists, boards, priorities, and custom fields
            </p>
          </div>
          <div className="bg-blue-500 p-2 rounded-b-xl">
            <h1 className="text-center font-semibold">Calendar & Timeline</h1>
            <p className="text-center">
              Plan capacity and avoid last-minute fire drills
            </p>
          </div>
          <div className="bg-blue-500 p-2 rounded-b-xl">
            <h1 className="text-center font-semibold">Notifications</h1>
            <p className="text-center">
              Smart alerts for changes that actually matter
            </p>
          </div>
          <div className="bg-blue-500 p-2 rounded-b-xl">
            <h1 className="text-center font-semibold">Files & Comments</h1>
            <p className="text-center">
              Context lives with the work, not in your inbox
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
