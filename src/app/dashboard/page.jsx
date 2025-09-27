import DashboardLayout from "@/components/DashboardLayout";
import HeroDashboard from "./components/HeroDashboard";
import ProjectDashboard from "./components/ProjectDashboard";
import TypeDashboard from "./components/TypeDashboard";
import StatisticDashboard from "./components/StatisticDasboard";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <HeroDashboard />
      <div className="w-full flex gap-5">
        <div className="w-4/5">
          <TypeDashboard />
        </div>
        <div className="w-1/5">
          <StatisticDashboard />
        </div>
      </div>

      <ProjectDashboard />
    </DashboardLayout>
  );
}
