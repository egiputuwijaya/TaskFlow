"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Benefits() {
  const [activeImage, setActiveImage] = useState(0);
  const sectionRefs = useRef([]);

  const images = [
    "Benefits1.png",
    "Benefits2.png",
    "Benefits3.png",
    "Benefits4.png",
  ];

  const Words = [
    {
      head: "Plan with confidence",
      title: "Smart Task Management",
      text: "Break down your work into manageable steps. Create to-do lists, categorize tasks, and set priorities so you always know what comes next.",
    },
    {
      head: "Focus on what’s important",
      title: "Deadline Reminders",
      text: "Stay ahead of schedule with intelligent reminders. Get notified before deadlines, so you can manage your time more effectively without last-minute stress.",
    },
    {
      head: "Organize your teamwork, too",
      title: "Progress Tracking",
      text: "Track your productivity in real time. Visual charts and progress bars help you see how close you are to finishing your tasks and projects.",
    },
    {
      head: "Clear your mind",
      title: "Data Security",
      text: "Your work is safe with us. All your data is protected with the latest security standards, ensuring privacy and reliability.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveImage(index);
          }
        });
      },
      { threshold: 0.1 } // ganti gambar kalau 60% section terlihat
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="px-3 md:px-30 hidden md:block">
      <div className="flex min-h-screen">
        {/* Kiri: tulisan */}
        <div className="w-1/2 p-8">
          {Words.map((word, index) => (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              data-index={index}
              className="min-h-screen flex flex-col justify-center gap-5"
            >
              <h1 className="text-lime-400 font-semibold text-2xl">
                {word.head}
              </h1>
              <h2 className="font-semibold text-4xl text-blue-500">
                {word.title}
              </h2>
              <p className="text-2xl text-gray-500">{word.text}</p>
              <div className="flex flex-row gap-1 text-blue-600 text-xl items-center hover:underline">
                <Link href="">Learn about our platform</Link>
                <MdOutlineArrowOutward />
              </div>
            </div>
          ))}
        </div>

        {/* Kanan: gambar sticky */}
        <div className="w-1/2 flex items-center justify-center sticky top-0 h-screen">
          <img
            src={images[activeImage]}
            alt="Benefit"
            className="h-[90vh] w-auto rounded-2xl shadow-lg object-cover transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
}
