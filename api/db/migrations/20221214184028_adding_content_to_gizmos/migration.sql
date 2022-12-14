/*
  Warnings:

  - Added the required column `contentId` to the `Gizmo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Gizmo" ADD COLUMN     "contentId" JSONB NOT NULL;
