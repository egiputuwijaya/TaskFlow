"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min";
import * as motion from "motion/react-client";

export default function Hero() {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect = HALO({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      baseColor: 0x3b82f6,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="relative flex px-3 md:px-30 py-20 min-h-screen justify-center items-center"
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}
        className="relative z-10 flex flex-col gap-5 text-center"
      >
        <h1 className="text-3xl md:text-7xl font-semibold text-white">
          Organize Your <span style={{ color: "#3B82F6" }}>Work</span> Boost
          Your
          <span style={{ color: "#3B82F6" }}> Productivity</span>
        </h1>

        <p className="text-gray-200 md:text-xl">
          Manage{" "}
          <span style={{ color: "#3B82F6" }}>tasks, track deadlines,</span> and{" "}
          <span style={{ color: "#3B82F6" }}>achieve </span>
          more with a smart task manager designed to keep you focused.
        </p>

        <div className="flex justify-center">
          <a
            href=""
            className="px-5 py-3 border-2 border-white rounded-xl font-semibold text-white"
          >
            Add Your First Task
          </a>
        </div>
      </motion.div>
    </div>
  );
}
