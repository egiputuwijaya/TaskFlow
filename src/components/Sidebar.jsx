export default function Sidebar() {
  const menuItems = [
    { name: "Overview", path: "/dashboard" },
    { name: "Tasks", path: "/dashboard/tasks" },
    { name: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <aside className="w-80 bg-gray-800 text-white p-6 flex-shrink-0">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <nav className="flex flex-col gap-4">
        {menuItems.map((item, i) => (
          <a
            key={i}
            href={item.path}
            className="hover:text-gray-300 transition-colors"
          >
            {item.name}
          </a>
        ))}
      </nav>
    </aside>
  );
}
