"use client";
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { FiPlus } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function Colab() {
  const [isOpen, setIsOpen] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [industry, setIndustry] = useState("");
  const [workType, setWorkType] = useState("");
  const [orgSize, setOrgSize] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!teamName) {
      alert("Team name wajib diisi!");
      return;
    }

    console.log({
      teamName,
      industry,
      workType,
      orgSize,
      role,
    });

    setIsOpen(false); // tutup modal setelah submit
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="flex flex-row gap-2 items-center text-gray-400 py-3">
          <FiPlus />
          <button onClick={() => setIsOpen(true)}>Create your team</button>
        </div>

        <h1 className="text-2xl text-gray-800 font-semibold">
          Empower your teammates with{" "}
          <span className="text-blue-500">TaskFlow</span>
        </h1>

        {isOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="relative bg-white p-6 rounded-2xl shadow-lg max-w-4xl w-full flex flex-row gap-5">
              {/* Tombol X */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
              >
                <IoClose size={24} />
              </button>

              {/* Kiri */}
              <div className="w-7/12">
                <h2 className="text-2xl font-bold text-gray-800">
                  Create your Team
                </h2>
                <p className="text-gray-500 mb-4">
                  Empower your teammates with TaskFlow
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <p className="text-gray-800">Team Name</p>
                    <input
                      type="text"
                      placeholder="The name of your team or company"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      className="text-gray-600 text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col  gap-1">
                    <p className="text-gray-800">
                      What industry do you work in?
                    </p>
                    <select
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="text-gray-600 text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none"
                    >
                      <option value="">Select industry</option>
                      <option value="agriculture">Agriculture</option>
                      <option value="arts">Arts</option>
                      <option value="automotive">Automotive</option>
                      <option value="education">Education</option>
                      <option value="health">Health Care</option>
                      <option value="it">Information Technology</option>
                    </select>
                  </div>

                  <div className="flex flex-col  gap-1">
                    <p className="text-gray-800">What work do you do?</p>
                    <select
                      value={workType}
                      onChange={(e) => setWorkType(e.target.value)}
                      className="text-gray-600 text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none"
                    >
                      <option value="">Select work type</option>
                      <option value="administration">Administration</option>
                      <option value="engineering">Engineering</option>
                      <option value="marketing">Marketing</option>
                      <option value="sales">Sales</option>
                    </select>
                  </div>

                  <div className="flex flex-col  gap-1">
                    <p className="text-gray-800">
                      How big is your organization?
                    </p>
                    <select
                      value={orgSize}
                      onChange={(e) => setOrgSize(e.target.value)}
                      className="text-gray-600 text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none"
                    >
                      <option value="">Select size</option>
                      <option value="1">1</option>
                      <option value="2-30">2-30</option>
                      <option value="31-70">31-70</option>
                      <option value="70-100">70-100</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className="text-gray-800">What's your role?</p>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="text-gray-600 text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none"
                    >
                      <option value="">Select role</option>
                      <option value="owner">I own or run the company</option>
                      <option value="leader">I lead a team</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600"
                  >
                    Create your team
                  </button>
                </form>
              </div>

              {/* Kanan */}
              <div className="w-5/12">
                <div className="bg-blue-200 rounded-lg py-2">
                  <div className="flex justify-center">
                    <img src="/modalColab.svg" alt="" className="w-72" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-center text-gray-800 pb-3">
                      Team productivity, made simple
                    </p>
                    {[
                      "A shared team workspace",
                      "Task and project collaboration",
                      "Centralized access and billing",
                      "Team and project activity trends",
                      "All personal productivity tools",
                    ].map((item, i) => (
                      <div key={i} className="flex flex-row gap-2 px-12">
                        <IoMdCheckmark className="text-green-500" />
                        <p className="text-gray-800 pb-2">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
