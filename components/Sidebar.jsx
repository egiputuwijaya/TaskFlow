export default function Sidebar() {
  return (
    <aside className="w-80 bg-gray-800 text-white p-6">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <nav className="flex flex-col gap-4">
        <a href="/dashboard" className="hover:text-gray-300">
          Overview
        </a>
        <a href="/dashboard/tasks" className="hover:text-gray-300">
          Tasks
        </a>
        <a href="/dashboard/settings" className="hover:text-gray-300">
          Settings
        </a>
      </nav>
    </aside>
  );
}
