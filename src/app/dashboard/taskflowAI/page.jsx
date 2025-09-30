import ChatBox from "@/app/dashboard/taskflowAI/components/ChatBox";
import DashboardLayout from "@/components/DashboardLayout";

export default function TaskFlowAI() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-3">
        <ChatBox />
      </div>
    </DashboardLayout>
  );
}
