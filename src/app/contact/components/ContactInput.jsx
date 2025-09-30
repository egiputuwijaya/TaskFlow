"use client";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaGithub } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { motion } from "framer-motion";

export default function ContactInput() {
  return (
    <div className="bg-white">
      <div className="flex flex-col px-10 md:px-30 py-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-400 py-10 rounded-2xl shadow-lg"
        >
          {/* Title */}
          <div>
            <h1 className="text-4xl font-semibold text-white px-6">
              Let&apos;s Get In Touch
            </h1>
          </div>
          <hr className="border-t-2 border-blue-200 my-3 mx-6" />

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between gap-6 px-6"
          >
            {/* Left: Address */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <LuMapPin className="text-2xl text-gray-100" />
                <p className="text-gray-100">
                  123 Innovation Avenue, San Francisco, CA 94105, United States
                </p>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineEmail className="text-2xl text-gray-100" />
                <p className="text-gray-100">support@taskflow.com</p>
              </div>
              <div className="flex items-center gap-2">
                <BsTelephone className="text-xl text-gray-100" />
                <p className="text-gray-100">+1 (415) 555-0123</p>
              </div>
            </div>

            {/* Right: Social */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 hover:text-white cursor-pointer transition">
                <FaLinkedin className="text-gray-200 text-2xl" />
                <p className="text-gray-100">linkedin/task-flow</p>
              </div>
              <div className="flex items-center gap-2 hover:text-white cursor-pointer transition">
                <FaInstagram className="text-gray-200 text-2xl" />
                <p className="text-gray-100">instagram/@taskflow</p>
              </div>
              <div className="flex items-center gap-2 hover:text-white cursor-pointer transition">
                <FaGithub className="text-gray-200 text-2xl" />
                <p className="text-gray-100">github/task-flow</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <div className="mt-10">
            <h1 className="text-3xl font-semibold text-white px-6">
              Or fill out the form below
            </h1>
            <hr className="border-t-2 border-blue-200 my-3 mx-6" />
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="px-6"
            >
              <div className="flex flex-col gap-6">
                {/* Inputs Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                      <p className="text-white">Inquiry Purpose</p>
                      <input
                        type="text"
                        placeholder="Choose one option...."
                        className="bg-white text-gray-700 px-3 py-2 rounded focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-white">Full Name</p>
                      <input
                        type="text"
                        placeholder="Enter your full name...."
                        className="bg-white text-gray-700 px-3 py-2 rounded focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-white">Your Organization</p>
                      <input
                        type="text"
                        placeholder="Enter your organization...."
                        className="bg-white text-gray-700 px-3 py-2 rounded focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                      <p className="text-white">Description that fits you</p>
                      <input
                        type="text"
                        placeholder="Choose one option...."
                        className="bg-white text-gray-700 px-3 py-2 rounded focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-white">Email Address</p>
                      <input
                        type="text"
                        placeholder="Enter your email address...."
                        className="bg-white text-gray-700 px-3 py-2 rounded focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-white">Phone Number</p>
                      <input
                        type="text"
                        placeholder="Enter your phone number...."
                        className="bg-white text-gray-700 px-3 py-2 rounded focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <p className="text-white">Your Message</p>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Enter your message here..."
                    className="bg-white text-gray-700 px-3 py-2 rounded focus:outline-none"
                  ></textarea>
                </div>

                {/* Button */}
                <div className="flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-600 px-6 py-2 rounded-xl font-semibold shadow hover:bg-gray-100 transition"
                  >
                    Submit Form
                  </motion.button>
                </div>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
