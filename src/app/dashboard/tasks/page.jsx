import DashboardLayout from "@/components/DashboardLayout";
import NavbarTask from "./components/NavbarTask";
import HeroTask from "./components/HeroTask";
import ItemTask from "./components/ItemAllTasks";

export default function TasksPage() {
  return (
    <DashboardLayout>
      <HeroTask />
      <NavbarTask />
      <ItemTask />
    </DashboardLayout>
  );
}
