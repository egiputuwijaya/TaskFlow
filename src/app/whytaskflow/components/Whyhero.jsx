import * as motion from "motion/react-client";

export default function WhyHero() {
  return (
    <section className="relative bg-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9 }}
        className="relative max-w-6xl mx-auto text-center space-y-12"
      >
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Why Teams Trust{" "}
          <span className="bg-blue-600 px-2 text-white rounded-2xl">
            TaskFlow
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
          TaskFlow transforms chaos into clarity. From freelancers to
          enterprises, it adapts to your workflow, helping your team stay
          aligned and confident.
        </p>

        {/* Image inside a card */}
        <div className="mt-16 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-400 to-pink-300 blur-2xl opacity-40 group-hover:scale-105 transition-transform duration-500"></div>
            <img
              src="/Whyhero.svg"
              alt="TaskFlow Illustration"
              className="relative w-full max-w-lg rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
