export default function WhyHero() {
  return (
    <section className="relative bg-white py-20 px-6">
      {/* Decorative gradient shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-300 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-6xl mx-auto text-center space-y-12">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Why Teams Trust <span className="bg-blue-600 px-2 text-white rounded-2xl">TaskFlow</span>
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
      </div>
    </section>
  );
}
