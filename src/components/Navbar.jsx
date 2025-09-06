"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import * as motion from "motion/react-client";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white px-3 md:px-10">
      {/* TAMPILAN DEKSTOP  */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
        className="hidden md:block"
      >
        <div className="flex flex-row justify-between items-center py-3 ">
          <Link href="/">
            <div className="flex flex-row items-center gap-3">
              <h1 className="text-black font-semibold text-3xl">TaskFlow</h1>
              <img src="/logo.svg" alt="" className="w-10" />
            </div>
          </Link>
          <div className="flex flex-row gap-20 text-gray-700 font-medium">
            <Link href="/whytaskflow">Why TaskFlow</Link>
            <Link href="/platform">Platform</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="flex flex-row gap-10 items-center">
            <Link href="/login" className="text-black ">
              Log in
            </Link>
            <div
              className="px-5 py-2 rounded-xl"
              style={{ backgroundColor: "#3B82F6" }}
            >
              <Link href="/register" className="font-semibold ">
                Start for free
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* TAMPILAN MOBILE  */}
      <div className="block md:hidden">
        <div className="flex flex-row justify-between items-center py-2">
          <div className="flex flex-row items-center gap-2">
            <h1 className="text-black text-xl font-semibold">TaskFlow</h1>
            <img src="/logo.svg" alt="" className="w-8" />
          </div>
          <div className="">
            <button onClick={() => setIsOpen(!isOpen)} className="transtion">
              {isOpen ? (
                <FaTimes className="text-black" />
              ) : (
                <FaBars className="text-black" />
              )}
            </button>
          </div>
        </div>{" "}
        <hr className="border-t-2 border-gray-300 my-1" />
        <div className="">
          {isOpen && (
            <div className="flex flex-col gap-2 pb-2 text-gray-500 font-semibold">
              <Link
                href="/whytaskflow"
                className="hover:bg-blue-500 hover:text-white rounded px-2"
              >
                Why TaksFlow
              </Link>
              <Link
                href="/platform"
                className="hover:bg-blue-600 hover:text-white rounded px-2"
              >
                Platform
              </Link>
              <Link
                href="/contact"
                className="hover:bg-blue-600 hover:text-white rounded px-2"
              >
                Contact
              </Link>
              <hr className="border-t-2 border-gray-300 my-1" />
              <div className="flex flex-row max-w-xs mx-auto items-center gap-10">
                <Link
                  href="/login"
                  className="text-gray-500 rounded px-12 py-2 bg-gray-200"
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  className="text-white rounded px-5 py-2"
                  style={{ backgroundColor: "#3B82F6" }}
                >
                  Start for free
                </Link>
              </div>
              <hr className="border-t-2 border-gray-300 my-1" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
