import Sidebar from "../../../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten utama */}
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}
