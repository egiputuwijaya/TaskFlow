"use client";

export default function PlatformIntegration() {
  return (
    <div className="bg-white">
      <div className="flex flex-col gap-5 px-30 py-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-4xl font-semibold text-black">
            Your favorite tools, <span className="text-white bg-blue-600 px-2 rounded">all in one flow</span>
          </h1>
          <p className="text-center text-gray-700">
            TaskFlow doesn’t replace the tools you loveit makes them work
            smarter together. Effortlessly connect with Google Drive, Slack,
            Outlook, GitHub, Zoom, and dozens more. Share files, sync calendars,
            push updates, and collaborate across apps without ever breaking your
            workflow.
          </p>
        </div>

        <div className="flex flex-col gap-8 pt-5">
          <img
            src="/logo_bg.svg"
            alt=""
            className="w-25 mx-auto shadow-2xl p-2 rounded-xl border border-gray-200 wave"
          />

          <div className="flex flex-row gap-3 justify-center">
            <img src="/Integration1.svg" alt="" className="w-15 wave" />
            <img src="/Integration2.svg" alt="" className="w-15 wave delay-1" />
            <img src="/Integration3.svg" alt="" className="w-15 wave delay-2" />
            <img src="/Integration4.svg" alt="" className="w-15 wave delay-3" />
            <img src="/Integration5.svg" alt="" className="w-15 wave delay-4" />
            <img src="/Integration6.svg" alt="" className="w-15 wave delay-5" />
            <img src="/Integration7.svg" alt="" className="w-15 wave delay-6" />
            <img src="/Integration8.svg" alt="" className="w-15 wave delay-7" />
          </div>
        </div>
      </div>

      {/* Animasi hanya berlaku di halaman ini */}
      <style jsx>{`
        @keyframes wave {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .wave {
          animation: wave 2.5s ease-in-out infinite;
        }
        .delay-1 {
          animation-delay: 0.2s;
        }
        .delay-2 {
          animation-delay: 0.4s;
        }
        .delay-3 {
          animation-delay: 0.6s;
        }
        .delay-4 {
          animation-delay: 0.8s;
        }
        .delay-5 {
          animation-delay: 1s;
        }
        .delay-6 {
          animation-delay: 1.2s;
        }
        .delay-7 {
          animation-delay: 1.4s;
        }
      `}</style>
    </div>
  );
}
