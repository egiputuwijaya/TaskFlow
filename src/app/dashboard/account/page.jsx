import DashboardLayout from "@/components/DashboardLayout";
import YourProfile from "./components/yourProfile";
import YourTaskProfile from "./components/yourStatisticTaskProfile";

export default function Account() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-5">
        <YourProfile />
        <YourTaskProfile />
      </div>
    </DashboardLayout>
  );
}
