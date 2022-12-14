/*
  Warnings:

  - You are about to drop the `_DashboardToGizmo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_DashboardToGizmo";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "GizmosOnDashboards" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dashboardId" TEXT NOT NULL,
    "gizmoId" TEXT NOT NULL,
    CONSTRAINT "GizmosOnDashboards_dashboardId_fkey" FOREIGN KEY ("dashboardId") REFERENCES "Dashboard" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "GizmosOnDashboards_gizmoId_fkey" FOREIGN KEY ("gizmoId") REFERENCES "Gizmo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "GizmosOnDashboards_dashboardId_gizmoId_key" ON "GizmosOnDashboards"("dashboardId", "gizmoId");
