import ChatBox from "@/components/ChatBox";
import DashboardLayout from "@/components/DashboardLayout";
import HeroAI from "./components/HeroAI";

export default function TaskFlowAI() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-3">
        <HeroAI />
        <ChatBox />
      </div>
    </DashboardLayout>
  );
}
