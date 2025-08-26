import { FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaGithub } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

export default function ContactInput() {
  return (
    <div className="bg-white">
      <div className="flex flex-col px-30 py-10">
        <div className="bg-blue-500 py-10">
          <div className="">
            <h1 className="text-4xl font-semibold text-white px-30">
              Let's Get In Touch
            </h1>
          </div>
          <hr className="border-t-2 border-gray-300 my-3" />
          <div className="flex flex-row px-30 justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <LuMapPin className="text-2xl text-gray-200" />
                <p className="text-gray-200">
                  123 Innovation Avenue, San Francisco, CA 94105, United States{" "}
                </p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <MdOutlineEmail className="text-2xl text-gray-200" />
                <p className="text-gray-200">support@taskflow.com</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <BsTelephone className="text-xl text-gray-200" />
                <p className="text-gray-200">+1 (415) 555-0123</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center gap-2">
                <FaLinkedin className="text-gray-300 text-3xl" />
                <p className="text-gray-200">linkedin/task-flow</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <FaInstagram className="text-gray-300 text-3xl" />
                <p className="text-gray-200">instagram/@taskflow</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <FaGithub className="text-gray-300 text-3xl" />
                <p className="text-gray-200">github/task-flow</p>
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="text-3xl font-semibold text-white px-30">
              Or fill out the form below
            </h1>
            <hr className="border-t-2 border-gray-300 my-3" />
            <div className="px-30">
              <form action="">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-row justify-around">
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col">
                        <p>Inquiry Purpose</p>
                        <input
                          type="text"
                          placeholder="Choose one option...."
                          className="bg-white text-gray-500 px-3 rounded focus:outline-none"
                        />
                      </div>
                      <div className="flex flex-col">
                        <p>Full Name</p>
                        <input
                          type="text"
                          placeholder="Enter your full name...."
                          className="bg-white text-gray-500 px-3 rounded focus:outline-none"
                        />
                      </div>
                      <div className="flex flex-col">
                        <p>Your Organization</p>
                        <input
                          type="text"
                          placeholder="Enter your organization...."
                          className="bg-white text-gray-500 px-3 rounded focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col">
                        <p>Description that fits you</p>
                        <input
                          type="text"
                          placeholder="Choose one option...."
                          className="bg-white text-gray-500 px-3 rounded focus:outline-none"
                        />
                      </div>
                      <div className="flex flex-col">
                        <p>Email Address</p>
                        <input
                          type="text"
                          placeholder="Enter your email address...."
                          className="bg-white text-gray-500 px-3 rounded focus:outline-none"
                        />
                      </div>
                      <div className="flex flex-col">
                        <p>Phone Number</p>
                        <input
                          type="text"
                          placeholder="Enter your phone number...."
                          className="bg-white text-gray-500 px-3 rounded focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p>Your Message</p>
                    <textarea
                      name="message"
                      id=""
                      placeholder="Enter your message here..."
                 
                      rows={5}
                      className="bg-white text-gray-500 px-3 rounded focus:outline-none"
                    ></textarea>
                  </div>
                 <div className="flex justify-center">
                     <button className="bg-white text-blue-600 px-3 py-1 rounded-xl">Submit Form</button>
                 </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
