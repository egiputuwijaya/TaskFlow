import DashboardLayout from "@/components/DashboardLayout";
import HeroDashboard from "./components/HeroDashboard";
import ProjectDashboard from "./components/ProjectDashboard";
import TypeDashboard from "./components/TypeDashboard";
import StatisticDashboard from "./components/StatisticDasboard";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <HeroDashboard />
      <div className="flex flex-row gap-5">
        <TypeDashboard />
        <StatisticDashboard />
      </div>
      <ProjectDashboard />
    </DashboardLayout>
  );
}
