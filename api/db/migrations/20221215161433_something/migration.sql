/*
  Warnings:

  - You are about to drop the column `contentId` on the `Gizmo` table. All the data in the column will be lost.
  - Added the required column `content` to the `Gizmo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Gizmo" DROP COLUMN "contentId",
ADD COLUMN     "content" JSONB NOT NULL;
