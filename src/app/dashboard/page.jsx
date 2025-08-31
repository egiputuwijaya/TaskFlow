import Sidebar from "../../../components/Sidebar";
import ProjectDashboard from "./components/ProjectDashboard";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <ProjectDashboard />
    </div>
  );
}
