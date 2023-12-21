/*
  Warnings:

  - Added the required column `notifyMe` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `theme` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "notifyMe" BOOLEAN NOT NULL,
ADD COLUMN     "theme" TEXT NOT NULL;
