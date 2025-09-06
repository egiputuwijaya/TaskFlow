"use client";
import * as motion from "motion/react-client";

export default function Statistic() {
  const stats = [
    {
      img: "Statistic1.svg",
      title: "100+ Downloads",
      text: "People who have trusted and installed our app",
    },
    {
      img: "Statistic2.svg",
      title: "80+ Active Users",
      text: "Users who actively use our platform every day",
    },
    {
      img: "Statistic3.svg",
      title: "4.8★ Rating",
      text: "From our satisfied community of users",
    },
    {
      img: "Statistic4.svg",
      title: "10+ Countries Reached",
      text: "Expanding our presence across the globe",
    },
  ];

  return (
    <div className="bg-white px-3 md:px-30 py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Kiri: Teks */}
        <div>
          <h1 className="font-bold text-4xl text-black leading-snug text-center md:text-left">
            Trusted by Teams and Individuals Worldwide
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-6 text-center md:text-left">
            Don’t just take our word for it. Here’s what our users say about how
            this task manager has transformed the way they work and stay
            productive.
          </p>
        </div>

        {/* Kanan: Bagian bergerak */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll-x gap-12">
            {/* List utama */}
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center min-w-[220px] px-4 py-6 bg-gray-50 rounded-2xl shadow-md"
              >
                <img src={stat.img} alt="" className="w-20 h-20 mb-4" />
                <h2 className="text-lg font-semibold text-gray-900">
                  {stat.title}
                </h2>
                <p className="text-sm text-gray-500 text-center mt-2">
                  {stat.text}
                </p>
              </div>
            ))}

            {/* Duplikasi agar infinite scroll mulus */}
            {stats.map((stat, i) => (
              <div
                key={`dup-${i}`}
                className="flex flex-col items-center justify-center min-w-[220px] px-4 py-6 bg-gray-50 rounded-2xl shadow-md"
              >
                <img src={stat.img} alt="" className="w-20 h-20 mb-4" />
                <h2 className="text-lg font-semibold text-gray-900">
                  {stat.title}
                </h2>
                <p className="text-sm text-gray-500 text-center mt-2">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
