"use client";

import * as motion from "motion/react-client";

export default function PlatformHero() {
  const Tasks = [
    {
      img: "Taskaccounting.svg",
      title: "Accounting Tasks",
      text: "Create a system to keep your books, receipts, and invoices organization",
    },
    {
      img: "Taskclient.svg",
      title: "Client management",
      text: "Organization your work with clients from the smallest to largest details",
    },
    {
      img: "Tasktravel.svg",
      title: "Business Travel Packing",
      text: "Never forget your laptop, books, receipts, and invoices organized",
    },
    {
      img: "Taskwork.svg",
      title: "Deep Work",
      text: "Practice priotinizing focus and eliminating distraction  template",
    },
    {
      img: "Taskteam.svg",
      title: "Business Travel Packing",
      text: "Never lose track of your meetings, projects, documents together",
    },
  ];
  return (
    <div className="bg-white px-3 md:px-30 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9 }}
        className=""
      >
        <h1 className="text-center text-black text-5xl font-semibold max-w-130 mx-auto">
          One Platform,{" "}
          <span className="text-white bg-blue-600 px-3 rounded">
            Endless Productivity
          </span>
        </h1>
        <p className="text-gray-700 text-center py-3">
          TaskFlow brings together everything your team needs to plan, execute,
          and scale projects all in one seamless workspace
        </p>
        <div className="flex flex-col">
          <div className="relative w-full overflow-hidden py-5">
            <div className="flex animate-scroll-x gap-5">
              {Tasks.map((task, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 items-center justify-center min-w-[200px] h-50  bg-white rounded-2xl shadow-md border border-gray-300"
                >
                  <div className="flex flex-col items-center justify-center border-b border-gray-300 w-full bg-blue-100">
                    <div className="">
                      <img
                        src={task.img}
                        alt=""
                        className="w-20 h-20  bg-green-100 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-sm font-semibold text-gray-700 text-center">
                      {task.title}
                    </h2>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      {task.text}
                    </p>
                  </div>
                </div>
              ))}
              {Tasks.map((task, index) => (
                <div
                  key={`index-${index}`}
                  className="flex flex-col gap-3 items-center justify-center min-w-[200px] h-50  bg-white rounded-2xl shadow-md border border-gray-300"
                >
                  <div className="flex flex-col items-center justify-center border-b border-gray-300 w-full bg-blue-100">
                    <div className="">
                      <img
                        src={task.img}
                        alt=""
                        className="w-20 h-20  bg-green-100 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-sm font-semibold text-gray-700 text-center">
                      {task.title}
                    </h2>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      {task.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
