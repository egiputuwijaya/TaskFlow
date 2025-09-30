"use client";
import Link from "next/link";
import * as motion from "motion/react-client";

export default function ContactHero() {
  return (
    <div className="bg-white px-3 md:px-30 py-10">
      <div className="flex flex-row justify-center items-center gap-10 bg-gray-200 py-5 overflow-hidden text-center md:text-left">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-5 max-w-xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-black font-semibold text-3xl md:text-5xl leading-snug"
          >
            Whether you have a question, need support, or just want to say hello
          </motion.h1>

          {/* Animated Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <Link
              href="#"
              className="bg-blue-600 px-6 py-3 rounded-xl text-white font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
            >
              Let’s talk
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hidden md:block"
        >
          <motion.img
            src="/ContactHero.svg"
            alt="Contact Hero"
            className="w-70"
            initial={{ scale: 0.9 }}
            animate={{ scale: [0.9, 1, 0.95, 1] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
