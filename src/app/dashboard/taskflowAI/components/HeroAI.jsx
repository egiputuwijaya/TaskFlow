import * as motion from "motion/react-client";
export default function HeroAI() {
  return (
    <div className="bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-300 rounded-2xl">
      <div className="flex flex-col justify-center items-center py-5">
        <div className="bg-white/20 px-5 py-2 text-2xl rounded-2xl">
          <h1>Welcome, Egi Putu Wijaya 👋</h1>
        </div>

        <p className="text-xl font-semibold py-3">How can I help you today?</p>

        <div className="flex space-x-2 mt-3">
          {[0, 0.2, 0.4, 0.6].map((delay, index) => (
            <motion.span
              key={index}
              className="w-3 h-3 bg-white rounded-full"
              animate={{
                y: [0, -5, 0], 
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
