import DashboardLayout from "@/components/DashboardLayout";
import { HiEllipsisVertical } from "react-icons/hi2";

export default function History() {
  return (
    <DashboardLayout>
      <div className="bg-white rounded-2xl">
        <div className="py-5 px-10">
          <h1 className="text-blue-500 font-semibold">Your History</h1>
          <div className="border border-blue-500"></div>
          <div className="py-5">
            <div className="flex flex-row justify-around text-gray-400 border rounded-xl py-2 hover:bg-blue-400 hover:text-white">
              <h1>Judul Tugas kemaren</h1>
              <p>31 satu hari yang lalu</p>
              <HiEllipsisVertical className="text-2xl " />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
