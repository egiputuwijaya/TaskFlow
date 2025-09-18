/*
  Warnings:

  - You are about to drop the column `descritpion` on the `YourTask` table. All the data in the column will be lost.
  - Added the required column `description` to the `YourTask` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."YourTask" DROP COLUMN "descritpion",
ADD COLUMN     "description" TEXT NOT NULL;
