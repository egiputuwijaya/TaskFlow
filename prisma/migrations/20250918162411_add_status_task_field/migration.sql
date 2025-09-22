/*
  Warnings:

  - You are about to drop the column `status` on the `YourTask` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."YourTask" DROP COLUMN "status",
ADD COLUMN     "statusTask" "public"."Status" NOT NULL DEFAULT 'NOT_STARTED';
