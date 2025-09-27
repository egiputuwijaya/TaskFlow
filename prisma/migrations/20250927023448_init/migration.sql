-- CreateTable
CREATE TABLE "public"."History" (
    "id" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "nameTasks" TEXT NOT NULL,
    "typeTasks" "public"."TypeTasks" NOT NULL,
    "dueDateTime" TIMESTAMP(3) NOT NULL,
    "priority" "public"."Priority" NOT NULL,
    "descrition" TEXT NOT NULL,
    "statusTask" "public"."Status" NOT NULL,
    "deleteAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."History" ADD CONSTRAINT "History_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
