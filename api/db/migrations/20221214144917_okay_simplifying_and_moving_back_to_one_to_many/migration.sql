/*
  Warnings:

  - You are about to drop the `GizmosOnDashboards` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "GizmosOnDashboards_dashboardId_gizmoId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "GizmosOnDashboards";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Gizmo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "xCoordinate" INTEGER NOT NULL,
    "yCoordinate" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "dashboardId" TEXT,
    CONSTRAINT "Gizmo_dashboardId_fkey" FOREIGN KEY ("dashboardId") REFERENCES "Dashboard" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Gizmo" ("height", "id", "width", "xCoordinate", "yCoordinate") SELECT "height", "id", "width", "xCoordinate", "yCoordinate" FROM "Gizmo";
DROP TABLE "Gizmo";
ALTER TABLE "new_Gizmo" RENAME TO "Gizmo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
