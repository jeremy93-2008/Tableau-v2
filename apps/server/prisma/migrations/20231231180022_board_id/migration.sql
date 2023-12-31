/*
  Warnings:

  - Added the required column `boardId` to the `Checklist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `boardId` to the `ChecklistItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `boardId` to the `Link` table without a default value. This is not possible if the table is not empty.
  - Added the required column `boardId` to the `Tracking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Checklist" ADD COLUMN     "boardId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ChecklistItem" ADD COLUMN     "boardId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Link" ADD COLUMN     "boardId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tracking" ADD COLUMN     "boardId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Tracking" ADD CONSTRAINT "Tracking_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Checklist" ADD CONSTRAINT "Checklist_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChecklistItem" ADD CONSTRAINT "ChecklistItem_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
