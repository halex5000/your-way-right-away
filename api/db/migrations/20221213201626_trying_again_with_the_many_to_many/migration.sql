/*
  Warnings:

  - You are about to drop the `GizmosOnDashboards` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "GizmosOnDashboards";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_DashboardToGizmo" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_DashboardToGizmo_A_fkey" FOREIGN KEY ("A") REFERENCES "Dashboard" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_DashboardToGizmo_B_fkey" FOREIGN KEY ("B") REFERENCES "Gizmo" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_DashboardToGizmo_AB_unique" ON "_DashboardToGizmo"("A", "B");

-- CreateIndex
CREATE INDEX "_DashboardToGizmo_B_index" ON "_DashboardToGizmo"("B");
