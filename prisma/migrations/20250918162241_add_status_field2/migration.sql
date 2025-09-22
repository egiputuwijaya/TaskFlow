-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'DONE');

-- AlterTable
ALTER TABLE "public"."YourTask" ADD COLUMN     "status" "public"."Status" NOT NULL DEFAULT 'NOT_STARTED';
