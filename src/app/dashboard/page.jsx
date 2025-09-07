import DashboardLayout from "@/components/DashboardLayout";
import HeroDashboard from "./components/HeroDashboard";
import StatisticDashboard from "./components/StatisticDashboard";
import ProjectDashboard from "./components/ProjectDashboard";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="">
        <HeroDashboard />
        <StatisticDashboard />
        <ProjectDashboard />
      </div>
    </DashboardLayout>
  );
}
