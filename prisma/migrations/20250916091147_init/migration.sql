-- CreateEnum
CREATE TYPE "public"."TypeTasks" AS ENUM ('PRODUCT_DESIGN', 'CONTENT_WRITER', 'PROJECT_MANAJER', 'GOAL_TRECKER', 'MEETING_AGENDA', 'EVENT_PLANNING', 'CONTENT_CALENDAR', 'BUG_TRACKING', 'WEEKLY_DAYLY', 'DEVELOPMENT_WORKFLOW', 'CLASS_PLANNING', 'OFFICE_MANAGER');

-- CreateEnum
CREATE TYPE "public"."Priority" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateTable
CREATE TABLE "public"."YourTask" (
    "id" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "nameTasks" TEXT NOT NULL,
    "typeTasks" "public"."TypeTasks" NOT NULL,
    "dueDateTime" TIMESTAMP(3) NOT NULL,
    "priority" "public"."Priority" NOT NULL,
    "descritpion" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YourTask_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."YourTask" ADD CONSTRAINT "YourTask_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
