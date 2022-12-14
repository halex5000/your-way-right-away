-- CreateTable
CREATE TABLE "Gizmo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "xCoordinate" INTEGER NOT NULL,
    "yCoordinate" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "dashboardId" TEXT NOT NULL,
    CONSTRAINT "Gizmo_dashboardId_fkey" FOREIGN KEY ("dashboardId") REFERENCES "Dashboard" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
