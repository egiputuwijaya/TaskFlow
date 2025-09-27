/*
  Warnings:

  - You are about to drop the column `deleteAt` on the `History` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."History" DROP COLUMN "deleteAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
