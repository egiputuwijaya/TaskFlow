import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-white px-3 md:px-30 py-8 md:py-20">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col max-w-2xl gap-5">
          <h1 className="text-3xl md:text-6xl font-semibold text-black text-center md:text-left ">
            Organize Your{" "}
            <span className="" style={{ color: "#3B82F6" }}>
              Work
            </span>{" "}
            Boost Your
            <span className="" style={{ color: "#3B82F6" }}>
              {" "}
              Productivity
            </span>
          </h1>
          <p className="text-gray-500  text-center md:text-left md:text-xl">
            Manage{" "}
            <span style={{ color: "#3B82F6" }}>tasks, track deadlines,</span>{" "}
            and <span style={{ color: "#3B82F6" }}>achieve </span>
            more with a smart task manager designed to keep you focused.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              href=""
              style={{ backgroundColor: "#3B82F6" }}
              className="px-5 py-3 rounded-xl font-semibold"
            >
              Add Your First Task
            </Link>
          </div>
        </div>

        <div className="">
          <img src="/Hero.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
