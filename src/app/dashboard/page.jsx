import DashboardLayout from "@/components/DashboardLayout";
import HeroDashboard from "./components/HeroDashboard";
import StatisticDashboard from "./components/StatisticDashboard";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="">
        <HeroDashboard />
        <StatisticDashboard />
      </div>
    </DashboardLayout>
  );
}
