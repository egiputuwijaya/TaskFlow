import DashboardLayout from "@/components/DashboardLayout";
import NavbarTask from "@/components/NavbarTask";

export default function TaskLayout({ children }) {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-5">
        <NavbarTask />
        <div className="mt-t">{children}</div>
      </div>
    </DashboardLayout>
  );
}
