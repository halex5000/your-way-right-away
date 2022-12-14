/*
  Warnings:

  - You are about to drop the column `dashboardId` on the `Gizmo` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "GizmosOnDashboards" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dashboardId" TEXT NOT NULL,
    "gizmoId" TEXT NOT NULL,
    CONSTRAINT "GizmosOnDashboards_dashboardId_fkey" FOREIGN KEY ("dashboardId") REFERENCES "Dashboard" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "GizmosOnDashboards_gizmoId_fkey" FOREIGN KEY ("gizmoId") REFERENCES "Gizmo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Gizmo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "xCoordinate" INTEGER NOT NULL,
    "yCoordinate" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL
);
INSERT INTO "new_Gizmo" ("height", "id", "width", "xCoordinate", "yCoordinate") SELECT "height", "id", "width", "xCoordinate", "yCoordinate" FROM "Gizmo";
DROP TABLE "Gizmo";
ALTER TABLE "new_Gizmo" RENAME TO "Gizmo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
