"use client";

import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "motion/react"; // ✅ gunakan motion/react

export default function Why() {
  const cards = [
    {
      title: "Clarity at Every Step",
      desc: "No more confusion or missed deadlines. TaskFlow gives your team complete visibility—what needs to be done, who’s responsible, and when it’s due. Every project moves forward with confidence and transparency.",
    },
    {
      title: "Speed to Execution",
      desc: "From idea to action in record time. With a clean interface and smart automation, TaskFlow eliminates bottlenecks and keeps work flowing, so projects finish faster without extra effort.",
    },
    {
      title: "Collaboration That Scales",
      desc: "Whether you’re a two-person startup or a global enterprise, TaskFlow grows with you. Collaborate seamlessly across teams, departments, and time zones—all within one connected workspace.",
    },
  ];

  return (
    <div className="bg-white px-6 md:px-30 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        whileHover={{
          scale: 1.03,
        }}
        className="text-center text-4xl md:text-5xl font-semibold pb-16 text-black"
      >
        Why Choose{" "}
        <span className="bg-blue-600 px-3 rounded text-white">TaskFlow</span> at
        a Glance
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-10">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
            }}
            className="bg-gray-100 flex flex-col gap-3 py-10 px-6 rounded-b-2xl border-t-4 border-blue-600"
          >
            <h1 className="text-black text-2xl font-semibold">{card.title}</h1>
            <p className="text-gray-700">{card.desc}</p>
            <div className="flex flex-row items-center text-blue-600 font-medium">
              <Link href="">More about this</Link>
              <MdOutlineArrowOutward className="ml-1" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
